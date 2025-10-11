// import Agent from '@/components/Agent'
// import { getCurrentUser } from '@/lib/actions/auth.action'
// import Image from 'next/image'
// import React from 'react'

// const Page = async() => {
//     const user=await getCurrentUser();

//     return (
//         <>
//         <h3>Interview Generation</h3>
//             <Agent userName={user?.name} userId={user?.id} type='generate' />
//         </>

//     )
// }

// export default Page

import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser();

    return (
        <>
            <h3>Interview generation</h3>

            <Agent
                userName={user?.name!}
                userId={user?.id}
                // profileImage={user?.profileURL}
                type="generate"
            />
        </>
    );
};

export default Page;