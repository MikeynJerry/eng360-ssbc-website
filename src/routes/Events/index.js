import { Loadable } from 'utils/components'
import { EVENTS_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Events' */ './components/EventsPage')
  })
}
