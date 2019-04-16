import { Loadable } from 'utils/components'
import { DEFENDING_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Defending' */ './components/DefendingPage')
  })
}
