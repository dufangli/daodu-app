import axios from "axios";

export const getShit = async () => {
    let  {data}  = await axios.get('https://apic.netstart.cn/daodu/today_recommends')
    
    return data
}