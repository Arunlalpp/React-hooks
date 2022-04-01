import React,{useState} from 'react'

function MouseContainer() {
    const [display , setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>toggle display</button>
        {display && <MouseContainer/>}
    </div>
  )
}

export default MouseContainer 