// VARIABLES
let operatingA = 0;
let operatingB = 0;
let operator = "";
let total;
let value;

// HTML ELEMENTS
const screen = document.querySelector("#result");
const refreshBtn = document.querySelector("#refresh");
const equalBtn = document.querySelector("#equal");
let previousValue = document.querySelector(".previous");

// OPERATIONS
const buttons = document.querySelectorAll(".numbers_button");
const buttonsArr = Array.from(buttons);
const addBtn = document.querySelector("#addition");
const substractBtn = document.querySelector("#substraction");
const divisionBtn = document.querySelector("#division");
const multBtn = document.querySelector("#multiplication");
const remaindBtn = document.querySelector("#remainder");
const changedBtn = document.querySelector("#changed");
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
const btnHidden = document.querySelector(".table");

// NUMBER BUTTONS
buttonsArr.forEach((button) => {
  button.addEventListener("click", getValue);
});

// LISTENER
refresh.addEventListener("click", reset);
equalBtn.addEventListener("click", equal);
addBtn.addEventListener("click", sum);
substractBtn.addEventListener("click", substraction);
divisionBtn.addEventListener("click", division);
multBtn.addEventListener("click", multiplication);
remaindBtn.addEventListener("click", remainder);
changedBtn.addEventListener("click", changed);
colorSwitch.addEventListener("change", changeTheme);
btnHidden.addEventListener("click", toggle);

// FUNCTIONS
function getValue(e) {
  value = e.target.value;
  let displayedNum = screen.textContent;
  if (displayedNum === "0") {
    screen.textContent = value;
  } else {
    screen.textContent = screen.textContent + value;
    previousValue.textContent = `${previousValue.textContent}`;
  }
}
function addHistory() {
  const operationsList = document.querySelector("#operations");
  const liItem = document.createElement("li");
  liItem.textContent =
    liItem.textContent + `${operatingA} ${operator} ${operatingB} = ${total} `;
  liItem.classList.add("listjs");
  liItem.style.textDecoration = "none";
  liItem.style.gridColumn = "1/5";
  operationsList.appendChild(liItem);

  if (operationsList > 0) {
    return;
  } else {
    operationsList.appendChild(liItem);
  }
}
function sum() {
  addBtn.classList.add("is-clicked");
  operatingA = screen.textContent;
  operator = "+";
  previousValue.textContent = `${operatingA} ${operator}`;
  screen.style.color = "white";
  clear();
}
function substraction() {
  substractBtn.classList.add("is-clicked");
  operatingA = screen.textContent;
  operator = "-";
  previousValue.textContent = `${operatingA} ${operator}`;
  screen.style.color = "white";
  clear();
}
function division() {
  divisionBtn.classList.add("is-clicked");
  operatingA = screen.textContent;
  operator = "/";
  previousValue.textContent = `${operatingA} ${operator}`;
  screen.style.color = "white";
  clear();
}
function multiplication() {
  multBtn.classList.add("is-clicked");
  operatingA = screen.textContent;
  operator = "*";
  previousValue.textContent = `${operatingA} ${operator}`;
  screen.style.color = "white";
  clear();
}
function remainder() {
  remaindBtn.classList.add("is-clicked");
  operatingA = screen.textContent;
  operator = "%";
  previousValue.textContent = `${operatingA} ${operator}`;
  screen.style.color = "white";
  clear();
}
function equal() {
  operatingB = previousValue.textContent;
  operatingB = screen.textContent;
  resolve();
}
function reset() {
  previousValue.textContent = "";
  screen.textContent = "0";
  screen.style.color = "white";
  operatingA = 0;
  operatingB = 0;
  operator = "";
}
function clear() {
  screen.textContent = "";
}
function changed() {
  if (screen.textContent === -screen.textContent) {
    screen.textContent = screen.textContent;
  } else {
    screen.textContent = -screen.textContent;
    resultColor(screen.textContent);
  }
}
function resultColor(total) {
  if (total > 0) {
    screen.style.color = "green";
  } else if (total < 0) {
    screen.style.color = "red";
  }
}
function changeTheme(ev) {
  if (ev.target.checked) {
    document.documentElement.setAttribute("theme", "light");
  } else {
    document.documentElement.setAttribute("theme", "dark");
  }
}
function toggle() {
  document.querySelector(".operations").classList.toggle("hide");
}
function resolve() {
  switch (operator) {
    case "+":
      total = parseFloat(operatingA) + parseFloat(operatingB);
      break;
    case "-":
      total = parseFloat(operatingA) - parseFloat(operatingB);
      break;
    case "*":
      total = parseFloat(operatingA) * parseFloat(operatingB);
      break;
    case "/":
      total = parseFloat(operatingA) / parseFloat(operatingB);
      break;
    case "%":
      total = parseFloat(operatingA) % parseFloat(operatingB);
      break;
  }

  addBtn.classList.remove("is-clicked");
  substractBtn.classList.remove("is-clicked");
  divisionBtn.classList.remove("is-clicked");
  multBtn.classList.remove("is-clicked");
  remaindBtn.classList.remove("is-clicked");
  addHistory();
  screen.textContent = total;
  previousValue.textContent = `${operatingA} ${operator} ${operatingB}`;
  resultColor(total);
  return total;
}
