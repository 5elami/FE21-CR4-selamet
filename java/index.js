let mydata = JSON.parse(cinema);
console.log(mydata)

console.log(typeof mydata);

for (let x of cinema) {
    document.getElementById("open").innerHTML 
    += `<div class="col-3">
    <img src="${x.img}" width="300"> 
    <p>${x.titel}</p> 
    <p>${x.genre}</p>
    </div>`;
 }