export const sections = character => [
  `# Basic Movement

Movement is the most important mechanic in any Super Smash Brothers game. Without it you're left sitting still on the battlefield, vulnerable to all of your opponent's potential attacks. We'll be covering all of the basic types of movement to help get you started on your journey to becoming a Smash master.`,
  `## Running

While it might seem counterintuitive to learn to run before you learn how to walk, in Smash it's the easiest and most common form of movement in the game. All you have to do is push your left stick all the way to the left or right and ${character} will soon be zooming across the stage.`,
  `## Walking

Most of the time you'll find yourself wanting to run across the stage to get a quick hit in and then run away, but sometimes you want to go slower to throw off your opponents. Simply push the left stick slowly towards the right or left and watch ${character} walk to where you want to go. Walking takes some time to master because it's very easy to push the stick too quickly and end up in a full-on sprint.`,
  `## Jumping

There are two types of single-jumps that you might want to better maneuver away from your opponents. The first is a normal jump that causes ${character} to go as high as they possibly can. Press X, Y, or drag the left stick up to watch ${character} fly.`,
  `## Half Jumping

  The second is a short jump that will have ${character} jump about half the height of a normal jump. If you don't want to accidentally jump on top of a platform or if you want to trick your opponent into jumping all the way up, then short jumps are an essential skill. Press X, Y, or slightly drag the left stick up to see ${character} take a short jump. Similar to walking, this is hard to do and takes some practice, but once you figure it out, it's a powerful tool in your arsenal of tricks.`,
  `## Double Jumping

When you're in the air for any reason, you can press one of the jump buttons or tilt the left stick up to jump again. Some characters, such as Kirby and Jigglypuff, can continue to jump up to 5 more times without having to hit the ground.`,
  `## Falling Down

Most stages have a couple of platforms that are considered to be "soft". That means that not only can you jump on top of them, you can also fall through them and drop to whatever is below. Whenever you're on top of one of these platforms, simply pull the control stick on your left joycon downwards to fall through it.`
]

export const videos = [
  '',
  'https://i.imgur.com/zrOaueR.mp4', // running
  'https://i.imgur.com/XwYo3nP.mp4', // walking
  'https://i.imgur.com/JaRNX3z.mp4', // jumping
  'https://i.imgur.com/xndDcGy.mp4', // half jumping
  'https://i.imgur.com/e5d8a5E.mp4', // double jumping
  'https://i.imgur.com/420ZSzk.mp4' // falling down
]

export const switches = [false, true, true, true, true, true, true]
export const spacing = [50, 100, 100, 100, 100, 100, 265]
export const flashing = [
  {
    id: 0
  }, //empty
  {
    stickLeftFast: true, // running
    stickRightFast: true,
    id: 1
  },
  {
    stickLeftSlow: true, // walking
    stickRightSlow: true,
    id: 2
  },
  {
    pressX: true, // jumping
    pressY: true,
    stickUpFast: true,
    id: 3
  },
  {
    pressX: true, // half jumping
    pressY: true,
    stickUpSlow: true,
    id: 4
  },
  {
    pressX: true, // double jumping
    pressY: true,
    stickUpFast: true,
    id: 5
  },
  {
    stickDownFast: true, // falling
    id: 6
  }
]
