import React,{useState, useEffect} from 'react'

function HooksMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = e =>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('uyseEffect called')
        window.addEventListener('mousemove' , logMousePosition)
    },[])
  return (
    <div>
        Hooks X-{x} Y - {y}
    </div>
  )
}

export default HooksMouse