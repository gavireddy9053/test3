import Header from './Header'
import Body from './Body'
import { createBrowserRouter,Outlet } from 'react-router-dom'
import Offers from './Offers'
import Help from './Help'
import Cart from './Cart'
export function App(){
   
 return <div>

<Header />
<Outlet />
 </div>

}

export let appRouter = createBrowserRouter([
   {
    path:'/',
    element:<App />,
    children:[
        {
            path:'/',
            element:<Body/>
        },
        {
            path:'/offers',
            element:<Offers/>
        },
        {
            path:'/help',
            element:<Help/>
        },
        {
            path:'/cart',
            element:<Cart/>
        },
    ]
   }

]
   )


