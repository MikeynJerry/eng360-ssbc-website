import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import './MailchimpDialog.css'

class MailchimpDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render() {
    const {
      onRequestClose,
      open,
      character: { bigLink, name },
      classes
    } = this.props
    const { value } = this.state
    return (
      <Dialog open={open} onClose={onRequestClose}>
        <form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=a164efddb6210cd6db5821aa8&amp;id=cdd1f7f863"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate>
          <DialogTitle id="mailchimp-dialog-title">
            <b>Subscribe To Our Mailing List!</b>
          </DialogTitle>
          <DialogContent style={{ paddingTop: '0', paddingBottom: '0' }}>
            <img
              className={classes.media}
              src={`https://www.ssbwiki.com/images/thumb/${bigLink}`}
              alt={name}
            />
            <Typography variant="h6" style={{ padding: 10 }}>
              Joining your first Super Smash Brothers tournament can be
              daunting. To help you prepare, we've created a list of tips that
              will help you pilot {name} to success! Just subscribe to our
              mailing list and we'll send them straight to your email.
            </Typography>
            <TextField
              name="EMAIL"
              label="Email"
              id="mce-EMAIL"
              value={value}
              onChange={({ target: { value } }) => this.setState({ value })}
              margin="normal"
              variant="outlined"
              type="email"
              style={{ minWidth: 550 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onRequestClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" onClick={onRequestClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    )
  }
}

export default MailchimpDialog
