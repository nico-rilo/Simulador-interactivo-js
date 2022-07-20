const posts = [{
    id: 1,
    title: "Post 1",
    content: "Content 1",
}]

posts.filter(posts => posts.tags.includes("Remeras Ramones"))

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
