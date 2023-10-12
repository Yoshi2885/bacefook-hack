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

// let button = document.getElementById("btn");
// button.addEventListener("click", scheduler, false);
// 自動的にcontainer内の内容が更新されるような記述がないかを考える。か、再描画ボタンを作成する。

function reload() {
  // containerの要素を一回削除
  // flag確認
  let isDarkMode = document.getElementById("dark-mode").checked;
  console.log("darkmode?", isDarkMode);
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
  console.log("reload");
}

reload();

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
  document.getElementById("emoji").value = "happy😃";
}

button.addEventListener("click", tweet);

function actionToggle() {
  let darkModeCheck = document.getElementsByClassName("post");
  for (const element of darkModeCheck) {
    element.classList.toggle("dark-mode");
  }
  document.getElementsByClassName("body")[0].classList.toggle("dark-mode");
}

let saveCheckbox = document.getElementById("dark-mode");
saveCheckbox.addEventListener("change", actionToggle);
