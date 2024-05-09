const phones = [

    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Abdullah',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    }
]



// const phones = [

// ]

const arr = []

const div = document.querySelector('.product')
function renderItem (){
    for(let i = 0; i < phones.length; i++){
    // console.log(phones[i]);
    div.innerHTML += `
    <div class="d-flex justify-content-center flex-wrap gap-5" id="product"></div>   
<div class="card bg-dark text-light border-white" style="width: 18rem;">
    <div class="card-body">
<h5 class="card-title">${phones[i].brand +' '+ phones[i].model} </h5>
<p class="card-text">RS ${phones[i].price}</p>

      <button onclick="addtocart(${i})" class=" btn btn-primary">Add To Cart</button>
    </div>
  </div>    
    `
}
}
renderItem()

function addtocart(index){
    // console.log(arr.includes(phones[index]));
    if(arr.includes(phones[index])){
        phones[index].quantity += 1;

    }else{
    phones[index].quantity = 1;
    // console.log(phones[index]);
    arr.push(phones[index]);
    
}
console.log(arr);
}
