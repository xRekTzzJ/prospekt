import { Product } from "./Product.js"
import { Section } from "./Section.js";
const products = [
    {link: './tea-catalog.html',
    image: "../images/чай тайга сибири.jpeg",
    name: 'Чай'
    },
    {link: './varenie-catalog.html',
    image: "../images/Варенье-из-брусники-с-кедровым-орехом-125-гр-100-мл.jpg",
    name: 'Варенье'
    },
    {link: './syrops-catalog.html',
    image: "../images/сиропы.jpg",
    name: 'Сиропы'
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