import {Box,Button,TextField,Paper} from '@mui/material'
import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'

export default function AddProject(){
    const baseApi = 'https://jsonplaceholder.typicode.com/comments';
    const [model,setModel] = useState<any>({})
    const params = useParams();
    const getDataById = ()=>{
        axios.get(`${baseApi}/${params.id}`)
        .then((res)=>{
            console.log(res.data);
            setModel({...res.data})
            }).catch((err)=>{
            console.log(err.data);
            
        })
    }

       const updatePost = ()=>{
        axios.put(`${baseApi}/${params.id}`,model)
        .then((res)=>{
     console.log(`Post Updated === > ${res.data}`);
     
        }).catch((err)=>{
     console.log(err.data);
        })
       }

       useEffect(() =>
       {if(params.id){
        getDataById()
       }},[])
    return <>
    
     <Box className = 'text-center'>
      <Paper className='p-3 mx-auto mt-5 w-50'>
        <Box><TextField value={model.postId} variant='outlined' placeholder = 'Post ID' className='my-2' type='number'></TextField></Box>
        <Box><TextField value={model.name} variant='outlined' placeholder = 'Name' className='my-2' type='text'></TextField></Box>
        <Box><TextField value={model.email} variant='outlined' placeholder = 'Email' className='my-2' type='email'></TextField></Box>
      <Button onClick={updatePost} >Update Post</Button>
      </Paper>
    </Box>    


    
    </>
}