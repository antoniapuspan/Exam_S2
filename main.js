function getData() {
    fetch("https://antoniapuspan.com/mmd/Semester-2/t9/wordpress/wp-json/wp/v2/t-shirt")
    .then(response => response.json())
    .then(products => {
        var productTemplate = document.getElementById("product-template").content;
        var productsList = document.getElementById("products-list")
        
        products.forEach(product => {
            var cloneProd = productTemplate.cloneNode(true)
            cloneProd.querySelector(".card-img").src = "img/" + product.image
            cloneProd.querySelector(".card-title").innerHTML = product.title.rendered
            cloneProd.querySelector(".price span").innerHTML = product.price
            cloneProd.querySelector(".card").setAttribute('onclick', `openProduct("${product.id}")`)
            productsList.appendChild(cloneProd)
        })
    })
}

getData()

function openProduct(id) {
    window.location.href = `product.html?productID=${id}`
}