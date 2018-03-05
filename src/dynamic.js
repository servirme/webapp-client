import {
  always,
  applySpec,
  pipe,
  prop,
  toString,
} from 'ramda'

const createManifest = pipe(
  applySpec({
    name: prop('name'),
    short_name: prop('name'),
    description: prop('description'),
    start_url: prop('url'),
    background_color: always('#000000'),
    theme_color: always('#0f4a73'),
    icons: [
      {
        src: prop('logoUrl'),
        sizes: always('256x256'),
        type: always('image/png'),
      },
    ],
  }),
  toString
)

export default (estabilishment) => {
  const manifest = createManifest(estabilishment)

  const blob = new Blob([manifest], { type: 'application/javascript' })
  const manifestURL = URL.createObjectURL(blob)
  document.querySelector('#manifest').setAttribute('href', manifestURL)
  document.querySelector('#favicon').setAttribute('href', estabilishment.faviconUrl)
}

