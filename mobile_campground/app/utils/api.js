export function getCampgrounds() {
  return fetch('http://localhost:3000/campgrounds', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Tyoe': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseData => responseData.campground)
    .catch(() => apiResponse);
}

export function createCampground(campground) {
  return fetch('http://localhost:3000/campgrounds', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ campground }),
  })
    .then(response => response.json())
    .catch(() => {});
}


const apiResponse = {
  campground: [
    {
      _id: '5a33ed63a14a43da0369f4f9',
      name: 'Lazy Bend',
      state: 'Oregon',
      image: '',
      hasShower: true,
      hasBathroom: true,
      __v: 0,
      ratings: [
        {
          value: 1,
          description: 'I expected a hammock and',
        },
        {
          value: 5,
          description: 'Sat by the river all day',
        },
      ],
    },
    {
      _id: '5a3546c8670482033a1c4f65',
      name: 'Promontory Park Campground',
      state: 'Oregon',
      image: '',
      hasShower: false,
      hasBathroom: true,
      __v: 0,
      description: 'Just your average campground',
      ratings: [
        {
          value: 4,
          description: 'wemt swimming all day',
        },
        {
          value: 2,
          description: 'The lake was great but I was expecting a hot tub',
        },
        {
          value: 5,
          description: 'I go here every year with my kids',
        },
      ],
    },
    {
      _id: '5a3546f6afe95d0b25567268',
      name: 'Eagle Creek',
      state: 'Oregon',
      description: 'A previously beautiful, now crispy campground',
      image: '',
      hasShower: true,
      hasBathroom: true,
      __v: 0,
      ratings: [
        {
          value: 1,
          description: 'The campground and surrounding area are burnt to a crips',
        },
        {
          value: 5,
          description: 'It was wonderful the entire place was ablaze and we were able to roast our marshmellows',
        },
      ],
    },
    {
      _id: '5a3548b3afe95d0b25567269',
      name: 'Lost Lake Resort',
      state: 'Oregon',
      image: '',
      description: 'A beautiful campground with view of Hood Mountain',
      hasShower: true,
      hasBathroom: true,
      __v: 0,
      ratings: [
        {
          value: 4,
          description: 'The views were awesome but the lake was super crowded',
        },
        {
          value: 2,
          description: 'This campground is overwhelmingly crowded. We heeard partying all night',
        },
        {
          value: 5,
          description: 'I got married here, will always cherish the memories',
        },
      ],
    },
    {
      _id: '5a3548e2afe95d0b2556726a',
      name: 'Bagby Hot Springs Campground',
      state: 'Oregon',
      image: '',
      hasShower: false,
      hasBathroom: false,
      description: 'A campground with full access to the famouse hot springs',
      __v: 0,
      ratings: [
        {
          value: 4,
          description: 'limited availability but like the grounds',
        },
        {
          value: 4,
          description: 'Was awesome to be so close to the hot springs',
        },
        {
          value: 5,
          description: 'This is my favorite campground ever',
        },
      ],
    },
    {
      _id: '5a3457ac959b4cfdd7533d64',
      name: 'Big Fir Campground & RV park',
      state: 'Washington',
      image: '',
      hasShower: true,
      hasBathroom: true,
      description: 'A fantastic place to park your large RV',
      __v: 0,
      ratings: [
        {
          value: 5,
          description: 'Full hookups for my RV. I could watch all the TV I wanted',
        },
        {
          value: 1,
          description: 'This campground is packed with RVs. The sounds of generators kept me up all night',
        },
        {
          value: 5,
          description: 'Any campground with a shower gets a five star in my book. Even if the view is of the interstate.',
        },
      ],
    },
    {
      _id: '5a345869959b4cfdd7533d65',
      name: 'Beaver Campground',
      state: 'Washington',
      image: '',
      description: 'A campground with water access',
      hasShower: true,
      hasBathroom: true,
      __v: 0,
      ratings: [
        {
          value: 3,
          description: 'I did not see any beavers. They should change the name',
        },
        {
          value: 1,
          description: 'A beaver damn flooded the campground and I lost all of my camp gear down the river.',
        },
        {
          value: 5,
          description: 'I like any campground',
        },
      ],
    },
    {
      _id: '5a3549cdafe95d0b2556726b',
      name: 'Sequoia National Park',
      state: 'California',
      image: '',
      description: "Near the Sierra's and large trees",
      hasShower: true,
      hasBathroom: true,
      __v: 0,
      ratings: [
        {
          value: 3,
          description: 'The mountains were very tall and obstructed my views',
        },
        {
          value: 5,
          description: 'If I could i would move here, large trees and mountains make me happy',
        },
        {
          value: 5,
          description: 'I like any campground',
        },
      ],
    },
    {
      _id: '5a354a23afe95d0b2556726c',
      name: 'San Elifo State Beach',
      state: 'California',
      image: '',
      description: 'Go swimming in the cold water',
      hasShower: true,
      hasBathroom: true,
      __v: 0,
      ratings: [
        {
          value: 2,
          description: 'The stairs were way too long. I was out of breath',
        },
        {
          value: 5,
          description: 'My kids and I had a blast swimming',
        },
        {
          value: 5,
          description: 'We did not see any sharks which is a plus in my book',
        },
      ],
    },
    {
      _id: '5a35a9fea482674db7bc9754',
      name: 'Crystal Cover State Park',
      description: 'An amazing campground with beaches for miles',
      state: null,
      hasBathroom: true,
      hasShower: false,
      __v: 0,
      ratings: [
        {
          id: '645',
          description: 'Easily my favorite place on earth!',
          value: 5,
        },
      ],
    },
    {
      _id: '5a35ab4012fbe04e0f6e0e46',
      name: 'Todd Lake',
      description: 'Once remote mountain lake. No longer remote. Everyone from California has moved to Oregon.',
      state: null,
      hasBathroom: false,
      hasShower: false,
      __v: 0,
      ratings: [
        {
          id: '689',
          description: 'I liked it when I was little but I do not like all the people.',
          value: 2.5,
        },
      ],
    },
  ],
};
