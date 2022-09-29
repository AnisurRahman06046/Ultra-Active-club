// use local storage to manage cart data
const addToDb = id =>{
    let listCart = {};

    
    const storedCart = localStorage.getItem('list-cart');
    if(storedCart){
        listCart = JSON.parse(storedCart);
    }

  
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

    
    const storedCart = localStorage.getItem('list-cart');
    if(storedCart){
        listCart = JSON.parse(storedCart);
    };
    return listCart;
}

const addNreakTimeToDb=(breakTime)=>{
    // let breakTimeCart ;
    localStorage.setItem('breaktimeCart',breakTime)

}
const getStoredBreakTime =()=>{
    let breakTime;
    const storedTime = localStorage.getItem('breaktime');
    if (storedTime){
        breakTime = JSON.parse(storedTime)

    }
    return breakTime
}

export {
    addToDb, 
    addNreakTimeToDb,
    getStoredBreakTime,
    getStoredCart
}