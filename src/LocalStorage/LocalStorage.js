
const validateLS = () => {

    const LSdata = localStorage.getItem('cart')
    if (LSdata) {
        const cart = JSON.parse(LSdata)
        return cart;
    }
    return []
}

const addtoLS = (id) => {
    const newcart = validateLS()
    newcart.push(id)
    const cart = JSON.stringify(newcart)
    localStorage.setItem('cart', cart)
}



export { addtoLS }