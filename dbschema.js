let db = {
  users: [
    {
      userId: "Oi8YOoqZNUMIjYCuJTwo214vsgo1",
      email: "user@email.com",
      handle: "user",
      createdAt: "2019-07-19T02:57:56.009Z",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tyroapp-2567e.appspot.com/o/643201841.jpeg?alt=media",
      bio: "Hello I'm a new user",
      website: "https://new.user.com",
      location: "US, MO"
    }
  ],
  posts: [
    {
      userHandle: "user",
      body: "this is the post body",
      createdAt: "2019-07-18T18:54:12.615Z",
      likeCount: 4,
      commentCount: 3
    }
  ],
  comments: [
    {
      userHandle: "user",
      postId: "58uRnGdqqNHc9RBa9HZo",
      body: "nice one mate",
      createdAt: "2019-07-18T18:54:12.615Z"
    }
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      postId: "58uRnGdqqNHc9RBa9HZo",
      type: "like | comment",
      createdAt: "2019-07-18T18:54:12.615Z"
    }
  ]
};

let userDetails = {
  // Redux data
  credentials: {
    userId: "Oi8YOoqZNUMIjYCuJTwo214vsgo1",
    email: "user@email.com",
    handle: "user",
    createdAt: "2019-07-19T02:57:56.009Z",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/tyroapp-2567e.appspot.com/o/643201841.jpeg?alt=media",
    bio: "Hello I'm a new user",
    website: "https://new.user.com",
    location: "US, MO"
  },
  likes: [
    {
      userHandle: "user",
      postId: "hh705oWfWucVzGbHH2pa"
    },
    {
      userHandle: "user",
      postId: "hh705oWfWucVzGbHH2pa"
    }
  ]
};
