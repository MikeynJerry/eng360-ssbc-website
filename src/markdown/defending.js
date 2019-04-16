export const sections = character => [
  `# Defence

Defence in Smash is one of the most important yet most overlooked elements of the game. Many people make the mistake of just spamming attacks at their enemy with no real thought of what they're doing, however this just leads to bad habits and poor performance. Once you have mastered movement and attacking, you should look to implement defensive strategies to take your game to the next level.

## Shield

The most simple yet most used method of defence is the shield, which can be activated by holding down the L or R buttons, which are located at the top of the controller. Every character has a shield and every characters shield has the same durability. The durability refers to the size of the shield, which decreases over time as the shield is held up as well as when it is hit by an attack.
`,
  `
The shield initially covers the entire character, but as its durability decreases parts of the character are left exposed for attack, when a player is hit though their shield this is known as a shield poke. To reduce the chances of this happening, the player can move the shield using the control stick while both the L and R buttons are both held down.
`,
  `
 If the shield's durability runs out it will cause the player to be stunned and give your opponent a massive window to attack, so it is best that this is avoided at all costs.
`,
  `
For this reason, it is best that you don't hold your shield up for long periods of time and instead use it to block a couple of attacks and then attack back at your opponent or to create spacing between you and your opponent.

## Roll

While you are using your shield, you can roll by pressing the control stick in the direction you want to roll while only holding one of the shield buttons.While you are rolling you will be invulnerable to attacks and you will be able to move through other characters.
`,
  `
This is best used to create spacing or to get behind your opponent while they are attacking you. If used in succession however, the rolls will become slower and less effective. For this reason, it is best to not use several consecutive rolls and only use them when necessary.

## Parries

A parry is an advanced maneuver that can completely change a fight by not only blocking an incoming attack, but also giving the player time to attack their enemy and do a significant amount of damage. A parry can be done by releasing the shield button right before an attack hits the shield.
`,
  `
After this is successfully performed you will have a short period of time to perform whatever attacks you want on your opponent. This doesn't come without risk however as releasing your shield too early will not only not give you a parry but will also cause ${character} to be hit, however a successful parry will completely shift you from being on defence to being on the attack.

## Air Dodging

An air dodge is a defensive move that prevents damage for a short period of time while you are in the air. A neutral air dodge is performed by tapping either the L or R button while in the air and no input is given to the control stick.
`,
  `

Performing an air dodge will grant temporary invulnerability that can be used to avoid attacks, however after your invulnerability is over you will be left vulnerable for a short period of time. You can perform a directional air dodge by pressing the L or R button while holding the control stick in the direction you want to dodge in.
`,
  `

Performing a directional air dodge can be useful to not only avoid an attack but also improve your positioning on your opponent, however, the period of vulnerability after the invulnerability is much longer than a neutral air dodge. Its for this reason that it is best not to overuse either the neutral or directional air dodge, you also will not be able to use another air dodge until you make contact with the ground again.`
]

export const videos = [
  'https://i.imgur.com/R1XeTIJ.mp4',
  'https://i.imgur.com/gTwL52T.mp4',
  'https://i.imgur.com/LIyGeTk.mp4',
  'https://i.imgur.com/mMH0jzA.mp4',
  'https://i.imgur.com/86VA9k4.mp4',
  'https://i.imgur.com/uhuXGYu.mp4',
  'https://i.imgur.com/kQrlohb.mp4'
]

export const switches = [true, true, true, true, true, true, true, false]
export const spacing = [0, 0, 0, 0, 0, 0, 0, 0]
export const flashing = [
  {
    pressLeftTrigger: true,
    pressRightTrigger: true,
    id: 0
  },
  {
    pressLeftTrigger: true,
    pressRightTrigger: true,
    stickLeftFast: true,
    stickRightFast: true,
    id: 1
  },
  {
    pressLeftTrigger: true,
    pressRightTrigger: true,
    id: 2
  },
  {
    pressLeftTrigger: true,
    pressRightTrigger: true,
    stickLeftFast: true,
    stickRightFast: true,
    id: 3
  },
  {
    pressLeftTrigger: true,
    pressRightTrigger: true,
    pressA: true,
    id: 4
  },
  {
    pressLeftTrigger: true,
    pressRightTrigger: true,
    id: 5
  },
  {
    pressLeftTrigger: true,
    pressRightTrigger: true,
    stickLeftFast: true,
    stickRightFast: true,
    id: 6
  },
  {
    id: 7
  }
]
