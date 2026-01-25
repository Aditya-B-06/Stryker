import React from 'react'
import { X } from 'lucide-react'
import {useRef} from "react";
import {useSelector} from "react-redux";

function WishListModal({onClose}) {
    const modalRef = useRef();
    const closeWishModal = (e) => {
        if(modalRef.current === e.target) {
            onClose();
        }
    }
    const wishItems = useSelector((state) => state.wish.wishList);
    return(
        <div ref = {modalRef} onClick={closeWishModal} className=' fixed inset-0 z-9999 bg-black/80 backdrop-blur-sm flex items-center justify-center '>
            <div className="flex w-full justify-center px-4" onClick={(e)=>e.stopPropagation()}>
                <div className="relative w-full max-w-2xl max-h-80vh overflow-hidden rounded-2xl border border-zinc-700 bg-black text-white shadow-2xl">
                    <button className='place-self-end absolute top-6 right-6 p-2 rounded-full hover:bg-gray-700 transition ' onClick={onClose}>
                        <X size={30}/>
                    </button>
                    <div className='max-h-[80vh] overflow-y-auto px-10 py-12'>
                        <h1 className='text-3xl font-extrabold text-center m-5 mb-10'>Your wish list</h1>
                        <div>
                            <ul>
                                {wishItems.map(item =>(
                                    <li key={item.id} className="mb-8">
                                        <div className="flex flex-row border-2 border-white rounded-md items-center ">
                                            <img className="w-64 h-auto   block " src={item.image} alt="Item image" loading="lazy"/>
                                            <div className="flex-1 p-4">
                                                <h2 className="text-2xl font-bold">{item.name}</h2>
                                                <h2 className="">{item.type==="light-arm"?"Light Arms":item.type==="medium-arm"?"Medium Arms":item.type==="ammo"?"Ammunition":"Acessories"}</h2>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishListModal;