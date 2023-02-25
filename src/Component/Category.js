import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../redux/categorySlice'
import { Link } from 'react-router-dom'
const Category = () => {
    const dispatch = useDispatch()
    const category = useSelector((state) => state.category)
    const itemsLenght = category.category;
    // const cateSlice = itemsLenght.slice(0, 12)
    useEffect(() => {
        dispatch(fetchCategory())
    }, [])
    return (
        <div className='items'>
            {
                itemsLenght && itemsLenght.map((item, key) => (
                    <Link to={`/category/${item}`}>
                        <div key={item} className='item'>
                        </div>
                        {item}
                    </Link>
                ))
            }
        </div>
    )
}

export default Category
