export type ProjectCategoryCode = 'A' | 'B' | 'C' | 'D'

export interface ProjectCategoryInfo {
  code: ProjectCategoryCode
  title: string
  shortTitle: string
  description: string
}

export interface ProjectDeliverable {
  label: string
  caption: string
  aspect: '16/10' | '4/5' | '3/2' | '1/1' | '21/9'
  motif: 'network' | 'discourse' | 'campaign' | 'esg' | 'ai' | 'social' | 'prototype' | 'survey'
  imageSrc?: string
}

export interface ProjectItem {
  slug: string
  issueNumber: string
  title: string
  shortTitle: string
  categoryCode: ProjectCategoryCode
  secondaryCategories?: ProjectCategoryCode[]
  categoryLabel: string
  date: string
  institutionOrOrg: string
  status: 'Completed' | 'Ongoing' | 'Planned / In Development'
  featuredOnHome?: boolean
  homeOrder?: number
  summary: string
  heroAspect: '16/10' | '4/5' | '3/2' | '1/1' | '21/9'
  motif: ProjectDeliverable['motif']
  imageSrc?: string
  coverCaption: string
  overview: string
  researchQuestionOrChallenge: string
  contextAndMotivation: string
  roleAndResponsibilities: string[]
  approach: string
  methodsAndTools: string[]
  outcomesOrStatusNote: string
  pullQuote: string
  deliverables: ProjectDeliverable[]
  reflectionAndNextSteps: string
}

export const profile = {
  name: 'Yannan Zhang',
  publicationName: 'YANNAN ZHANG',
  editionLabel: 'PORTFOLIO & RESEARCH ARCHIVE',
  headline: 'Information, Platforms & Human Behavior',
  supportingStatement:
    'Exploring how information travels, how audiences interpret it, and how digital platforms shape communication.',
  shortIntro:
    'I work across communication research, computational social science, and brand strategy. My interests lie in understanding how information features, platform environments, and communication strategies shape audience perceptions and behavioral responses.',
  interests: [
    {
      index: '01',
      title: 'Digital Platforms & Computational Communication',
      note: 'Network structures, platform affordances, and the circulation of public discourse.',
    },
    {
      index: '02',
      title: 'Information Processing & Persuasion',
      note: 'How source cues, message framing, and cognitive pathways shape information adoption.',
    },
    {
      index: '03',
      title: 'Consumer Behavior & Brand Communication',
      note: 'How cultural meaning, brand narratives, and strategic campaigns resonate with audiences.',
    },
    {
      index: '04',
      title: 'Social Data Analysis & Multimodal Research',
      note: 'Combining quantitative modeling, network analysis, and visual-textual discourse methods.',
    },
  ],
}

export const projectCategories: ProjectCategoryInfo[] = [
  {
    code: 'A',
    title: 'Marketing & Brand Projects',
    shortTitle: 'Marketing & Brand',
    description:
      'Integrated brand campaigns, celebrity partnerships, ESG storytelling, and industry-facing communication initiatives.',
  },
  {
    code: 'B',
    title: 'Social Media Account Operations',
    shortTitle: 'Social Media Operations',
    description:
      'Official social media matrix planning, editorial voice, and platform-native content production.',
  },
  {
    code: 'C',
    title: 'Research Projects',
    shortTitle: 'Research Projects',
    description:
      'Empirical academic inquiries into health communication, political networks, and multimodal cultural representation.',
  },
  {
    code: 'D',
    title: 'Data & Computational Projects',
    shortTitle: 'Data & Computational',
    description:
      'Network data collection, computational text analysis, and developing prototypes for studying information environments.',
  },
]

export const projects: ProjectItem[] = [
  {
    slug: 'health-information-adoption-medical-influencers',
    issueNumber: 'NO. 01',
    title: 'Health Information Adoption among Audiences of Medical Influencers',
    shortTitle: 'Health Information Adoption among Audiences of Medical Influencers',
    categoryCode: 'C',
    categoryLabel: 'Research Project · Undergraduate Dissertation',
    date: '2023',
    institutionOrOrg: 'Renmin University of China',
    status: 'Completed',
    featuredOnHome: true,
    homeOrder: 1,
    summary:
      'A quantitative study examining factors associated with audiences’ adoption of health information from COVID-19 medical influencers, grounded in the Elaboration Likelihood Model and Information Adoption Model.',
    heroAspect: '4/5',
    motif: 'survey',
    coverCaption:
      'FIG. 01 — Conceptual pathway & empirical survey framework (visual documentation slot).',
    overview:
      'Completed as an undergraduate dissertation at Renmin University of China (2023), where it received an Excellent Undergraduate Dissertation award. This study investigates how audiences evaluate and adopt health information shared by medical influencers during the COVID-19 period.',
    researchQuestionOrChallenge:
      'Which information features and source attributes drive audiences to accept and act upon health advice from medical influencers in high-uncertainty digital environments?',
    contextAndMotivation:
      'During public health crises, medical influencers bridge institutional expertise and everyday social media feeds. Understanding how audiences process both central arguments and peripheral credibility cues is essential for effective health communication.',
    roleAndResponsibilities: [
      'Formulated the theoretical framework integrating the Elaboration Likelihood Model (ELM) and Information Adoption Model (IAM).',
      'Designed and administered the structured survey instrument.',
      'Conducted quantitative data analysis including moderated mediation modeling.',
      'Authored the full undergraduate dissertation.',
    ],
    approach:
      'The study operationalized dual-route information processing variables and tested how audience involvement and source characteristics interact to shape perceived information usefulness and adoption intention.',
    methodsAndTools: [
      'Survey Design',
      'Elaboration Likelihood Model (ELM)',
      'Information Adoption Model (IAM)',
      'Moderated Mediation Analysis',
      'Regression & Factor Analysis',
      'SPSS',
    ],
    outcomesOrStatusNote:
      'Awarded Excellent Undergraduate Dissertation at Renmin University of China (2023). Detailed statistical tables and model diagrams can be added in the documentation slots below.',
    pullQuote:
      'Understanding how audiences weigh message quality against source cues illuminates the everyday mechanics of trust in digital health communication.',
    deliverables: [
      {
        label: 'Theoretical Model Diagram',
        caption: 'Placeholder for ELM + IAM moderated mediation path diagram.',
        aspect: '16/10',
        motif: 'survey',
      },
      {
        label: 'Statistical Findings & Tables',
        caption: 'Placeholder for factor loadings and moderated mediation output.',
        aspect: '3/2',
        motif: 'network',
      },
    ],
    reflectionAndNextSteps:
      'This project established my foundational interest in information processing and persuasion, motivating future experimental work on how platform interfaces and source badges alter credibility judgments.',
  },
  {
    slug: 'eu-leaders-twitter-networks',
    issueNumber: 'NO. 02',
    title: "Social Network Analysis of EU Leaders' Twitter Networks",
    shortTitle: "Social Network Analysis of EU Leaders' Twitter Networks",
    categoryCode: 'C',
    secondaryCategories: ['D'],
    categoryLabel: 'Research & Computational Project',
    date: '2024',
    institutionOrOrg: 'University of Edinburgh',
    status: 'Completed',
    featuredOnHome: true,
    homeOrder: 2,
    summary:
      'An analysis of following relationships among 27 EU member-state leaders, the European Council, and the European Commission using original Python-collected network data.',
    heroAspect: '16/10',
    motif: 'network',
    coverCaption:
      'FIG. 02 — Structural network topology of 27 EU leaders & core institutions (graph asset slot).',
    overview:
      'Conducted at the University of Edinburgh (2024), this project maps the directed following relationships among 27 European Union member-state leaders alongside the official accounts of the European Council and the European Commission.',
    researchQuestionOrChallenge:
      'How are political ties and institutional alignments reflected in the digital following structure of European Union leadership on Twitter?',
    contextAndMotivation:
      'Digital platforms serve as visible arenas for diplomatic signaling. Examining who follows whom offers a structural lens into cohesion, centrality, and sub-regional clustering within supranational governance.',
    roleAndResponsibilities: [
      'Collected original following-relationship network data using Python.',
      'Cleaned and structured edge lists and node attributes for 27 member-state leaders and EU institutions.',
      'Computed network-level and node-level centrality metrics and ran community detection.',
    ],
    approach:
      'Using custom Python data collection scripts, the project constructed a directed graph of elite political accounts and evaluated structural properties through network analysis and visual mapping.',
    methodsAndTools: [
      'Python',
      'Original Network Data Collection',
      'Social Network Analysis',
      'Community Detection',
      'Network Centrality Measures',
      'Gephi / UCINET',
    ],
    outcomesOrStatusNote:
      'Completed as an empirical computational social science study at the University of Edinburgh (2024). Network graph exports and community cluster tables are reserved for upload.',
    pullQuote:
      'A following link is a quiet political gesture; aggregated across twenty-seven leaders, those gestures reveal an architecture of alignment.',
    deliverables: [
      {
        label: 'Directed Network Graph',
        caption: 'Placeholder for Gephi network visualization of EU leaders and institutions.',
        aspect: '16/10',
        motif: 'network',
      },
      {
        label: 'Community Detection Matrix',
        caption: 'Placeholder for modularity clusters and centrality comparison.',
        aspect: '1/1',
        motif: 'survey',
      },
    ],
    reflectionAndNextSteps:
      'Extending this structural approach with temporal posting data and computational text analysis would allow future research to compare structural ties against rhetorical alignment.',
  },
  {
    slug: 'gender-representation-korean-pop-culture',
    issueNumber: 'NO. 03',
    title:
      'Strategically Constructed and Commodified: A Multimodal Critical Discourse Analysis of Gender Representation in Korean Pop Culture',
    shortTitle: 'Multimodal Analysis of Gender Representation in Korean Pop Culture',
    categoryCode: 'C',
    categoryLabel: 'Research Project · MSc Dissertation',
    date: '2024',
    institutionOrOrg: 'University of Edinburgh',
    status: 'Completed',
    featuredOnHome: true,
    homeOrder: 3,
    summary:
      'An MSc dissertation applying multimodal critical discourse analysis to official Instagram content from selected K-pop artists, examining how gender representation is constructed and commercialized.',
    heroAspect: '4/5',
    motif: 'discourse',
    coverCaption:
      'FIG. 03 — Multimodal visual grammar & textual framing corpus (visual plate slot).',
    overview:
      'Completed as my MSc dissertation at the University of Edinburgh (2024), this study investigates how official Instagram posts by selected K-pop artists construct, perform, and commodify gender representations across visual and linguistic modes.',
    researchQuestionOrChallenge:
      'How do visual composition, gaze, styling, and accompanying captions work together in official K-pop social media communication to produce marketable gender narratives?',
    contextAndMotivation:
      'Global pop industries rely heavily on platform-native visual storytelling to cultivate fan intimacy and commercial value. Analyzing these posts requires reading image and text as an integrated semiotic system.',
    roleAndResponsibilities: [
      'Curated the empirical corpus of official Instagram content from selected K-pop artists.',
      'Developed a coding and analytical framework combining Visual Grammar and Critical Discourse Analysis.',
      'Conducted close multimodal readings of visual composition and textual framing.',
      'Authored the MSc dissertation.',
    ],
    approach:
      'The dissertation integrates Kress and van Leeuwen’s Visual Grammar with Critical Discourse Analysis (CDA) to trace how representational, interactive, and compositional choices align with commercial platform logics.',
    methodsAndTools: [
      'Multimodal Critical Discourse Analysis',
      'Visual Grammar',
      'Qualitative Coding',
      'Critical Discourse Analysis',
      'NVivo',
    ],
    outcomesOrStatusNote:
      'Completed MSc dissertation at the University of Edinburgh (2024). Annotated visual plates and coding excerpts can be placed in the gallery slots below.',
    pullQuote:
      'On visual platforms, gender representation is rarely incidental—it is curated across framing, posture, captioning, and commercial context.',
    deliverables: [
      {
        label: 'Visual Grammar Annotation Plate',
        caption: 'Placeholder for annotated Instagram visual composition analysis.',
        aspect: '4/5',
        motif: 'discourse',
      },
      {
        label: 'Discourse & Theme Matrix',
        caption: 'Placeholder for multimodal coding categories and textual patterns.',
        aspect: '3/2',
        motif: 'social',
      },
    ],
    reflectionAndNextSteps:
      'This project deepened my commitment to multimodal research—demonstrating how qualitative semiotic precision complements computational scale.',
  },
  {
    slug: 'celebrity-marketing-campaign-jd-logistics',
    issueNumber: 'NO. 04',
    title: 'Celebrity Marketing Campaign — JD Logistics',
    shortTitle: 'Celebrity Marketing Campaign — JD Logistics',
    categoryCode: 'A',
    categoryLabel: 'Marketing & Brand Project',
    date: '2025',
    institutionOrOrg: 'JD Logistics',
    status: 'Completed',
    featuredOnHome: true,
    homeOrder: 4,
    summary:
      'Celebrity collaboration, integrated campaign planning, creative assets, nationwide offline advertising placements, and multi-channel communication.',
    heroAspect: '16/10',
    motif: 'campaign',
    coverCaption:
      'FIG. 04 — Integrated celebrity campaign & nationwide offline placements (campaign archive slot).',
    overview:
      'A large-scale brand marketing initiative at JD Logistics centering on celebrity collaboration, cohesive creative asset production, and synchronized online-to-offline brand visibility.',
    researchQuestionOrChallenge:
      'How can a logistics brand translate operational reliability into culturally resonant, high-visibility consumer storytelling across diverse touchpoints?',
    contextAndMotivation:
      'Logistics brands often communicate through functional messaging. Partnering with a high-profile celebrity figure offered an opportunity to humanize brand perception and expand reach across nationwide media environments.',
    roleAndResponsibilities: [
      'Contributed to celebrity collaboration coordination and integrated campaign planning.',
      'Supported creative asset development across visual and copy formats.',
      'Assisted with nationwide offline advertising placement execution and multi-channel communication rollout.',
    ],
    approach:
      'The campaign aligned celebrity persona, key visual systems, and channel-specific messaging so that offline out-of-home placements and digital touchpoints reinforced a unified brand narrative.',
    methodsAndTools: [
      'Integrated Campaign Planning',
      'Celebrity Collaboration',
      'Creative Asset Production',
      'Offline Media Placement',
      'Multi-Channel Communication',
    ],
    outcomesOrStatusNote:
      'Documented work completed at JD Logistics. Campaign key visuals, out-of-home placement photography, and channel rollouts are ready to be inserted into the image slots.',
    pullQuote:
      'Effective brand communication bridges cultural attention in the feed with physical presence in everyday public space.',
    deliverables: [
      {
        label: 'Campaign Key Visuals',
        caption: 'Placeholder for primary celebrity campaign key visual assets.',
        aspect: '16/10',
        motif: 'campaign',
      },
      {
        label: 'Nationwide Offline Placements',
        caption: 'Placeholder for out-of-home and transit advertising documentation.',
        aspect: '3/2',
        motif: 'campaign',
      },
    ],
    reflectionAndNextSteps:
      'Working on large-scale integrated campaigns sharpened my perspective on how audience attention, cultural symbols, and media placement interact in practice.',
  },
  {
    slug: 'esg-communication-jd-logistics',
    issueNumber: 'NO. 05',
    title: 'ESG Communication — JD Logistics',
    shortTitle: 'ESG Communication — JD Logistics',
    categoryCode: 'A',
    categoryLabel: 'Marketing & Brand Project',
    date: '2025',
    institutionOrOrg: 'JD Logistics',
    status: 'Completed',
    featuredOnHome: true,
    homeOrder: 5,
    summary:
      'ESG communication initiatives including marathon sponsorship, mangrove-related environmental projects, and ESG report production.',
    heroAspect: '3/2',
    motif: 'esg',
    coverCaption:
      'FIG. 05 — ESG storytelling across event sponsorship, ecological projects & reporting (asset slot).',
    overview:
      'A portfolio of Environmental, Social, and Governance (ESG) communication initiatives at JD Logistics, spanning public-facing sustainability sponsorships, ecological conservation storytelling, and formal ESG report production.',
    researchQuestionOrChallenge:
      'How can corporate sustainability commitments be communicated credibly across both experiential public events and structured institutional reporting?',
    contextAndMotivation:
      'ESG communication requires balancing public engagement with accuracy and substance—translating environmental and social initiatives into legible narratives for consumers, partners, and institutional stakeholders.',
    roleAndResponsibilities: [
      'Supported ESG communication initiatives around marathon sponsorship activations.',
      'Contributed to communication for mangrove-related environmental conservation projects.',
      'Participated in the production and editorial coordination of the ESG report.',
    ],
    approach:
      'Paired experiential, community-oriented initiatives (marathon sponsorship and mangrove conservation storytelling) with structured corporate disclosure in the annual ESG report.',
    methodsAndTools: [
      'ESG Communication',
      'Sponsorship Activation',
      'Environmental Storytelling',
      'Editorial & Report Production',
    ],
    outcomesOrStatusNote:
      'Completed as part of brand marketing work at JD Logistics. Event photography, environmental campaign visuals, and ESG report spreads can be added here.',
    pullQuote:
      'Credible ESG communication lives in the alignment between public narrative and verifiable institutional practice.',
    deliverables: [
      {
        label: 'Marathon & Mangrove Initiatives',
        caption: 'Placeholder for sustainability activation and environmental project visuals.',
        aspect: '16/10',
        motif: 'esg',
      },
      {
        label: 'ESG Report Editorial Spreads',
        caption: 'Placeholder for ESG report layout and documentation.',
        aspect: '4/5',
        motif: 'discourse',
      },
    ],
    reflectionAndNextSteps:
      'This work connects directly to my academic interest in how audiences evaluate corporate credibility and pro-social messaging.',
  },
  {
    slug: 'ai-industry-research-communication-minimax',
    issueNumber: 'NO. 06',
    title: 'AI Industry Research & Communication — MiniMax',
    shortTitle: 'AI Industry Research & Communication — MiniMax',
    categoryCode: 'A',
    categoryLabel: 'Marketing & Brand Project',
    date: 'Internship',
    institutionOrOrg: 'MiniMax',
    status: 'Completed',
    featuredOnHome: true,
    homeOrder: 6,
    summary:
      'AI industry research, white paper development, user research, industry events, developer roundtables, and communication with specialist AI media accounts.',
    heroAspect: '16/10',
    motif: 'ai',
    coverCaption:
      'FIG. 06 — AI white paper development, developer roundtables & specialist media outreach (slot).',
    overview:
      'Marketing and communication work at MiniMax focused on translating fast-moving artificial intelligence capabilities into structured industry research, developer engagement, and specialist media narratives.',
    researchQuestionOrChallenge:
      'How can a frontier AI company build credible technical and market authority among developers, enterprise users, and specialist technology media?',
    contextAndMotivation:
      'In a rapidly evolving AI landscape, surface-level hype quickly loses credibility. Thoughtful white papers, user insight, and direct dialogue with developer communities are critical for establishing trust.',
    roleAndResponsibilities: [
      'Conducted AI industry research and user research to inform positioning and content.',
      'Contributed to white paper development.',
      'Supported industry events and developer roundtables.',
      'Assisted with communication and outreach to specialist AI media accounts.',
    ],
    approach:
      'Combined desk research and user listening with long-form thought leadership (white papers) and high-context community formats (developer roundtables and specialist media briefings).',
    methodsAndTools: [
      'Industry & User Research',
      'White Paper Development',
      'Developer Roundtables & Events',
      'Specialist AI Media Relations',
    ],
    outcomesOrStatusNote:
      'Completed during marketing internship at MiniMax. White paper excerpts, roundtable photography, and media coverage samples can be added to the deliverable slots.',
    pullQuote:
      'Communicating emerging technology requires translating complex technical shifts into clear, evidence-based perspectives.',
    deliverables: [
      {
        label: 'AI White Paper & Research Briefs',
        caption: 'Placeholder for white paper covers and research synthesis spreads.',
        aspect: '4/5',
        motif: 'ai',
      },
      {
        label: 'Developer Roundtables & Events',
        caption: 'Placeholder for event and roundtable documentation.',
        aspect: '16/10',
        motif: 'network',
      },
    ],
    reflectionAndNextSteps:
      'Working inside an AI company deepened my curiosity about how technical communities and broader publics make sense of generative AI systems.',
  },
  {
    slug: 'social-media-matrix-operations-minimax',
    issueNumber: 'NO. 07',
    title: 'Official Social Media Matrix & Content Production — MiniMax',
    shortTitle: 'Official Social Media Matrix & Content Production — MiniMax',
    categoryCode: 'B',
    categoryLabel: 'Social Media Account Operations',
    date: 'Internship',
    institutionOrOrg: 'MiniMax',
    status: 'Completed',
    summary:
      'Development of MiniMax’s official social media matrix and ongoing platform-native content production.',
    heroAspect: '3/2',
    motif: 'social',
    coverCaption:
      'FIG. 07 — Official social media matrix architecture & editorial calendar (asset slot).',
    overview:
      'Built and operated content workflows for MiniMax’s official social media matrix, aligning product updates, technical storytelling, and audience-facing communication across platforms.',
    researchQuestionOrChallenge:
      'How should an AI company structure its official social media accounts to serve distinct audience segments while maintaining a coherent editorial voice?',
    contextAndMotivation:
      'Different social platforms reward different formats, tones, and levels of technical depth. Developing a coordinated account matrix allows brand and product narratives to travel effectively across each channel.',
    roleAndResponsibilities: [
      'Contributed to the development of MiniMax’s official social media matrix.',
      'Planned and produced platform-native content across official channels.',
    ],
    approach:
      'Structured content pillars around product capabilities, industry context, and accessible AI storytelling, adapting format and pacing to platform norms.',
    methodsAndTools: [
      'Social Media Matrix Planning',
      'Editorial Content Production',
      'Platform-Native Storytelling',
    ],
    outcomesOrStatusNote:
      'Completed during marketing internship at MiniMax. Account matrix diagrams and sample post layouts are reserved for future upload.',
    pullQuote:
      'A social media matrix works best when each channel has a clear role within a shared editorial voice.',
    deliverables: [
      {
        label: 'Channel Matrix Architecture',
        caption: 'Placeholder for multi-platform account positioning map.',
        aspect: '16/10',
        motif: 'social',
      },
      {
        label: 'Selected Content Samples',
        caption: 'Placeholder for official account post series and editorial layouts.',
        aspect: '1/1',
        motif: 'ai',
      },
    ],
    reflectionAndNextSteps:
      'Hands-on account operations directly informed how I think about platform affordances, algorithmic distribution, and audience engagement.',
  },
  {
    slug: 'computational-analysis-of-news-framing',
    issueNumber: 'NO. 08',
    title: 'Computational Analysis of News Framing',
    shortTitle: 'Computational Analysis of News Framing',
    categoryCode: 'D',
    categoryLabel: 'Data & Computational Project · Planned',
    date: 'Planned / In Development',
    institutionOrOrg: 'Independent Research Direction',
    status: 'Planned / In Development',
    summary:
      'An upcoming computational text analysis project examining how news framing varies across media ecosystems and evolves around contested public issues.',
    heroAspect: '16/10',
    motif: 'discourse',
    coverCaption:
      'FIG. 08 — Planned computational framing pipeline (in development).',
    overview:
      'This project is currently planned / in development. It aims to combine communication framing theory with computational text analysis to study large-scale patterns in how issues are emphasized, contextualized, and narrated across news outlets.',
    researchQuestionOrChallenge:
      'How can computational text methods reliably capture subtle framing shifts across large corpora without losing theoretical grounding in communication scholarship?',
    contextAndMotivation:
      'Building on my training in communication theory and social data science, this inquiry seeks to bridge manual qualitative framing analysis with scalable NLP workflows.',
    roleAndResponsibilities: [
      'Defining the research scope, corpus selection criteria, and framing codebook.',
      'Designing the computational text analysis pipeline in Python.',
    ],
    approach:
      'Planned mixed-method workflow pairing validated qualitative framing categories with supervised or embedding-based text classification in Python.',
    methodsAndTools: [
      'Python',
      'Computational Text Analysis',
      'Framing Theory',
      'Scikit-learn / NLP (Planned)',
    ],
    outcomesOrStatusNote:
      'Status: Planned / In Development. No empirical findings are reported yet; corpus design and methodology are currently being scoped.',
    pullQuote:
      'Computational text analysis is strongest when algorithmic scale is anchored by careful communication theory.',
    deliverables: [
      {
        label: 'Planned Pipeline Architecture',
        caption: 'Reserved space for corpus design and framing taxonomy documentation.',
        aspect: '16/10',
        motif: 'discourse',
      },
    ],
    reflectionAndNextSteps:
      'Next steps include finalizing the target issue domain, assembling a balanced news corpus, and validating frame annotations.',
  },
  {
    slug: 'interactive-prototype-information-credibility-assessment',
    issueNumber: 'NO. 09',
    title: 'Interactive Prototype for Information Credibility Assessment',
    shortTitle: 'Interactive Prototype for Information Credibility Assessment',
    categoryCode: 'D',
    categoryLabel: 'Data & Computational Project · Planned',
    date: 'Planned / In Development',
    institutionOrOrg: 'Independent Research & Design Direction',
    status: 'Planned / In Development',
    summary:
      'A planned interactive prototype exploring how interface cues, source transparency, and structured evaluation prompts can support audiences in assessing online information credibility.',
    heroAspect: '3/2',
    motif: 'prototype',
    coverCaption:
      'FIG. 09 — Planned credibility assessment interface concept (in development).',
    overview:
      'This project is currently planned / in development. Extending insights from my research on health information adoption and persuasion, it explores how digital interfaces can make source cues and evidence quality more legible to everyday readers.',
    researchQuestionOrChallenge:
      'How might structured credibility prompts and transparent source indicators influence how users evaluate claims in fast-moving feeds?',
    contextAndMotivation:
      'Audiences frequently rely on heuristic cues when assessing online claims. Designing an interactive prototype provides a sandbox for testing how interface design and information literacy principles can work together.',
    roleAndResponsibilities: [
      'Scoping the conceptual framework based on information adoption and persuasion research.',
      'Designing prototype interactions and future experimental testing scenarios.',
    ],
    approach:
      'Planned iterative prototyping informed by Elaboration Likelihood Model principles and potential A/B experimental evaluation.',
    methodsAndTools: [
      'Experimental Design',
      'A/B Testing (Planned)',
      'Information Credibility Frameworks',
      'Interactive Prototyping',
    ],
    outcomesOrStatusNote:
      'Status: Planned / In Development. Prototype wireframes and experimental materials are not yet finalized.',
    pullQuote:
      'Interface design is never neutral—it shapes which cues audiences notice and how carefully they evaluate a claim.',
    deliverables: [
      {
        label: 'Prototype Concept Wireframes',
        caption: 'Reserved space for future interactive prototype screens and study design.',
        aspect: '16/10',
        motif: 'prototype',
      },
    ],
    reflectionAndNextSteps:
      'Next steps include translating key credibility dimensions into testable interface states for future user studies.',
  },
]

export interface ExperienceEntry {
  id: string
  organization: string
  role: string
  period: string
  summary: string
  tags: string[]
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'jd-logistics',
    organization: 'JD Logistics',
    role: 'Brand Marketing Associate / Graduate Management Trainee',
    period: 'January 2025 – Present',
    summary:
      'Working across brand marketing initiatives including celebrity marketing campaigns, integrated campaign planning, creative asset development, nationwide offline advertising placements, and ESG communication (marathon sponsorship, mangrove environmental projects, and ESG report production).',
    tags: ['Brand Marketing', 'Integrated Campaigns', 'ESG Communication'],
  },
  {
    id: 'minimax',
    organization: 'MiniMax',
    role: 'Marketing Internship',
    period: 'Internship',
    summary:
      'Conducted AI industry research and user research, contributed to white paper development, supported industry events and developer roundtables, communicated with specialist AI media accounts, and developed the official social media matrix and content production.',
    tags: ['AI Industry Research', 'Content & Social Matrix', 'Developer & Media Communication'],
  },
  {
    id: 'xiaohongshu',
    organization: 'Xiaohongshu (RED)',
    role: 'Market Research Intern',
    period: 'October 2024 – December 2024',
    summary:
      'Market research internship focused on understanding platform users, content ecosystems, and consumer insights.',
    tags: ['Market Research', 'Platform Insights'],
  },
  {
    id: 'tesla',
    organization: 'Tesla',
    role: 'Public Relations Intern',
    period: 'July 2024 – October 2024',
    summary:
      'Public relations internship supporting external communication and brand-facing media workflows.',
    tags: ['Public Relations', 'Corporate Communication'],
  },
  {
    id: 'dentsu',
    organization: 'Dentsu',
    role: 'Advertising Account Executive Intern',
    period: 'September 2022 – December 2023',
    summary:
      'Advertising account executive internship supporting client communication, campaign coordination, and agency workflows.',
    tags: ['Advertising', 'Account Management'],
  },
]

export const education = [
  {
    institution: 'University of Edinburgh',
    degree: 'MSc Digital Sociology with Social Data Science',
    period: '2023 – 2024',
    distinction: 'Merit',
    note: 'Graduate training combining digital sociology, social network analysis, computational methods, and multimodal critical discourse analysis.',
  },
  {
    institution: 'Renmin University of China',
    degree: 'BA Communication',
    period: '2019 – 2023',
    distinction: 'GPA 87/100',
    note: 'Undergraduate dissertation received an Excellent Undergraduate Dissertation award.',
  },
]

export const skillGroups = [
  {
    category: 'Quantitative Research',
    items: [
      'Survey Design',
      'Regression Analysis',
      'ANOVA',
      'Factor Analysis',
      'Experimental Design',
      'A/B Testing',
    ],
  },
  {
    category: 'Computational Methods',
    items: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Computational Text Analysis',
      'Social Network Analysis',
    ],
  },
  {
    category: 'Qualitative & Multimodal Research',
    items: [
      'Qualitative Coding',
      'Multimodal Analysis',
      'Visual Grammar',
      'Critical Discourse Analysis',
    ],
  },
  {
    category: 'Tools',
    items: ['SPSS', 'R', 'MySQL', 'UCINET', 'Gephi', 'NVivo', 'Qualtrics'],
  },
  {
    category: 'Languages',
    items: ['Chinese', 'English (IELTS 8.0)', 'French (A2)'],
  },
]
