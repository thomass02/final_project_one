
const data = {

    users: [
        {
            name: 'admin',
            email: 'admin@admin.com',
            password: 'admin',
            isAdmin: true,
        },

        {
            name: 'john ',
            email: 'johndoe@test.com',
            password: 'test',
            isAdmin: false,
        },
    ],

    /* Price Filter */
    // priceFilter: [

    //     {
    //         _id: 1,
    //         price: '$0-25',
    //     },

    //     {
    //         _id: 2,
    //         price: '$25-100',
    //     },

    //     {
    //         _id: 3,
    //         price: '>$100',
    //     },

        
    // ],

    /* Features Filter */
    // featuresFilter: [
        
    //     {
    //         _id: 1,
    //         features: 'min',
    //     },

    //     {
    //         _id: 2,
    //         features: 'max',
    //     },
    // ],

    /* Brand Filter */
    // brandFilter: [
        
    //     {
    //         _id: 1,
    //         brand: 'un-known',
    //     },

    //     {
    //         _id: 2,
    //         brand: 'known',
    //     },
    // ],

    /* Ratings Filter */
    // ratingsFilter: [
        
    //     {
    //         _id: 1,
    //         ratings: '0-20',
    //     },

    //     {
    //         _id: 2,
    //         ratings: '20-50',
    //     },

    //     {
    //         _id: 3,
    //         ratings: '>50',
    //     },
    // ],

    /* Product Categories */
    // deviceType: [

    //     {
    //         _id: 1,
    //         name: 'Routers',
    //     },

    //     {
    //         _id: 2,
    //         name: 'Modems',
    //     },

    //     {
    //         _id: 3,
    //         name: 'Laptops',
    //     },

    //     {
    //         _id: 4,
    //         name: 'Webcams',
    //     },

    // ],

    /* Product Data */
    products: [

        {
            // _id:'11',
            name: 'Netgear Router',
            category: 'router',
            image: '/images/router1.jpg',
            price: 199.99,
            countInStock: 3, 
            brand: 'Netgear',
            rating: 4,
            numReviews: 10,
            features: ' features 1',
        },

        {
            // _id:'22',
            name: 'Netgear Modem',
            category: 'modem',
            image: '/images/modem1.png',
            price: 239.99,
            countInStock: 0,
            brand: 'Netgear',
            rating: 4.5,
            numReviews: 5,
            features: ' features 2',
        },

        {
            // _id:'33',
            name: 'Google Laptop',
            category: 'laptop',
            image: '/images/laptop1.jpeg',
            price: 699.99,
            countInStock: 7,
            brand: 'Acer',
            rating: 5,
            numReviews: 6,
            features: ' features 3',
        },

        {
            // _id:'44',
            name: '2021 NexiGo StreamCam',
            category: 'webcam',
            image: '/images/webcam1.jpg',
            price: 59.45,
            countInStock: 8,
            brand: 'NexiGo',
            rating: 3.5,
            numReviews: 2,
            features: ' features 4',
        },

        {
            // _id:'55',
            name: 'Macbook Air',
            category: 'laptop',
            image: '/images/laptop2.jpg',
            price: 1000.00,
            countInStock: 1,
            brand: 'Apple',
            rating: 5,
            numReviews: 1,
            features: ' features 5',
        },
    ],
};

export default data;
