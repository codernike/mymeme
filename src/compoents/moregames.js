import React, { Component } from 'react'

export default class moregames extends Component {
  render() {
    const person =[
        {imgurl:'https://www.rd.com/wp-content/uploads/2021/03/MomMemes5-e1614797010225.jpg?resize=768,768'},
        {imgurl:'https://i.pinimg.com/736x/ae/8a/ce/ae8ace9f787fa15727ed4efdc63786b7.jpg'},
        {imgurl:'https://i.pinimg.com/736x/d9/c8/36/d9c83679bad19b87e9bc2695f566b7c7.jpg'}, 
        {imgurl:'https://i.pinimg.com/736x/62/bf/0d/62bf0d6b9ccd73f5e15aad8fa1d6163c.jpg'},
        {imgurl:'https://www.letseatcake.com/wp-content/uploads/2021/07/funny-memes-12.jpg'},
        {imgurl:'https://i.pinimg.com/originals/ea/47/dd/ea47ddd5f1d90ba74e4deb5e15be57e2.jpg'},
        {imgurl:'https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/21609312734288.jpg'},
        {imgurl:'https://pbs.twimg.com/media/FN9cYXCagAAzDmO?format=jpg&name=900x900'},
        {imgurl:'https://aws1.discourse-cdn.com/business6/uploads/codecombat/original/3X/a/6/a69c29b47e82bb0f617275d1e10f85992506e8f1.jpeg'},
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
