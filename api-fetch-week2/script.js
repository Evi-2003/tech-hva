const image = document.querySelector("#duckImage");
const body = document.querySelector("body");

async function getDuck() {
  const fetchUrl =
    "https://corsproxy.io?" +
    encodeURIComponent("https://random-d.uk/api/v2/random?format=json");
  const response = await fetch(fetchUrl);
  const duckJson = await response.json();
  image.src = duckJson.url;
  return duckJson.url;
}

async function setDuck() {
  const duckUrl = await getDuck();
  console.log(duckUrl);
  image.src = duckUrl;
}

getDuck();
body.addEventListener("keypress", setDuck);
body.addEventListener("click", setDuck);
