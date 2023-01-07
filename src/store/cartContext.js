import { Context, createContext } from "react";

const catrContext = createContext({
  items: [],
  totalAmount: 0,
  addItem : (item)=>{},
  removeItem : (id)=>{}
})

export default catrContext;