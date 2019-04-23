import React from 'react'
import MailchimpDialog from '../MailchimpDialog'
import { Container, Row, Col, Button } from 'reactstrap'
import './homepage.css'

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
        <div
          style={{
            width: '100%',
            height: 'calc(100vh - 64px)',
            backgroundColor: 'black'
          }}>
          <Container fluid={'true'} className={'hundoheight'}>
            <Row className={'maxpheight'}>
              <Col xs="6" className={'padding-0'}>
                <a href="/movement">
                  <div className={[classes.quad1, 'quad'].join(' ')}>
                    <img
                      src="https://imgur.com/oVOY4wJ.png"
                      alt={'Joystick'}
                      className={classes.quadIcon}
                    />
                    <h1 className={classes.header}>Movement</h1>
                  </div>
                </a>
              </Col>
              <Col xs="6" className={'padding-0'}>
                <a href="/attacking">
                  <div className={[classes.quad3, 'quad'].join(' ')}>
                    <img
                      src="https://imgur.com/jk4rw5K.png"
                      alt={'Fist'}
                      className={classes.quadIcon}
                    />
                    <h1 className={classes.header}>Attacks</h1>
                  </div>
                </a>
              </Col>
            </Row>
            <Row>
              <a href="/characters">
                <Button className={'absbetween'}>
                  <h1>Choose a Fighter!</h1>
                </Button>
              </a>
            </Row>
            <Row className={'maxpheight'}>
              <Col xs="6" className={'padding-0'}>
                <a href="/defending">
                  <div className={[classes.quad2, 'quad'].join(' ')}>
                    <img
                      src="https://imgur.com/SsczDVl.png"
                      alt={'Shield'}
                      className={classes.quadIcon}
                    />
                    <h1 className={classes.header}>Defense</h1>
                  </div>
                </a>
              </Col>
              <Col xs="6" className={'padding-0'}>
                <a href="/offense">
                  <div className={[classes.quad4, 'quad'].join(' ')}>
                    <img
                      src="https://imgur.com/KINn1Fn.png"
                      alt={'Sword'}
                      className={classes.quadIcon}
                    />
                    <h1 className={classes.header}>Offense</h1>
                  </div>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
export default HomePage
