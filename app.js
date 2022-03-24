

// var obj = {
//     method : "GET",
//     url : "curl https://api.jsonbin.io/v3/b/623bad73a703bb674933116c/2 ",
//     headers : {
//         'Secret Key' : "$2b$10$6WNxqXzf860VYp4OQ4xn3Ot5vj6h2PAtXdThHSDG1ZE7HsuLcVjXO"
//     }
// }

fetch('https://api.npoint.io/20c1afef1661881ddc9c')
.then((res) => res.json())
.then((data)  => SortLow(data.playerList));


var container = document.getElementById("parent");

function SortLow(data){
    data = data.sort(function (a, b){
        return a.Value - b.Value
    })(showList(data))
}


function showList(data){
    container.innerHTML= null;
    data.forEach(function(player){
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.src = `./player-images/${player.Id}.jpg`;
        let fullname = document.createElement("p");
        fullname.textContent = player.PFName;
        let skills = document.createElement("p");
        skills.textContent = "skill:" + " " + player.SkillDesc;
        let value = document.createElement("p");
        value.textContent = "$" + " " +  player.Value;
        
        

        let upcomingMatch = document.createElement("p");
        upcomingMatch.textContent = player.CCode + " " + "VS" + " " + "BAY"

        let matchDate = document.createElement("p");
        var date = new Date()
        matchDate.innerText = date.getDate(player.MDate);

        div1.append(img, fullname, skills, value, upcomingMatch, matchDate);
        div.append(div1);
        container.append(div)

        
        
    })
    
}






 