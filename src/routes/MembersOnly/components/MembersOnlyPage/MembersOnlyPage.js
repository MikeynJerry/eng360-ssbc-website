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
      <CardContent style={{ minHeight: 165.06 }}>
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
  },
  'piranha-in-depth': {
    title: 'Pave the way for Piranha Plant!',
    description:
      'The Smash roster welcomes a new member. Here is everything you need to know to be top tier.',
    link: 'https://www.ssbwiki.com/Piranha_Plant_(SSBU)',
    image:
      'https://www.ssbwiki.com/images/thumb/f/f0/Piranha_Plant_SSBU.png/1200px-Piranha_Plant_SSBU.png'
  },
  'tier-list2': {
    title: 'Best of the Best: Top the Tourney!',
    description:
      'Not all characters play equally. Picking the wrong character may put you at a disadvantage, here is our list of the best!',
    link: 'https://www.ign.com/wikis/super-smash-bros-ultimate/Tier_Lists',
    image:
      'data:image/png;base64,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'
  },
  'wave-dash': {
    title: 'Way of the Wave Dash',
    description:
      'Opponent teleporting half way across the stage? Well, you can do it too!',
    link: 'https://www.ssbwiki.com/wavedash',
    image: 'https://www.ssbwiki.com/images/c/c6/Wavedashbig.gif'
  },
  'down-spike': {
    title: 'Queue the Spike: Down you Go!',
    description:
      'Need a quick KO? Knock your opponent out fast with a well timed down spike!',
    link: 'https://www.ssbwiki.com/spike',
    image: 'https://www.ssbwiki.com/images/4/4b/MeteorSmashRange.png'
  },
  'best-pokemon': {
    title: 'What is the Best Pokemon Companion?',
    description:
      'Sometimes a little help is needed to finish off that battle, Pokemon creatures can help you do that. Here is our top ten!',
    link: 'https://www.ssbwiki.com/List_of_Pok%C3%A9mon',
    image: 'https://www.ssbwiki.com/images/7/7b/Pok%C3%A9_Ball_Origin.png'
  }
}

const articleList = [
  'joker-in-depth',
  'tier-list',
  'mewtwoking-interview',
  'pivot-grab',
  'keep-away',
  'best-music',
  'piranha-in-depth',
  'tier-list2',
  'wave-dash',
  'down-spike',
  'best-pokemon'
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
