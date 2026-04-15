import SectionLabel from '../ui/SectionLabel'

export default function ManualPage({ steps }) {
  return (
    <div className="pb-20">
      <div className="noise-overlay" />
      <section className="py-16">
        <div className="section-shell">
          <SectionLabel>Execution Manual</SectionLabel>
          <h1 className="text-h1 font-display tracking-tight text-text-primary">
            End-to-End Step-by-Step Manual
          </h1>
          <p className="mt-4 max-w-4xl text-body text-text-secondary">
            This page is the complete implementation manual for Project Vijay. Follow each stage in order,
            and do not move to the next stage until the acceptance condition is met.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell space-y-6">
          {steps.map((step, index) => (
            <article key={step.stage} className="card-surface rounded-2xl p-6 shadow-skinSm">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-border-default bg-bg-elevated px-3 py-1 font-mono text-small text-accent-secondary">
                  {step.stage}
                </span>
                <h2 className="text-h2 font-semibold text-text-primary">{step.title}</h2>
              </div>

              <div className="mt-4 grid gap-5 lg:grid-cols-2">
                <div>
                  <h3 className="text-small font-semibold uppercase tracking-[0.14em] text-text-muted">Objective</h3>
                  <p className="mt-2 text-body text-text-secondary">{step.objective}</p>
                </div>
                <div>
                  <h3 className="text-small font-semibold uppercase tracking-[0.14em] text-text-muted">Acceptance</h3>
                  <p className="mt-2 text-body text-text-secondary">{step.acceptance}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <div>
                  <h3 className="text-small font-semibold uppercase tracking-[0.14em] text-text-muted">Actions</h3>
                  <ol className="mt-3 list-inside list-decimal space-y-2 text-body text-text-secondary">
                    {step.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="text-small font-semibold uppercase tracking-[0.14em] text-text-muted">Required Outputs</h3>
                  <ul className="mt-3 list-inside list-disc space-y-2 text-body text-text-secondary">
                    {step.outputs.map((output) => (
                      <li key={output}>{output}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-5 text-small text-text-muted">Step {index + 1} of {steps.length}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
