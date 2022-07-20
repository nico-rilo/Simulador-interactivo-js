function agregarAlCarrito(producto, stock){
    
    const hayStock = tenemosStock(stock);
    console.log("Agregaste el producto: " + producto);
}

function tenemosStock(stock){
    if(stock > 0){
        return "Tenemos stock";
    }else{
        return "No tenemos stock";
    }
}

agregarAlCarrito("Remeras Ramones", 10)
