import React, { useState } from 'react';
import Phone from "./phone"
import data from "./data.json"
import Modal from './model';
export default function ShoppingPhone(){
    const [state, setState] = useState({
        phones: data,
        phoneDetail: data[0],
        carts: [],
    });
    const renderListPhones = () => {
        const {phones} = state
        const newPhones = phones.map((item) => {
            return <Phone key={item.id} data ={item} getPhoneDetail = {handleGetDetail} getPhoneAddToCart={handleGetPhoneAddToCart}/>
        });
        return newPhones;
    }
    
    const handleGetDetail = (data) => {
        setState({
            ...state,
            phoneDetail: data,
        });
    };

    const _findexIndex = (id) => {
        const index = state.carts.findIndex((item) => item.id === id);
        return index;
    };

    const handleGetPhoneAddToCart = (data) =>{
        const newCarts = [...state.carts];
        const phoneAddToCart = {
            ...data,
            quantity: 1,
        }; 
        const index = _findexIndex(phoneAddToCart.id);
        if(index != -1 ){
            newCarts[index].quantity += 1; 
        } else {
            newCarts.push(phoneAddToCart);
        }
        setState({
            ...state,
            carts: newCarts,
        });
    };

    const handleUpdateQty = (id, quantity) => {
        setState((prevState) => ({
            ...prevState,
            carts: prevState.carts.map((phone) =>
                phone.id === id ? { ...phone, quantity } : phone
            ),
        }));
    };
    

    return(

        <div className="container mx-auto">
            <Modal carts = {state.carts} onQuantityChange ={handleUpdateQty}/>
            <div className="grid grid-cols-3">
               {renderListPhones()}
            </div>

            <div className="">
                <h1>Thông số kỹ thuật</h1>
                

<div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Image
        </th>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Style
        </th>
        <th scope="col" className="px-6 py-3">
          Description
        </th>
        <th scope="col" className="px-6 py-3">
          Quantity
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <img src={state.phoneDetail.image}alt />
        </th>
        <td className="px-6 py-4">
          {state.phoneDetail.name}
        </td>
        <td className="px-6 py-4">
          {state.phoneDetail.alias}
        </td>
        <td className="px-6 py-4">
          {state.phoneDetail.description}
        </td>
        <td className="px-6 py-4">
          {state.phoneDetail.quantity}
        </td>
        <td className="px-6 py-4">
          {state.phoneDetail.price}
        </td>
      </tr>
    </tbody>
  </table>
</div>


            </div>
        </div>
    )
}