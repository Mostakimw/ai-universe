//! fetch all data from server
const fetchAllData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  loadingDisplay(true);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayLoadData(data.data.tools.slice(0, 3));
      loadingDisplay(false);
    });
};
const showAllData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  loadingDisplay(true);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayLoadData(data.data.tools);
      loadingDisplay(false);
    });
  const loadMoreButton = document.getElementById("show-all-btn");
  loadMoreButton.style.display = "none";
};

// const showDetailsBtn = document.getElementById("show-details-btn");
//! function for display all data
const displayLoadData = (allApis) => {
  const cardContainer = document.getElementById("card-container");
  // let allData = data;
  // console.log(allData[0]);
  // allData = allData.slice(0, 6);
  cardContainer.innerHTML = "";

  allApis.forEach((singleData, index) => {
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
  console.log(data.input_output_examples[0]);
  const details = document.getElementById("details-modal");
  details.innerHTML = `
      <label for="my-modal-3" class="btn btn-sm btn-circle bg-red-400 border-none text-white absolute right-2 top-2">✕</label>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-12 bg-base-100 rounded-md items-center">
        <div class="max-sm:order-last w-full p-6 border border-red-500 bg-red-100	rounded-md mb-6">
            <div>
              <h2 class="text-2xl font-semibold">${data.description}</h2>
            </div>
            <div class="flex justify-between max-md:flex-col max-md:items-center my-5 gap-4 mx-auto">
                <p class="w-48 bg-gray-50	 p-2  text-xl font-bold rounded">${data.pricing[0].price}<br>${data.pricing[0].plan} </p>
                <p class=" w-48 bg-gray-50	 p-2  text-xl font-bold rounded">${data.pricing[1].price}<br>${data.pricing[1].plan}</p>
                <p class="w-48 bg-gray-50	 p-2  text-xl font-bold rounded">${data.pricing[2].price}<br>${data.pricing[2].plan}</p>
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
            
            <img src=${data.image_link[0]} class="rounded-xl" />
            <div class="text-center mt-5 px-4">
              <h3 class="text-3xl font-semibold">${data.input_output_examples[0].input}</h3>
              <p class="mt-2">${data.input_output_examples[0].output}</p>
            </div>
            
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
