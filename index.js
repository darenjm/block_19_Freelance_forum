//starting freelancer array with at least 2 objects [{name: 'Sam', occupation: 'Programmer', price: 50}]
//array of names  //array of occupations

const freelancers = [
  { name: "Oliver", occupation: "scientist", price: 50 },
  { name: "Olivia", occupation: "accountant", price: 35 },
  { name: "Sofia", occupation: "bookkeeper", price: 25 },
];
const newFreelancers = [
  { name: "John", occupation: "General", price: 50 },
  { name: "Liz", occupation: "Private", price: 35 },
  { name: "Max", occupation: "Astronomer", price: 25 },
];

const newName = ["Omar", "Hali", "Derik", "Lugene"];

const newOccupation = ["teacher", "chef", "plumber", "electrician"];

const newPrice = [50, 35, 25, 45];

// create an init function

function init() {
  const root = document.querySelector(".freelancer_container");

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const header_row = document.createElement("tr");

  for (let key in freelancers[0]) {
    const th = document.createElement("th");
    th.textContent = key;

    header_row.append(th);
  }

  thead.append(header_row);
  table.append(thead);
  table.append(tbody);
  root.append(table);

  freelancerArray();
}

function freelancerArray() {
  const freelancerTable = document.querySelector("tbody");

  const freelancerElements = freelancers.map((freelancer) => {
    const row = document.createElement("tr");

    const name = document.createElement("td");
    name.textContent = freelancer.name;

    const occupation = document.createElement("td");
    occupation.textContent = freelancer.occupation;

    const price = document.createElement("td");
    price.textContent = freelancer.price;

    row.append(name, occupation, price);

    return row;
  });

  freelancerTable.replaceChildren(...freelancerElements);
}

const addFreelancer = () => {

  const newFreelancer = newName[Math.floor(Math.random() * newName.length)];

  const occupation = newOccupation[Math.floor(Math.random() * newOccupation.length)];

  const price = newPrice[Math.floor(Math.random() * newPrice.length)];

  freelancers.push({
    name: newFreelancer,
    occupation: occupation,
    price: price,
  });

  freelancerArray();
};

setInterval(addFreelancer, 1000);

const getTotalPrice = () => {
  return freelancers.reduce((total, freelancer) => total + freelancer.price, 0);
};
console.log(getTotalPrice());

const avgPrice = document.querySelector(".average_price");

avgPrice.textContent = getTotalPrice()

init();
