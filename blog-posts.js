// a note on the JS approach here
// I could've used a cool hip new tool like Svelte
// or even a behemoth like React.js to make this
// page but I decided against that b/c this page
// is so minimal it doesn't require fancy stuff

function loadBlogPosts() {
  console.log(`loading...`);
  fetchPosts().then((data) => {
    removeLoadingState();
    appendPosts(data.items);
  });
}

function appendPosts(items) {
  console.log(items);
  const el = document.getElementById("posts");
  items.forEach((item) => {
    const postElement = document.createElement("li");
    postElement.innerHTML = `<a href="${item.url}">
        <span class="title">
            ${item.title}
        </span>
        <span class="date">
            ${getSimpleDate(item.date_published)}
        </span>
        </a>`;
    el.appendChild(postElement);
  });
}

function getSimpleDate(timestamp) {
  var format = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const parsedDate = new Date(timestamp);
  return parsedDate.toLocaleDateString(navigator.language, format);
}

async function fetchPosts() {
  const blogUrl = "https://blog.usmanity.com/feed/json/";
  const response = await fetch(blogUrl);
  return response.json();
}

function removeLoadingState() {
  const el = document.getElementById("loading");
  el.classList.add("hidden");
}

loadBlogPosts();
