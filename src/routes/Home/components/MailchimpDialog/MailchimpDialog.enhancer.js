import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import styles from './MailchimpDialog.styles'

export default compose(
  connect(({ character }) => ({ character })),
  withStyles(styles)
)
