const bob = {
  id: 23,
  firstName: 'Bob',
  lastName: 'Greatlance',
  thumbnail: 'https://images.generated.photos/c_mH5kvsgrsGhrN5GhQIIRdIIvoHP6G2ujkTs4c8XFM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxMTk5OTguanBn.jpg',
};

const jack = {
  id: 48,
  fistName: 'Jack',
  lastName: 'Dowager',
  thumbnail: 'https://images.generated.photos/g232OgTeDpORCR483-Ko3acnrLoePZIbyMDabR64x2U/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MDgyODAuanBn.jpg',
};

const messages = [
  {
      id: 1,
      from: bob,
      message: 'Hey bro, how\'s things?',
      date: '2020-04-07 10:03:23',
  },
  {
      id: 2,
      from: bob,
      message: `I was working in the garden and just thought of you!
Hope you're not too worried about everything thats is going on right now.`,
      date: '2020-04-07 10:03:45',
  },
  {
      id: 3,
      from: jack,
      message: 'Heeey! Long time! Thanks for your message, man!',
      date: '2020-04-07 10:06:15',
  },
  {
      id: 4,
      from: jack,
      message: 'I am doing quite alright, thanks. How about you?',
      date: '2020-04-07 10:06:24',
  },
  {
      id: 5,
      from: bob,
      message: `Can't complain.
I was watching this movie the other night that really reminded me of our first project working together.
There were these three 17-year-olds who had just heard of Python and decided to build the next great thing in social networking, so they spent about a week pulling off all-nighters and barely got anywhere :))
I think you can imagine what happens next 🙃`,
      date: '2020-04-07 10:07:01',
  },
  {
      id: 6,
      from: jack,
      message: '😂😂😂 Did they end up driving to the seaside and sleeping in the sun until they got severe sunburn like we did?',
      date: '2020-04-07 10:08:55',
  },
  {
      id: 7,
      from: bob,
      message: `Something not very far from that!`,
      date: '2020-04-07 10:03:45',
  },
];

export const currentUser = JSON.stringify(bob);
export const conversation = JSON.stringify(messages);