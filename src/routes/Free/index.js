import { Loadable } from 'utils/components'
import { FREE_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Free' */ './components/FreePage')
  })
}
