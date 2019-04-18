import { Loadable } from 'utils/components'
import { MEMBERS_ONLY_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Members Only' */ './components/MembersOnlyPage')
  })
}
