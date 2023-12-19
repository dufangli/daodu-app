import axios from "axios"

function zeroFill(num) {
    // return num < 10 ? "0" + num : num;
    if (num < 10) {
        return "0" + num;
    }
    return num;
}
var d = new Date();
var year = d.getFullYear();
var month = zeroFill(d.getMonth() + 1);
var date = zeroFill(d.getDate());
var day=year +''+ month +''+ date
// console.log(day );


var date_1 = new Date(d.getTime() - 8 * 24 * 3600 * 1000);
var year_1 = date_1.getFullYear();
var month_1 = zeroFill(date_1.getMonth() + 1);
var day_1 = zeroFill(date_1.getDate());
var BeforeDay=year_1 + '' + month_1 + '' + day_1
// console.log(BeforeDay);


export const getArticle = async () => {
    let  article  = await axios.get(`https://apic.netstart.cn/daodu/lessons?from=${BeforeDay}&to=${day}`)
    return article.data
}
// console.log(`https://apis.netstart.cn/daodu/lessons?from=${BeforeDay}&to=${day}`);