import React, { useState } from 'react';

const HookObj = () => {
    const [name,setName]=useState({firstName:'',lastName:''})
    // console.log(JSON.stringify(name));
    const submittedBtn=()=>{
        console.log(name);
    }
    return (
        <div>
            {/* Production lavel needed spred operator using state */}
            <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
            <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
            <h2>My First NAme :{name.firstName}</h2>
            <h2>My Last Name:{name.lastName}</h2>
            <button onClick={submittedBtn}>Submit</button>
         

        </div>
    );
};

export default HookObj;