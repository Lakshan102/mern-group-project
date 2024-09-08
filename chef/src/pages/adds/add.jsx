import React, { useState } from 'react'
import "./add.css"
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify';

function add({url}) {

  
  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name:"",
    cost:"",
    ingredients:"",
    category:"Salad"
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
    formData.append("cost",Number(data.cost))
    formData.append("category",data.category)
    formData.append("ingredients",data.ingredients)
    formData.append("image",image)
   
    const response = await axios.post(`${url}/api/chef/add`,formData);
    if (response.data.success) {
      setData({
        name:"",
        cost:"",
        ingredients:"",
        category:"Salad"
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
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
            <p>Product Ingredients</p>
            <textarea onChange={onChangeHandler} value={data.ingredients} name="ingredients" rows='6' placeholder='write content here'></textarea>
        </div>
       
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Product Category</p>
                <select onChange={onChangeHandler} name="category">
                    <option value="salad">salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure veg">Pure veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product cost</p>
                <input onChange={onChangeHandler} value={data.cost} type="Number" name='cost' placeholder='Rs.20' min='0' />
            </div>
        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default add
