// use local storage to manage cart data
const addToDb = id =>{
    let listCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('list-cart');
    if(storedCart){
        listCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = listCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        listCart[id] = newQuantity;
    }
    else{
        listCart[id] = 1;
    }
    localStorage.setItem('list-cart', JSON.stringify(listCart));
}
const getStoredCart =()=>{
    let listCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('list-cart');
    if(storedCart){
        listCart = JSON.parse(storedCart);
    };
    return listCart;
}

// const removeFromDb = id =>{
//     const storedCart = localStorage.getItem('shopping-cart');
//     if(storedCart){
//         const shoppingCart = JSON.parse(storedCart);
//         if(id in shoppingCart){
//             delete shoppingCart[id];
//             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//         }
//     }
// }

// const deleteShoppingCart = () =>{
//     localStorage.removeItem('shopping-cart');
// }

export {
    addToDb, 
    getStoredCart
}