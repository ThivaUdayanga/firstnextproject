import React from 'react'

type PageParams = {
    params : Promise<{
        meatid : string;
        id : string;
    }>;
}

async function page({ params } : PageParams) {

    const { meatid, id } = await params;

    return (
        <div>
            <h1>Meat Review Details for Product {meatid} and Review {id}</h1>
        </div>
    )
}

export default page
