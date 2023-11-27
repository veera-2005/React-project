import axios from "axios";

const API_URL = "http://localhost:3001";

 export const getDatas=()=>axios.get(`${API_URL}/Datas`);
 export const Addnewuser  = async(data) =>
 {
    const {data:existingdata}=await axios.get(`${API_URL}/Datas`);
    const newId=(Math.max(...existingdata.map((data)=>data.id))+1,0);
    const newuser={
        ...data,
        id: newId
    }
    axios.post(`${API_URL}/Datas`,newuser);
 }