import React from 'react'

type PageProps = {
    params : {
        id : string;
    }
}

function page({ params } : PageProps) {
  return (
    <div>
      <h1>Meat Product Details {params.id}</h1>
    </div>
  )
}

export default page
