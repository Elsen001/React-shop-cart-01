import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import { fetchCategoryItems } from '../redux/categoryİtemSlice';
import Loading from './Loading';

const CategoryItems = () => {
  const categoryItems = useSelector((state) => state.categoryItems);
  const loading = useSelector((state) => state.categoryItems.loading);
  const dispatch = useDispatch();
  const { name } = useParams()


  useEffect(() => {
    dispatch(fetchCategoryItems(name))
    console.log(name)
    console.log(categoryItems)
  }, [ name])


  return (
    <main>
      {
      loading?<Loading/>:  categoryItems.categoryItems.products && categoryItems.categoryItems.products.map(item => (
          <Link to={`/details/${item.id}`}>
          <article key={item.id}>
            <img src={item.images[0]} alt={item.brand} />
            <h3>{item.title}</h3>
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

export default CategoryItems
