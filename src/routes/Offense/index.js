import { Loadable } from 'utils/components'
import { OFFENSE_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Movement' */ './components/OffensePage')
  })
}
