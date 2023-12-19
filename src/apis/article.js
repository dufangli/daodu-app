import axios from "axios";

export const getList = async (id) => {
    let  data  = await axios.get(`https://apic.netstart.cn/daodu/lessons/${id}`)
    
    return data
}