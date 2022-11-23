
container = document.querySelector(".table-container");
container.innerHTML = createAllRows(produse);


inputDenumireProdus = document.querySelector(".denumireProdus");
inputMarcaProdus = document.querySelector(".marcaProdus");
inputGramajProdus = document.querySelector(".gramajProdus");
inputKcalProdus = document.querySelector(".kcalProdus");
inputPretProdus = document.querySelector(".pretProdus");
addProductButton = document.querySelector(".add-product");

addProductButton.addEventListener("click", (e) => {
    let product = {
        denumire: inputDenumireProdus.value,
        marca: inputMarcaProdus.value,
        gramaj: Number(inputGramajProdus.value),
        calorii: Number(inputKcalProdus.value),
        pret: Number(inputPretProdus.value)
    }
    addProduct(product, produse);
    container.innerHTML = createAllRows(produse);
    reset();
});


selectDenumire = document.querySelector(".select-denumire");
selectDenumire.innerHTML = createFilterOptions(getProductsDistinctByOptiune("denumire", produse));
selectDenumire.addEventListener("click", p => {
    if(getProductsByDenumire(selectDenumire.value, produse) === 0){
        container.innerHTML = createAllRows(getAllProducts(produse));
    }
    else{
        container.innerHTML = createAllRows(getProductsByDenumire(selectDenumire.value, produse));
    }
})


