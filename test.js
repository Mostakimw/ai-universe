//! fetch all data from server
const fetchAllData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  loadingDisplay(true);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayLoadData(data.data);
      loadingDisplay(false);
    });
};

// const showDetailsBtn = document.getElementById("show-details-btn");
//! function for display all data
const displayLoadData = (data) => {
  const cardContainer = document.getElementById("card-container");
  let allData = data.tools;
  console.log(allData[0]);
  allData = allData.slice(0, 6);

  allData.forEach((singleData) => {
    cardContainer.innerHTML += `
        <div class="card w-full bg-base-100 p-8 shadow-xl border">
            <div>
                <img src=${singleData.image} class="rounded-xl h-[260px]" />
            </div>
            <div class="mt-4">
                <h2 class="text-2xl font-semibold">Features</h2>
                <p>1. ${singleData.features[0]}</p>
                <p>2. ${singleData.features[1]}</p>
                <p>3. ${singleData.features[2]}</p>
            </div>
            <div class="p-0 mt-4 flex justify-between items-center">
                <div>
                    <h2 class="text-3xl font-semibold">${singleData.name}</h2>
                    <p>${singleData.published_in}</p>
                </div>
                <hr>
                <div class="card-actions">
                <label onclick="showDetails()" id="show-btn" for="my-modal-3" class="btn"><i class="fa-solid fa-arrow-right text-red-500 text-2xl"></i></label>
                <!-- Put this part before </body> tag -->
                
                </div>
            </div>
        </div>
      `;
  });
};

//! show all button handler

//! spinner when loading
const loadingDisplay = (isLoading) => {
  const loader = document.getElementById("loading");
  const showAllBtn = document.getElementById("show-all-btn");
  if (isLoading) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
    showAllBtn.classList.remove("hidden");
  }
};

const showDetails = () => {
  console.log(9);
  const details = document.getElementById("details-modal");
  details.innerHTML = `
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box relative">
                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia
                    for free!</p>
            </div>
        </div>
    
    `;
};
