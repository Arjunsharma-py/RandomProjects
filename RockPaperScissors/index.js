let theme;

function init() {
  theme = "light";
  states = JSON.parse(localStorage.getItem("states")) || {
    win: 0,
    losses: 0,
    draw: 0,
  };
  document.body.classList.add("dark-theme");
  showStates(-1);
}

function usersChoice(choice) {
  let result = computerChoice(Math.random());
  if (result == choice) {
    displayResult(result, choice, 0);
    showStates(0);
  } else if (
    (result == 0 && choice == 1) ||
    (result == 1 && choice == 2) ||
    (result == 2 && choice == 0)
  ) {
    displayResult(result, choice, 1);
    showStates(1);
  } else {
    displayResult(result, choice, 2);
    showStates(2);
  }
  localStorage.setItem("states", JSON.stringify(states));
}

function computerChoice(compChoice) {
  if (compChoice >= 0 && compChoice < 1 / 3) return 0;
  else if (compChoice >= 1 / 3 && compChoice < 2 / 3) return 1;
  else return 2;
}

function showStates(x) {
  if (x == 0) states.draw++;
  else if (x == 1) states.win++;
  else if (x == 2) states.losses++;

  document.querySelector("#total").innerHTML =
    states.win + states.losses + states.draw;
  document.querySelector("#win").innerHTML = states.win;
  document.querySelector("#loss").innerHTML = states.losses;
  document.querySelector("#draw").innerHTML = states.draw;
}

function resetStates() {
  states.win = 0;
  states.losses = 0;
  states.draw = 0;
  localStorage.setItem("states", JSON.stringify(states));
  document.querySelector("#match-image-user").innerHTML = "User";
  document.querySelector("#match-image-comp").innerHTML = "Computer";
  document.querySelector(".result-display").innerHTML = "";
  showStates(-1);
}

function displayResult(result, choice, x) {
  rock = '<img src="./images/rock.png" alt=rock>';
  paper = '<img src="./images/paper.png" alt=paper>';
  scissor = '<img src="./images/scissor.png" alt=scissor>';
  const user = document.querySelector("#match-image-user");
  const comp = document.querySelector("#match-image-comp");
  const res = document.querySelector(".result-display");

  if (choice == 0) user.innerHTML = rock;
  else if (choice == 1) user.innerHTML = paper;
  else if (choice == 2) user.innerHTML = scissor;

  if (result == 0) comp.innerHTML = rock;
  else if (result == 1) comp.innerHTML = paper;
  else if (result == 2) comp.innerHTML = scissor;

  if (x == 0) res.innerHTML = "You Win";
  if (x == 1) res.innerHTML = "You Loss";
  if (x == 2) res.innerHTML = "Match Tie";
}

function changeTheme() {
  if (theme === "light") {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    theme = "dark";
    document.querySelector("#theme").innerText = "Light";
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    theme = "light";
    document.querySelector("#theme").innerText = "Dark";
  }
}
