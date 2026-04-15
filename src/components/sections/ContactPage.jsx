import SectionLabel from '../ui/SectionLabel'

const highlights = [
  'An end-to-end SMS Spam Classification system deployed as a live web app',
  'A memory-optimized content-based Movie Recommendation Engine',
  'Business-focused analytics dashboards with SQL-driven insights',
  'LLM-powered workflows using LangChain and LangGraph',
]

const lifecycle = [
  'EDA',
  'Feature Engineering',
  'Model Training',
  'Evaluation',
  'Optimization',
  'Deployment',
]

const comfortZone = [
  'NLP and Text Vectorization (TF-IDF, embeddings)',
  'RAG architectures and LLM orchestration',
  'Cosine similarity and recommendation mathematics',
  'Backend integration with frontend UI',
  'Debugging deployment failures and memory bottlenecks',
  'Git-based production workflows',
]

export default function ContactPage() {
  return (
    <div className="pb-20">
      <div className="noise-overlay" />

      <section className="py-16">
        <div className="section-shell">
          <SectionLabel>Contact Us</SectionLabel>
          <div className="highlight-card rounded-3xl p-8">
            <p className="text-label uppercase tracking-[0.18em] text-text-secondary">Yash Singh Thakur Profile</p>
            <h1 className="mt-3 text-h1 font-display tracking-tight text-text-primary">Yash Singh Thakur</h1>
            <p className="mt-4 max-w-4xl text-body text-text-secondary">
              I build AI systems that work beyond notebooks. I am an AI/ML-focused undergraduate engineer
              who designs and deploys production-ready machine learning and Generative AI applications,
              from data preprocessing to model deployment and frontend integration.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-border-default bg-bg-elevated px-3 py-1 text-small">AI/ML Engineer</span>
              <span className="rounded-full border border-border-default bg-bg-elevated px-3 py-1 text-small">Generative AI and RAG Systems</span>
              <span className="rounded-full border border-border-default bg-bg-elevated px-3 py-1 text-small">ML Deployment</span>
              <span className="rounded-full border border-border-default bg-bg-elevated px-3 py-1 text-small">Open to Internship</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell grid gap-6 lg:grid-cols-3">
          <article className="card-surface rounded-2xl p-6 lg:col-span-1">
            <h2 className="text-h3 font-semibold text-text-primary">Direct Contact</h2>
            <ul className="mt-4 space-y-3 text-body text-text-secondary">
              <li>
                Email:
                <a className="ml-2 text-accent-secondary underline" href="mailto:yashsinghthakur69@gmail.com">
                  yashsinghthakur69@gmail.com
                </a>
              </li>
              <li>
                Phone:
                <span className="ml-2">9098216189</span>
              </li>
              <li>
                LinkedIn:
                <a
                  className="ml-2 text-accent-secondary underline"
                  href="https://www.linkedin.com/in/yash-thakur-ggits/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                GitHub:
                <a
                  className="ml-2 text-accent-secondary underline"
                  href="https://github.com/yashcsv"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </article>

          <article className="card-surface rounded-2xl p-6 lg:col-span-2">
            <h2 className="text-h3 font-semibold text-text-primary">Project Highlights</h2>
            <ul className="mt-4 space-y-3 text-body text-text-secondary">
              {highlights.map((item) => (
                <li key={item}>+ {item}</li>
              ))}
            </ul>
          </article>

          <article className="card-surface rounded-2xl p-6 lg:col-span-1">
            <h2 className="text-h3 font-semibold text-text-primary">Full ML Lifecycle</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-body text-text-secondary">
              {lifecycle.map((item) => (
                <li key={item} className="rounded-lg border border-border-default bg-bg-elevated px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card-surface rounded-2xl p-6 lg:col-span-2">
            <h2 className="text-h3 font-semibold text-text-primary">Technical Comfort Zone</h2>
            <ul className="mt-4 space-y-2 text-body text-text-secondary">
              {comfortZone.map((item) => (
                <li key={item}>&gt; {item}</li>
              ))}
            </ul>
          </article>

          <article className="highlight-card rounded-2xl p-6 lg:col-span-3">
            <h2 className="text-h3 font-semibold text-text-primary">Internship Intent</h2>
            <p className="mt-3 text-body text-text-secondary">
              I am actively seeking AI/ML internships where I can contribute to real-world AI systems,
              recommendation engines, GenAI pipelines, or scalable ML infrastructure. If you are building
              intelligent systems at scale, I would love to contribute.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
