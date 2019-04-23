export default theme => ({
  root: {
    ...theme.flexRowCenter,
    width: '100%',
    backgroundColor: 'black',
    display: 'flex'
  },
  col: {
    ...theme.flexColumnCenter,
    display: 'block',
    width: '100%'
  },
  circle: {
    position: 'absolute',
    top: 'calc(50vh - 20vh)',
    zIndex: '100',
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 'auto',
    backgroundColor: 'black',
    borderRadius: '100%'
  },
  quad1: {
    backgroundColor: 'red',
    backgroundImage:
      'url(https://www.ssbwiki.com/images/thumb/f/ff/Sidestep_SSB4.JPG/800px-Sidestep_SSB4.JPG)'
  },
  quad2: {
    backgroundColor: 'green',
    backgroundImage:
      'url(https://www.ssbwiki.com/images/thumb/5/5b/BowserShieldSSB4.png/800px-BowserShieldSSB4.png)'
  },
  quad3: {
    backgroundColor: 'blue',
    backgroundImage:
      'url(https://vignette.wikia.nocookie.net/ssb/images/6/67/Foxupatyourside.jpg/revision/latest?cb=20141017055911)'
  },
  quad4: {
    backgroundColor: 'yellow',
    backgroundImage:
      'url(https://www.ssbwiki.com/images/thumb/c/c2/FoxSSB4DashAttack.png/1200px-FoxSSB4DashAttack.png)'
  },
  header: {
    position: 'absolute',
    color: 'black',
    left: '50%',
    top: '80%',
    textAlign: 'center',
    width: '66%',
    transform: 'translateX(-50%) translateY(-50%)'
  },
  quadIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '66%',
    maxWidth: '300px',
    height: 'auto',
    transform: 'translateX(-50%) translateY(-50%)'
  }
})
