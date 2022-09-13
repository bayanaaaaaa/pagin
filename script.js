const cardsCont = document.querySelector('.cards')
const btnsCont = document.querySelector('.btn-list')
let dataArr = []

for(let i = 1; i <=38; i++){
    const obj = {
        quote: `Sweet roll gingerbread sweet roll jelly ${i}`,
        date: '1 Jan 2020',
        sweet: 'Cakes'
    }

    dataArr.push(obj)
}

let currentPage = 1;
let row = 6;

function elemGenerator(tag, attr, content){
    if(!tag)return

    const element = document.createElement(tag)

    attr.forEach( item => {
        const arr = Object.entries(item)
        arr.forEach( elem => {
            element.setAttribute(elem[0], elem[1])
        })
    })

    content ? element.innerText = content : ''

    return element
}

const renderData = function(wrapper, data, page, row){
    wrapper.innerHTML = ''
    page--

    let start = page * row;
    let end = start + row
    const newData = data.slice(start, end)
    newData.forEach( obj => {
        const cardBlock = elemGenerator('div', [ {class: 'card'}])
        const quoteBlock = elemGenerator('div', [ {class: 'card__quote'}], obj.quote)
        const sweetBlock = elemGenerator('div', [ {class: 'card__sweet'}], obj.sweet)
        const dateBlock = elemGenerator('div', [ {class: 'card__date'}], obj.date)
        const svgBlock = elemGenerator('div'[{class:'card__image'}])
        <img src="./cookie-cooking-cupcake-dessert-food-meal-svgrepo-com.svg">

        cardBlock.append(quoteBlock, sweetBlock, dateBlock)
        wrapper.append(cardBlock)
    })
    
}

function setupPagination(wrapper, array, row){

    const number = Math.ceil(array.length / row)
    
    for (let i = 1; i <= number; i++) {
        const btn = btnPagination(i)

        wrapper.append(btn)
    }
}

function btnPagination(number){
    const button = document.createElement('button')
    button.classList.add('btn')
    button.innerText = number
    currentPage == number ? button.classList.add('active') : false

    button.addEventListener('click', () => {
        currentPage = number
        renderData(cardsCont, dataArr, currentPage, row)
    })

    return button
    
}

setupPagination(btnsCont, dataArr, row)

renderData(cardsCont, dataArr, currentPage, row)

