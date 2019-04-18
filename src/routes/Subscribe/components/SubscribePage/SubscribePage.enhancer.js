import { compose } from 'redux'
import { connect } from 'react-redux'
import { withHandlers } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './SubscribePage.styles'

export default compose(
  connect(({ subscribe }) => ({ subscribe })),
  withHandlers(({ dispatch }) => ({
    changeSubscription: props => period =>
      dispatch({ type: 'SUBSCRIBE', payload: { start: new Date(), period } })
  })),
  withStyles(styles)
)
