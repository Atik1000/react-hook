import React, { useEffect, useState } from 'react';

const HookMouse = () => {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logMousePosition=e=>{
        
        setX(e.clientX)
        setY(e.clientY)
        console.log('Mouse event');
    }
    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener('mousemove',logMousePosition)
        return()=>{
            console.log('Component will unmout',logMousePosition);
        }
    },[])
    return (
        <div>
            Hook x-{x} Y-{y}
        </div>
    );
};

export default HookMouse;