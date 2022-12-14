import React from 'react'
import { Outlet } from 'react-router-dom'
import {Nav} from '../Components'

export default function Layout() {
  return (
    <>
        <Nav pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <Outlet />
    </>
  )
}
