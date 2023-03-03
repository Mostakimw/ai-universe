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

  allData.forEach((singleData, index) => {
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
                <label onclick="loadSingleData('${singleData.id}')" id="show-btn" for="my-modal-3" class="btn bg-white border-none hover:bg-white"><i class="fa-solid fa-arrow-right text-red-500 text-2xl"></i></label>
                
              </div>
          </div>
      </div>
    `;
  });
};
// const showDetails = () => {
//   console.log(9);
//   const details = document.getElementById("details-modal");
//   details.innerHTML = `
//           <input type="checkbox" id="my-modal-3" class="modal-toggle" />
//           <div class="modal">
//               <div class="modal-box relative">
//                   <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                   <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
//                   <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia
//                       for free!</p>
//               </div>
//           </div>

//       `;
// };

//! single data details fetch
const loadSingleData = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displaySingleData(data.data);
};

const displaySingleData = (data) => {
  console.log(data.id);
  const details = document.getElementById("details-modal");
  details.innerHTML = `
      <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <div class="grid grid-cols-2 bg-red-300 p-6 rounded-md">
        <div class="w-full px-4 bg-black">
            <div>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur magni culpa placeat ipsam ad
                    explicabo repellat, eaque temporibus reprehenderit. Est?</h2>
            </div>
            <div class="flex justify-between items-center">
                <p>free of cost</p>
                <p>free of cost</p>
                <p>free of cost</p>
            </div>
            <div class="flex justify-between items-center ">
                <div>
                    <h3>header</h3>
                    <p>helo</p>
                    <p>helo</p>
                    <p>helo</p>
                </div>
                <div>
                    <h3>header</h3>
                    <p>helo</p>
                    <p>helo</p>
                    <p>helo</p>
                </div>
            </div>
        </div>
        <div class="w-full">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente cumque incidunt assumenda
                error? Odio, maxime. Aliquid impedit, sit exercitationem architecto amet deleniti ut perferendis
                consectetur eos delectus tenetur placeat ullam omnis dicta ipsa accusamus molestiae cumque odio
                excepturi cum sunt nemo. Reprehenderit possimus tenetur perferendis aperiam dolore dolores quibusdam
                fugiat voluptatem non? Temporibus aspernatur tempora vel quaerat beatae eos dicta laboriosam nihil quae
                culpa voluptas eaque modi deleniti perspiciatis expedita, atque, iure quasi optio nemo. Ex, quas eaque
                aut corporis deleniti perferendis nam pariatur fugiat, vel sequi eos? Corrupti mollitia a maiores odit,
                fugit porro qui harum. Reiciendis enim quisquam earum odit repudiandae exercitationem odio autem tempora
                nam d</h1>
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
