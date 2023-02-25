



const carContainer = document.getElementById('data-container');
carContainer.innerHTML=`

<div class="col">
<div class="card">
  <img src=${data[0].imageURL} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Car Name: ${data[0].name}</h5>
    <p class="card-text">Car details: ${data[0].description}</p>
    <span class="bg-primary p-2 text-white rounded ">car price: ${data[0].price}</span>
  </div>
</div>
</div>
<div class="col">
<div class="card">
  <img src=${data[1].imageURL} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Car Name: ${data[1].name}</h5>
    <p class="card-text">Car details: ${data[1].description}</p>
    <span class="bg-primary p-2 text-white rounded ">car price: ${data[1].price}</span>
  </div>
</div>
</div>

`