

const $templateProduct= document.getElementById("template-product").content;
let $fragment= document.createDocumentFragment();
const $products= document.getElementById("products");

(()=>{

    console.log("hola")

    showProducts()

})()



async function getDataProducts(){

    const dataProducts= await fetch('/productos.json')
    .then((data)=>{
        
        return data.json();

    })


    return dataProducts;
}


async function showProducts(){


    const {products} = await getDataProducts();

    let {templateImage,templateBrand,templateName,templatePrice} = getTemplateElementsProducts();

    let array = []
    
    
    products.forEach(product => {



        templateImage.setAttribute("src",product.image)
        templateBrand.textContent = product.brand
        templateName.textContent = product.name
        templatePrice.textContent = product.price

        let $clone = document.importNode($templateProduct,true);

        $fragment.appendChild($clone)

        
    });

    console.log($fragment)
    console.log($products)
    $products.appendChild($fragment)



}

function getTemplateElementsProducts(){

    let templateImage = $templateProduct.querySelector(".products__item__image")
    let templateBrand = $templateProduct.querySelector(".products__item__brand")
    let templateName= $templateProduct.querySelector(".products__item__name")
    let templatePrice = $templateProduct.querySelector(".products__item__price")

    return {
        templateImage,
        templateBrand,
        templateName,
        templatePrice
    }



}