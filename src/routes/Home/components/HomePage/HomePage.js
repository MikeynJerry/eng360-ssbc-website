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
                <a href="/articles/free">
                  <div className={[classes.quad1, 'quad'].join(' ')}>
                    <img
                      src="https://imgur.com/TZ37NZ9.png"
                      alt={'Newspaper'}
                      className={classes.quadIcon}
                    />
                    <h1 className={classes.header}>Articles</h1>
                  </div>
                </a>
              </Col>
              <Col xs="6" className={'padding-0'}>
                <a href="/subscribe">
                  <div className={[classes.quad3, 'quad'].join(' ')}>
                    <img
                      src="https://imgur.com/O1JYXhq.png"
                      alt={'Group of People'}
                      className={classes.quadIcon}
                    />
                    <h1 className={classes.header}>Subscribe</h1>
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
                <a href="/events">
                  <div className={[classes.quad2, 'quad'].join(' ')}>
                    <img
                      src="https://imgur.com/xLyEtlO.png"
                      alt={'Calendar'}
                      className={classes.quadIcon}
                    />
                    <h1 className={classes.header}>Events</h1>
                  </div>
                </a>
              </Col>
              <Col xs="6" className={'padding-0'}>
                <a href="/guide">
                  <div className={[classes.quad4, 'quad'].join(' ')}>
                    <img
                      src="https://imgur.com/ZBgumXy.png"
                      alt={'Compass'}
                      className={classes.quadIcon}
                    />
                    <h1 className={classes.header}>Guide</h1>
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
