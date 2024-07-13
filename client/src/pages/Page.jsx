import React from 'react'
import Tab from '../components/Tab'
import { Outlet } from 'react-router-dom'

function Page() {
  return (
    <div>
      <Tab/>
      <Outlet/>
    </div>
  )
}

export default Page
