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

const locationMap = {
  '/': 'Homepage',
  '/characters': 'Characters',
  '/switch': 'Switch',
  '/movement': 'Movement',
  '/attacking': 'Attacking',
  '/defending': 'Defending',
  '/offense': 'Offense',
  Homepage: '/',
  Characters: '/characters',
  Switch: '/switch',
  Movement: '/movement',
  Attacking: '/attacking',
  Defending: '/defending',
  Offense: '/offense'
}

export class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  render() {
    const {
      classes,
      location: { pathname },
      history,
      character
    } = this.props
    const { open } = this.state

    const sideList = (
      <div className={classes.list}>
        <List>
          {[
            'Homepage',
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
              onClick={() => {
                if (text !== locationMap[pathname])
                  history.push(locationMap[text])
              }}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
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
              onClick={this.toggleDrawer}
              className={classNames(classes.menuButton, open && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.flex}
              component={Link}
              to="/">
              Super Smash Brothers Ultimate Guide
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
                pointerEvents: 'none'
              }}
            />
          </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}>
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

export default Navbar
