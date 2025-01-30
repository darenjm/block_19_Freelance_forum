//starting freelancer array with at least 2 objects [{name: 'Sam', occupation: 'Programmer', price: 50}]

//array of names

//array of occupations

const freelancers = [
  { name: "Oliver", occupation: "scientist", price: 50 },
  { name: "Olivia", occupation: "accountant", price: 35 },
  { name: "Sofia", occupation: "bookkeeper", price: 25 },
];

const names = ["Omar", "Hali", "Derik", "Lugene"];

const occupations = ["teacher", "chef", "plumber", "electrician"];

// create an init function

function init() {
  console.log("Hello world");
  const root = document.querySelector(".freelancer_container");
  console.log(root);

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const header_row = document.createElement("tr");

  for (let key in freelancers[0]) {
    const th = document.createElement("th");
    th.textContent = key;

    header_row.appendChild(th);
  }

  thead.append(header_row);
  table.append(thead);
  table.append(tbody);

  root.append(table);

}

init();
