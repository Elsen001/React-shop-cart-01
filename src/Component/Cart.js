import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addToCart, deleteItems, removeCart } from '../redux/cartSlice';

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart);
    const totalPrice = useSelector(state => state.cart.cartTotal);
    console.log(cart)

    return (
        <div>
           {cart.length<1?<></>:<h1>My Shopping Cart</h1>} 
            {cart.length < 1 ? <section><div className='empty'>Cart Empty...</div> <NavLink to="/">Shop now</NavLink> </section> :
                <table>
                    <thead>
                        <tr>
                            <th colspan="1">Products Title</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            cart && cart.map((item, key) => (
                                <tr>
                                    <td className='desc'> <img src={item.images[0]} alt="item-brand" /> {item.title}</td>
                                    <td> <button onClick={() => dispatch(removeCart(item.id))}><i class="fa-solid fa-minus"></i></button> {item.qty}  <button onClick={() => dispatch(addToCart(item))}><i class="fa-solid fa-plus"></i></button></td>
                                    <td><i onClick={() => dispatch(deleteItems(item.id))} class="fa-solid fa-trash"></i></td>
                                    <td>{item.price} $</td>
                                </tr>
                            ))
                        }
                       
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total Price {totalPrice} $</td>
                        </tr>
                    </tfoot>
                </table>
            }
        </div>
    )
}

export default Cart
