const producto = "Remera";

function agregarAlCarrito(producto, stock){
    console.log("Agrega tu remera al carrito: " + producto);
    console.log("Cantidad disponible: " + stock);
}

function hayStock(stock){
    if(stock > 0){
        return "Tenes stock disponible";
    }else{
        return "No tenes stock disponible";
    }
}

if(true){
    var x = "Talle"
}
console.log(x);

if(true){
    var x = "XXL"
}
console.log(x);

if(true){
    var x = "XL"
}
console.log(x);

if(true){
    var x = "L"
}
console.log(x);

if(true){
    var x = "M"
}
console.log(x);

if(true){
    var x = "S"
}
console.log(x);

if(true){
    var x = "XS"
}
console.log(x);

if(true){
    var x = "XXS"
}
console.log(x);

const deQueBandaQueresTuRemera = prompt("Elegi tu banda: Los Redondos, Los Gardelitos, La Renga, The Beatles, Ramones");
const talleDeTuRemera = prompt("Elegi el talle de tu remera: XXL, XL, L, M, S, XS, XXS");

agregarAlCarrito("Remera Los Redondos", 10, deQueBandaQueresTuRemera, talleDeTuRemera);
agregarAlCarrito("Remera Los Gardelitos", 20, deQueBandaQueresTuRemera, talleDeTuRemera);
agregarAlCarrito("Remera La Renga", 17, deQueBandaQueresTuRemera, talleDeTuRemera);
agregarAlCarrito("Remera The Beatles", 26, deQueBandaQueresTuRemera, talleDeTuRemera);
agregarAlCarrito("Remera Ramones", 65, deQueBandaQueresTuRemera, talleDeTuRemera);
