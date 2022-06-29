// const element = document.getElementById(Id);
let topo =document.getElementById ('cabeçalho')
topo.style.border = 'solid 3px black'

// Pegando um Elemento pela TagName

let elements = document.getElementsByTagName('tagName')[];
let titulo = document.getElementsByTagName ('h2')[0];
let nome ='principal'
titulo.style.color = 'white'
titulo.innerText = 'colocando um titulo ${nome} para vocês entenderem'
let sub = document.getElementsByTagName ('h2')[1]
sub.style.color = 'white'
let btn = documet.getElementsByTagName('Button')[0]
btn.innerText ='Clique Aqui'
btn.style.fontSize ='20px'
let corpo = document.body
corpo.style.backgroundColor = "black"

function clicar (){
    sub.innerText = "Mudei"
    sub.style = 'red'
    corpo.style.backgroundColor ='yellow'

}

let elements = document.getElementsByClassName(names);
let menu = document.getElementById('menu')
let items = menu.getElementsByClassName('list')

let data = [].map.call (items,item = > item.textContent)
console.log(data)

let nodeList = document.querySelectorAll('.list')
console.log (nodeList)
let element = Array.from (NodeList)
elements.ariaHasPopup()
console.log(elements)

// nodeList é uma lista de nós
// Array de matriz é uma lista de dados

// 1 Seletor Universal
let elements  = document.querySelector('*') 
console.log (elements)

// 2 Seletor de tipo

let tituloPrincipal = document.querySelector('h1')
console.log(tituloPrincipal)

// 3.Seletor de class

let item = document.querySelector('.list')
console.log (item)
let items = document.querySelectorAll('.list')
console.log(items)

//4 seletor de id

let cabecalho = document.querySelector('#cabecalho')
console.log(cabecalho) 
[atributo]
[atributo~=value]

//5 seletor pelo atributo
 let dado = document.querySelector('[alt]')
console.log(dado) 


