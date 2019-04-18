import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CheckCircle from '@material-ui/icons/CheckCircle'
import Typography from '@material-ui/core/Typography'
import './subscribe.css'
import Scrollbar from 'react-scrollbars-custom'
import { Motion, spring } from 'react-motion'

class SubscribePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      popup: false
    }
    setTimeout(() => this.setState({ popup: true }), 2000)
  }

  initialPopupStyle = () => ({
    opacity: spring(0),
    y: spring(-100)
  })

  finalPopupStyle = () => ({
    opacity: spring(1),
    y: spring(0)
  })

  render() {
    const popupStyle = this.state.popup
      ? this.finalPopupStyle()
      : this.initialPopupStyle()
    const { subscribe, changeSubscription, classes, character } = this.props
    const { bigLink, name } = character
    return (
      <React.Fragment>
        <Scrollbar className={classes.scrollbar}>
          <Container>
            <Row className="text-center lead">
              <h1>Choose a Plan to Join the Super Smash Brothers Club</h1>
            </Row>
            <Row style={{ marginBottom: 25 }}>
              <Col sm="4">
                <h3
                  className="text-center text-muted"
                  style={{ marginTop: 20, marginBottom: 10 }}>
                  Monthly
                </h3>
                <p className="text-center">
                  <strong>Billed every month</strong>
                </p>
                <h1 className="text-center text-success2">$20</h1>
                <ul
                  className="list-unstyled lead"
                  style={{ padding: '0 20px' }}>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    Free entry to weekly tournaments
                  </li>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    Premium articles at least three times a month
                  </li>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    First dibs on SSBC merchandise drops
                  </li>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    Priority registration for tournaments
                  </li>
                </ul>
                <button
                  onClick={() => changeSubscription('monthly')}
                  className="btn btn-block btn-default btn-lg"
                  disabled={subscribe.period === 'monthly'}>
                  {subscribe.period !== 'monthly' && 'Sign Up'}
                  {subscribe.period === 'monthly' && 'Selected'}
                </button>
              </Col>
              <Col sm="4" style={{ border: '2px solid #2196f3' }}>
                <h3
                  style={{
                    background: '#2196f3',
                    color: 'white',
                    padding: '7px 0',
                    marginTop: 20,
                    marginBottom: 10
                  }}
                  className="text-center text-success2">
                  Yearly
                </h3>
                <p className="text-center">
                  <strong>Billed every 12 months</strong>
                </p>
                <h1 className="text-center text-success2">$200</h1>
                <ul
                  className="list-unstyled lead"
                  style={{ padding: '0 20px' }}>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    Save $40 over the monthly plan
                  </li>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    Free entry to weekly tournaments
                  </li>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    Premium articles at least three times a month
                  </li>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    First dibs on SSBC merchandise drops
                  </li>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    Priority registration for tournaments
                  </li>
                </ul>
                <button
                  onClick={() => changeSubscription('yearly')}
                  className="btn btn-block btn-default btn-lg"
                  disabled={subscribe.period === 'yearly'}>
                  {subscribe.period !== 'yearly' && 'Sign Up'}
                  {subscribe.period === 'yearly' && 'Selected'}
                </button>
              </Col>
              <Col sm="4">
                <h3
                  className="text-center text-muted"
                  style={{ marginTop: 20, marginBottom: 10 }}>
                  Quarterly
                </h3>
                <p className="text-center">
                  <strong>Billed every 3 months</strong>
                </p>
                <h1 className="text-center text-success2">$55</h1>
                <ul
                  className="list-unstyled lead"
                  style={{ padding: '0 30px' }}>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    Save $20 over the monthly plan
                  </li>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    Free entry to weekly tournaments
                  </li>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    Premium articles at least three times a month
                  </li>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    First dibs on SSBC merchandise drops
                  </li>
                  <li>
                    <CheckCircle
                      color="primary"
                      style={{
                        marginRight: 10,
                        transform: 'translate(0, -2px)'
                      }}
                    />
                    Priority registration for tournaments
                  </li>
                </ul>
                <button
                  onClick={() => changeSubscription('quarterly')}
                  className="btn btn-block btn-default btn-lg"
                  disabled={subscribe.period === 'quarterly'}>
                  {subscribe.period !== 'quarterly' && 'Sign Up'}
                  {subscribe.period === 'quarterly' && 'Selected'}
                </button>
              </Col>
            </Row>
          </Container>
        </Scrollbar>
        <Motion style={popupStyle}>
          {({ opacity, y }) => {
            return (
              <div onClick={() => this.setState({ popup: false })}>
                <div
                  className="popup"
                  style={{ opacity: opacity, transform: `translateY(${y}px)` }}>
                  <Typography variant="h5">
                    {name} thinks the yearly subscription is a steal!
                  </Typography>
                  <div
                    style={{
                      backgroundImage: `url(https://www.ssbwiki.com/images/thumb/${bigLink})`,
                      pointerEvents: 'none',
                      backgroundSize: '300px',
                      backgroundRepeat: 'no-repeat'
                    }}
                    className={classes.media}
                  />
                </div>
              </div>
            )
          }}
        </Motion>
      </React.Fragment>
    )
  }
}

export default SubscribePage
