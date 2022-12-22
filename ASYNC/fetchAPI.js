async function fetchPriduct() {

    let fetchResponse$ = await fetch('https://fakestoreapi.com/products')

    let data$ = fetchResponse$.json();

    data$.then((products) => {
        showproducts(products);  

    });
}

function showproducts(products) {
    for (i = 1; i < products.length - 1; i++) {
        document.write(products[i].id+"&nbsp&nbsp&nbsp"+products[i].title+"nbsp&nbsp&nbsp&nbsp"+products[i].price+"<br>");

    }

}
fetchPriduct();

