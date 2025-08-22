const teamTable = document.getElementById("teams");
const loadingGif = document.getElementById("loading");
async function getBundesligaTeams() {
  const url = "https://api.openligadb.de/getbltable/bl1/2024";
  const options = {
    method: "GET"
  };

  try {
    // todo: add loading
    teamTable.style.display = "none";
    const response = await fetch(url, options);
    const data = await response.json();
    data.forEach(({teamName, teamIconUrl, points}) => {
        createTableRow(teamTable, teamName, teamIconUrl, points)
        console.log(teamName, teamIconUrl, points);
    });
    teamTable.style.display = "block";
    loadingGif.style.display = "none";
  } catch (err) {
    console.log(err);
  }
}

function createTableRow(table, name, icon, points) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("img");
    let td3 = document.createElement("td");
    td1.textContent = name;
    td2.src = icon;
    td3.textContent = points;
    tr.append(td2);
    tr.append(td1);
    tr.append(td3);
    table.append(tr);
}

getBundesligaTeams();
