import { ConfigProvider } from 'ant-design-vue'
import ColorPalette from './settings/colors'
const { 'primary-main': primary, 'accent02-shades-4': warn } = ColorPalette

export const setupDesign = () => {
  ConfigProvider.config({
    theme: {
      primaryColor: primary.DEFAULT,
      errorColor: warn.DEFAULT
    }
  })
}
