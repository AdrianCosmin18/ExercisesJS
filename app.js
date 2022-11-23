
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
        gramaj: inputGramajProdus.value,
        calorii: inputKcalProdus.value,
        pret: inputPretProdus.value
    }
    addProduct(product, produse);
    container.innerHTML = createAllRows(produse);
    reset();
});

