import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import "../style.css"
import { Link } from 'react-router-dom'

const FormEditProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id }=useParams();

    useEffect(()=>{
        const getProductById = async()=>{
            try {
                const response = await axios.get(`http://localhost:5000/products/${id}`);
                setName(response.data.name);
                setPrice(response.data.price);
            } catch (error) {
                if(error.response){
                    setMsg(error.response.data.msg);
            }
        }
    }
    getProductById();
    }, [id])

    const updateProduct = async(e)=>{
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/products/${id}`, {
                name: name,
                price: price
            });
            navigate("/products");
        } catch (error){
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }
  return (
    <div className='content'>
    <h1 className='title'>Product</h1>
            <h2 className='subtitle'>Edit product</h2>
            <div className="kotak">
                    <div className="content">
                        <form onSubmit={updateProduct}>
                        <p className='has-text-centered'>{msg}</p>
                        <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input type="text" className="input"                                         value={name}
                                        onChange={(e) => setName(e.target.value)}
 placeholder="Product Name" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Price</label>
                                <div className="control">
                                    <input type="text" className="input" value={price}
                                        onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                <button type='submit' className="button is-success">
                                    Update
                                </button>
                                <Link to={"/products"} className="button is-info mb-2" style={{ marginLeft:'10px' }}>Back</Link>
                            </div>
                            </div>
                        </form>
                    </div>
                
            </div>
        </div>  )
}

export default FormEditProduct