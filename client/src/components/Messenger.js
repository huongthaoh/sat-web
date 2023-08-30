"use client";

// import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

function Messenger() {
  return (
    <FacebookProvider appId="1104450713866308" chatSupport>
        <CustomChat pageId="101667442351362" minimized={true}/>
    </FacebookProvider>    
  )
}

export default Messenger