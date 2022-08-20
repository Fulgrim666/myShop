const productService = new ProductService(data);
const cartService = new CartService()
const htmlService = new HTMLService()
const filterInput = document.getElementById('filter')
const productContainer = document.querySelector('#products')
const cart = document.getElementById('cart');

filterInput.addEventListener('input', event => {
    const value = event.target.value

   const filteredProducts = productService.filterBy(value)

   renderProduct(filteredProducts)
})

function renderProduct (products) {
    productContainer.innerHTML = htmlService.paintProducts(products
    )
    
}
productContainer.addEventListener('click', event => {
 const id = event.target.dataset.id
  ? event.target.dataset.id
  : event.target.closest('li')?.dataset.id
 if (id) {
    cartService.add(productService.getById(+id))
    renderCart()
 }
})
 cart.addEventListener('click', event => {
    const type = event.target?.dataset.type
    const id = event.target?.dataset.id
    switch (type) {
        case 'clear':
            cartService.clear(id)
            renderCart()
            break
            case 'remove':
            cartService.remove(id)
            renderCart()
            break
    }
 })

renderProduct(productService.products)

function renderCart () {
cart.innerHTML = htmlService.paintCart(cartService.getinfo()) 
}

renderCart()