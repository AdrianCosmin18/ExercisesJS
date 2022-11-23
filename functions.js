
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

