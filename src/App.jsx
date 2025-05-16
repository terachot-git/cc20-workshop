import { useEffect, useState } from "react"
import CartSummary from "./components/CartSummary"
import Header from "./components/Header"
import Productlist from "./components/Productlist"

function App() {
  const [carts,setCarts]= useState([])
  const [Products,setProducts]=useState([])
  const fetchProduct = () => {
    fetch('http://localhost:8000/products')
    .then(resp=>resp.json())
    .then(data=>setProducts(data))
  }
  useEffect(()=>{
    fetchProduct();
  },[])
  const addToCart =(id,title,price)=>{
    let idx=carts.findIndex(el => el.id === id)
    if (idx==-1){
     let newItem = {id:id,title:title,price:price,quantity:1}
    setCarts([...carts,newItem])
  }
     
    else {
    const cloneCart = [...carts]
    cloneCart[idx].quantity += 1
    setCarts(cloneCart)
    }
    
  }
  const decQuantity = (quantity,id) =>{
    let idx = carts.findIndex(el => el.id === id)
    if (quantity>1){
      const cloneCart = [...carts]
    cloneCart[idx].quantity -= 1
    setCarts(cloneCart)
    }
    else {
      const cloneCart =  [...carts]
      cloneCart.splice(idx,1)
      setCarts(cloneCart)
    }
  }
  // const incQuantity=(quantity,id)=>{
  //   let idx = carts.findIndex(el => el.id === id)
  //   const cloneCart = [...carts]
  //   cloneCart[idx].quantity += 1
  //   setCarts(cloneCart)
  // }
 return (
   <div className="app flex min-h-screen flex-col ">
     <Header itemCount={carts.length}/>
      <div className="flex flex-1"><Productlist Products={Products} addToCart={addToCart}/>
      <CartSummary carts={carts} decQuantity={decQuantity} addToCart={addToCart}/>
      </div>
     </div>
   
 )}
export default App
