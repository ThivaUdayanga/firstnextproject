import React from 'react'

type PageProps = {
    params : Promise<{
        grosid : string;
    }>;
}

async function page({ params } : PageProps) {

  const { grosid } = await params;
  
  return (
    <div>
      <h1>Groceries Product Details {grosid}</h1>
    </div>
  )
}

export default page
