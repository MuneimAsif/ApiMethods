import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { Post,Put } from '../confIg/apiHandling';
import axios from 'axios'

export default function AddProject() {
  // const baseApi = 'https://jsonplaceholder.typicode.com/comments';
  const [model, setModel] = useState<any>({})
  const params = useParams();
  
  const getDataById = () => {
  axios.get(`https://jsonplaceholder.typicode.com/comments/${params.id}`).then((res) => {
        console.log(res.data);
        setModel({ ...res.data })
      }).catch((err) => {
        console.log(err.data);

      })
  }

  const submitPost = () => {
    Post('comments', model)
      .then((res) => {
        console.log(`Post Added ===> ${res.data}`);

      }).catch((err) => {
        console.log(err.data);

      })
  }

  const updatePost = () => {
    Put(`comments/${params.id}`)
      .then((res) => {
        console.log(`Post Updated === > ${res.data}`);

      }).catch((err) => {
        console.log(err.data);
      }) 
  }


  useEffect(() => {

    if (params.id) {
      getDataById()
    }
  }, [])
  return <>

    <div className='d-flex mt-5'>
      <div className='mx-auto  mt-5 border p-5'>
        <div><input value={model.postId} onChange={(e) => setModel({ ...model, postId: e.target.value })} className='my-3 border-light' type="number" /></div>
        <div><input value={model.name} onChange={(e) => setModel({ ...model, name: e.target.value })} className='my-3 border-light' type="text" /></div>
        <div><input value={model.email} onChange={(e) => setModel({ ...model, email: e.target.value })} className='my-3 border-light' type="email" /></div>
        <div className='text-center'><button onClick={submitPost} className='btn bg-primary text-white my-3' >Submit</button></div>


        <div className='text-center'><button onClick={updatePost} className='btn bg-primary text-white my-2' >Update</button></div>

      </div>

    </div>




  </>
}
