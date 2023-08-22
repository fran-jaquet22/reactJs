const products = [
    {
        id:'1',
        title: 'Alfajores de Maicena',
        category: 'Merienda',
        img: 'https://img-global.cpcdn.com/recipes/beb5adc27def46a9/1360x964cq70/alfajores-de-maicena-foto-principal.webp',
        price: 1500,
        description:'Alfajores de maicena'
    },
    {
        id:'2',
        title: 'Pastafrola de membrillo',
        category: 'Merienda',
        img: 'https://img-global.cpcdn.com/recipes/71cb357ef7ce25e5/1360x964cq70/pasta-frola-foto-principal.webp',
        price: 3000,
        description:'Pastafrola de membrillo'
    },
    {
        id:'3',
        title: 'Bizcochuelo vegano de limón',
        category: 'Merienda',
        img: 'https://img-global.cpcdn.com/recipes/25a945d2466e8be5/1360x964cq70/bizcochuelo-vegano-de-limon-foto-principal.webp',
        price: 2500,
        description:'Bizcochuelo vegano de limón'
    },
    {
        id:'4',
        title: 'Pizza dulce',
        category: 'Merienda',
        img: 'https://img-global.cpcdn.com/recipes/45abccf620103d9b/1360x964cq70/pizza-dulce-foto-principal.webp',
        price: 1500,
        description:'Pizza dulce'
    },
    {
        id:'5',
        title: 'Torta decorada de Gato',
        category: 'Evento',
        img: 'https://img-global.cpcdn.com/recipes/64f4149a8eb10fce/1360x964cq70/torta-decorada-de-gato-super-facil-de-hacer-foto-principal.webp',
        price: 5000,
        description:'Torta decorada de Gato'
    },
    {
        id:'6',
        title: 'Torta para Casamiento',
        category: 'Evento',
        img: 'https://i.pinimg.com/564x/c5/fe/eb/c5feeb7df173f45e167cde1a692be50d.jpg',
        price: 12500,
        description:'Torta para Casamiento'
    },
    {
        id:'7',
        title: 'Torta de Cumpleaños',
        category: 'Evento',
        img: 'https://i.pinimg.com/564x/45/18/52/451852c7b08c64a4d73eefe1b145051e.jpg',
        price: 7500,
        description:'Torta de Cumpleaños'
    },
    {
        id:'8',
        title: 'Torta de Frutillas con Crema',
        category: 'Frutal',
        img: 'https://i.pinimg.com/564x/97/2d/c2/972dc224c571ac7de9faa49ccb2f16fe.jpg',
        price: 3500,
        description:'Torta de Frutillas con Crema'
    },
    {
        id:'9',
        title: 'Torta de Chocolate y Frutilla ',
        category: 'Frutal',
        img: 'https://i.pinimg.com/564x/02/4f/56/024f568b2bd14a941769863f5de808e5.jpg',
        price: 3200,
        description:'Torta de Chocolate y Frutilla'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },200)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        const filteredProducts = products.filter(product => product.category === category);
        resolve(filteredProducts);
    });
};