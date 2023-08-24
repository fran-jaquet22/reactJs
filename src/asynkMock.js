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
        title: 'Choco oreo',
        category: 'Merienda',
        img: 'https://i.pinimg.com/originals/2a/9c/19/2a9c194e71bbc4154ef06a0ce8c064b4.png',
        price: 1500,
        description:'Choco oreo'
    },
    {
        id:'5',
        title: 'Marquise con oreo',
        category: 'Evento',
        img: 'https://i.pinimg.com/originals/03/fd/24/03fd240d426bf0614a33d71abe8dc890.png',
        price: 5000,
        description:'marquise con oreo'
    },
    {
        id:'6',
        title: 'Torta oreo',
        category: 'Evento',
        img: 'https://i.pinimg.com/originals/63/8c/bc/638cbcca09e69412628c09593f32f245.png',
        price: 10000,
        description:'Torta oreo'
    },
    {
        id:'7',
        title: 'Torta de Cumpleaños',
        category: 'Evento',
        img: 'https://i.pinimg.com/originals/f9/95/24/f99524870a1f895a1d495f546c53d651.png',
        price: 7500,
        description:'Torta de Cumpleaños'
    },
    {
        id:'8',
        title: 'Torta de Frutillas con Crema',
        category: 'Frutal',
        img: 'https://i.pinimg.com/originals/a3/dc/45/a3dc45fc86ac32e0e1162e4cf7bf8162.png',
        price: 3500,
        description:'Torta de Frutillas con Crema'
    },
    {
        id:'9',
        title: 'CheeseCake ',
        category: 'Frutal',
        img: 'https://i.pinimg.com/originals/53/94/62/5394629dc85963d03acb31a90dab00e4.png',
        price: 3200,
        description:'Cheesecake'
    },
    {
        id:'10',
        title: 'Bizcochuelo de frutilla y crema partelera',
        category: 'Frutal',
        img: 'https://i.pinimg.com/originals/71/35/31/7135311b2fa4112dcd8db09c155343f7.png',
        price: 3500,
        description:'Torta de Frutillas con crema pastelera'
    },

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