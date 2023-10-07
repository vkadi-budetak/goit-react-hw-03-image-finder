import React from 'react'

import { Audio } from  'react-loader-spinner'

export default function Loader() {
  return (
        <Audio
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="loader"
  visible={true}
/>
  )
}
