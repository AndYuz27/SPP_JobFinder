import axios from "axios";

export const getComps = async () => {
    // try {
        const res = await axios.get(`http://127.0.0.1:8080/api/company`)

        return res.data.rows;
    // } catch (e) {
    //     console.log("ERROR")
    // }
}
export const getCompany = async (id) => {
    // try {
        const res = await axios.get(`http://127.0.0.1:8080/api/company/${id}`)

        return res.data.rows;
    // } catch (e) {
    //     console.log("ERROR")
    // }
}
export const getVacs = async () => {
        const res = await axios.get(`http://127.0.0.1:8080/api/vacancy/`)

        return res.data.rows;

}


