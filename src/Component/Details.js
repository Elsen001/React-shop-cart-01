import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import { getDetails } from '../redux/itemDetails'
import Loading from './Loading'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



const Details = () => {
    const item = useSelector(state => state.itemDetails.item)
    const loading = useSelector(state => state.itemDetails.loading)
    const dispatch = useDispatch()
    const { id } = useParams()

    const [index, setIndex] = useState(0)

    const handleSelect = (selectIndex, e) => {
        setIndex(selectIndex)
    }

    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    },[])

    

    
    useEffect(() => {
        dispatch(getDetails(id))
    }, [id])
    return (
        <div className='details-container'>
            {loading ? <Loading /> : item &&
                <div className='details'>
                    
                    <Carousel variant="dark"  className='carusel' activeIndex={index} onSelect={handleSelect}>
                        {
                            item.images.map(i => (
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={i}
                                        alt={item.title}
                                    />
                                    <Carousel.Caption>
                                        <h3>{item.title}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                    <div className="description">
                        <h3>{item.brand}</h3>
                        <p>{item.description}</p>
                        <div>{item.price} $</div>
                        <div className="add-to-cart">
                            <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Details
