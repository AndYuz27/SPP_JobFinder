import axios from "axios";

export const getComps = async () => {
    // try {
        const res = await axios.get(`http://127.0.0.1:8080/api/company`)

        return res.data.rows;
    // } catch (e) {
    //     console.log("ERROR")
    // }
}