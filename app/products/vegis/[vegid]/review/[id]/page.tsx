import React from 'react'

type PageParams = {
    params : Promise<{
        vegid : string;
        id : string;
    }>;
}

async function page( {params} : PageParams) {

    const { vegid, id } = await params;

    return (
        <div>
            <h1>Vegis Review Details for Product {vegid} and Review {id}</h1>
        </div>
    )
}

export default page
