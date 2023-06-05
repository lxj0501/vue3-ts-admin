import { ConfigProvider } from 'ant-design-vue'
import { ColorEnum } from '@/enums/colorEnum.g'

export const setupDesign = () => {
  ConfigProvider.config({
    theme: {
      primaryColor: ColorEnum.PRIMARY_COLOR,
      errorColor: ColorEnum.ERROR_COLOR
    }
  })
}
