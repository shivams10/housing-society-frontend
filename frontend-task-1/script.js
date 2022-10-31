let url = "http://localhost:3000/api/user";
let fetchUserBtn = document.getElementById("fetch-user-btn");
let userRowData = document.querySelector("#userdata-table");

async function fetchUserData() {
  try {
      var response = await fetch(url);
      if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        var userInfo = await response.json();
        return userInfo;
  } catch (error) {
      console.error(`Could not get data: ${error}`);
  }
}

function displayUserTable(userInfo) {
  userInfo = userInfo.data;
  for (let i = 0; i < userInfo.length; i++) {
    const html = `<div class="user-row-data">
                <div class="row-cell-id">${userInfo[i].id}</div>
                <div class="row-cell-fname">${userInfo[i].firstname}</div>
                <div class="row-cell-lname">${userInfo[i].lastname}</div>
                <div class="row-cell-contact">${userInfo[i].contact}</div>
                <div class="row-cell-isadmin">${userInfo[i].isadmin}</div>
            </div>`;
    userRowData.insertAdjacentHTML("beforeend", html);
  }
}

fetchUserBtn.onclick = async () => {
    try {
      let userInfo = await fetchUserData();
      displayUserTable(userInfo);
    } catch (error) {
      console.log(error);
    }
  };