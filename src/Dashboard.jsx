import React from 'react'
import { useNavigate } from 'react-router-dom'


function Dashboard() {
    const navigate = useNavigate()
  return (
    <div style={{textAlign:'center'}}>
      <h1>WellCome to Dashboard</h1>
      <button onClick={()=>navigate('/dsaPortal')}>Go to Home</button>
    </div>
  )
}

export default Dashboard
