import React, { useState } from 'react'

function HookcounterThree() {
    const [name , SetName] = useState({firstName: '' , lastName:''})
  return (
    <form>
      <input type = "text" value={name.firstName} onChange = {e =>SetName({... name, firstName: e.target.value})} />
      <input type = "text" value={name.lastName} onChange = {e =>SetName({... name, lastName: e.target.value})} />
      <h2>Your firstName is - {name.firstName}</h2>
      <h2>Your lastName is - {name.lastName}</h2>
    </form>
  )
}

export default HookcounterThree