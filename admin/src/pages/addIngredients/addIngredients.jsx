import React, { useState } from 'react'
import "./addIngredients.css"
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify';

function addIngredients({url}) {

  
  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name:"",
    quantity:"1"
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler = async (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("quantity",Number(data.quantity))
    formData.append("image",image)
    const response = await axios.post(`${url}/api/ingredient/addIngredient`,formData);
    if (response.data.success) {
      setData({
        name:"",
        quantity:"1"
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else {
      toast.error(response.data.message)
    }
}
  
  
  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                <img src={image?URL.createObjectURL(image): assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
            <p>Ingredients Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Enter name' />
        </div>
        <div className="add-quantity flex-col">
            <p>Product quantity</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name='quantity' placeholder='1' min="0" />
        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default addIngredients
