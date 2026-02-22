import React from 'react'

type PageParams = {
    params : {
        vegid : string;
    }
}

function page({ params } : PageParams) {
  return (
    <div>
      <h1>Vegis Product Details {params.vegid}</h1> 
    </div>
  )
}

export default page
