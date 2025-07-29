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
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > element) {
            array[j + 1] = array[j];
            pintar(element, array[j]);
            j--;
        }

        array[j + 1] = element;
        imprimir(i);
    }
}

function pintar(element, elementTwo) {
    const html = document.createElement('span');
    html.className = "text-danger fw-bold fs-6";
    html.textContent = `${element} - ${elementTwo}`;
    listOrdenar.appendChild(html);
}

function imprimir(i) {
    let fragment = new DocumentFragment();
    const ul = document.createElement('ul');
    ul.className = "list-group list-group-horizontal mt-2";
    ul.textContent = `Iteración ${i}`;
    
    array.forEach((numero) => {
        const li = document.createElement('li');
        li.className = "list-group-item";
        li.textContent = numero;
        fragment.appendChild(li);
    });

    ul.appendChild(fragment);
    listOrdenar.appendChild(ul);
    
}


function limpiar() {
    while(listAgregar.firstChild) {
        listAgregar.removeChild(listAgregar.firstChild);
    }

    while(listOrdenar.firstChild) {
        listOrdenar.removeChild(listOrdenar.firstChild);
    }

    array = [];
    numeros.value = "";
    numeros.focus();

}