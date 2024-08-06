import React from 'react'
import { useState ,useEffect} from 'react'
function Body() {
    let [restaurantsItems,setRestaurantsItems] = useState([])
   let [searchItem,setSearchItem] = useState('')
   let [filteredData,setFilteredData] = useState([])

let restaurantsData;
    async function getData(){

        let apiData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.30070&lng=80.46390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
       let jsonData = await apiData.json()
       console.log(jsonData)
        restaurantsData = jsonData.data.cards[4].card.card.gridElements.
       infoWithStyle.restaurants
       setRestaurantsItems(restaurantsData)
       setFilteredData(restaurantsData)
       console.log(restaurantsData)

    }
   useEffect(()=>{
    getData()
   },[])

   let imageUrl = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

   return (
<div>
<input type='text' onChange={(event)=>{
  setSearchItem(event.target.value)
}}/>
<button onClick={()=>{
  let filteredItems = restaurantsItems.filter((ele)=>{
    console.log(ele)
    return ele.info.name.toUpperCase().includes(searchItem.toUpperCase())

  })
  setFilteredData(filteredItems)
}}>getData</button>
<div className='d-flex flex-wrap'>

        {filteredData.map(function(ele){

            return <div className='p-2'>
              <img src={`${imageUrl}${ele.info.cloudinaryImageId}`} height='100px' width='100px' className='rounded'/>
              <h6 style={{maxWidth:'100px'}}>{ele.info.name}</h6>
              <p>{ele.info.avgRating}</p>
              <p>{ele.info.areaName}</p>
                </div>
                
        })}
    </div>
</div>


    
  )
}

export default Body