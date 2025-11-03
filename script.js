const button_el = document.getElementById("calculate")
const bill_el = document.getElementById("bill")
const tip_el = document.getElementById("tip")
const total_el = document.getElementById("total")

function calculateTotal() {
  const bill_value = bill_el.value;
  const tip_value = tip_el.value;
  const total_value = bill_value * ((tip_value / 100) + 1)
  total_el.innerText = "$" + total_value.toFixed(2);
}

button_el.addEventListener("click", calculateTotal)