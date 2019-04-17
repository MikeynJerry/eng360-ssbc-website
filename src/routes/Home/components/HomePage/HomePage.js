import React from 'react'
import MailchimpDialog from '../MailchimpDialog'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }

  toggleDialog = () => this.setState({ open: !this.state.open })

  render() {
    const { classes } = this.props
    const { open } = this.state
    return (
      <div className={classes.container}>
        <MailchimpDialog open={open} onRequestClose={this.toggleDialog} />
      </div>
    )
  }
}
export default HomePage
