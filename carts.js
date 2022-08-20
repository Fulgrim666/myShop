class CartService {
constructor () {
    this.cart = {}
}

    add (product) {
        const key = product.id
        if (this.cart[key]) {
        this.cart[key].amount++
        return
        }
        this.cart [key] = {
            title: product.title,
            price:product.price,
            amount: 1    
        }
    }

    clear() {
      this.cart = {}
}

remove(productId) {
    const amount = this.cart[productId].amount
    if (amount === 1) {
        delete this.cart[productId]
    } else {
    this.cart[productId].amount--
    }
    }

getinfo () {
    const items = Object.keys(this.cart).map(id => {
        return {
        id,
        ... this.cart[id]
    }
    })
    const totalPrice = items.reduce((sum, items) => {
        return sum += items.amount * items.price},0)
    return {items, totalPrice}
 }
}
