import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './puer-kedroviy.html',
    image: "../images/Сибирский-пуэр-кедровый-96-гр.jpg",
    name: 'Кедровый'
    },
    {link: './puer-kalina-malina.html',
    image: "../images/калина-малина.jpeg",
    name: 'Калина-малина'
    },
    {link: './puer-smorodina.html',
    image: "../images/смородина.jpeg",
    name: 'Смородина'
    },
    {link: './puer-sibir-sibir.html',
    image: "../images/Сибирский-пуэр-Сибирь-Сибирь-96-гр.jpg",
    name: 'Сибирь-Сибирь'
    },
    {link: './puer-taegniy.html',
    image: "../images/Сибирский-пуэр-таёжный-плиточный.jpg",
    name: 'Таежный'
    },
    {link: './puer-s-mojevelnikom.html',
    image: "../images/Сибирь-Тибет-с-можжевельником-и-почкой-кедра-96-гр.jpg",
    name: 'С можжевельником и почкой кедра'
    },
    {link: './puer-oblepichvoiy.html',
    image: "../images/Сибирский-пуэр-с-облепихой-96-гр.jpg",
    name: 'Облепиховый'
    },
]
const productsList = new Section({
    items: products,
    renderer: (products) => {
        const product = new Product(products, '.product');
        productsList.addItem(product.generateProduct())
    }
}, '.main-catalog__items-container')
productsList.renderItems();