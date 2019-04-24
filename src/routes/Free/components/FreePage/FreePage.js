import React from 'react'
import PropTypes from 'prop-types'
import Scrollbar from 'react-scrollbars-custom'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Slide } from '@material-ui/core'

const ArticleCard = ({ article, classes, image }) => (
  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={image}
        title={article.title}
        style={{ pointerEvents: 'none' }}
      />
      <CardContent style={{ minHeight: 154.4 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {article.title}
        </Typography>
        <Typography component="p">{article.description}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <a target="_blank" rel="noopener noreferrer" href={article.link}>
        <Button size="small" color="primary">
          Read More
        </Button>
      </a>
    </CardActions>
  </Card>
)

const articles = {
  'pivot-grab': {
    title: 'Pivot Grabbing for Dolts',
    description:
      'Getting snagged from half way across the stage? Well, you can do it too!',
    link: 'https://www.ssbwiki.com/Pivot_grab',
    image: 'https://www.ssbwiki.com/images/e/e2/Grab.jpg'
  },
  'keep-away': {
    title: 'Dare to Nair: Stop Following Me!',
    description:
      'Is  your opponent glued to you and invading your personal space? Neutral air is here to help!',
    link: 'https://www.ssbwiki.com/Neutral_aerial',
    image: 'https://www.ssbwiki.com/images/d/d4/MarioNairSSBM.gif'
  },
  'best-music': {
    title: 'What is the Best Smash Jam?',
    description:
      'Final Destination or Battlefields galore, which Smash tune is the best for a showdown? Here is our top ten!',
    link: 'https://www.ssbwiki.com/Music_(SSBU)',
    image:
      'https://pbs.twimg.com/profile_images/727366040938668033/LJwv3Gd8.jpg'
  },
  'pivot-grab2': {
    title: 'Way of the Wave Dash',
    description:
      'Opponent teleporting half way across the stage? Well, you can do it too!',
    link: 'https://www.ssbwiki.com/Pivot_grab',
    image: 'https://www.ssbwiki.com/images/c/c6/Wavedashbig.gif'
  },
  'keep-away2': {
    title: 'Queue the Spike: Down you Go!',
    description:
      'Need a quick KO? Knock your opponent out fast with a well timed down spike!',
    link: 'https://www.ssbwiki.com/Neutral_aerial',
    image: 'https://www.ssbwiki.com/images/4/4b/MeteorSmashRange.png'
  },
  'best-music2': {
    title: 'What is the Best Pokemon Companion?',
    description:
      'Sometimes a little help is needed to finish off that battle, Pokemon creatures can help you do that. Here is our top ten!',
    link: 'https://www.ssbwiki.com/Music_(SSBU)',
    image: 'https://www.ssbwiki.com/images/7/7b/Pok%C3%A9_Ball_Origin.png'
  }
}

const articleList = [
  'pivot-grab',
  'keep-away',
  'best-music',
  'pivot-grab2',
  'keep-away2',
  'best-music2'
]

export const FreePage = ({ classes }) => (
  <div>
    <Scrollbar className={classes.scrollbar}>
      <div className={classes.root}>
        <div className={classes.tiles}>
          {articleList.map((articleName, i) => {
            const article = articles[articleName]
            const image = article.image
            return (
              <Slide
                key={articleName}
                direction="up"
                in
                mountOnEnter
                unmountOnExit
                timeout={{ enter: 300 + 100 * i }}>
                <ArticleCard
                  article={article}
                  image={image}
                  classes={classes}
                />
              </Slide>
            )
          })}
        </div>
      </div>
    </Scrollbar>
  </div>
)

FreePage.propTypes = {
  classes: PropTypes.object.isRequired // from enhancer (withStyles)
}

export default FreePage
