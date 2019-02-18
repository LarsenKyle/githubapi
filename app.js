const github = new Github();
const ui = new UI();
//Search Input
const searchUser = document.querySelector("#searchUser");

//Search Input Event Listener
searchUser.addEventListener("keyup", e => {
  const userInput = e.target.value;
  if (userInput !== "") {
    github.getUser(userInput).then(data => {
      if (data.profile.message === "Not Found") {
        //Show Alert
      } else {
        //Show Profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    ui.clearProfile();
    //clear profile
  }
});
