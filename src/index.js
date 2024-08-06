import React from "react"
import ReactDOM from 'react-dom/client'
// import Greet from './App'
import {App,User} from './App'
import { RouterProvider } from "react-router-dom"
import { appRouter } from "./App"
// let heading = React.createElement('h1',null,'Heading')
// let para = React.createElement('p',null,'para')
// let con = React.createElement('div',null,heading,para)

let heading = <h1>Hello</h1>
let ele = document.getElementById('root')
let rootEle = ReactDOM.createRoot(ele)
rootEle.render(<RouterProvider router={appRouter}>

     
</RouterProvider>)