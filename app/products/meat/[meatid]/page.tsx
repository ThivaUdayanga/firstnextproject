import React from 'react'

type PageProps = {
  params : Promise<{
    meatid : string;
  }>
}

async function page({ params } : PageProps) {

  const { meatid } = await params;
  
  return (
    <div>
      <h1>Meat Product Details {meatid}</h1>
    </div>
  )
}

export default page
