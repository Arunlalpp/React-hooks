import React, { useState } from 'react'

function HookcounterFour() {
    const [Items, setItems] = useState([])
    const addItems = () => {
        setItems([Items, {
            id:Items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
  return (
    <div>
        <button onClick={addItems}>Add a number</button>
        <ul>
            {Items.map(Items => (
                <li key={Items.id}>{Items.value}</li>

            ))}
        </ul>
    </div>
  )
}

export default HookcounterFour