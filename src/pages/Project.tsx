import { Box, IconButton, Typography } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState,useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import { Get,Del}  from "../confIg/apiHandling";
export default function Project(){
    const [model,setModel] = useState<any>([])
    const navigate = useNavigate()
    const getData = () => {
        Get(`comments`)
        .then((res)=>{
        console.log(res.data);
          setModel([...res.data])
         }).catch((err)=>{
     console.log(err.data);
     
        })
    }
    const deletePost = (id:any)=>{
        Del(`comments/${id}`)
        .then(()=>{
         console.log('Post Deleted Successfully');
         
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    useEffect(()=>{getData()},[])
    return <>
    <div className="text-center"> 
    <h1 className="my-5 ">PROJECTS</h1>
    <button className="btn bg-primary text-white" onClick={()=>navigate('/AddProject')}>Add Your Own Data</button>
    </div>
         {
            model.map((x:any,i:any)=>
            <Box key={i} className = 'mt-3 p-5 mx-auto border rounded  w-50'>
                  <Typography className="mt-2" ><b>POST ID :</b> {x.postId}</Typography>
                  <Typography className="mt-2" ><b>NAME :</b> {x.name}</Typography>
                  <Typography className="mt-2" ><b>EMAIL :</b> {x.email}</Typography>
                  <IconButton aria-label="delete" color = "error" onClick={()=>{deletePost(x.id)}} ><DeleteIcon></DeleteIcon></IconButton>
                  <IconButton aria-label="edit" color = "primary" onClick={()=> navigate(`/AddProject/${x.id}`)} ><EditIcon></EditIcon></IconButton>
            </Box>)
         }
     </>
}
