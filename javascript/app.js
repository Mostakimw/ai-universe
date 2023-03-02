//! fetch all data from server
const fetchAllData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLoadData(data.data));
};
//! function for display all data
const displayLoadData = (data) => {
  console.log(data);
};
