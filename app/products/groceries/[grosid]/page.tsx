import React from 'react'

type PageProps = {
    params : {
        grosid : string;
    }
}

function page({ params } : PageProps) {
  return (
    <div>
      <h1>Groceries Product Details {params.grosid}</h1>
    </div>
  )
}

export default page
