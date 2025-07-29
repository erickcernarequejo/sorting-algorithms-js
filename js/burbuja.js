const btnAgregar = document.getElementById('btnAgregar');
const btnOrdenar = document.getElementById('btnOrdenar');
const btnLimpiar = document.getElementById('btnLimpiar');
const listAgregar = document.getElementById('listAgregar');
const listOrdenar = document.getElementById('listOrdenar');
let array = [];

cargarEventos();

function cargarEventos() {
    btnAgregar.addEventListener('click', agregar);
    btnOrdenar.addEventListener('click', ordenar);
    btnLimpiar.addEventListener('click', limpiar);
}

function agregar() {
    let numeros = document.getElementById('numeros');
    array.push(Number(numeros.value));
    const li = document.createElement('li');
    li.className = "list-group-item";
    li.textContent = Number(numeros.value);
    listAgregar.appendChild(li);

    //limpiar input
    numeros.value = "";
    numeros.focus();
}

function ordenar() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                intercambio(j);
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        imprimir(i);
    }
}

function intercambio(posJ) {
    let fragment = new DocumentFragment();
    const ul = document.createElement('ul');
    ul.className = "list-group list-group-horizontal mt-2";

    for (let i = 0; i < array.length; i++) {
        if (i == posJ) {
            const li = document.createElement('li');
            li.className = "list-group-item list-group-item-danger";
            li.textContent = array[i];
            fragment.appendChild(li);
        } else if (i == posJ + 1) {
            const li = document.createElement('li');
            li.className = "list-group-item list-group-item-warning";
            li.textContent = array[i];
            fragment.appendChild(li);
        } else {
            const li = document.createElement('li');
            li.className = "list-group-item";
            li.textContent = array[i];
            fragment.appendChild(li);
        }
    }

    ul.appendChild(fragment);
    listOrdenar.appendChild(ul);
}

function imprimir(i) {
    let fragment = new DocumentFragment();
    const ul = document.createElement('ul');
    ul.className = "list-group list-group-horizontal mt-2 fs-4 fw-bold";
    ul.textContent = `Iteración ${i}`;
    
    array.forEach((numero) => {
        const li = document.createElement('li');
        li.className = "list-group-item list-group-item-success align-items-center";
        li.textContent = numero;
        fragment.appendChild(li);
    });

    ul.appendChild(fragment);
    listOrdenar.appendChild(ul);

}


function limpiar() {
    while (listAgregar.firstChild) {
        listAgregar.removeChild(listAgregar.firstChild);
    }

    while (listOrdenar.firstChild) {
        listOrdenar.removeChild(listOrdenar.firstChild);
    }

    array = [];
    numeros.value = "";
    numeros.focus();

}