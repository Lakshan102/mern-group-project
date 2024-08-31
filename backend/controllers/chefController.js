import newFood from "../models/newFood";

const addFood = async (req,res)=>{

    let image_filename = `${req.image_filename}`;

    const food = new newFood({
        name:req.body.name,
        ingredients:req.body.ingredients,
        description:req.body.description,
        cost:req.body.cost,
        image:image_filename,
        category:req.body.category
    })
    try{
        await food
    }
}