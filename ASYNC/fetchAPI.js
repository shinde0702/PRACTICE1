async function fetchProducts() {

    let fetchResponse$ = await fetch("https://fakestoreapi.com/products")

    let data$ = fetchResponse$.json();
    data$.then((products) => {

        showProducts(products);
    })

}

function showProducts(products) {
   for(i=0; i<products.length - 1; i++){

    document.write(product[i].id + " &nbSP&nbSP&nbSP"+ product[i].title + "" + product[i].image);
   }
}

fetchProducts();