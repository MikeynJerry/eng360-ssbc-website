import React from 'react'
import classNames from 'classnames'
import { FullSwitch } from 'components/Switch/Icons'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import MUIButton from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip'
import { Container, Row, Button } from 'reactstrap'

const leftColorsRGB = [
  'rgb(130, 130, 130)',
  'rgb(255, 60, 40)',
  'rgb(10, 185, 230)',
  'rgb(230, 255, 0)',
  'rgb(255, 50, 120)'
]

const leftColors = ['gray', 'red', 'blue', 'yellow', 'pink']

const rightColorsRGB = [
  'rgb(130, 130, 130)',
  'rgb(255, 60, 40)',
  'rgb(10, 185, 230)',
  'rgb(230, 255, 0)',
  'rgb(30, 220, 0)'
]

const rightColors = ['gray', 'red', 'blue', 'yellow', 'green']

export const SwitchPage = ({
  classes,
  leftJoyconColor,
  rightJoyconColor,
  setLeftJoyconColor,
  setRightJoyconColor,
  selectMode,
  mode
}) => (
  <div>
    <div className={classes.root}>
      <Container fluid>
        <Row className={classes.spacers}>
          <div className={classNames(classes.paddingNone, classes.leftButtons)}>
            {leftColors.map((color, i) => (
              <Button
                key={color}
                width={'10px'}
                height={'10px'}
                style={{
                  backgroundColor: leftColorsRGB[i],
                  boxShadow:
                    leftJoyconColor === color
                      ? '0 0 0 0.2rem rgba(130,138,145,.5)'
                      : ''
                }}
                onClick={() => setLeftJoyconColor(color)}
                className={classes.fab}
              />
            ))}
          </div>
          <div
            className={classNames(classes.paddingNone, classes.rightButtons)}>
            {rightColors.map((color, i) => (
              <Button
                key={color}
                width={'10px'}
                height={'10px'}
                style={{
                  backgroundColor: rightColorsRGB[i],
                  boxShadow:
                    rightJoyconColor === color
                      ? '0 0 0 0.2rem rgba(130,138,145,.5)'
                      : ''
                }}
                onClick={() => setRightJoyconColor(color)}
                className={classes.fab}
              />
            ))}
          </div>
        </Row>
        <Row>
          <div className={classNames(classes.paddingNone, classes.switch)}>
            <FullSwitch className={classes.paddingNone} />
          </div>
        </Row>
        <div className={classNames(classes.cardContainer, classes.whitebg)}>
          <Card
            className={classNames(
              classes.card,
              mode === 'handheld' && classes.selected
            )}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.mariowiki.com/images/thumb/7/71/NS_Handheld_Mode.png/800px-NS_Handheld_Mode.png"
                style={{ pointerEvents: 'none' }}
              />
              <CardContent style={{ paddingBottom: 0 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Handheld Mode
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <MUIButton
                size="small"
                color="primary"
                onClick={() => selectMode('handheld')}>
                Select
              </MUIButton>
            </CardActions>
          </Card>
          <Card
            className={classNames(
              classes.card,
              mode === 'tabletop' && classes.selected
            )}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.mariowiki.com/images/thumb/9/91/NS_Hardware_2.jpg/800px-NS_Hardware_2.jpg"
                style={{ pointerEvents: 'none' }}
              />
              <CardContent style={{ paddingBottom: 0 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Tabletop Mode
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <MUIButton
                size="small"
                color="primary"
                onClick={() => selectMode('tabletop')}>
                Select
              </MUIButton>
            </CardActions>
          </Card>
        </div>
        <div className={classes.howTo}>
          <Typography gutterBottom variant="h4" component="h2">
            Customize your Switch!
          </Typography>
          <p>
            Do you play with Joycons attached or detached? Pink or Green? Change
            your mode and colors here and the joycons used to display controls
            on the action pages will use your style!
          </p>
        </div>
      </Container>
    </div>
    <Tooltip title="Back to characters" placement="top">
      <Fab
        color="primary"
        style={{ position: 'absolute', bottom: 25, left: 25 }}
        component={Link}
        to="/characters">
        <ArrowBackIcon />
      </Fab>
    </Tooltip>
    <Tooltip title="Learn about movement" placement="top">
      <Fab
        color="primary"
        style={{ position: 'absolute', bottom: 25, right: 25 }}
        component={Link}
        to="/movement">
        <ArrowForwardIcon />
      </Fab>
    </Tooltip>
  </div>
)

export default SwitchPage
