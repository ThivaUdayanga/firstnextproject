import React from 'react'

type PageParams = {
    params : Promise<{
        grosid : string;
        id : string;
    }>;
}

async function page(params : PageParams) {

    const { grosid, id } = await params.params;

    return (
        <div>
            <h1>Review {id} for Groceries Product {grosid}</h1>
        </div>
    )
}

export default page
