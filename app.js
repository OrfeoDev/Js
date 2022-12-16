
/*const numTab = [1,2,3,4,5,6,7];
for (let i=0;i<numTab.length;i++){
    console.log(numTab[i]);
}*/
const str = 'Lorem ipsum dolor sit amet.';
const regex = /[a]/;
console.log(str.charAt(4));
console.log(str.slice(15));
console.log(str.match(regex))

const toArray = str.split(' ');
console.log(toArray)

let orfeo =
    {
        prenom: 'Or',
        nom: 'Dmc',
        age: 18,
        taille: 187,
        noire: true,
        presentation: function () {
            console.log("Hello world");

        }
    }
console.log(orfeo.presentation())
const voiture =
    {
        couleur: 'noire',
        marque: 'peugeot',
        annee: 2011,
        myFunction: function () {
            console.log(this.annee)
        }
    }
const btn = document.querySelector('button');
btn.addEventListener('click', voiture.myFunction.bind(voiture));
/* for (let props in voiture)
 {
     console.log(props,voiture[props])
 }
const fruits = ['pommes','oranges', 'bananes'];
 for (let fruit of fruits)
 {
     console.log(fruits.indexOf(fruit),fruit);

 }*/
const premierTitre = document.querySelector('.premier-titre');
const liste = document.querySelector('ul')
premierTitre.innerText = "hello world depuis js"
const parent = document.querySelector('.parent');
parent.innerHTML = '<h1>texte</h1>';
let nvlEment = document.createElement('li');
nvlEment.innerText = "nouvel element"
liste.appendChild(nvlEment);
liste.children[2].remove();

const bloc = document.querySelector('.bloc');
const titre = document.querySelector('h1')

let posX = 0;
let posY = 0;

bloc.addEventListener('mousemove', (e) => {
    console.log(e);
    posX = e.clientX;
    posY = e.clientY;
    titre.innerText = `posX:${posX},posY:${posY}`;
})
window.addEventListener('load', () => {
    console.log('le site a chargé')
})

window.addEventListener('DOMContentLoaded', () => {
    console.log('le site est en train de se chargé')
})

window.addEventListener('scroll', () => {
    console.log('tu scroll')
})
window.addEventListener('keydown', (e) => {
    console.log(e);
})
document.getElementById('texte').addEventListener('input', () => {
    console.log("l'inpur test 1.2.3");
})
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("formulaore envoyé")
})
const promise1 = new Promise((resolve, rejet) => {
    console.log("hello")
    resolve('les donnees')
})
promise1.then((value) => {
    console.log(value)
}).catch(() => {
    console.log("erreur")
})
console.log(promise1)

async function foo() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Action effectue !'), 1000)
    });
    let resultat = await p1;
    console.log(resultat)
}

foo();
/*Ancienne methode de connexion a une API*/

const listes = document.querySelector('.listes');
const btn1 = document.querySelector('.btn1');
/*const btnSupp = document.querySelector('')*/
const xhr = new XMLHttpRequest();

/*
btn1.addEventListener('click', () => {
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.responseType ="json";
    xhr.onload = function () {
        /!* console.log(JSON.parse(xhr.response));*!/
        console.log(xhr.response);

        for (i = 0; i < xhr.response.length; i++) {

            let newLi = document.createElement('li');
            let newTitreCarte = document.createElement('h2');
            let newBodyCarte = document.createElement('p');

            newTitreCarte.innerText = xhr.response[i].title;
            newBodyCarte.innerText = xhr.response[i].body;

            newLi.appendChild(newTitreCarte);
            newLi.appendChild(newBodyCarte);

            listes.appendChild(newLi);
        }
    }
    xhr.send();
})
*/
/*Nouvelle methode de connection a une Api*/
btn1.addEventListener('click', () => {

    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
        .then(data => {
            for ( i = 0; i < data.length; i++) {

                let newLi = document.createElement('li');
                let newTitreCarte = document.createElement('h2');
                let newBodyCarte = document.createElement('p');


                newTitreCarte.innerText = data[i].title;
                newBodyCarte.innerText = data[i].body;

                newLi.appendChild(newTitreCarte);
                newLi.appendChild(newBodyCarte);

                listes.appendChild(newLi);
            }
        })


})
/*

import {data}from './headers.js';
console.log(data)*/
