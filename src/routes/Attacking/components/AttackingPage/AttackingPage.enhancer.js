import { compose } from 'redux'
import { connect } from 'react-redux'
import { withProps, withStateHandlers } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './AttackingPage.styles'
import {
  sections,
  videos,
  switches,
  spacing,
  flashing
} from 'markdown/attacking.js'

export default compose(
  connect(({ ui: { mode }, character: { name: character } }) => ({
    mode,
    character
  })),
  withProps(() => ({ sections, videos, switches, spacing, flashing })),
  withStateHandlers(({ currentFlashing = {} }) => ({ currentFlashing }), {
    setFlashing: ({ currentFlashing }) => flashing => {
      if (flashing.id !== currentFlashing.id)
        return { currentFlashing: flashing }
    }
  }),
  withStyles(styles)
)
