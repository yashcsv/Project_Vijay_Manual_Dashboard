const isGitHubPages =
  typeof window !== 'undefined' &&
  window.location.hostname === 'yashcsv.github.io' &&
  window.location.pathname.startsWith('/Project_Vijay_Manual_Dashboard')

if (isGitHubPages) {
  const cssHref = '/Project_Vijay_Manual_Dashboard/assets/app.css'
  if (!document.querySelector(`link[href="${cssHref}"]`)) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = cssHref
    document.head.appendChild(link)
  }

  const script = document.createElement('script')
  script.type = 'module'
  script.src = '/Project_Vijay_Manual_Dashboard/assets/app.js'
  document.body.appendChild(script)
} else {
  import('./main.dev.jsx')
}
