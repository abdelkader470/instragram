function getRandomPost(postsArray) {
  const randomIndex = Math.floor(Math.random() * postsArray.length);
  return postsArray[randomIndex];
}
const randomPost = getRandomPost(posts);
let postHTML = ``;
posts.forEach((post) => {
  postHTML += `
  <div class="d-flex justify-content-between align-items-center pt-3">
              <div class="d-flex align-items-center">
                <img
                  src="${randomPost.profileImg}"
                  class="w-10 rounded-circle me-2 my-2 border-img"
                  alt=""
                />
                <span class="my-2 fw-bold">${randomPost.name}</span>
                <span class="ms-2"><b class="me-1">.</b>30 m</span>
              </div>
              <div>
                <i
                  class="fa-solid fa-ellipsis fa-lg"
                  style="color: #000000"
                ></i>
              </div>
            </div>
            <img src="${randomPost.postImg}" class="w-100 rounded-3" alt="" />
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex py-4">
                <i class="fa-regular fa-heart fa-xl" style="color: #000000"></i>
                <i
                  class="fa-regular fa-comment fa-rotate-270 fa-xl px-3"
                  style="color: #000000"
                ></i>
                <i
                  class="fa-regular fa-paper-plane fa-xl"
                  style="color: #000000"
                ></i>
              </div>
              <div>
                <i
                  class="fa-regular fa-bookmark fa-xl"
                  style="color: #000000"
                ></i>
              </div>
            </div>
            <div class="d-flex">
              <span class="me-1"> ${randomPost.react.like} </span>
              <span>Likes</span>
            </div>
            <div class="d-flex">
              <span class="me-2 fw-bold">${randomPost.name}</span>
              <span> ${randomPost.caption}</span>
            </div>
            <p>See Translation</p>
            <p class="text-muted">View all ${randomPost.react.comment} comments</p>
            <input
              type="text"
              class="w-100 border-top-0 border-end-0 border-start-0 out-line-n"
              placeholder="Add a comment..."
            />
 
 `;
});
document.getElementById("js-post").innerHTML = postHTML;
