// https://dog.ceo/dog-api/
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");
const select = document.querySelector("select");

// Initializing the giph
// const giph = document.createElement("iframe");
// giph.src = "https://giphy.com/embed/3o7bu3XilJ5BOiSGic";
// giph.width = "250";
// giph.height = "250";
// giph.class = "giphy-embed";

//Fetching breed list into select
{
  const promise = fetch("https://dog.ceo/api/breeds/list/all");
  promise
    .then((response) => response.json())

    .then((processedResponse) => {
      Object.keys(processedResponse.message).forEach((element) => {
        const option = document.createElement("option");
        option.textContent = element;
        select.appendChild(option);
      });
    });
}

// For button
function addNewDoggo() {
  //   doggos.appendChild(giph);
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      img.width = 250;
      img.height = 250;
      //   doggos.removeChild(giph);
      doggos.appendChild(img);
    });
}

// For select
function addNewDoggoByBreed(event) {
  //   doggos.appendChild(giph);
  const promise = fetch(
    `https://dog.ceo/api/breed/` + event.target.value + "/images/random"
  );
  promise
    .then((response) => response.json())

    .then((processedResponse) => {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      img.width = 250;
      img.height = 250;
      //   doggos.removeChild(giph);
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
select.addEventListener("change", addNewDoggoByBreed);
