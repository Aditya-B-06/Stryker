import React from 'react'
import { X } from 'lucide-react'
import {useRef} from "react";
import {useSelector} from "react-redux";

function CartModal({onClose}) {
    const modalRef = useRef();
    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            onClose();
        }
    }
    const cartItems = useSelector((state) => state.cart.cart);
    const cartPrice = useSelector((state) => state.cart.cartPrice);
    return(
        <div ref = {modalRef} onClick={closeModal} className=' fixed inset-0 z-9999 bg-black/80 backdrop-blur-sm flex items-center justify-center '>
            <div className="flex w-full justify-center px-4" onClick={(e)=>e.stopPropagation()}>
                <div className="relative w-full max-w-5xl max-h-80vh overflow-hidden rounded-2xl border border-zinc-700 bg-black text-white shadow-2xl">
                <button className='place-self-end absolute top-6 right-6 p-2 rounded-full hover:bg-gray-700 transition ' onClick={onClose}>
                    <X size={30}/>
                </button>
                <div className='max-h-[80vh] overflow-y-auto px-10 py-12'>
                    <h1 className='text-3xl font-extrabold text-center m-5 mb-10'>Your Cart</h1>
                    <div>
                        <ul>
                        {cartItems.filter(item => item.qty>0).map(item =>(
                            <li key={item.id} className="mb-8">
                               <div className="flex flex-row border-2 border-white rounded-md items-start">
                                   <img className="w-full max-w-70 h-auto mx-auto  block " src={item.image} alt="Item image" loading="lazy"/>
                                   <div className="flex flex-col justify-start p-4">
                                       <h2 className="text-2xl mb-5">{item.name}</h2>
                                       <p className="text-sm text-gray-300">{item.desc}</p>
                                       <div className="flex flex-row justify-between mt-auto pt-4 ">
                                           <p className="text-sm">Quantity: {item.qty}</p>
                                           <p className="text-sm font-semibold">Net Price: ${(item.qty * item.price).toLocaleString("en-US")}</p>
                                       </div>
                                   </div>
                               </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <hr className="my-4 border-blue-500" />
                    <div className="flex flex-row justify-between align-items-center gap-10">
                        <p className="my-5 text-2xl font-bold">Cart Total : ${cartPrice.toLocaleString("en-us")}</p>
                        <button className="bg-blue-500 p-3 border-2 border-white rounded-md hover:cursor-pointer hover:bg-black transition-all duration-300 hover:scale-110  ">Proceed to checkout</button>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default CartModal;