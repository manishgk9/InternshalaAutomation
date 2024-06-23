import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Tackale2() {
    const [Data,setData]=useState([]);
    const [isloading,setisloading]=useState(true);
    useEffect(()=>{
        console.log('Tackale2 mounted')
       axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{setData(res.data)});
       setisloading(false);
    },[]);
  return (
    <div>
    <div className='text-center text-xl'>Tackale2</div>
    <div><p className='text-center'>The data is here..</p></div>
    {isloading?(
        <div>
            data is loading..
        </div>
    ):(
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 m-5'>
        {Data.map((items) => {
            let { id, title, body } = items;
            return (
                <div key={id} className='mr-1 ml-0'>
                    <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        <p>{id}</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{body}</p>
                    </a>
                </div>
            );
        })}
    </div>
    )}
    
</div>



  );
}

export default Tackale2