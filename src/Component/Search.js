import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import Loading from './Loading'

const Search = () => {

    const searchItem = useSelector(state => state.search.item.products)
    const loading = useSelector(state => state.search.loading)
    const dispatch = useDispatch()

    return (
        <main>
            {
                loading ? <Loading /> : searchItem && searchItem.map((item, key) => (
                    <Link to={`/details/${item.id}`}>
                        <article  key={item.id}>
                            <img src={item.images[0]} alt={item.brand} />
                            <h3 style={{color:"black"}}>{item.title}</h3>
                            <div className='price'>
                                <span>{item.price} $</span>
                            </div>
                            <button onClick={() => dispatch(addToCart(item))}>add to cart <i class="fa-solid fa-plus"></i></button>
                        </article>
                    </Link>
                ))
            }
        </main>
    )
}

export default Search
