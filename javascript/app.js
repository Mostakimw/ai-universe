//! fetch all data from server
const fetchAllData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  loadingDisplay(true);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayLoadData(data.data.tools.slice(0, 6));
      loadingDisplay(false);
    });
};

//! show all button handler
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

//! function for display all data
const displayLoadData = (allAis) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  allAis.forEach((singleData) => {
    cardContainer.innerHTML += `
      <div class="card w-full bg-base-100 p-8 shadow-xl border mb-6">
          <div>
              <img src=${singleData.image} class="rounded-xl h-[260px]" />
          </div>
          <div class="my-4">
              <h2 class="text-2xl font-semibold">Features</h2>
              <p>1. ${singleData.features[0]}</p>
              <p>2. ${singleData.features[1]}</p>
              <p>3. ${singleData.features[2]}</p>
          </div>
          <hr class="border">
          <div class="p-0 mt-4 flex justify-between items-center">
              <div>
                  <h2 class="text-3xl font-semibold">${singleData.name}</h2>
                  <p>${singleData.published_in}</p>
              </div>
              <div class="card-actions">
                <label onclick="loadSingleData('${singleData.id}')" id="show-btn" for="my-modal-3" class="btn bg-white border-none hover:bg-white"><i class="fa-solid fa-arrow-right text-red-500 text-2xl"></i></label>
                
              </div>
          </div>
      </div>
    `;
  });
};

//! sort by date fetch function

const sortByDate = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  loadingDisplay(true);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displaySortByDate(data.data.tools);
      loadingDisplay(false);
    });
};
//! display sort by date
const displaySortByDate = (data) => {
  // console.log(data);
  custom = (a, b) => {
    let dateA = new Date(a.published_in);
    let dateB = new Date(b.published_in);
    if (dateA < dateB) {
      return 1;
    } else if (dateA > dateB) return -1;
    return 0;
  };
  data.sort(custom);
  displayLoadData(data);
  const loadMoreButton = document.getElementById("show-all-btn");
  loadMoreButton.style.display = "none";
};

//! single data details fetch
const loadSingleData = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displaySingleData(data.data);
};
//! single data showing when modal opened
const displaySingleData = (data) => {
  console.log(data);
  feature_name = data["features"]["1"]["feature_name"];
  const details = document.getElementById("details-modal");
  details.innerHTML = `
      <label for="my-modal-3" class="btn btn-sm btn-circle bg-red-400 border-none text-white absolute right-2 top-2">✕</label>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-12 bg-base-100 rounded-md items-center">
        <div class="max-sm:order-last w-full p-6 border border-red-500 bg-red-100	rounded-md mb-6">
            <div>
              <h2 class="text-2xl font-semibold">${data.description}</h2>
            </div>
            <div class="flex justify-between max-md:flex-col max-md:items-center my-5 gap-4 mx-auto">
                <p class="bg-gray-50 text-[#03A30A] p-2 text-xl font-bold rounded">${
                  data.pricing[0].price
                } <br>${data.pricing[0].plan} </p>
                <p class="bg-gray-50 text-[#F28927] p-2  text-xl font-bold rounded">${
                  data.pricing[1].price
                }<br>${data.pricing[1].plan}</p>
                <p class="bg-gray-50	text-[#EB5757] p-2  text-xl font-bold rounded">${
                  data.pricing[2].price
                }<br>${data.pricing[2].plan}</p>
            </div>
            <div class="md:flex justify-between gap-5">
                <div>
                    <h3 class="text-3xl font-semibold mb-3">Feature</h3>
                    <div id="feature-name">
                    </div>
                </div>
              <div>
                  <h3 class="text-3xl font-semibold mb-3 max-md:mt-3">Integrations</h3>
                  <div id="integration-name">
                  </div>
              </div>
            </div>
          </div>
          <div class="w-full">
            
            <div class="relative">
              <img src=${data.image_link[0]} class="rounded-xl"/>
              <p class="bg-red-500 p-2 max-w-fit text-white rounded-md absolute right-2 top-2">${
                data.accuracy.score * 100
              }% accuracy</p>
            </div>
            <div class="text-center mt-5 px-4">
              <h3 class="text-3xl font-semibold">${
                data.input_output_examples[0].input
              }</h3>
              <p class="mt-2">${data.input_output_examples[0].output}</p>
            </div>
            
          </div>
      </div>
    `;
  const featureDiv = document.getElementById("feature-name");
  featureDiv.innerHTML = displayFeatureNames(data);
  const integrationDiv = document.getElementById("integration-name");
  integrationDiv.innerHTML = displayIntegrationsName(data);
};

//! display feature names
function displayFeatureNames(data) {
  let featureHtml = "";
  let count = 1;
  for (const feature in data.features) {
    const featureName = data.features[feature].feature_name;
    featureHtml += `<p>${count}. ${featureName}</p>`;
    count++;
  }
  return featureHtml;
}

//! display integrations
function displayIntegrationsName(data) {
  let integrationHtml = "";
  let count = 1;
  for (const integration of data.integrations) {
    if (integration) {
      integrationHtml += `<p>${count}. ${integration}</p>`;
    } else {
      integrationHtml = "No data Found";
    }
    count++;
  }
  return integrationHtml;
}

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
