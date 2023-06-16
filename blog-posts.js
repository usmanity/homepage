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

// loadBlogPosts();

const rssToJSON = async (feedUrl) => {
  try {
    const response = await fetch(feedUrl, {
      headers: {
        "Access-Control-Allow-Origin": true,
      },
    });
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    const items = xmlDoc.querySelectorAll("item");

    const feedData = [];

    items.forEach((item) => {
      const itemData = {};

      itemData.title = item.querySelector("title").textContent;
      itemData.link = item.querySelector("link").textContent;
      itemData.description = item.querySelector("description").textContent;
      // Add more properties as needed

      feedData.push(itemData);
    });

    const jsonData = JSON.stringify(feedData, null, 2);
    console.log(jsonData);
  } catch (error) {
    console.error("Error converting RSS to JSON:", error);
  }
};

// Replace 'rssFeedUrl' with the actual URL of the RSS feed you want to convert
const rssFeedUrl = "https://blog.usmanity.com/rss";
rssToJSON(rssFeedUrl);
