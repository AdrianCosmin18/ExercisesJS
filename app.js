
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
        id: getLastId(produse) + 1,
        denumire: inputDenumireProdus.value,
        marca: inputMarcaProdus.value,
        gramaj: Number(inputGramajProdus.value),
        calorii: Number(inputKcalProdus.value),
        pret: Number(inputPretProdus.value)
    }
    produse = addProduct(product, produse);
    container.innerHTML = createAllRows(produse);
    reset();
});


selectDenumire = document.querySelector(".select-denumire");
selectDenumire.innerHTML = createFilterOptions(getProductsDistinctByOptiune("denumire", produse));
selectDenumire.addEventListener("click", p => {
    if((getProductsByDenumire(selectDenumire.value, produse)).length === 0){
        container.innerHTML = createAllRows(getAllProducts(produse));
    }
    else{
        container.innerHTML = createAllRows(getProductsByDenumire(selectDenumire.value, produse));
    }
})


selectMarca = document.querySelector(".select-marca");
selectMarca.innerHTML = createFilterOptions(getProductsDistinctByOptiune("marca", produse));
selectMarca.addEventListener("click", p => {
    if((getProductsByMarca(selectMarca.value, produse)).length === 0){
        container.innerHTML = createAllRows(getAllProducts(produse));
    }
    else{
        container.innerHTML = createAllRows(getProductsByMarca(selectMarca.value, produse));
    }
})



inputPretDeLa = document.querySelector(".pretDeLa");
inputPretPanaLa = document.querySelector(".pretPanaLa");
cautaDupaPretButton = document.querySelector(".searchByPrice");
cautaDupaPretButton.addEventListener("click", p => {
    let deLa = Number(inputPretDeLa.value);
    let panaLa = Number(inputPretPanaLa.value);
    if(panaLa === 0){
        panaLa = 99999;
    }
    let arr = getProductsByMinAndMaxOption(deLa, panaLa, produse, "pret");
    container.innerHTML = createAllRows(arr);
})


inputMinCalorii = document.querySelector(".minCalorii");
inputMaxCalorii = document.querySelector(".maxCalorii");
cautaDupaCaloriiButton = document.querySelector(".searchByKcal");
cautaDupaCaloriiButton.addEventListener("click", p => {
    let minKcal = Number(inputMinCalorii.value);
    let maxKcal = Number(inputMaxCalorii.value);
    if(maxKcal === 0){maxKcal = 999;}
    let arr = getProductsByMinAndMaxOption(minKcal, maxKcal, produse, "calorii");
    container.innerHTML = createAllRows(arr);
})


deleteProductButton = document.querySelector(".deleteProduct");
container.addEventListener("click", p => {
    let obj = p.target;
    if(obj.tagName === "BUTTON"){
        let id = Number(obj.classList[2]);
        produse = deleteById(id, produse);
        container.innerHTML = createAllRows(produse);
    }
})



updateButton = document.querySelector(".updateButton");
inputIdUpdate = document.querySelector(".idProdusUpdate");
inputNouDenumire = document.querySelector(".denumireProdusUpdate");
inputNouMarca = document.querySelector(".marcaProdusUpdate");
inputNouGramaj = document.querySelector(".gramajProdusUpdate");
inputNouKcal = document.querySelector(".kcalProdusUpdate");
inputNouPret = document.querySelector(".pretProdusUpdate");

container.addEventListener("click", p => {
    let obj = p.target;
    if(obj.classList.contains("product")){
        let arr = obj.classList[1].split("-");
        let produs = getProductById(Number(arr[1]), produse);
        inputIdUpdate.value = produs.id;
        inputNouDenumire.value = produs.denumire;
        inputNouMarca.value = produs.marca;
        inputNouGramaj.value = produs.gramaj;
        inputNouKcal.value = produs.calorii;
        inputNouPret.value = produs.pret;
    }
});
updateButton.addEventListener("click", p => {
    produse = updateProductById(produse, Number(inputIdUpdate.value), inputNouDenumire.value, inputNouMarca.value, Number(inputNouGramaj.value), Number(inputNouKcal.value), Number(inputNouPret.value));
    container.innerHTML = createAllRows(produse);
})


sortareGramaj = document.querySelector(".sortareGramaj");
sortareKcal = document.querySelector(".sortareCalorii");
sortarePret = document.querySelector(".sortarePret");

sortareGramaj.addEventListener("click", p => {
    container.innerHTML = createAllRows(sortare(produse, sortareGramaj.value));
});

sortareKcal.addEventListener("click", p => {
   container.innerHTML = createAllRows(sortare(produse, sortareKcal.value));
});

sortarePret.addEventListener("click", p => {
    container.innerHTML = createAllRows(sortare(produse, sortarePret.value));
});