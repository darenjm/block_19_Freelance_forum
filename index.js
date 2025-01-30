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

  freelancerArray(); 
}

function freelancerArray() {
    const freelancerTable = document.querySelector('tbody');

    const freelancerElements = freelancers.map(freelancer => {
        const row = document.createElement('tr');

        const name = document.createElement('td');
        name.textContent = freelancer.name;

        const occupation = document.createElement('td');
        occupation.textContent = freelancer.occupation;

        const price = document.createElement('td');
        price.textContent = freelancer.price;

        row.append(name, occupation, price);

        return row;
    });

    freelancerTable.replaceChildren(...freelancerElements);
}

init();
