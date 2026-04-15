import { useState } from 'react'
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/react'

export default function InfoTooltip({ content }) {
  const [open, setOpen] = useState(false)
  const { refs, floatingStyles } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(8), flip(), shift()],
    whileElementsMounted: autoUpdate,
  })

  return (
    <span className="relative inline-flex items-center">
      <button
        ref={refs.setReference}
        type="button"
        aria-label="More info"
        className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-border-default text-xs text-text-muted"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        i
      </button>
      {open && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          role="tooltip"
          className="z-50 w-72 rounded-xl border border-border-strong bg-bg-elevated p-3 text-small text-text-secondary shadow-skinLg"
        >
          {content}
        </div>
      )}
    </span>
  )
}
