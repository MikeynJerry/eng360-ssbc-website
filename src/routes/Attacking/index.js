import { Loadable } from 'utils/components'
import { ATTACKING_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Attacking' */ './components/AttackingPage')
  })
}
