import React from "react"
import ResturantCart from "./ResturantCart"
function Body() {
  return (
    <div className=" m-4">
      <h1> Resturant</h1>
      <button className=" border rounded w-1/12 ml-6">Rating+</button>
      <button className=" border rounded w-1/12 ml-6">Reset</button>
      <div className='flex flex-wrap w-10/12 m-auto'>
            <ResturantCart />
            <ResturantCart />
            <ResturantCart />
            <ResturantCart />
            <ResturantCart />
            <ResturantCart />
            <ResturantCart />
            <ResturantCart />

        </div>
    </div>
  )
}
export default Body
