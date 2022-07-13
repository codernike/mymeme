import React, { Component } from 'react'

export default class moregames extends Component {
  render() {
    const person =[
        {imgurl:'https://www.rd.com/wp-content/uploads/2021/03/MomMemes5-e1614797010225.jpg?resize=768,768'},
        {imgurl:'https://i.pinimg.com/736x/ae/8a/ce/ae8ace9f787fa15727ed4efdc63786b7.jpg'},
        {imgurl:'https://i.pinimg.com/736x/d9/c8/36/d9c83679bad19b87e9bc2695f566b7c7.jpg'}
      ]
     
    return (
        <>
    <div class="container mx-auto lg:my-2">
   <h2 class="text-3xl font-medium title-font text-gray-900 my-10 text-center"> Best Meme</h2>
   <div class="flex flex-wrap">
   {person.map((element)=>(
  
       <div class="lg:p-4 md:w-1/3 flex justify-center">
           <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg"><img class="w-full" src={element.imgurl} alt="Meme"/>
      
           </div>
      </div>
   ))} 
       
       
   </div>
</div>
            
     </>
    )
  }
}