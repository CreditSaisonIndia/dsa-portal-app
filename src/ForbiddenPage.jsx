import React from 'react'
import { useNavigate } from 'react-router-dom';

function ForbiddenPage() {
  const navigate = useNavigate()
    console.log("Hi everyone");
  return (
    <div style={{textAlign: 'center'}}>
      <h2>Access Restricted</h2>
      {/* <a href='http://localhost:3000'><button>Sign In</button></a> */}
      <button onClick={() =>navigate('/')}>Sign In</button>
    </div>
  )
}

export default ForbiddenPage
