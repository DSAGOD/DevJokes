import React, { useEffect, useState } from 'react';
import Spinner from './Component/Spinner';
import axios from "axios";
import './App.css';


function App() {
  const [spin,setSpin] = useState(true);
  const [joke,setJoke] = useState({
    punchline : '' ,
    question : '',
  });
  const getdata =  ()=>{
      setSpin(true);
      axios.get('https://backend-omega-seven.vercel.app/api/getjoke').then((response)=>{
      setJoke({question : response.data[0].question , punchline : response.data[0].punchline});
      setSpin(false);
    })
  }
  useEffect(()=>{
    getdata();
  },[])
  return (
    <div className="App">
      <div className='container'>
        <div className='main-container'>
          {
            spin ? 
            <Spinner/>
            :
            <div className='text-container'>
            <h1 >{joke.question}</h1>
            <p>{joke.punchline}</p>
            </div>
          }
        </div>
					<button class="button button--telesto" onClick={()=>getdata()}><span><span>Next Joke</span></span></button>
		
      </div>
    </div>
  );
}

export default App;
