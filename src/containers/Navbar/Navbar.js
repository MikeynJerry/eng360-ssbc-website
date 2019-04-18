import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const locationMap = {
  '/': 'Homepage',
  '/articles': 'Articles',
  '/articles/free': 'Free',
  '/articles/members': 'Members Only',
  '/guide': 'Guide',
  '/characters': 'Characters',
  '/switch': 'Switch',
  '/movement': 'Movement',
  '/attacking': 'Attacking',
  '/defending': 'Defending',
  '/offense': 'Offense',
  '/events': 'Event Calendar',
  '/subscribe': 'Subscribe',
  Homepage: '/',
  Articles: '/articles',
  Free: '/articles/free',
  'Members Only': '/articles/members',
  Guide: '/guide',
  Characters: '/characters',
  Switch: '/switch',
  Movement: '/movement',
  Attacking: '/attacking',
  Defending: '/defending',
  Offense: '/offense',
  'Event Calendar': '/events',
  Subscribe: '/subscribe'
}

export class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false,
      collapsedArticles: false,
      collapsedGuide: true
    }
  }

  goToPage = page => {
    const {
      location: { pathname },
      history
    } = this.props
    if (page !== locationMap[pathname]) {
      history.push(locationMap[page])
      this.toggleState('drawerOpen')()
    }
  }

  toggleState = key => () => this.setState({ [key]: !this.state[key] })

  render() {
    const {
      classes,
      location: { pathname },
      character
    } = this.props
    const { drawerOpen, collapsedArticles, collapsedGuide } = this.state

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem
            button
            selected={'Homepage' === locationMap[pathname]}
            onClick={() => this.goToPage('Homepage')}>
            <ListItemText primary="Homepage" />
          </ListItem>
          <ListItem
            button
            selected={'Articles' === locationMap[pathname]}
            className={classes.collapseParent}
            onClick={() => this.goToPage('Articles')}>
            <ListItemText primary="Articles" />
            <IconButton
              onClick={e => {
                e.stopPropagation()
                this.toggleState('collapsedArticles')()
              }}>
              {!collapsedArticles ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ListItem>
          <Collapse in={!collapsedArticles} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['Free', 'Members Only'].map((text, index) => (
                <ListItem
                  button
                  key={text}
                  selected={text === locationMap[pathname]}
                  onClick={() => this.goToPage(text)}
                  className={classes.nested}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Collapse>

          <ListItem
            button
            selected={'Guide' === locationMap[pathname]}
            className={classes.collapseParent}
            onClick={() => this.goToPage('Guide')}>
            <ListItemText primary="Guide" />
            <IconButton
              onClick={e => {
                e.stopPropagation()
                this.toggleState('collapsedGuide')()
              }}>
              {!collapsedGuide ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ListItem>
          <Collapse in={!collapsedGuide} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {[
                'Characters',
                'Switch',
                'Movement',
                'Attacking',
                'Defending',
                'Offense'
              ].map((text, index) => (
                <ListItem
                  button
                  key={text}
                  selected={text === locationMap[pathname]}
                  onClick={() => this.goToPage(text)}
                  className={classes.nested}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Collapse>

          <ListItem
            button
            selected={'Event Calendar' === locationMap[pathname]}
            onClick={() => this.goToPage('Event Calendar')}>
            <ListItemText primary="Event Calendar" />
          </ListItem>
          <ListItem
            button
            selected={'Subscribe' === locationMap[pathname]}
            onClick={() => this.goToPage('Subscribe')}>
            <ListItemText primary="Become A Member!" />
          </ListItem>
        </List>
      </div>
    )

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.toggleState('drawerOpen')}
              className={classNames(
                classes.menuButton,
                drawerOpen && classes.hide
              )}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.flex}
              component={Link}
              to="/">
              Super Smash Brothers Club - {locationMap[pathname]}
            </Typography>
            <Typography variant="h6" color="inherit">
              {character.name}
            </Typography>
            <div
              style={{
                backgroundImage: `url(https://www.ssbwiki.com/images/thumb/${
                  character.bigLink
                })`,
                width: '10vw',
                height: 64,
                backgroundSize: '10vw auto',
                pointerEvents: 'none',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </Toolbar>
        </AppBar>
        <Drawer open={drawerOpen} onClose={this.toggleState('drawerOpen')}>
          <div tabIndex={0} role="button">
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

export default Navbar
