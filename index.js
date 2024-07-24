import { Carousel } from "bootstrap";
import axios from "./axiosSet.js";


// The breed selection input element.
const breedSelect = document.getElementById("breedSelect");
// The information section div element.
const infoDump = document.getElementById("infoDump");
// The progress bar div element.
const progressBar = document.getElementById("progressBar");
// The get favourites button element.
const getFavouritesBtn = document.getElementById("getFavouritesBtn");

//**Blocker below is code I thought would be the solution for the page to function as lab stated but was unable to reach the end result to pull in the breed selecition from the API using fetch or axios with API key

//Fetch 
// async function initalLoad() {
//     const response = await fetch('https://api.thecatapi.com/v1/breeds');
//     const breeds = await response.json();
//     console.log(breeds);
//     breeds.forEach((breed) => {
//         const option = document.createElement('option');
//         option.setAttribute('value', breed.id);
//         const breedName = document.createTextNode(breed.name);
//         option.appendChild(breedName);
//         document.getElementById('breedSelect').appendChild(option);
//     })
// }

// Function to update progress bar
function updateProgress(event) {
    if (event.lengthComputable) {
        const percentCompleted = Math.round((event.loaded * 100) / event.total);
        progressBar.style.width = `${percentCompleted}%`;
    }
}

// Initial load function to retrieve breeds
async function initialLoad() {
    try {
        const response = await axios.get("/breeds");
        const breeds = response.data;

        breeds.forEach(breed => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);
        });

        // Add event listener for breed selection
        breedSelect.addEventListener("change", handleBreedSelect);

        // Trigger initial breed selection
        handleBreedSelect();
    } catch (error) {
        console.error("Error fetching breeds:", error);
    }
}



//         // Clear existing carousel and infoDump
//         const carousel = document.getElementById("carousel");
//         carousel.innerHTML = "";
//         infoDump.innerHTML = "";

//         images.forEach(image => {
//             // Create carousel element
//             const imgElement = document.createElement("img");
//             imgElement.src = image.url;
//             carousel.appendChild(imgElement);

//             // Create info section
//             const breedInfo = document.createElement("div");
//             breedInfo.innerHTML = `
//                 <h2>${image.breeds[0].name}</h2>
//                 <p>${image.breeds[0].description}</p>
//             `;
//             infoDump.appendChild(breedInfo);
//         });


// // Function to handle favoriting images
// async function favourite(imageId) {
//     try {
//         const response = await axios.post("/favourites", {
//             image_id: imageId
//         });
//         console.log("Image favourited:", response.data);
//     } catch (error) {
//         console.error("Error favouriting image:", error);
//     }
// }

// // Function to get favourites
// async function getFavourites() {
//     try {
//         const response = await axios.get("/favourites");
//         const favourites = response.data;

//         // Clear existing carousel
//         const carousel = document.getElementById("carousel");
//         carousel.innerHTML = "";

//         favourites.forEach(favourite => {
//             // Create carousel element
//             const imgElement = document.createElement("img");
//             imgElement.src = favourite.image.url;
//             carousel.appendChild(imgElement);
//         });
//     } catch (error) {
//         console.error("Error fetching favourites:", error);
//     }
// }

// // Add event listener to the get favourites button
// getFavouritesBtn.addEventListener("click", getFavourites);

// // Execute the initial load function immediately
// initialLoad();
