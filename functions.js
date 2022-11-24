
//returneaza o linie de tabel
function createRow(p){
    return `
    <tr>
        <th type="id" class="product product-${p.id}">${p.id}</th>
        <th>${p.denumire}</th>
        <td>${p.marca}</td>
        <td>${p.gramaj}</td>
        <td>${p.calorii}</td>
        <td>${p.pret}</td>
        <td><button type="button" class="btn btn-danger ${p.id}">Sterge</button></td>
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
    return products;
}

//functie care ret o lista de denumiri de produse care sa apara o sg data
function getProductsDistinctByOptiune(optiune, products){
    let v = [];
    v.push("Deschide pentru a filtra dupa " + optiune);
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

//fct care ret produse cu o anumita marca
function getProductsByMarca(marca, products){
    let v = [];
    for (let i = 0; i < products.length; i++){
        if (products[i].marca === marca){
            v.push(products[i]);
        }
    }
    return v;
}

//fct care ret produse cu pret intre un min si un max
function getProductsByMinAndMaxOption(min, max, products, option){
    let v = [];
    for (let i = 0; i < products.length; i++){
        if (products[i][`${option}`] >= min && products[i][`${option}`] <= max){
            v.push(products[i]);
        }
    }
    return v;
}

//fct care sterge un produs dupa denumire + marca
function deleteById(id, products){
    let v = [];
    for (let i = 0; i < products.length; i++){
        if (products[i].id !== id){
            v.push(products[i]);
        }
    }
    return v;
}

//fct care ret ultimul id din lista
function getLastId(products){
    return produse[produse.length - 1].id;
}

//fct care ret un produs dupa id
function getProductById(id, products){
    for(let i = 0; i < products.length; i++){
        if (products[i].id === id){
            return products[i];
        }
    }
    return null;
}

//fct care updateaza un produs
function updateProductById(products, id, denumire, marca, gramaj, kcal, pret){
    let v = [];
    for(let i = 0; i < products.length; i++){
        if(products[i].id === id){
            let produs = products[i];
            produs.denumire = denumire;
            produs.marca = marca;
            produs.gramaj = gramaj;
            produs.calorii = kcal;
            produs.pret = pret;
            v.push(produs);
        }
        else{
            v.push(products[i]);
        }
    }
    return v;
}

//sortare dupa marca
function sortare(arr, criteriu) {
    let schimb, aux;
    do {
        schimb = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i][`${criteriu}`] > arr[i + 1][`${criteriu}`]) {
                aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
                schimb = true;
            }
        }
    } while (schimb);
    return arr;
}