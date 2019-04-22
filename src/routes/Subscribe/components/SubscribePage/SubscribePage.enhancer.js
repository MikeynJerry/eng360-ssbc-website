import { compose } from 'redux'
import { connect } from 'react-redux'
import { withHandlers } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './SubscribePage.styles'

export default compose(
  connect(({ subscribe, character }) => ({ subscribe, character })),
  withHandlers(({ dispatch }) => ({
    changeSubscription: ({
      subscribe: { period: currentPeriod }
    }) => period => {
      if (currentPeriod !== period)
        dispatch({ type: 'SUBSCRIBE', payload: { start: new Date(), period } })
      if (currentPeriod === period)
        dispatch({ type: 'SUBSCRIBE', payload: { start: '', period: '' } })
    }
  })),
  withStyles(styles)
)
