export const sections = character => [
  `# Attacking

Attacks are any method of punching, blasting, or slashing your opponent's character, which will cause their damage percent to go up. Attacking not only helps you to raise your opponents damage percent (making them easier to knock off the screen), but it can also finish them off, stun them, trip them, or otherwise make life harder on your opponent. However, there are a variety of different ways to attack in this game.

## Neutral Attacks

These are your normal attacks. Each fighter has a different normal attack for standing without pressing any other button but A. Some fighters can repeatedly press or hold A to perform "jab combos", or a string of different attacks that follow one another without pressing different buttons.
`,
  `
## Crouching Attacks

These attacks are performed by pressing A while holding down on the(movement stick).
`,
  `
## Get - Up Attacks

This attack can be performed while on the ground, hanging on a ledge, or after having been knocked down by pressing the A button.
`,
  `
## Aerial Attacks

These attacks are performed by pressing A while not on the ground. There are Neutral Air Attacks as well as Directional Air Attacks.
`,
  `
## Dash Attacks

These attacks can only be performed by pressing A while a character is on the ground running.
`,
  `
## Tilt Attacks

These attacks are performed while on the ground by lightly pressing and holding a directional button(left, right, down or up) and attacking.
`,
  `
## Smash Attacks

These attacks are performed while on the ground by pressing a directional button and holding the attack button.
`,
  `
## Grabs

Grabs can be performed by getting close to an enemy and pressing the R or L bumper. In this state, your opponent will be unable to move for a short period of time, and this time gets longer the more damage your opponent has taken. You can also press R, L, or A to attack your opponent while they are stuck in this way.
`,
  `
## Throws

Throws can be performed only while your opponent is grabbed by pressing A in conjunction with a directional input to throw them in a specific direction and deal damage.
`,
  `
## Special Moves

Each character has special moves that have interesting and highly varied properties relating to the games they originated from. These attacks can be performed by pressing B while either: using no directional inputs, holding left or right, holding down, or holding up.
`,
  `
## Final Smash

These extremely powerful finishing moves can only be performed if you have broken a smash ball, or have filled up your final smash meter. Your final smash meter charges when you take or deal damage, and also charges slowly over time. You will be able to tell if you can use your final smash if your character is surrounded by bright light and the rest of the screen is darker than normal. To use a final smash, simply press B when you are surrounded by energy. There are many different final smashes with wildly different effects. Be sure to mess around with them and see what works!
`
]

export const videos = [
  'https://i.imgur.com/wdGPNqZ.mp4', // Neutral Attacks
  'https://i.imgur.com/dyAkP7c.mp4', // Crouching Attacks
  'https://i.imgur.com/f2EAtLx.mp4', // Get Up Attacks
  'https://i.imgur.com/4CYblv9.mp4', // Aerial Attacks
  'https://i.imgur.com/J6MluKQ.mp4', // Dash Attacks
  'https://i.imgur.com/5BQsgk1.mp4', // Tilt Attacks
  'https://i.imgur.com/54Y64eJ.mp4', // Smash Attacks
  'https://i.imgur.com/GOM93i7.mp4', // Grabs
  'https://i.imgur.com/F3dMb8c.mp4', // Throws SMash
  'https://i.imgur.com/qyy60Vp.mp4', // Special Moves
  'https://i.imgur.com/OMQIfdK.mp4'
]

export const switches = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true
]
export const spacing = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 265]
export const flashing = [
  {
    pressA: true,
    id: 0
  },
  {
    stickDownFast: true,
    pressA: true,
    id: 1
  },
  {
    pressA: true,
    id: 2
  },
  {
    pressA: true,
    id: 3
  },
  {
    pressA: true,
    stickLeftFast: true,
    stickRightFast: true,
    id: 4
  },
  {
    stickLeftSlow: true,
    stickRightSlow: true,
    stickDownSlow: true,
    stickUpSlow: true,
    id: 5
  },
  {
    stickLeftFast: true,
    stickRightFast: true,
    stickUpFast: true,
    stickDownFast: true,
    pressA: true,
    id: 6
  },
  {
    pressLeftTrigger: true,
    pressRightTrigger: true,
    id: 7
  },
  {
    stickLeftFast: true,
    stickRightFast: true,
    stickUpFast: true,
    stickDownFast: true,
    pressLeftTrigger: true,
    pressRightTrigger: true,
    pressA: true,
    id: 8
  },
  {
    stickLeftFast: true,
    stickRightFast: true,
    stickUpFast: true,
    stickDownFast: true,
    pressB: true,
    id: 9
  },
  {
    pressB: true,
    id: 10
  }
]
