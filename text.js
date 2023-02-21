let numbers = document.querySelectorAll(".num span");
let result1 = document.querySelector(".result");
let re = 0;
let arr = [];
let op = "";
let count = 0;
numbers.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    numbers.forEach((le) => {
      le.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    if (e.currentTarget.innerHTML == "=") {
      count++;
      if (count >= 2) {
        re = 0;
        arr = [];
        count = 0;
        result1.innerHTML = 0;
      }
      for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) || arr[i] == 0) {
        } else {
          op = arr[i];
          console.log(parseInt(arr[i]));
        }
      }
      let news = arr.join("").split(`${op}`);
      let result = 0;
      if (op == "-") {
        result = Number(news[0]) - Number(news[1]);
      } else if (op == "+") {
        result = Number(news[0]) + Number(news[1]);
      } else if (op == "/") {
        result = Number(news[0]) / Number(news[1]);
      } else if (op == "*") {
        result = Number(news[0]) * Number(news[1]);
      }
      if (!isNaN(result)) {
        result1.innerHTML = result;
      }
      re = 0;
      arr = [];
    } else if (e.currentTarget.innerHTML) {
      arr.push(e.currentTarget.innerHTML);
      result1.innerHTML = arr.join(" ");
      if (!isNaN(arr.join(" "))) {
        result1.innerHTML = arr.join(" ");
      }
    }
  });
});
