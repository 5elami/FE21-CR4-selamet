let data = JSON.parse(cinema);
console.log(data);
console.log(typeof data);



for (let x of data) {
    document.getElementById("open").innerHTML 
    += `
    <div class="col-sm-12 col-md-6 col-lg-4 mb3">
    <img src="${x.img}" width="300vw" height="500vw"> 
    <p class="">${x.titel}</p> 
    <p>${x.genre}</p>
    <input class="btn btn-danger" type="submit" onClick="onClick()" value=${x.likes }Likes>
    </div>
    
    `;
}


document.getElementById("forhead").innerHTML +=
 `   <div class="p-3 mb-5 bg-primary text-dark">
    <h1 class="text-center" >Block Cinema</h1>
    </div>`;
 

document.getElementById("foot").innerHTML +=
` <div class="p-3 mb-0 bg-primary text-white">
<h3 class="text-center">BlockCinema</h3> 
</div>`;


