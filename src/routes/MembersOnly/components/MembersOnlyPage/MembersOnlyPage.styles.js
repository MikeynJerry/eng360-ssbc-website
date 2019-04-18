export default theme => ({
  root: {
    ...theme.flexColumnCenter,
    paddingTop: theme.spacing.unit * 4,
    flexGrow: '2',
    boxSizing: 'border-box',
    overflowY: 'none',
    overflow: 'hidden !important'
  },
  scrollbar: {
    width: '100vw !important',
    height: 'calc(100vh - 64px) !important',
    display: 'flex',
    flexDirection: 'row'
  },
  tiles: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '-webkit-flex-flow': 'row wrap',
    scroll: 'no',
    overflow: 'hidden'
  },
  card: {
    maxWidth: 345,
    width: 345,
    margin: theme.spacing.unit * 0.5
  },
  media: {
    height: 300
  },
  centerButton: {
    position: 'fixed',
    width: '50%',
    left: 'calc(50vw - 25%)',
    top: 'calc(75vh)',
    zIndex: '123123'
  },
  greyOut: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    zIndex: '123100',
    backgroundImage: 'linear-gradient(to bottom, rgba(1, 1, 1, 0.0), rgba(1, 1, 1, 0.6))'
  }
})
