import React from 'react'

type PageProps = {
  params : Promise<{
    id : string;
  }>
}

async function page({ params } : PageProps) {

  const { id } = await params;
  
  return (
    <div>
      <h1>Meat Product Details {id}</h1>
    </div>
  )
}

export default page
