import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import HomeRoute from './Home'
import FreeRoute from './Free'
import MembersOnlyRoute from './MembersOnly'
import GuideRoute from './Guide'
import NotFoundRoute from './NotFound'
import CharactersRoute from './Characters'
import MovementRoute from './Movement'
import SwitchRoute from './Switch'
import AttackingRoute from './Attacking'
import DefendingRoute from './Defending'
import OffenseRoute from './Offense'
import EventsRoute from './Events'
import SubscribeRoute from './Subscribe'

export default function createRoutes(store) {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={HomeRoute.path} component={HomeRoute.component} />
        {/* Build Route components from routeSettings */
        [
          FreeRoute,
          MembersOnlyRoute,
          GuideRoute,
          CharactersRoute,
          MovementRoute,
          SwitchRoute,
          AttackingRoute,
          DefendingRoute,
          OffenseRoute,
          EventsRoute,
          SubscribeRoute
          /* Add More Routes Here */
        ].map((settings, index) => (
          <Route key={`Route-${index}`} {...settings} />
        ))}
        <Route component={NotFoundRoute.component} />
      </Switch>
    </CoreLayout>
  )
}
