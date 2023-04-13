import React, { useEffect } from 'react'

export default function Logout() {
  
  useEffect(() => {

    localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE_TOKEN)
    window.location.replace('/signin')


  }, [])

  return (
    <div>Logout</div>
  )
}
