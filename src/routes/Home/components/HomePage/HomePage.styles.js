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
      'url(https://www.nintendo-insider.com/wp-content/uploads/2018/11/donkey-kong-super-smash-bros-ultimate-art.jpg)'
  },
  quad2: {
    backgroundColor: 'green',
    backgroundImage:
      'url(http://images.nintendolife.com/56d215704ccae/link.original.jpg)'
  },
  quad3: {
    backgroundColor: 'blue',
    backgroundImage:
      'url(https://thespinoff.co.nz/wp-content/uploads/2018/06/sam-25.jpg)'
  },
  quad4: {
    backgroundColor: 'yellow',
    backgroundImage:
      'url(https://www.ssbwiki.com/images/thumb/a/ad/Charizard-Flamethrower-SSB4.png/800px-Charizard-Flamethrower-SSB4.png)'
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
