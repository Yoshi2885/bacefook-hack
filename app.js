window.addEventListener("load", () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }
  document.getElementById("name").value = username;
  document.getElementById("wellcome").innerText = `ようこそ ${username} さん！`;
  const containerEl = document.querySelector("#newsfeed");
  // This makes things appear
  for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
    const post = bacefook.newsfeed[index];
    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    friendEl.innerText = post.friend;
    const timeStampEl = document.createElement("div");
    timeStampEl.className = "timeStamp";
    timeStampEl.innerText = moment(post.timestamp).fromNow();
    const feelingEl = document.createElement("div");
    feelingEl.className = "feeling";
    feelingEl.innerText = post.feeling;
    const postEl = document.createElement("div");
    postEl.className = "post";
    postEl.innerText = post.text;
    const img_element = document.createElement("img");
    img_element.src = post.image;
    img_element.className = "img";
    img_element.alt = "cute cat";
    img_element.width = 200;
    postEl.append(friendEl);
    postEl.append(img_element);
    postEl.append(feelingEl);
    postEl.append(timeStampEl);
    containerEl.append(postEl);
  }
});

function reload() {
  // containerの要素を一回削除
  // flag確認
  let isDarkMode = document.getElementById("dark-mode").checked;
  if (isDarkMode) {
    const containerEl = document.querySelector("#newsfeed");
    containerEl.innerHTML = "";
    for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
      const post = bacefook.newsfeed[index];
      const friendEl = document.createElement("div");
      friendEl.className = "friend dark-mode";
      friendEl.innerText = post.friend;
      const timeStampEl = document.createElement("div");
      timeStampEl.className = "timeStamp dark-mode";
      timeStampEl.innerText = moment(post.timestamp).fromNow();
      const feelingEl = document.createElement("div");
      feelingEl.className = "feeling dark-mode";
      feelingEl.innerText = post.feeling;
      const postEl = document.createElement("div");
      postEl.className = "post dark-mode";
      postEl.innerText = post.text;
      const img_element = document.createElement("img");
      img_element.src = post.image;
      img_element.alt = "cute cat";
      img_element.width = 200;
      postEl.append(friendEl);
      postEl.append(img_element);
      postEl.append(feelingEl);
      postEl.append(timeStampEl);
      containerEl.append(postEl);
    }
  } else {
    const containerEl = document.querySelector("#newsfeed");
    containerEl.innerHTML = "";
    for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
      const post = bacefook.newsfeed[index];
      const friendEl = document.createElement("div");
      friendEl.className = "friend";
      friendEl.innerText = post.friend;
      const timeStampEl = document.createElement("div");
      timeStampEl.className = "timeStamp";
      timeStampEl.innerText = moment(post.timestamp).fromNow();
      const feelingEl = document.createElement("div");
      feelingEl.className = "feeling";
      feelingEl.innerText = post.feeling;
      const postEl = document.createElement("div");
      postEl.className = "post";
      postEl.innerText = post.text;
      const img_element = document.createElement("img");
      img_element.src = post.image;
      img_element.alt = "cute cat";
      img_element.width = 200;
      postEl.append(friendEl);
      postEl.append(img_element);
      postEl.append(feelingEl);
      postEl.append(timeStampEl);
      containerEl.append(postEl);
    }
  }
  setTimeout(reload, 1000);
}

//ボタンクリック時にポップアップを表示させる
const clickBtn = document.getElementById("click-btn");
const popupWrapper = document.getElementById("popup-wrapper");
const close = document.getElementById("close");
//const people1 = document.getElementById('arrList');
clickBtn.addEventListener("click", () => {
  popupWrapper.style.display = "block";
});
// ポップアップの外側又は「x」のマークをクリックしたときポップアップを閉じる
popupWrapper.addEventListener("click", (e) => {
  if (e.target.id === popupWrapper.id || e.target.id === close.id) {
    popupWrapper.style.display = "none";
  }
});

function tweet() {
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const emoji = document.getElementById("emoji").value;
  let newMyPost = {
    friend: name,
    text: comment,
    feeling: emoji,
    timestamp: new Date(),
    image: "./images/okonomiyaki.jpeg",
  };
  bacefook.newsfeed.push(newMyPost);
  document.getElementById("comment").value = "";
  document.getElementById("emoji").value = "😃happy😃";
}

function actionToggle() {
  let darkModeCheck = document.getElementsByClassName("post");
  for (const element of darkModeCheck) {
    element.classList.toggle("dark-mode");
  }
  document.getElementsByClassName("body")[0].classList.toggle("dark-mode");
  document.getElementsByClassName("header")[0].classList.toggle("dark-mode");
  document.getElementById("click-btn").classList.toggle("dark-mode");
  document.getElementById("go-to-top").classList.toggle("dark-mode");
}

function goToTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

reload();

button.addEventListener("click", tweet);
let saveCheckbox = document.getElementById("dark-mode");

saveCheckbox.addEventListener("change", actionToggle);

const goToTopBtn = document.getElementById("go-to-top");
goToTopBtn.addEventListener("click", goToTop);

function changeName() {
  console.log("clickされました");
  username = window.prompt("What is your name?");
  localStorage.setItem("username", username);
}

const navNameButton = document.getElementsByClassName("nav_name")[0];
navNameButton.addEventListener("click", changeName);
