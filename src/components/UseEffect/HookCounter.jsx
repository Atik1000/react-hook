import React, { useEffect, useState } from 'react';

const HookCounter = () => {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('')
    useEffect(()=>{
        document.title=`You clicked ${count} times`
      console.log('useEffect -Updatingg documetnt title');
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
            
        </div>
    );
};

export default HookCounter;