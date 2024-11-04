const ManageMyorders = require('../Models/MyOrdersSchema')




  exports.createMyorders = async (req, res) => {
    const orderData = req.body;
    try {
        const result = await ManageMyorders.insertMany(orderData); // using insertMany for bulk insertion
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to insert orders' });
    }
};





exports.getAllmyorders=async(req,res)=>{
    try{
        const result = await ManageMyorders.find({})
        res.json(result)
    }
    catch(error){
        res.json(error)
    }
}