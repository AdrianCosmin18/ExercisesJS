
//returneaza o linie de tabel
function createRow(p){
    return `
    <tr>
        <th>${p.denumire}</th>
        <td>${p.marca}</td>
        <td>${p.gramaj}</td>
        <td>${p.calorii}</td>
        <td>${p.pret}</td>
    </tr>
    `;
}

//returneaza toate prdousele sub forma de linii de tabel
function createAllRows(products){
    let text = "";
    products.forEach((p) => {
        text += createRow(p);
    });
    return text;
}

//resetarea campurilor de adaugare masina, care va fi apelata dupa o adaugare
function reset(){
    inputDenumireProdus.value = "";
    inputGramajProdus.value = "";
    inputKcalProdus.value = "";
    inputPretProdus.value = "";
    inputMarcaProdus.value = "";
}

//functie adaugare masina
function addProduct(product, products){
    products.push(product);
}

//functie care ret o lista de denumiri de produse care sa apara o sg data
function getProductsDistinctByOptiune(optiune, products){
    let v = [];
    v.push("Deschide pentru a filtra dupa denumirea produsului");
    for (let i = 0; i < products.length; i++){
        if (v.includes(products[i][`${optiune}`]) === false){
            v.push(products[i][`${optiune}`]);
        }
    }
    return v;
}

//functie care returneaza un option pentru filtrare
function createOption(option){
    return `
        <option value="${option}">${option}</option>
    `;
}

//functie care ret lista de optiuni pentru filtrari
function createFilterOptions(listaOptiuniFiltrare){
    let text = "";
    listaOptiuniFiltrare.forEach(optiune => {
        text += createOption(optiune);
    })
    return text;
}

//fct care ret toare produsele
function getAllProducts(products){
    let v = [];
    for (let i = 0; i < products.length; i++){
        v.push(products[i]);
    }
    return v;
}

//functie care ret toate produsele cu aceeasi denumire o sg data
function getProductsByDenumire(nume, products){
    let v = [];
    for (let i = 0; i < products.length; i++){
        if (products[i].denumire === nume){
            v.push(products[i]);
        }
    }
    return v;
}