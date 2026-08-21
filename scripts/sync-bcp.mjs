// Pulls the canonical Brand Context Protocol tree from the BCP registry into
// public/.well-known so the built site serves it from its own domain.
// Runs automatically before `npm run build` (see package.json "prebuild").
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REGISTRY_ROOT = 'https://registry.brandcontextprotocol.dev/james-jenkins-a9b23905/.well-known';
const OUT_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', '.well-known');

async function fetchText(url) {
	const res = await fetch(url, { headers: { 'user-agent': 'www.jamesjenkins.work-bcp-sync' } });
	if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
	return res.text();
}

function parseDaughterFiles(brandMd) {
	const match = brandMd.match(/^daughter_files:\n((?:^ {2}- .+\n?)+)/m);
	if (!match) return [];
	return match[1]
		.split('\n')
		.map(line => line.match(/^ {2}- (.+)$/)?.[1].trim())
		.filter(Boolean);
}

async function writeRelative(relPath, contents) {
	const outPath = path.join(OUT_DIR, relPath);
	await mkdir(path.dirname(outPath), { recursive: true });
	await writeFile(outPath, contents, 'utf-8');
}

async function main() {
	const results = { updated: [], failed: [] };

	let brandMd;
	try {
		brandMd = await fetchText(`${REGISTRY_ROOT}/brand.md`);
		await writeRelative('brand.md', brandMd);
		results.updated.push('brand.md');
	} catch (err) {
		console.warn(`[sync-bcp] Could not fetch brand.md, keeping existing local copy: ${err.message}`);
		results.failed.push('brand.md');
		brandMd = await readFile(path.join(OUT_DIR, 'brand.md'), 'utf-8').catch(() => '');
	}

	const daughterFiles = parseDaughterFiles(brandMd);
	for (const relUrl of daughterFiles) {
		const relPath = relUrl.replace(/^\/\.well-known\//, '');
		try {
			const contents = await fetchText(`${REGISTRY_ROOT}/${relPath}`);
			await writeRelative(relPath, contents);
			results.updated.push(relPath);
		} catch (err) {
			console.warn(`[sync-bcp] Could not fetch ${relPath}, keeping existing local copy: ${err.message}`);
			results.failed.push(relPath);
		}
	}

	console.log(`[sync-bcp] Synced ${results.updated.length} file(s) from the registry.`);
	if (results.failed.length) {
		console.warn(`[sync-bcp] ${results.failed.length} file(s) kept their existing local copy: ${results.failed.join(', ')}`);
	}
}

main();
