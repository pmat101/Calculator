const arr = [];

function insert(num) {
  arr.push(num);
  let str = arr.join("");
  document.querySelector(".textview").value = str;
  document.querySelector(".textview").style.textAlign = "right";
}

function equals() {
  let lhs, rhs;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string" && arr[i] != ".") {
      lhs = arr.slice(0, i);
      lhs = lhs.join("");
      lhs = parseFloat(lhs);
      rhs = arr.slice(i + 1, arr.length);
      rhs = rhs.join("");
      rhs = parseFloat(rhs);
      if (arr[i] == "+") document.querySelector(".textview").value = lhs + rhs;
      else if (arr[i] == "-")
        document.querySelector(".textview").value = lhs - rhs;
      else if (arr[i] == "*")
        document.querySelector(".textview").value = lhs * rhs;
      else if (arr[i] == "/")
        document.querySelector(".textview").value = lhs / rhs;
      else if (arr[i] == "%")
        document.querySelector(".textview").value = lhs % rhs;
    }
  }
}

function clean() {
  arr.splice(0, arr.length);
  document.querySelector(".textview").value = "";
}

function back() {
  arr.pop();
  let str = arr.join("");
  document.querySelector(".textview").value = str;
  document.querySelector(".textview").style.textAlign = "right";
}
