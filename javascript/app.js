//! fetch all data from server
const fetchAllData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLoadData(data.data));
};
//! function for display all data
const displayLoadData = (data) => {
  const element = data.tools[10];
  console.log(element);
  const cardContainer = document.getElementById("card-container");
  data.tools.forEach((singleData) => {
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
