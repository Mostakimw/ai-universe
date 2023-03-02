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
// const fetchAllData = () => {
//   const url = `https://openapi.programming-hero.com/api/ai/tools`;
//   const loader = document.querySelector("#loading .progress");
//   loader.classList.remove("hidden"); // show the spinner
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       displayLoadData(data.data);
//       loader.classList.add("hidden"); // hide the spinner
//     })
//     .catch((error) => {
//       console.error(error);
//       loader.classList.add("hidden"); // hide the spinner if there is an error
//     });
// };

//! function for display all data
const displayLoadData = (data) => {
  const cardContainer = document.getElementById("card-container");
  let allData = data.tools;
  console.log(allData);
  allData = allData.slice(0, 6);
  loadingDisplay(false);
  allData.forEach((singleData) => {
    cardContainer.innerHTML += `
    <div class="card w-full bg-red-300 p-6 shadow-xl border">
        <div>
            <img src=${singleData.image} class="rounded-xl h-[260px]" />
        </div>
        <div class="card-body p-0 mt-4">
            <h2 class="text-3xl font-semibold">${singleData.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
  `;
  });
};

// const dataShowingProcess =(data, limit)=>{
//     displayLoadData(data, limit)
// }

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
