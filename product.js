let productID = window.location.href
productID = productID.slice(productID.indexOf("productID=") + 10)
let products=[]
getData()

function getData() {
       fetch("https://antoniapuspan.com/mmd/Semester-2/t9/wordpress/wp-json/wp/v2/t-shirt")
        .then(response => response.json())
        .then(products => initData(products))
}


function initData(productsData) {
    let dataDiv = document.getElementById("data-div")

    let myData = document.createElement("p");
    myData.style.display = "none"
    myData.innerHTML = JSON.stringify(productsData);

    dataDiv.appendChild(myData)
    products = JSON.parse(myData.innerHTML)
    showData()
}

function showData(){
    products.forEach(product =>{
        if(product.id == productID){
            console.log(product)
            document.getElementById("productTitle").innerHTML = product.title.rendered
            document.getElementById("priceSpan").innerHTML = product.price
            document.getElementById("shortDesc").innerHTML = product.shortdesc
            // document.getElementById("paragraphs").innerHTML = product.paragraphs
            document.getElementById("main-img").src = "img/" + product.image
            
        }
    })
}
