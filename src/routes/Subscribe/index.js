import { Loadable } from 'utils/components'
import { SUBSCRIBE_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Subscribe' */ './components/SubscribePage')
  })
}
