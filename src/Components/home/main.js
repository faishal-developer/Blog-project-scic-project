import React, { useEffect, useState } from 'react';


const SingleProduct=(props)=>{
    const { price, title, category, image, description,id} = props.product
    const cartPro = props.cart.find((p)=>{
        return p.id === id
    })
    return (
        <div className='single-product'>
            <div><img style={{width:'60px'}} src={image} alt={category} /></div>
            <div>
                <h4 className='padding-zero'>{title}</h4>
                <p className='padding-zero'>{price}$</p>
                <p className='padding-zero'>{description?.slice(0,60)}...</p>
            </div>
            <div>
                {
                    cartPro? (
                        <>
                        <button onClick={() => props.handleAdd(id)} className='button'>-</button>
                        <button onClick={() => props.handleAdd(id)} className='button'>{1}</button>
                        <button onClick={() => props.handleAdd(id)} className='button'>+</button>
                        </>
                    ):
                    (
                            <button onClick = { ()=> props.handleAdd(id) } className = 'button'>Add</button>
                    )
                }
            </div>
        </div>
    )
}

const Cart=(props)=>{
    let t = 0
    const total = (props.cart.length>=1 && props.cart.forEach(e => {
        return t + e.price
    })) || 0
    console.log(total);
    return (
        <div className='cart'>
           <h3>My Cart</h3>
           {props.cart?.map((p,i)=>(
               <div style={{display:'flex',alignItems:'center'}}>
                   <div>
                       <p>{p.description?.slice(0,20)}</p>
                       <p>{p.price}</p>
                    </div>
                    <div>
                        <button>-</button>
                        <button>1</button>
                        <button>+</button>
                    </div>
               </div>
           ))}
           <h3>{'total'}</h3>
        </div>
    )
}

const Main = () => {
    const [product ,setProduct] = useState([])
    const [cartProduct,setCartProduct] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProduct(data))
            .catch(e=>console.log(e.message))
    },[])
    const handleClick=(id)=>{
        const newP = product.find((p)=>p.id === id)
        const newCart = [...cartProduct, newP]
        setCartProduct(newCart)
    }
    return (
        <div className='main-first-col'>
            <div>
                <ul className='list-style'>
                    <li><strong>Categories</strong></li>
                    <li>All items</li>
                    <li>Bird</li>
                    <li>Cat</li>
                    <li>Dog</li>
                    <li>Fish</li>
                </ul>
            </div>
            <div>
                <h3>All Items</h3>
                {product?.map((p,i)=><SingleProduct cart={cartProduct} handleAdd={handleClick} key={i} product={p}/>)}
            </div>
            <div>
                <Cart cart={cartProduct}/>
            </div>
        </div>
    );
};

export default Main;