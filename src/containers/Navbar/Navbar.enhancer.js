import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import styles from './Navbar.styles'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedNavbar'),
  // Add props.router (used in handlers)
  withRouter,
  connect(({ character, subscribe }) => ({
    character,
    subscribed: subscribe.start !== ''
  })),
  // Add styles as classes prop
  withStyles(styles)
)
