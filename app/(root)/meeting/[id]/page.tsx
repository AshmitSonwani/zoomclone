// 'use client'

// import Loader from '@/components/Loader';
// import MeetingRoom from '@/components/MeetingRoom';
// import MeetingSetup from '@/components/MeetingSetup';
// import { useGetCallById } from '@/hooks/useGetCallById';
// import { useUser } from '@clerk/nextjs';
// import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
// import React, { useState } from 'react'
// import { Stream } from 'stream';

// export default async function Page({
//     params,
//   }: {
//     params: Promise<{ id: string }>
//   }) {
//     const id = (await params).id

//     const {user,isLoaded}= useUser();
//     const [isSetupCompleted, setIsSetupCompleted] = useState(false);
//     const {call,isCallLoading} = useGetCallById(id);

//     if(!isLoaded || isCallLoading) return <Loader />

//     return (
    
    

//     <main className='h-screen w-full'>
//       <div>Meeting: #{id}</div>
//       <StreamCall call={call}>
//         <StreamTheme>
//           {
//             !isSetupCompleted ? (<MeetingSetup/>) :(<MeetingRoom />)
//           }
//         </StreamTheme>
//       </StreamCall>
//     </main>
  
//   );
//   }

'use client'

import Loader from '@/components/Loader';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react';

export default function Page({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params;
  const { user, isLoaded } = useUser();
  const [isSetupCompleted, setIsSetupCompleted] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <main className='h-screen w-full'>
      {/* <div>Meeting: #{id}</div> */}
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupCompleted ? <MeetingSetup setIsSetupCompleted={setIsSetupCompleted} /> : <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
}

// // If you need to fetch data server-side, you can use getServerSideProps
// export async function getServerSideProps(context) {
//   const { id } = context.params;

//   // Fetch any data you need here
//   // For example, you can fetch the call data here if needed

//   return {
//     props: {
//       params: { id },
//     },
//   };
// }
