import React from 'react'
import {useRoutes} from "react-router-dom"
import routes from "./route/route"
export default function App() {
  const element=useRoutes(routes)
  return (
    <div className="cs-all">
        {element}
    </div>
  )
}
