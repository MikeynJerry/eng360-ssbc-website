import React from 'react'
import './GuidePage.css'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const GuidePage = ({ classes }) => (
  <div
    style={{
      width: '100%',
      height: 'calc(100vh - 64px)',
      backgroundColor: 'black'
    }}>
    <Container fluid className="hundoheight">
      <Row className="maxpheight">
        <Col xs="6" className="padding-0">
          <Link to="/movement">
            <div className={[classes.quad1, 'quad'].join(' ')}>
              <img
                src="https://imgur.com/oVOY4wJ.png"
                alt="Joystick"
                className={classes.quadIcon}
              />
              <h1 className={classes.header}>Movement</h1>
            </div>
          </Link>
        </Col>
        <Col xs="6" className="padding-0">
          <Link to="/attacking">
            <div className={[classes.quad3, 'quad'].join(' ')}>
              <img
                src="https://imgur.com/jk4rw5K.png"
                alt="Fist"
                className={classes.quadIcon}
              />
              <h1 className={classes.header}>Attacks</h1>
            </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Link to="/characters">
          <Button className="absbetween">
            <h1>Choose a Fighter!</h1>
          </Button>
        </Link>
      </Row>
      <Row className="maxpheight">
        <Col xs="6" className="padding-0">
          <Link to="/defending">
            <div className={[classes.quad2, 'quad'].join(' ')}>
              <img
                src="https://imgur.com/SsczDVl.png"
                alt="Shield"
                className={classes.quadIcon}
              />
              <h1 className={classes.header}>Defense</h1>
            </div>
          </Link>
        </Col>
        <Col xs="6" className="padding-0">
          <Link to="/offense">
            <div className={[classes.quad4, 'quad'].join(' ')}>
              <img
                src="https://imgur.com/KINn1Fn.png"
                alt="Sword"
                className={classes.quadIcon}
              />
              <h1 className={classes.header}>Offense</h1>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
)

export default GuidePage
