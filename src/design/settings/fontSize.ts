import { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config'

const fontSize: ResolvableTo<
  KeyValuePair<
    string,
    | string
    | [fontSize: string, lineHeight: string]
    | [
        fontSize: string,
        configuration: Partial<{
          lineHeight: string
          letterSpacing: string
          fontWeight: string | number
        }>
      ]
  >
> = {
  d1: ['96px', { fontWeight: 600, lineHeight: '120px' }],
  h3: ['40px', { fontWeight: 600, lineHeight: '60px' }],
  title: ['16px', { fontWeight: 'bold', lineHeight: '20px' }],
  caption2: ['12px', { lineHeight: '16px' }]
}

export default fontSize
