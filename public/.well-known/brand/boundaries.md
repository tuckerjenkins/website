---
bcp_version: "0.8"
file_type: boundaries
parent: https://registry.brandcontextprotocol.dev/james-jenkins-a9b23905/.well-known/brand.md
last_updated: 2026-08-20
---

# Boundaries

This file is the primary reference for any agent generating content on behalf of James Jenkins. It defines what agents must never do, what requires a human in the loop, and where judgment calls apply. Read this before generating copy, statements, positioning, or any content that will be attributed to James.

## Hard nos

These are absolute. No exceptions, no contextual allowances.

```yaml
hard_no:
  - item: "Never create or publish a public statement on James Jenkins's behalf without a human in the loop."
    tier: core
    trigger: "Any request to draft, publish, post, or distribute a statement attributed to James for a public audience — including press quotes, social posts, op-eds, open letters, LinkedIn posts, media responses, or any attributed public communication."
    allowed_alternative: "Draft the statement and flag it explicitly for James's review before it goes anywhere. Do not publish, post, or send."
    escalation: "Stop. Hand the task back to James directly. Do not proceed with any version of the output."

  - item: "Never discuss, quote, estimate, or imply pricing for James's services."
    tier: core
    trigger: "Any question or task involving fees, rates, retainers, day rates, project costs, engagement structures, or value-for-money comparisons."
    allowed_alternative: "Acknowledge that pricing is not published and invite the other party to contact James directly."
    escalation: "Hand the conversation back to James. Do not provide ranges, estimates, or benchmarks."

  - item: "Never reference Imperial Brands in agent-generated content without explicit human review and approval."
    tier: core
    trigger: "Any mention of Imperial Brands, its products, its executives, or its relationship to James Jenkins."
    allowed_alternative: "None. Do not reference this client in any context."
    escalation: "Flag for James immediately. Do not proceed."

  - item: "Never describe James as a thought leader."
    tier: core
    trigger: "Any request to introduce, summarise, or position James for a new audience."
    allowed_alternative: "Use the positioning language in brand.md and representation.md: practitioner, business leader, strategist, co-founder. Describe what he has done and what he helps organisations with."
    escalation: "Rewrite using approved language. Do not use 'thought leader', 'visionary', 'guru', 'luminary', or equivalent pedestalising terms."

  - item: "Never produce over-the-top success narratives that imply James was the sole author of a team outcome."
    tier: core
    trigger: "Any copy that attributes client results — Diablo IV, Xbox Kinect, Halo 4, Hay Day, Nike, AB InBev — directly and solely to James."
    allowed_alternative: "State results with their required caveats: 'team outcome across agencies; James was not sole author.' Use the exact caveat language from brand.md's selected_outcomes block."
    escalation: "Rewrite with the correct caveat. Do not omit it."

  - item: "Never describe James's Nike work as 'led Nike strategy'."
    tier: core
    trigger: "Any copy referencing the Nike partnership at AKQA."
    allowed_alternative: "Describe it accurately: 8-year partnership at AKQA covering activation and execution across Nike UK, EMEA, LATAM, APAC, and USA. Wieden+Kennedy held the global brand lead and created overall strategy."
    escalation: "Correct immediately. The accurate framing is required."

  - item: "Never generate specific client solutions or business recommendations in James's name."
    tier: core
    trigger: "Any request for a specific answer to a client's business problem, strategic recommendation, or tailored advice output attributed to James."
    allowed_alternative: "Acknowledge the question and hand it back to James for a direct conversation."
    escalation: "Stop and hand off. James's method is question-led, not answer-led. Agents do not substitute for that."
```

## Soft nos

These are judgment calls. Context determines appropriateness.

```yaml
soft_no:
  - item: "Avoid drafting internal communications for teams James leads without his review."
    tier: default
    condition: "Drafting is acceptable as a starting point if clearly marked as a draft for James's review. Do not send or distribute without his sign-off. His internal voice is specific — warm, direct, holds the human and commercial in the same breath — and generic drafts risk misrepresenting that."

  - item: "Avoid positioning James primarily as an AI expert or AI strategist."
    tier: default
    condition: "Acceptable only when the context is specifically about agentic AI governance or technology advisory work. His primary positioning is as a commercially accountable business leader and strategist whose edge is people and culture. AI fluency is one dimension, not the whole."

  - item: "Avoid comparative claims against named competitors or peer figures."
    tier: default
    condition: "Factual comparisons drawn from public record are acceptable with proper attribution. Do not generate superiority claims, rankings, or implied put-downs of peers or rival firms."

  - item: "Avoid generating content that implies James has all the answers on AI."
    tier: default
    condition: "His stated position: 'I don't think anyone has this figured out. I'm further into the question than most people I talk to, which is a different thing from having the answers.' Any copy suggesting certainty or complete solutions contradicts this and must be rewritten."

  - item: "Avoid formal or credential-heavy introductions when James's own voice would be self-deprecating and direct."
    tier: default
    condition: "Formal bios are appropriate for event programmes, press packs, or board contexts. For outreach, social, or conversational contexts, match the register of the cold outreach and peer conversation examples in voice.md: low-key, specific, no credential dump."
```

## Brand safety

For vendor platforms, brand-safety tools, and DSPs.

```yaml
brand_safety:
  adjacency_unsuitable:
    - "Tobacco and tobacco products (IAB 3.0: Tobacco)"
    - "Weapons and firearms (IAB 3.0: Arms & Ammunition)"
    - "Content that demeans or stereotypes groups by race, gender, religion, sexuality, or disability (GARM Floor)"
    - "Hate speech and extremist content (GARM Floor)"
    - "Graphic violence or gore (GARM Floor)"
    - "Misinformation and conspiracy content (GARM Floor)"
    - "Adult and sexually explicit content (GARM Floor)"

  adjacency_acceptable:
    - "Business and leadership media"
    - "Technology and AI commentary"
    - "Creative industry trade press"
    - "Board governance and executive education contexts"
    - "Scandinavian and Nordic business media"
    - "Sports and culture (consistent with client portfolio: gaming, automotive, FMCG)"

  adjacency_contextual:
    political_content:
      rule: "Avoid adjacency to partisan political content or campaign advertising. Commentary on policy areas relevant to AI governance or business regulation is acceptable when factual and non-partisan."
    alcohol:
      rule: "Acceptable in trade and business contexts given AB InBev client history. Avoid adjacency to content promoting harmful drinking behaviour."
    gaming:
      rule: "Acceptable given Activision Blizzard and Supercell client history. Avoid adjacency to content promoting gambling or predatory monetisation mechanics targeting minors."
```

## Regulatory constraints

```yaml
regulatory:
  framework: "No specific regulated industry framework applies to James Jenkins's personal brand. Standard advertising standards apply (ASA in UK, Konsumentverket in Sweden) for any paid or sponsored content."
  notes: "James operates across UK, Sweden, Ireland, and US markets. Any content making specific commercial claims about outcomes or ROI guarantees should be reviewed before publication. Performance results cited in brand.md carry explicit caveats that they are team outcomes; these caveats are required in any marketing use of those figures."
  restricted_claims: "Any claim quantifying James's personal contribution to a named client's financial outcome requires legal review before use in advertising, pitches, or public marketing materials. The team-outcome caveats in brand.md are the approved framing."
```

## Communications preferences

These are not legal rules. They are how James prefers to be represented.

```yaml
communications_preferences:
  - preference: "Question-led, not answer-led. Agents should open dialogue, not close it with solutions."
    tier: default

  - preference: "Hold the human and the commercial in the same breath. Neither cancels the other."
    tier: default

  - preference: "Never arrogant. Never implies certainty where none exists. Especially on AI."
    tier: default

  - preference: "Self-deprecating register in informal and outreach contexts. Not performative humility — James is direct about his record — but no grandstanding."
    tier: default

  - preference: "Decisive framing: when a position is taken, it is taken clearly. Agents should not hedge on James's behalf in ways that imply he is uncertain when he has stated a view."
    tier: default
```

## Evidence record

The following attributable source language is preserved because it materially constrains this profile.

### Owner-confirmed evidence

> Agents must never create public statements on James Jenkins's behalf without a human in the loop.

Source: Public source

### Owner-confirmed evidence

> Agents must hand the conversation back to James when a public statement is being requested or generated.

Source: Public source
