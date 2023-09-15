import axios from "axios";

export const apiHandle = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const Get = (epOfGet: string) => {
    return apiHandle.get(epOfGet)
}
export const Del = (epOfDel: string, id?: (string | number)) => {
    return apiHandle.delete(`${epOfDel}/${id ? id : ""}`)
}

export const Put = (epOfEdit:string, id?:(string | number),model?:{postId:(number|string),name:string,email:string}) => {
    return apiHandle.put(`${epOfEdit}/${id ? id : ""}`,model?model:"")
}

export const Post = (eoOfPost:string,model:{postId:number,name:string,email:string})=>{
 return apiHandle.post(`${eoOfPost}`,model)
}
