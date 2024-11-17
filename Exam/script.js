 const products = [
     { name: 'Green Tile', price: 8.19, image: 'https://img.tile.expert/img_lb/sant-agostino/tetris/per_sito/minimali/b_sant-agostino-tetris-csatetfl05_tetrisforestluc520.webp?64' },
     { name: 'Purple Tile', price: 8.19, image: 'https://img.tile.expert/img_lb/sant-agostino/tetris/per_sito/minimali/b_sant-agostino-tetris-csatetol05_tetrisorchidluc520.webp?64' },
     { name: 'Blue Tile', price: 8.19, image: 'https://img.tile.expert/img_lb/sant-agostino/tetris/per_sito/minimali/b_sant-agostino-tetris-csatetnl05_tetrisoceanluc520.webp?64' },
     { name: 'Green Sink', price: 1300, image: 'https://muddconcrete.com/wp-content/uploads/2023/08/mudd-sink-wallhung-jeker-affix-forest-green-993x1323-c-center.jpg' },
     { name: 'Pink Sink', price: 1155, image: 'https://muddconcrete.com/wp-content/uploads/2023/08/mudd-sink-wallhung-parro-affix-rose-pink-993x1323.jpg' },
     { name: 'Blue Sink', price: 1450, image: 'https://muddconcrete.com/wp-content/uploads/2022/04/mudd-sink-wallhung-odet-lg-affix-denim-blue2-993x1323-c-center.jpg' }
];


document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const products = document.querySelectorAll('.card');

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none'; 
        }
    });
});


let cart = [];




