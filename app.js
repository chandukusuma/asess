

// var obj = {
//     method : "GET",
//     url : "curl https://api.jsonbin.io/v3/b/623bad73a703bb674933116c/2 ",
//     headers : {
//         'Secret Key' : "$2b$10$6WNxqXzf860VYp4OQ4xn3Ot5vj6h2PAtXdThHSDG1ZE7HsuLcVjXO"
//     }
// }

fetch('https://api.npoint.io/20c1afef1661881ddc9c')
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log("res", res)
    showList(res)
})

var container = document.getElementById("parent");



function showList(data){
    data.playerList.forEach(function(player){
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.src = `./player-images/${player.Id}.jpg`;
        let fullname = document.createElement("p");
        fullname.innerText = player.PFName;
        let skills = document.createElement("p");
        skills.innerText = "skill:" + " " + player.SkillDesc;
        let value = document.createElement("p");
        value.innerText = "$" + " " +  player.Value;


        let upcomingMatch = document.createElement("p");
        upcomingMatch.innerText = player.CCode + " " + "VS" + " " + "BAY"
        let matchDate = document.createElement("p");
        matchDate.innerText = player.MDate

        div1.append(img, fullname, skills, value, upcomingMatch);
        div.append(div1);
        container.append(div)
        
    })
    sortLow()
}

function sortLow(res){

    res.value.sort(function(a, b){
        return b-a
    })
    
}




 