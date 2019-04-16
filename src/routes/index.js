import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import NotFoundRoute from './NotFound'
import CharactersRoute from './Characters'
import MovementRoute from './Movement'
import SwitchRoute from './Switch'
import AttackingRoute from './Attacking'
import DefendingRoute from './Defending'
import OffenseRoute from './Offense'

export default function createRoutes(store) {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={Home.path} component={Home.component} />
        {/* Build Route components from routeSettings */
        [
          CharactersRoute,
          MovementRoute,
          SwitchRoute,
          AttackingRoute,
          DefendingRoute,
          OffenseRoute
          /* Add More Routes Here */
        ].map((settings, index) => (
          <Route key={`Route-${index}`} {...settings} />
        ))}
        <Route component={NotFoundRoute.component} />
      </Switch>
    </CoreLayout>
  )
}
