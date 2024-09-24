import baseURL from "../Api/baseURL";

const UseInsertDataWithImage  =async (url , prams) =>{
    const config ={
        headers : {
            "Content-Type" : "multipart/form-data",
           Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
    const res = await baseURL.post(url , prams ,config);
    return res
}
const UseInsertData  =async (url , prams) =>{
    const config ={
        headers : {
           Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
    const res = await baseURL.post(url , prams ,config);
    return res
}

export {UseInsertData,UseInsertDataWithImage}