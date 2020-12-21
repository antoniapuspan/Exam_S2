let productID = window.location.href
productID = productID.slice(productID.indexOf("productID=") + 10)
getData()

function getData() {
    fetch("https://antoniapuspan.com/mmd/Semester-2/t9/wordpress/wp-json/wp/v2/t-shirt")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                if (product.id == productID) {
                    document.getElementById("productTitle").innerHTML = product.title.rendered
                    document.getElementById("priceSpan").innerHTML = product.price
                    document.getElementById("shortDesc").innerHTML = product.shortdesc
                    document.getElementById("main-img").src = "img/" + product.image

                }
            })
        })

}