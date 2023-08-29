import { client } from "../config/database.js";

export const createLike = async (req,res) => {
    try {
        await client.query(
            `INSERT INTO  likes `
        )
    } catch (error) {
        
    }
}