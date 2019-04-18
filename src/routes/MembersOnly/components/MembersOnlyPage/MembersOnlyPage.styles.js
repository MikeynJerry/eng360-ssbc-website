export default theme => ({
  root: {
    ...theme.flexColumnCenter,
    paddingTop: theme.spacing.unit * 4,
    flexGrow: '2',
    boxSizing: 'border-box',
    overflowY: 'none'
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
    '-webkit-flex-flow': 'row wrap'
  },
  card: {
    maxWidth: 345,
    width: 345,
    margin: theme.spacing.unit * 0.5
  },
  media: {
    height: 300
  }
})
