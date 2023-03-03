const dates = [
  { name: "j", dob: "19 December 1986" },
  { name: "k", dob: "19 July 1976" },
  { name: "h", dob: "19 June 1996" },
];
custom = (a, b) => {
  let dateA = new Date(a.dob);
  let dateB = new Date(b.dob);
  if (dateA < dateB) {
    return 1;
  } else if (dateA > dateB) return -1;
  return 0;
};
console.log(dates.sort(custom));

//Date sorting in javascript

// const employees = [
//   { name: "Shyam", email: "shyam@gmail.com", dob: "22 aug 1990" },
//   { name: "Shyam", email: "shyam@gmail.com", dob: "21 aug 1990" },

//   { name: "Bob", email: "bob32@gmail.com", dob: "12 july 1986" },
//   { name: "Jai", email: "jai87@gmail.com", dob: "05 april 1992" },
// ];

// customSort = (a, b) => {
//   const dateA = new Date(a.dob);
//   const dateB = new Date(b.dob);
//   if (dateA > dateB) return 1;
//   else if (dateA < dateB) return -1;
//   return 0;
// };

// console.log(employees.sort(customSort));

document.getElementById("cat-1").innerHTML = `
    <h4 class="p-2 text-green-600 font-bold">
      ${
        getmodal.pricing && getmodal.pricing[0].price
          ? getmodal.pricing[0].price
          : "Free of cost"
      }/
      ${
        getmodal.pricing && getmodal.pricing[0].plan
          ? getmodal.pricing[0].plan
          : ""
      }
    </h4>
  `;
