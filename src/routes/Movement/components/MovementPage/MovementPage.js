import React from 'react'
import Fab from '@material-ui/core/Fab'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip'
import Sticky from 'react-stickynode'
import { FullSwitch } from 'components/Switch/Icons'
import TableSwitch from 'components/Switch'
import Markdown from 'components/Markdown'
import VisibilitySensor from 'react-visibility-sensor'
import Joycons from 'components/Switch/Joycons'

const Switch = ({ mode, video, flashing, ...rest }) => (
  <div>
    {mode === 'handheld' && <FullSwitch video={video} {...flashing} />}
    {mode === 'tabletop' && <TableSwitch video={video} {...rest} />}
  </div>
)

const visiblity = [false, false, false, false, false, false, false]

const onVisibilityChange = (flashing, setFlashing, i) => isVisible => {
  if (isVisible) {
    setFlashing(flashing)
  } else {
    if (visiblity[i] !== isVisible) setFlashing({})
  }
  visiblity[i] = isVisible
}

export class MovementPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const {
      classes,
      sections,
      videos,
      switches,
      spacing,
      flashing,
      mode,
      character,
      setFlashing,
      currentFlashing
    } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.spacer} />
        {mode === 'tabletop' && <Joycons {...currentFlashing} />}
        {sections(character).map((section, i) => (
          <div key={i}>
            <Markdown className={classes.root}>{section}</Markdown>
            {switches[i] && (
              <VisibilitySensor
                onChange={onVisibilityChange(flashing[i], setFlashing, i)}>
                <Switch mode={mode} video={videos[i]} flashing={flashing[i]} />
              </VisibilitySensor>
            )}
            {spacing[i] > 0 && (
              <div style={{ width: '100%', height: spacing[i] }} />
            )}
          </div>
        ))}
        <Sticky>
          <Tooltip title="Back to customizing your switch" placement="top">
            <Fab
              color="primary"
              style={{ position: 'absolute', bottom: 25, left: 25 }}
              component={Link}
              to="/switch">
              <ArrowBackIcon />
            </Fab>
          </Tooltip>
        </Sticky>
        <Sticky>
          <Tooltip title="Learn about attacking" placement="top">
            <Fab
              color="primary"
              style={{ position: 'absolute', bottom: 25, right: 25 }}
              component={Link}
              to="/attacking">
              <ArrowForwardIcon />
            </Fab>
          </Tooltip>
        </Sticky>
      </div>
    )
  }
}

export default MovementPage
