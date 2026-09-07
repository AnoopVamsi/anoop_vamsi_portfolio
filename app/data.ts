export const portfolio = {
  name: "Anoop Vamsi Meduri",
  title: "Senior AI/ML Engineer | Generative AI & Data Engineering",
  email: "",
  links: { linkedin: "https://www.linkedin.com/in/anoop-vamsi-meduri", github: "https://github.com/AnoopVamsi", resume: "#contact" },
  roles: ["AI/ML Engineer", "Generative AI Engineer", "Agentic AI Developer", "Data Engineer"],
  experiences: [
    { company: "Charles Schwab", role: "Senior Data & AI/ML Engineer", period: "Dec 2025 — Present", detail: "Building enterprise search, permission-aware RAG, and agent workflows for financial knowledge systems." },
    { company: "Humana", role: "Senior Data Engineer — AI & ML", period: "Aug 2024 — Nov 2025", detail: "Developed healthcare data and AI solutions with secure retrieval, cloud pipelines, and production APIs." },
    { company: "PennyMac", role: "Senior Data Engineer — ML", period: "Feb 2024 — Jul 2024", detail: "Delivered document-processing and machine-learning workflows for mortgage servicing and risk use cases." },
    { company: "Fractal Analytics", role: "Data Engineer", period: "Sep 2018 — Dec 2023", detail: "Built Python, SQL, Spark, and AWS data pipelines supporting analytics, forecasting, and operations." },
    { company: "Tavant Technologies", role: "ETL Developer", period: "Apr 2016 — Aug 2018", detail: "Created reliable ETL integrations across databases, APIs, flat files, and enterprise applications." },
  ],
  projects: [
    { number: "01", title: "Enterprise Financial Document Intelligence", kicker: "Local-first RAG / Financial AI", description: "A cost-effective RAG application that analyzes SEC filings and financial reports using extraction, recursive chunking, embeddings, hybrid retrieval, reranking, and a local LLM.", stack: ["Python", "Streamlit", "ChromaDB", "Sentence Transformers", "Ollama", "Llama 3.2"], github: "https://github.com/AnoopVamsi/financial-document-intelligence", details: { "Business Problem": "Analysts spend hours navigating dense filings, while generic search misses context and cannot explain its evidence.", "Proposed Solution": "A local RAG workflow that retrieves, reranks, and synthesizes evidence without paid model APIs.", "System Architecture": "PDF → extraction → chunks → dense and keyword indexes → hybrid retrieval → reranking → local LLM.", "My Contribution": "Designed and implemented ingestion, retrieval, reranking, evaluation, and the Streamlit experience end to end.", "Measurable Outcome": "Processed a 121-page Apple 10-K into 975 searchable vectors with top-5 evidence retrieval and local answer generation." } },
    { number: "02", title: "Agent Evaluation Lab", kicker: "Evaluation / AI Reliability", description: "An evaluation framework for comparing AI-agent outputs using accuracy, relevance, groundedness, latency, and reliability metrics.", stack: ["Python", "LLM-as-a-Judge", "RAGAS", "JSON datasets", "Automated Testing"], github: "https://github.com/AnoopVamsi/astra-agent-evaluation-lab", details: { "Business Problem": "Agent demos can appear convincing without repeatable evidence that outputs are accurate or reliable.", "Proposed Solution": "A reusable benchmark harness combining reference datasets, quality metrics, judge scoring, and regression checks.", "System Architecture": "JSON cases → agent runners → metric evaluators → score aggregation → comparison report.", "My Contribution": "Defined the evaluation dataset, metric pipeline, test automation, and output reports.", "Measurable Outcome": "Made agent quality comparable across runs with consistent measures for groundedness, relevance, latency, and reliability." } },
  ],
  skills: {
    "Generative AI": ["LLMs", "RAG", "Agentic AI", "LangChain", "LangGraph", "LlamaIndex", "MCP", "Prompt Engineering"],
    "Machine Learning": ["Scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "PyTorch", "NLP"],
    "Data Engineering": ["Python", "SQL", "PySpark", "Databricks", "Airflow", "Kafka", "Snowflake"],
    "Cloud": ["AWS", "Azure", "GCP", "Bedrock", "SageMaker", "Azure OpenAI", "Vertex AI"],
    "MLOps": ["MLflow", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Terraform"],
    "Backend": ["FastAPI", "Flask", "REST APIs", "GraphQL", "Microservices"],
  },
};
