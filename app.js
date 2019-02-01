//Search Input
const searchUser = document.querySelector("#searchUser");

//Search Input Event Listener
searchUser.addEventListener("keyup", e => {
  const userInput = e.target.value;
  if (userInput !== "") {
    console.log(userInput);
  }
});
