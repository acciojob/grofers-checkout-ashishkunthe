const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price cells
  const prices = document.querySelectorAll(".price");

  let total = 0;

  prices.forEach((price) => {
    total += parseFloat(price.textContent);
  });

  // Prevent adding multiple total rows
  const existingTotal = document.getElementById("total-row");
  if (existingTotal) {
    existingTotal.remove();
  }

  // Create new row
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ${total}`;

  totalRow.appendChild(totalCell);

  // Append to table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
