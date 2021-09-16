const getData = async () => {
  try {
    const data = await fetch("https://syoon0624.github.io/json/test.json").then(
      (res) => res.json()
    );

    const reversedData = data.bankList.reverse();

    let currentDate;
    let dayArr = [];
    let dayCnt = 0;
    let dayName = "";
    let daySpending = 0;
    let daySpendingStr = "";

    const makeDayDiv = () => {
      if (dayCnt === 0) {
        dayName = "오늘";
      } else if (dayCnt === 1) {
        dayName = "어제";
      } else if (dayCnt === 2) {
        dayName = "2일 전";
      } else {
        dayName = currentDate;
      }
      dayCnt++;
      if (daySpending > 0) {
        daySpendingStr = daySpending.toLocaleString() + "원 지출";
      } else {
        daySpendingStr = daySpending.toLocaleString().substring(1) + "원 수입";
      }
      const day = document.createElement("div");
      day.classList.add("day");
      day.innerHTML = `
        <div class="day-title">
          <h3>${dayName}</h3>
          <div class="amount">${daySpendingStr}</div>
        </div>
        <ol id="${currentDate}" class="spendings">
        </ol>
      `;
      const allTheSpendings = document.getElementById("all-the-spendings");
      allTheSpendings.appendChild(day);
      const spendings = document.getElementById(currentDate);

      dayArr.forEach((spending) => {
        const li = document.createElement("li");
        let spendingStr = `${spending.price.toLocaleString()}`;
        if (spending.income === "in") {
          li.innerHTML = `
            <p class="name">${spending.history}</p>
            <p class="amount" style="color: orangered">${"+" + spendingStr}</p>
          `;
        } else {
          li.innerHTML = `
            <p class="name">${spending.history}</p>
            <p class="amount">${spendingStr}</p>
          `;
        }
        spendings.appendChild(li);
      });
    };

    reversedData.forEach((item) => {
      if (!currentDate) {
        currentDate = item.date;
      } else if (currentDate != item.date) {
        makeDayDiv();
        dayArr = [];
        daySpending = 0;
        currentDate = item.date;
      }
      if (item.income === "in") {
        daySpending -= item.price;
      } else {
        daySpending += item.price;
      }
      dayArr.push(item);
    });
    makeDayDiv();
  } catch (err) {
    throw err;
  }
};

getData();
