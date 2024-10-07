//1- Fetch, Load and Show categories on HTMl
// create loadCategories
const loadCategories = () => {
  //fetch the data
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// create loadPets
const loadPets = () => {
  //fetch the data
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayPets(data.pets))
    .catch((error) => console.log(error));
};

//Create DisplayCategories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
    //create a button
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
      <button id="" class="btn btn-lg btn-outline text-lg font-bold px-10 hover:rounded-full hover:bg-[#0E7A811A] hover:border-[#0e7a81] hover:text-black transition-all">
        <img class="w-8" src="${item.category_icon}" />
        ${item.category}
      </button>
    `;
    // add button to category container
    categoryContainer.append(buttonContainer);
  });
};

// create DisplayPets
const displayPets = (pets) => {
  const petsContainer = document.getElementById("pets");

  pets.forEach((pet) => {
    console.log(pet);
    const card = document.createElement("div");
    card.classList = "card card-compact p-4 border";
    card.innerHTML = `
      <figure class="h-[200px] rounded-lg">
        <img
          class="h-full w-full object-cover"
          src=${pet.image}
          alt="Shoes" />
      </figure>
      <div class="grid gap-2 border-b pb-2">
        <h4 class="font-bold text-xl mt-4">${pet.pet_name}</h4>
        <p class="flex items-center gap-1 text-lg">
          <svg 
            class="w-5"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"        className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          Breed: ${pet.breed}</p>
        <p class="flex items-center gap-1 text-lg">
          <svg 
            class="w-5"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          Brith: ${pet.date_of_birth}</p>
        <p class="flex items-center gap-1 text-lg">
          <ion-icon name="male-female-outline"></ion-icon> Gender: ${pet.gender}
        </p>
        <p class="flex items-center gap-1 text-lg">
          <img class="w-5" src="https://img.icons8.com/?size=24&id=85801&format=png"/> Pride: ${pet.price}$
        </p>
      </div>  
      <div class="flex items-center justify-around mt-2">
        <button class="px-5 py-2 border rounded-md">
          <svg 
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
          </svg>

        </button>
        <button class="px-4 py-2 border rounded-md text-lg text-[#0E7A81]">Adopt</button>
        <button class="px-4 py-2 border rounded-md text-lg text-[#0E7A81]">Details</button>
      </div>
    `;

    //add card on pets
    petsContainer.append(card);
  });
};

//create

loadCategories();
loadPets();
