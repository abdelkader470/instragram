const postContainer = document.getElementById("js-post");
// create post
const imageUpload = document.getElementById("imageUpload");
const selectPopUp = document.getElementById("select-pop-up");
const btnCreatePost = document.querySelectorAll(".createPost");
const parentPosts = document.getElementById("posts");
const btnDone = document.getElementById("done");
const textCaption = document.getElementById("textCaption");
const closebtn = document.getElementById("close");
const boxIMG = document.querySelector(".showphoto");
var t = "";

const storedPostsData = localStorage.getItem("posts");
const retrievedPostsData = JSON.parse(storedPostsData);
if (retrievedPostsData) {
  posts = retrievedPostsData;
}

function shuffleArray(array) {
  const likeButtons = document.querySelectorAll(".likebtn");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  handleBtnLike(likeButtons);
}

shuffleArray(posts);
let postHTML = "";

for (const post of posts) {
  postHTML += `
    <div class="d-flex justify-content-between align-items-center pt-3">
      <div class="d-flex align-items-center">
        <img
          src="${post.profileImg}"
          class="w-10 rounded-circle me-2 my-2 border-img"
          alt=""
        />
        <span class="my-2 fw-bold">${post.name}</span>
        <span class="ms-2"><b class="me-1">.</b>30 m</span>
      </div>
      <div>
        <i class="fa-solid fa-ellipsis fa-lg" style="color: #000000"></i>
      </div>
    </div>
    <img src="${post.postImg}" class="w-100 rounded-3" alt="" />
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex py-4">
      <i class="fa-regular fa-heart fa-xl heart-icon" ></i>
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
        <i class="fa-regular fa-bookmark fa-xl" style="color: #000000"></i>
      </div>
    </div>
    <div class="d-flex">
      <span class="me-1" >${post.react.like} </span>
      <span>Likes</span>
    </div>
    <div class="d-flex">
      <span class="me-2 fw-bold">${post.name}</span>
      <span> ${post.caption}</span>
    </div>
    <p>See Translation</p>
    <p class="text-muted">View all ${post.react.comment} comments</p>
    <input
      type="text"
      class="w-100 border-top-0 border-end-0 border-start-0 out-line-n"
      placeholder="Add a comment..."
      />
      `;
}

postContainer.innerHTML = postHTML;

document.querySelectorAll(".heart-icon").forEach((i) => {
  i.addEventListener("click", function () {
    if (i.classList.contains("fa-solid")) {
      i.classList.remove("fa-solid");
      i.classList.add("fa-regular");
      i.classList.remove("red-heart");
    } else {
      i.classList.remove("fa-regular");
      i.classList.add("red-heart");
      i.classList.add("fa-solid");
    }
  });
});
// =============================================
var arr = ["Ahmed", "Abdelkader", "Ali", "Omar"]; //aproved

var counter = "";
function handlePosts(srcc, caption) {
  let index = Math.floor(Math.random() * 4);
  var newElement = document.createElement("div");
  newElement.setAttribute("class", "post");
  like = 0;
  posts = [
    {
      profileImg: `${srcc}`,
      name: `${arr[index]} ${counter}`,
      postImg: `${srcc}`,
      react: {
        like: 0,
        comment: 0,
      },
      data: `10 / 10 / 2023`,
      caption: `${caption}`,
    },
    ...posts,
  ];
  postContainer.innerHTML += `
  <div class="d-flex justify-content-between align-items-center pt-3">
      <div class="d-flex align-items-center">
        <img
          src="${srcc}"
          class="w-10 rounded-circle me-2 my-2 border-img"
          alt=""
        />
        <span class="my-2 fw-bold">${arr[index]}</span>
        <span class="ms-2"><b class="me-1">.</b>30 m</span>
      </div>
      <div>
        <i class="fa-solid fa-ellipsis fa-lg" style="color: #000000"></i>
      </div>
    </div>
    <img src="${srcc}" class="w-100 rounded-3" alt="" />
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex py-4">
      <i class="fa-regular fa-heart fa-xl heart-icon" ></i>
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
        <i class="fa-regular fa-bookmark fa-xl" style="color: #000000"></i>
      </div>
    </div>
    <div class="d-flex">
      <span class="me-1" >${like} </span>
      <span>Likes</span>
    </div>
    <div class="d-flex">
      <span class="me-2 fw-bold">${arr[index]}</span>
      <span> ${caption}</span>
    </div>
    <p>See Translation</p>
    <p class="text-muted">View all 0 comments</p>
    <input
      type="text"
      class="w-100 border-top-0 border-end-0 border-start-0 out-line-n"
      placeholder="Add a comment..."
      />
  `;
  srcc = "";

  handleBtnLike();
  // closebtn.click();
  localStorage.setItem("posts", JSON.stringify(posts));
}

function showPostImg() {
  imageUpload.addEventListener("change", function (e) {
    var selectedFile = new FileReader();
    selectedFile.readAsDataURL(imageUpload.files[0]);
    selectedFile.onload = function () {
      t = selectedFile.result;
      btnDone.disabled = false;
      document.getElementById("mContent").innerHTML = `<img src="${t}" alt="">`;
    };
  });
}

// funtion of post image btn
btnDone.addEventListener("click", () => {
  if (t === "" && textCaption.value) {
    alert("Your src Empty !");
  } else {
    const Caption = textCaption.value;
    handlePosts(t, Caption);
    textCaption.value = "";
    closebtn.click();
    t = "";
    document.getElementById("mContent").innerHTML = ``;
  }
  btnDone.disabled = true;
  imageUpload.value = "";
});

// function of close btn
closebtn.addEventListener("click", () => {
  textCaption.value = "";
});
btnDone.disabled = true;

// function of creat post btn
btnCreatePost.forEach((creat) => {
  creat.addEventListener("click", () => {
    // console.log('T Before enter function', t);
    showPostImg();
  });
});

function handleBtnLike() {
  const likebtn = document.querySelectorAll(".likebtn");

  likebtn.forEach((likebutton) => {
    const likeIcon = likebutton.querySelector(".like");
    const likeNum =
      likebutton.parentElement.nextElementSibling.querySelector("#likesNum");
    let flag = likeIcon.classList.contains("fa-regular");
    let currentLikes = parseInt(likeNum.textContent);

    likebutton.addEventListener("click", () => {
      if (flag) {
        likeIcon.classList.remove("fa-regular");
        likeIcon.classList.add("fa-solid");
        likeIcon.style.color = "#f10410";
        currentLikes++;
        likeNum.textContent = currentLikes;
        flag = false;
      } else {
        likeIcon.classList.remove("fa-solid");
        likeIcon.classList.add("fa-regular");
        likeIcon.style.color = "var(--text-dark)";
        currentLikes--;
        likeNum.textContent = currentLikes;
        flag = true;
      }
    });
  });
}

let randomNum = Math.floor(Math.random() * 1000 + 1);

const likedPosts = new Set();

function handleLikeButtonClick(event) {
  const likeButton = event.target;
  const post = likeButton.closest(".post");

  if (!likedPosts.has(post)) {
    const likeCount = parseInt(
      likeButton.textContent.split(" ")[1].slice(1, -1)
    );
    likeButton.textContent = `Liked (${likeCount + 1})`;
    likedPosts.add(post);
  } else {
    const likeCount = parseInt(
      likeButton.textContent.split(" ")[1].slice(1, -1)
    );
    likeButton.textContent = `Like (${likeCount - 1})`;
    likedPosts.delete(post);
  }
}
