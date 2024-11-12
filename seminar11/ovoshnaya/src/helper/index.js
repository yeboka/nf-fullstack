
const set = new Set()

export function addToCart(product) {
    set.add(product)
    console.log(set);
}

export function remove(product) {
    set.delete(product)
    console.log(set);
}