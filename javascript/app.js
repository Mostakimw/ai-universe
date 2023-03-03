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
  // console.log(allData[0]);
  allData = allData.slice(0, 6);

  allData.forEach((singleData, index) => {
    cardContainer.innerHTML += `
      <div class="card w-full bg-base-100 p-8 shadow-xl border mb-6">
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
                <label onclick="loadSingleData('${singleData.id}')" id="show-btn" for="my-modal-3" class="btn bg-white border-none hover:bg-white"><i class="fa-solid fa-arrow-right text-red-500 text-2xl"></i></label>
                
              </div>
          </div>
      </div>
    `;
  });
};

//! single data details fetch
const loadSingleData = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displaySingleData(data.data);
};

const displaySingleData = (data) => {
  console.log(data);
  console.log(data.pricing[0]);
  const details = document.getElementById("details-modal");
  details.innerHTML = `
      <label for="my-modal-3" class="btn btn-sm btn-circle bg-red-400 border-none text-white absolute right-[-1.1rem] top-[-1.1rem]">✕</label>
      <div class="grid grid-cols-2 gap-6 p-6 bg-red-300 rounded-md">
        <div class="w-full px-4">
            <div>
              <h2 class="text-2xl font-semibold">${data.description}</h2>
            </div>
            <div class="flex justify-between my-5 gap-4">
                <p class="w-48 bg-white p-2 text-xl font-bold rounded">${data.pricing[0].price}<br>${data.pricing[0].plan} </p>
                <p class=" w-48 bg-white p-2 text-xl font-bold rounded">${data.pricing[1].price}<br>${data.pricing[1].plan}</p>
                <p class="w-48 bg-white p-2 text-xl font-bold rounded">${data.pricing[2].price}<br>${data.pricing[2].plan}</p>
            </div>
            <div class="flex justify-between items-center ">
                <div>
                    <h3 class="text-3xl font-semibold">Feature</h3>
                    
                </div>
              <div>
                  <h3 class="text-3xl font-semibold">Integrations</h3>
                  <p class="color-[#585858]">helo</p>
                  <p>helo</p>
                  <p>helo</p>
              </div>
            </div>
          </div>
          <div class="w-full">
            
            <img src=${data.image_link[0]} class="rounded-xl h-[260px]" />
            
          </div>
      </div>
    `;
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
