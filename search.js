
let query = document.getElementById("query").value;
fetch(`https://api.npoint.io/20c1afef1661881ddc9c/?q=${query}`)
.then((res) => res.json())
.then((data)  => searchTeam(data.teamsList));
let teams = document.getElementById("get");

let parent = document.getElementById("search")

function searchTeam(data){
    teams.innerHTML = null;
    data.forEach(function(team){
        
        let div = document.createElement("div");
        div.textContent = team.officialName

        teams.append(div)
       
    })
}