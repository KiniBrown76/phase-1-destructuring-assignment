const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Destructuring farmAnimals
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// Destructuring traditional animal names
const { bessie, dolly, babe, little } = { bessie: moo, dolly: baa, babe: oink, little: cluck };

// Destructuring traditional animal colors
const { blackAndWhite, black, pink } = { blackAndWhite: moo, black: baa, pink: oink };

// Destructuring rainbow colors (full names)
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// Destructuring rainbow colors (initials)
const [r, o, y, g, b, , v] = colors;

// Destructuring indigo color
const [, , , , , indg] = colors;

// Destructuring muppet object
const { muppetName, color, song, job, partner } = muppet;

// Destructuring nestedMuppet object
const { 
  album: {
    theMuppetMovie: { song2, song4 }
  }, 
  nestedJob, 
  nestedPartner 
} = nestedMuppet;