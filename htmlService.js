function elipsis(string = '', maxLenght = 30) {
if( string.length > maxLenght) {
    return string.substring(0, maxLenght) + '...'
}
return string
}

class HTMLService {
    paintProduct(product) {
        return `
    <li data-id="${product.id}">
    <img src="${product.image}" title="${product.title}"/>
    <small>${elipsis(product.title, 50)}</small>
    <small><strong>$${product.price}</strong></small>
    </li>
    `
 }
    paintProducts(products = []) {
        return products.map(this.paintProduct).join('')
    }
paintCartItem (item) {
    return `
     <li data-type="remove" data-id="${item.id}">
     (${item.amount})
     ${item.title}
     <strong>$${item.price}</strong>
     </li>   
    `
}
    paintCart({items, totalPrice}) {
        if (items.lenght === 0) {
            return `<p>Корзина пуста</p>`
        }
        return `
        <ul class="cart-list">
        ${items.map(this.paintCartItem).join('')}
        </ul>
        <hr />
        <p class="info">
        <span>Общая цена: <strong>$${totalPrice.toFixed(2)}</strong></span>
        <button class="clear" data-type="clear">Очистить</button>
        </p>
        `
    }
}

