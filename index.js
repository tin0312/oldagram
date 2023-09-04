const posts = [
    {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21,
    },
    {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4,
    },
    {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment:
        "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152,
    },
  ];
  
  const likesArray = [];
  const postSection = document.querySelector("main");
  // loop through and render all the posts
  if (postSection) {
    posts.forEach((post, index) => {
      const postContainer = document.createElement("div");
      postContainer.classList.add("container", "post-container");
  
      postContainer.innerHTML = `
              <div class="post-info-container">
                  <img class="user-avatar" src="${post.avatar}" alt="Avatar" />
                  <div class="post-info">
                      <p class="bold-text">${post.name}</p>
                      <p>${post.location}</p>
                  </div>
              </div>
              <img class="post-image" src="${post.post}" alt="Post" />
              <div class="icon-container">
                  <img class = "heart-icon"src="images/icon-heart.png" alt="Heart Icon" />
                  <img src="images/icon-comment.png" alt="Comment Icon" />
                  <img src="images/icon-dm.png" alt="DM Icon" />
              </div>
              <div class="content-container">
                  <p class=" like-number bold-text">${post.likes} likes</p>
                  <p><span class="bold-text">${post.username}</span> ${post.comment}</p>
              </div>
          `;
  
      postSection.appendChild(postContainer);
      // number of likes for each post
      likesArray[index] = post.likes;
  
      // adding click function
      const heartIcon = postContainer.querySelector(".heart-icon");
      const postImage = postContainer.querySelector(".post-image");
      const likeNumber = postContainer.querySelector(".like-number");
  
      heartIcon?.addEventListener("click", () => {
        likesArray[index] += 1;
        likeNumber.textContent = `${likesArray[index]} likes`;
      });
      postImage?.addEventListener("click", () => {
        likesArray[index] += 1;
        const likeNumber = postContainer.querySelector(".like-number");
        likeNumber.textContent = `${likesArray[index]} likes`;
        console.log(post.likes);
      });
    });
  }
  