import {useState, createContext} from 'react'




export const CartContext = createContext(null)

const ShoppingCartProvider = ({children}) => {

  const [cart, setCart] = useState([])
  console.log(cart)

  const addItem = (item, quantity) => {
    if(isInCart(item.id)) {
      setCart(cart.map(producto=> {return producto.id === item.id?
      {...producto, quantity: producto.quantity + quantity} :producto} ))
    }else{
      setCart([...cart, {...item, quantity}])
    } 
  }

  const removeItem =(id) => {
    setCart(cart.filter(producto=> producto.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.find(producto => producto.id === id) ? true : false
  }

  const totalProd = cart.reduce((total, item )=> total + item.quantity, 0)

 const total = cart.reduce((total, item )=> total + item.precio, 0)



  return (
   <CartContext.Provider value={{cart, setCart, removeItem, clearCart, addItem, totalProd, total}}>

    {children}
  
   
   </CartContext.Provider>
  )
}

export default ShoppingCartProvider