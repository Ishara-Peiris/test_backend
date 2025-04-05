export const  fetch = async (req, res) =>{
    try {
        return res.json("test successful")
        
    } catch (error) {
        res.status(500).json({error:"Internal server error."})
        
    }
}