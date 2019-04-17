import { Loadable } from 'utils/components'
import { HOME_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Home' */ './components/HomePage')
  })
}
