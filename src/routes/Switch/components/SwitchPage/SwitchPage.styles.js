export default theme => ({
  root: {
    position: 'relative'
  },
  container: {
    display: 'flex'
  },
  middle: {},
  fab: {
    margin: '14px',
    display: 'block',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginLeft: '2px',
    marginRight: '2px',
    height: '30px',
    width: '30px'
  },
  spacer: {
    width: '100%',
    height: 'calc(15vh - 64px)'
  },
  card: {
    maxWidth: 250,
    width: 250,
    height: 285,
    margin: theme.spacing.unit * 0.5
  },
  cardContainer: {
    position: 'absolute',
    left: 'calc(50vw - 255px)',
    top: 65,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '-webkit-flex-flow': 'row wrap',
    width: '600px',
    height: '340px'
  },
  media: {
    height: 175,
    backgroundSize: 'contain'
  },
  scrollbar: {
    width: '100vw !important',
    height: 'calc(100vh - 64px) !important',
    display: 'flex',
    flexDirection: 'row'
  },
  selected: {
    border: 'solid 3px',
    color: 'aqua'
  },
  paddingNone: {
    paddingRight: '0',
    paddingLeft: '0'
  },
  switch: {
    position: 'absolute',
    display: 'block',
    left: 'calc(50vw - (961.996px / 2))',
    top: '10px'
  },
  leftButtons: {
    position: 'absolute',
    left: 'calc(50vw - (961.996px / 2) - 35px)',
    top: 'calc(410.309px / 2 - 100px)'
  },
  rightButtons: {
    position: 'absolute',
    right: 'calc(50vw - (961.996px / 2) - 35px)',
    top: 'calc(410.309px / 2 - 100px)'
  },
  spacers: {
    color: 'black'
  },
  whitebg: {
    backgroundColor: 'transparent'
  },
  howTo: {
    position: 'absolute',
    top: 'calc(410.309px + 40px)',
    left: 'calc(50vw - (961.996px / 2))',
    width: '961.996px'
  }
})
