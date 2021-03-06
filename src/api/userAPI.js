/**
 * This API consists of a simple "userAPI" object which contains:
 * "users" property: an array that contains "user" objects.
 * "all" method: returns the "users" array.
 * "get" method: returns a specific "user" object found by a given "username" parameter.
 *               Returns undefined otherwise.
 *
 * API adapted from https://to.ly/1zcHw and https://to.ly/1zcHy
 * */
import { getRandomIntInclusive } from "../helpers/helpers";

const userAPI = {
  all() {
    return this.users;
  },
  get(username) {
    return new Promise((resolve, reject) => {
      const isUser = user => user.username === username;
      const user = this.users.find(isUser);
      if (user) {
        setTimeout(() => resolve(user), getRandomIntInclusive(200, 600));
      } else {
        const err = new Error("User not found");
        reject(err);
      }
    });
  },
  post(username, tweet) {
    return new Promise((resolve, reject) => {
      const isUser = user => user.username === username;
      const user = this.users.find(isUser);
      if (user) {
        user.tweets.unshift(tweet); // Add tweet to author user
        console.log(tweet);
        setTimeout(() => {
          resolve(user);
        }, getRandomIntInclusive(100, 300));
      } else {
        const err = new Error("Can't post tweet");
        reject(err);
      }
    });
  },
  users: [
    {
      id: 1,
      name: "John Smith",
      username: "johnsmith",
      link: "/johnsmith",
      cover: "./assets/images/cover_johnsmith.jpg",
      avatar: "./assets/images/avatar_johnsmith.png",
      bio: "I'm John Smith, aka Smithy. I like to hike on the weekends. 🥾⛰",
      location: "Rio de Janeiro",
      website: "johnsmith.com",
      dateJoined: "February 2011",
      birthdate: "July 30th, 1992",
      following: 13,
      followers: 10,
      likes: 55,
      lists: 2,
      moments: 4,
      suggestedFollows: [
        {
          name: "Jane Doe",
          username: "janedoe",
          link: "/janedoe",
          avatar: "./assets/images/avatar_janedoe.png"
        },
        {
          name: "Hacky Oliver",
          username: "hackyoliver",
          link: "/hackyoliver",
          avatar: "./assets/images/avatar_hackyoliver.png"
        }
      ],
      tweets: [
        {
          id: 2,
          author: {
            name: "John Smith",
            username: "johnsmith",
            link: "/johnsmith",
            avatar: "./assets/images/avatar_johnsmith.png"
          },
          retweetedBy: [],
          content: "Hello, World.",
          media: {
            type: "image",
            src: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
          },
          date: "Apr 2nd",
          comments: 5,
          retweets: 0,
          likes: 16,
          commented: false,
          liked: true,
          savedToPocket: true
        },
        {
          id: 1,
          author: {
            name: "John Smith",
            username: "johnsmith",
            link: "/johnsmith",
            avatar: "./assets/images/avatar_johnsmith.png"
          },
          retweetedBy: ["janedoe", "hackyoliver"],
          content: "This is a super popular Tweet. All my friends RT.",
          media: { type: undefined, src: undefined },
          date: "Apr 1st",
          comments: 3,
          retweets: 2,
          likes: 9,
          commented: true,
          liked: false,
          savedToPocket: false
        }
      ]
    },
    {
      id: 2,
      name: "Jane Doe",
      username: "janedoe",
      link: "/janedoe",
      cover: "./assets/images/cover_janedoe.jpg",
      avatar: "./assets/images/avatar_janedoe.png",
      bio: "My name is Doe, Jane Doe. 🕵️‍♀️",
      location: "São Paulo",
      website: "doejanedoe.com",
      dateJoined: "April 2012",
      birthdate: "Dec 19th, 1993",
      following: 42,
      followers: 52,
      likes: 14,
      lists: 0,
      moments: 1,
      suggestedFollows: [
        {
          name: "Hacky Oliver",
          username: "hackyoliver",
          link: "/hackyoliver",
          avatar: "./assets/images/avatar_hackyoliver.png"
        },
        {
          name: "John Smith",
          username: "johnsmith",
          link: "/johnsmith",
          avatar: "./assets/images/avatar_johnsmith.png"
        }
      ],
      tweets: [
        {
          id: 3,
          author: {
            name: "Hacky Oliver",
            username: "hackyoliver",
            link: "/hackyoliver",
            avatar: "./assets/images/avatar_hackyoliver.png"
          },
          retweetedBy: ["janedoe"],
          content:
            "Super coding session while listening to https://www.youtube.com/watch?v=XWGXimIJhGg",
          media: {
            type: "video",
            src: "https://www.youtube.com/embed/XWGXimIJhGg"
          },
          date: "Fri 24th",
          comments: 3,
          retweets: 2,
          likes: 9,
          commented: true,
          liked: false,
          savedToPocket: true
        },
        {
          id: 1,
          author: {
            name: "John Smith",
            username: "johnsmith",
            link: "/johnsmith",
            avatar: "./assets/images/avatar_johnsmith.png"
          },
          retweetedBy: ["janedoe", "hackyoliver"],
          content: "This is a super popular Tweet. All my friends RT.",
          date: "Apr 1st",
          media: { type: undefined, src: undefined },
          comments: 3,
          retweets: 2,
          likes: 9,
          commented: true,
          liked: false,
          savedToPocket: false
        }
      ]
    },
    {
      id: 3,
      name: "Hacky Oliver",
      username: "hackyoliver",
      link: "/hackyoliver",
      cover: "./assets/images/cover_hackyoliver.jpg",
      avatar: "./assets/images/avatar_hackyoliver.png",
      bio: "H4CkY 0LL13 👨‍💻👾",
      location: "Belo Horizonte",
      website: "oll.io",
      dateJoined: "January 2012",
      birthdate: "Apr 1st, 1993",
      following: 103,
      followers: 78,
      likes: 159,
      lists: 7,
      moments: 8,
      suggestedFollows: [
        {
          name: "John Smith",
          username: "johnsmith",
          link: "/johnsmith",
          avatar: "./assets/images/avatar_johnsmith.png"
        },
        {
          name: "Jane Doe",
          username: "janedoe",
          link: "/janedoe",
          avatar: "./assets/images/avatar_janedoe.png"
        }
      ],
      tweets: [
        {
          id: 3,
          author: {
            name: "Hacky Oliver",
            username: "hackyoliver",
            link: "/hackyoliver",
            avatar: "./assets/images/avatar_hackyoliver.png"
          },
          retweetedBy: ["janedoe"],
          content:
            "Super coding session while listening to https://www.youtube.com/watch?v=XWGXimIJhGg",
          media: {
            type: "video",
            src: "https://www.youtube.com/embed/XWGXimIJhGg"
          },
          date: "Fri 24th",
          comments: 3,
          retweets: 2,
          likes: 9,
          commented: true,
          liked: false,
          savedToPocket: true
        },
        {
          id: 1,
          author: {
            name: "John Smith",
            username: "johnsmith",
            link: "/johnsmith",
            avatar: "./assets/images/avatar_johnsmith.png"
          },
          retweetedBy: ["janedoe", "hackyoliver"],
          content: "This is a super popular Tweet. All my friends RT.",
          media: { type: undefined, src: undefined },
          date: "Apr 1st",
          comments: 3,
          retweets: 2,
          likes: 9,
          commented: true,
          liked: false,
          savedToPocket: true
        }
      ]
    }
  ]
};

export default userAPI;
