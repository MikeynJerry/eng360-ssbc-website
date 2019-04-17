import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import './MailchimpDialog.css'

class MailchimpDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render() {
    const { onRequestClose, open } = this.props
    const { value } = this.state
    return (
      <Dialog open={open} onClose={onRequestClose}>
        <form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=a164efddb6210cd6db5821aa8&amp;id=cdd1f7f863"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate>
          <DialogTitle id="mailchimp-dialog-title">
            <b>Subscribe To Our Mailing List!</b>
          </DialogTitle>
          <DialogContent style={{ paddingTop: '0', paddingBottom: '0' }}>
            <div id="mc_embed_signup">
              <div id="mc_embed_signup_scroll">
                <input
                  type="email"
                  value={value}
                  name="EMAIL"
                  class="email"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                  onChange={({ target: { value } }) => this.setState({ value })}
                />
                <div
                  style={{ position: 'absolute', left: '-5000px' }}
                  aria-hidden="true">
                  <input
                    type="text"
                    name="b_a164efddb6210cd6db5821aa8_cdd1f7f863"
                    tabindex="-1"
                    value=""
                  />
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onRequestClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    )
  }
}

export default MailchimpDialog
