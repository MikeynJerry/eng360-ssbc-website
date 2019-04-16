import React from 'react'
import PropTypes from 'prop-types'
import Scrollbar from 'react-scrollbars-custom'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip'
import Sticky from 'react-stickynode'
import Typography from '@material-ui/core/Typography'
import { Slide } from '@material-ui/core'

const CharacterCard = ({ character, classes, image, selectCharacter }) => (
  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={image}
        title={character}
        style={{ pointerEvents: 'none' }}
      />
      <CardContent style={{ minHeight: 154.4 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {character.name}
        </Typography>
        <Typography component="p">{character.description}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button
        size="small"
        color="primary"
        onClick={() => selectCharacter(character)}>
        Select
      </Button>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.ssbwiki.com/${character.name}_(SSBU)`}>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </a>
    </CardActions>
  </Card>
)

export const CharactersPage = ({
  characters,
  classes,
  characterList,
  selectCharacter
}) => (
  <div>
    <Scrollbar className={classes.scrollbar}>
      <div className={classes.root}>
        <div className={classes.tiles}>
          {characterList.map((characterName, i) => {
            const character = characters[characterName]
            const { bigLink: link } = character
            const image = `https://www.ssbwiki.com/images/thumb/${link}`
            return (
              <Slide
                key={characterName}
                direction="up"
                in
                mountOnEnter
                unmountOnExit
                timeout={{ enter: 300 + 100 * i }}>
                <CharacterCard
                  character={character}
                  image={image}
                  classes={classes}
                  selectCharacter={selectCharacter}
                />
              </Slide>
            )
          })}
        </div>
      </div>
    </Scrollbar>
    <Sticky>
      <Tooltip title="Back to the homepage" placement="top">
        <Fab
          color="primary"
          style={{ position: 'absolute', bottom: 25, left: 25 }}
          component={Link}
          to="/">
          <ArrowBackIcon />
        </Fab>
      </Tooltip>
    </Sticky>
    <Sticky>
      <Tooltip title="Customize your switch" placement="top">
        <Fab
          color="primary"
          style={{ position: 'absolute', bottom: 25, right: 25 }}
          component={Link}
          to="/switch">
          <ArrowForwardIcon />
        </Fab>
      </Tooltip>
    </Sticky>
  </div>
)

CharactersPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  characters: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default CharactersPage
