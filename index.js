

(()=>{

    console.log("hola")

    showProducts()

})()



function showProducts(){


    fetch('/productos.json')
    .then((data)=>{
        
        return data.json();

    })
    .then((data)=>{
        console.log(data.products[0])
    })


}