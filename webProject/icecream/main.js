document.addEventListener("DOMContentLoaded",(()=>{

    const scoops = document.getElementById("scoops");
    const cone = document.getElementById("cone");
    const cup = document.getElementById("cup");
    
    const toppings = document.getElementById("toppings");

    const sprinkles = document.getElementById("sprinkles");
    const whipped_cream = document.getElementById("whipped_cream");
    const hot_fudge = document.getElementById("hot_fudge");
    const cherry = document.getElementById("cherry");

    const order = document.getElementById("order");

    const price = document.getElementById("price");
    const tax = document.getElementById("tax");
    const total = document.getElementById("total");

    function updateToppings(){
        toppings.style.display = cup.checked ? 'block' : 'none';
    }

    cone.addEventListener("change", updateToppings);
    cup.addEventListener("change", updateToppings);

    order.addEventListener("click", ()=>{
    console.log("order click")
        const results = iceCreamPrice(
            Number(scoops.value),
            cup.checked,
            sprinkles.checked,
            hot_fudge.checked,
            whipped_cream.checked,
            cherry.checked
        );

        price.innerHTML =  dollars(results.price);
        tax.innerHTML = dollars(results.tax);
        total.innerHTML = dollars(results.total);

    });//end click
}));// end loaded