document
  .getElementById("donate-button3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = document.getElementById("donate-input3").value;
    const inputNumber = parseFloat(inputValue);
    if (inputNumber >= 0) {
      const cardValue = document.getElementById("card-value3").innerText;
      const cardValueNumber = parseFloat(cardValue);
      const cardNewBalance = cardValueNumber + inputNumber;
      document.getElementById("card-value3").innerText = cardNewBalance;
      const totalBalance = document.getElementById("total-balance").innerText;
      const totalBalanceNumber = parseFloat(totalBalance);
      const newTotalBalance = totalBalanceNumber - inputNumber;
      document.getElementById("total-balance").innerText = newTotalBalance;

      const historyContainer = document.createElement("div");
      historyContainer.className =
        "bg-gray-800 text-white border-2 border-red mx-40 rounded-lg p-4";
      historyContainer.innerHTML = `
      <p>${cardValueNumber} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
      <p>Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)</p>
      
      `;
      document
        .getElementById("history-container")
        .appendChild(historyContainer);
      alert("You have Donated for Humankind successfully!");
    } else {
      alert(`Invalid donation amount`);
    }
  });
