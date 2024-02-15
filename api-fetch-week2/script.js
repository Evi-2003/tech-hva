const image = document.querySelector("#duckImage");
const body = document.querySelector("body");
async function getDuck() {
  const ducksFromApi = await fetch(
    "https://random-d.uk/api/random?format=json"
  );
  const duckJson = await ducksFromApi.json();
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
