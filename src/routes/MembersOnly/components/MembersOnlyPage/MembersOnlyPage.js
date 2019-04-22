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
import { Link } from 'react-router-dom'
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
  'joker-in-depth': {
    title: 'No Joke! The Joker is Here.',
    description:
      'The Smash roster welcomes a new member. Here is everything you need to know to be top tier.',
    link: 'https://www.ssbwiki.com/Joker_(SSBU)',
    image:
      'https://www.ssbwiki.com/images/thumb/5/5c/Joker_SSBU.png/400px-Joker_SSBU.png'
  },
  'tier-list': {
    title: 'Best of the Best: Our Tier List',
    description:
      'Not all characters play equally. Picking the wrong character may put you at a disadvantage, here is out list of the best!',
    link: 'https://www.ign.com/wikis/super-smash-bros-ultimate/Tier_Lists',
    image:
      'https://media.discordapp.net/attachments/325737433826328577/546446517305868299/Jan19TierList.png?width=717&height=516'
  },
  'mewtwoking-interview': {
    title: 'We Spoke with The Legend Himself!',
    description:
      'Mewtwo mains rejoice, we got the scoop on the game with the Master of Mewtwo: Mew2King!',
    link:
      'http://www.nintendolife.com/news/2014/04/ninterview_jason_mew2king_zimmerman_on_mastering_super_smash_bros',
    image:
      'data:image/jpeg;base64,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'
  },
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
  }
}

const articleList = [
  'joker-in-depth',
  'tier-list',
  'mewtwoking-interview',
  'pivot-grab',
  'keep-away',
  'best-music'
]

export const MembersOnlyPage = ({ subscribed, classes }) => (
  <div>
    {!subscribed && (
      <React.Fragment>
        <Link to="/subscribe">
          <Button
            size="large"
            color="primary"
            variant="contained"
            className={classes.centerButton}>
            Join today to access these articles!
          </Button>
        </Link>
        <div className={classes.greyOut} />
      </React.Fragment>
    )}
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

MembersOnlyPage.propTypes = {
  classes: PropTypes.object.isRequired // from enhancer (withStyles)
}

export default MembersOnlyPage
