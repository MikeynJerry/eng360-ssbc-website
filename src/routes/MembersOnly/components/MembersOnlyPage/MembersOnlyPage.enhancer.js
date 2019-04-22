import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import styles from './MembersOnlyPage.styles'

export default compose(
  connect(({ subscribe }) => ({ subscribed: subscribe.start !== '' })),
  withStyles(styles)
)
