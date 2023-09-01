// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt('Какая скидка?')

let totalSale = Number

let total = Number

let max = Object

let min = Object

let average = Number

let arr = [

{

name: 'Milk',

price: 3.25

},

{

name: 'Coffee',

price: 1.5

},

{

name: 'Ice Cream',

price: 7.85

},

{

name: 'Tomatos',

price: 4.14

},

{

name: 'Onion',

price: 2.25

}

]

let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max`*

// 2. Сохранить самый дешевый товар в переменную`min`*

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {

    max = arr.reduce((a, b) => a.price > b.price ? a : b)
    min = arr.reduce((a, b) => a.price < b.price ? a : b)
    console.log(max, min); // 1, 2
    



    total = arr.reduce((a, b) => a + b.price, 0);
    console.log(total); // 3


    let a = total * discount / 100
    totalSale = total - a
    console.log(totalSale); // 4


    arr.forEach(item => {
        let discountSale = item.price - item.price * discount / 100
        arr_sale.push({discountSale, ...item})
    })
    console.log(arr)
    console.log(arr_sale); //5


    average = total / arr.length;
    console.log(average); // 6
}

setup()
