import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CheckCircle from '@material-ui/icons/CheckCircle'
import './subscribe.css'

export const SubscribePage = ({ subscribe, changeSubscription, classes }) => (
  <Container>
    <Row className="text-center lead">
      <h1>Choose a Plan to Join the Super Smash Brothers Club</h1>
    </Row>
    <Row>
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
        <ul className="list-unstyled lead" style={{ padding: '0 20px' }}>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
            />
            Free entry to weekly tournaments
          </li>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
            />
            Premium articles at least three times a month
          </li>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
            />
            First dibs on SSBC merchandise drops
          </li>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
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
        <ul className="list-unstyled lead" style={{ padding: '0 20px' }}>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
            />
            Save $40 over the monthly plan
          </li>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
            />
            Free entry to weekly tournaments
          </li>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
            />
            Premium articles at least three times a month
          </li>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
            />
            First dibs on SSBC merchandise drops
          </li>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
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
        <ul className="list-unstyled lead" style={{ padding: '0 30px' }}>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
            />
            Save $20 over the monthly plan
          </li>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
            />
            Free entry to weekly tournaments
          </li>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
            />
            Premium articles at least three times a month
          </li>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
            />
            First dibs on SSBC merchandise drops
          </li>
          <li>
            <CheckCircle
              color="primary"
              style={{ marginRight: 10, transform: 'translate(0, -2px)' }}
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
)

export default SubscribePage
