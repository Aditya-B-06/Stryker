import React from "react";
import { products } from "../AllProducts.js";
import { useDispatch, useSelector } from "react-redux";
import {addTocart, removeFromCart, increaseQty, decreaseQty,} from "../slices/cartSlice.js";
import { Trash, Plus, Minus, Heart } from "lucide-react";
import {motion} from "framer-motion";
import {addToWishList,removeFromWishList} from "../slices/wishSlice.js";


export default function LightArms() {
  const [liked, setLiked] = React.useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const handleAddToCart = (item) => {
    dispatch(addTocart(item));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQty({ id }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQty({ id }));
  };

  const handleWishToggle = (item) => {
        setLiked(prev => ({ ...prev, [item.id]: !prev[item.id] }))
        if (liked[item.id]) {
            dispatch(removeFromWishList(item))
        } else {
            dispatch(addToWishList(item))
        }
    }

    return (

      <div>
        <h1 className="text-center text-4xl font-extrabold m-10">Light Arms</h1>
        <p className="text-center text-2xl mb-10">
          Lightweight and small, ideal for short-ranged combat
        </p>

        <motion.div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {products.filter((item) => item.type==='light-arm').map((item) => {
            const cartItem = cartItems.find((p) => p.id === item.id);
              return (
                  <motion.div key={item.id}
                              className="w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:scale-105 group flex flex-col"
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.2 }}
                              transition={{ duration: 0.8, ease: "easeOut" }}>
                      <div className="relative overflow-hidden rounded-lg mb-6">
                          <img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              className="object-cover object-center w-full h-48 transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="mb-4">
                          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white text-black rounded-full mb-3">
                            {item.supplier}
                          </span>
                          <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
                              {item.name}
                          </h2>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          {item.desc}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                          {cartItem ? (
                              <div className="flex items-center gap-2">
                                  <button
                                      onClick={() => handleRemove(item.id)}
                                      className="px-2 py-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                                  >
                                      <Trash size={16} />
                                  </button>
                                  <div className="flex items-center gap-1 bg-white text-black rounded-full px-2 py-1">
                                      <button
                                          onClick={() => handleDecrease(item.id)}
                                          className="px-1 hover:bg-gray-200 rounded"
                                      >
                                          <Minus size={16} />
                                      </button>

                                      <p className="px-2">{cartItem.qty}</p>

                                      <button
                                          onClick={() => handleIncrease(item.id)}
                                          className="px-1 hover:bg-gray-200 rounded"
                                      >
                                          <Plus size={16} />
                                      </button>
                                  </div>
                              </div>
                          ) : (
                              <button
                                  onClick={() => handleAddToCart(item)}
                                  className="px-4 py-2 bg-white text-black rounded-full hover:scale-110 transition"
                              >
                                  Add To Cart
                              </button>
                          )}
                          <Heart
                              size={28}
                              fill={liked[item.id] ? "red" : "none"}
                              stroke="red"
                              className={liked[item.id] ? "text-red-600" : "text-white"}
                              onClick={() => handleWishToggle(item)}
                          />

                          <div className="text-white font-bold">${item.price.toLocaleString("en-us")}</div>
                      </div>
                  </motion.div>
              );
          })}
        </div>
        </motion.div>
      </div>


  );
}
