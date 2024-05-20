const previousEl = document.getElementById("previous-el");
const currentEl = document.getElementById("current-el");
const equalsBtn = document.getElementById("equals");

// FUNCTIONS AND LISTENERS

const appendNumber = (num) => {
  if (isNaN(currentEl.value.slice(-1)) && isNaN(num) && num !== "-") {
    return alert("Please check the operation used!");
  } else {
    currentEl.value += num;
  }
};

const calculate = () => {
  let result = eval(currentEl.value);

  const isDecimal = !Number.isInteger(result);

  currentEl.value = isDecimal ? result.toFixed(2) : result.toString();
  previousEl.value = currentEl.value;

  console.log(result);
};

equalsBtn.addEventListener("click", calculate);

document.getElementById("clear").addEventListener("click", () => {
  currentEl.value = "";
  previousEl.value = "";
});

document.getElementById("delete").addEventListener("click", () => {
  currentEl.value = currentEl.value.slice(0, -1);
});
