import React from 'react'

type PageParams = {
    params : Promise<{
        vegid : string;
    }>
}

async function page({ params } : PageParams) {

  const { vegid } = await params;
 
  return (
    <div>
      <h1>Vegis Product Details {vegid}</h1> 
    </div>
  )
}

export default page
