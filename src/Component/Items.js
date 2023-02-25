import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import { getItemsFetch, setLimit } from '../redux/itemSlice'
import Loading from './Loading'


const Items = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.items.items.products)
    const limit = useSelector((state) => state.items.limit)
    const loading = useSelector(state => state.items.loading)




    const visibleProducts = items ? items.slice(0, limit) : false;

    

    useEffect(() => {
        dispatch(getItemsFetch())
        console.log(items)
        console.log(limit)
    }, [])
    return (
        <main>
            <h2>Products</h2>

            {
                loading ? <Loading /> : visibleProducts && visibleProducts.map((item, key) => (
                    <Link  to={`/details/${item.id}`}>
                        <article key={item.id}>
                            <img src={item.images[0]} alt={item.brand} />
                            <h3>{item.title}</h3>
                            <div className='price'>
                                <span>{item.price} $</span>
                            </div>
                            <button onClick={() =>dispatch(addToCart(item))}>add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                        </article>
                    </Link>
                ))
            }
            <div className='btn'>
                <button onClick={() => dispatch(setLimit(limit + 15))} >and more</button>
            </div>
        </main>
    )
}

export default Items
