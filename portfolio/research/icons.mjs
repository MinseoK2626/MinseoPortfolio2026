const paths = {
  document: '<path d="M13 21H5V3h10l4 4v5M14 3v5h5M8 9h3m-3 4h2"/><circle cx="16" cy="16" r="3.5"/><path d="m18.5 18.5 3 3"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  search: '<circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5 5"/>',
  verify: '<path d="M5 3h14v18H5zM8 12l3 3 5-6"/>',
  evaluate: '<path d="M5 3h14v18H5zM8 8h8m-7 8v-3m3 3v-5m3 5v-2"/>',
  synthesize: '<path d="M7 3h12v14H7zM4 7v14h12M10 7h6m-6 4h6"/>',
  communicate: '<path d="M4 4h16v12h-8l-5 4v-4H4zm4 5h8m-8 3h5"/>',
}

export function researchIcon(name, size = 24) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]}</svg>`
}
