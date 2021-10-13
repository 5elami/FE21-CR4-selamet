let data = JSON.parse(cinema);
console.log(data);
console.log(typeof data);


function bowser () {
for (let x of data) {
    document.getElementById("open").innerHTML 
    += `
    <div class="col-sm-12 col-md-6 col-lg-4 mb3">
    <img src="${x.img}" width="300vw" height="500vw"> 
    <h4 class="">${x.titel}</h4> 
    <p>${x.genre}</p>
    <div class="gef btn btn-danger mb-3">${x.likes }Likes</div>
    

    </div>
    
    `;
}}
bowser();
function likeNcrs(cnma) {
  data[cnma].likes += 1; 
  document.getElementsByClassName("gef")[cnma].innerHTML = data[cnma].likes + " likes";
}

var liked = document.getElementsByClassName("gef");

for (let i = 0; i < liked.length; i++) {
  liked[i].addEventListener("click",function() {
    likeNcrs(i);
  });
}




function ordnen() {
  data.sort((a,b) => b.likes - a.likes) ;
  document.getElementById("open").innerHTML="";
  bowser();
}
/* adding the event listener below to sort the top 
  movies of the user comunity */

document.getElementById("top").addEventListener("click",function(){
  ordnen();

})


document.getElementById("forhead").innerHTML +=
 `   <div class="p-3 mb-5 bg-primary text-dark">
    <h1 class="text-center" >Block Cinema</h1>
    </div> `;
 

document.getElementById("foot").innerHTML +=
` <div class="p-3 mb-0 bg-primary text-white">
<h3 class="text-center">BlockCinema</h3> 
</div>`;


