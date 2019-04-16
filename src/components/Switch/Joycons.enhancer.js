import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import styles from './Switch.styles'

export default compose(
  withStyles(styles),
  connect(({ ui: { rightJoyconColor, leftJoyconColor } }) => ({
    rightJoyconColor,
    leftJoyconColor
  }))
)
