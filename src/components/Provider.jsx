import React from 'react'

const Provider = ({children}) => {
  return (
    <div>
        <h1>Provider</h1>
        {children}
        <h1>Provider Ends</h1>
    </div>
  )
}

export default Provider