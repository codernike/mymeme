import React, { Component } from 'react'

export default class Homeform extends Component {
  render() {
    return (
      <>
      <center>
      <div className='w-75 ' style={{}}>
      <div className='text-center display-4'>Send me a Meme</div>
      <input type='text' placeholder='Enter Name here ' className=' w-100 form-control mt-5 pt-2 p-3'/>
      <input type='Email' placeholder='Enter Email here ' className=' w-100 form-control mt-5 pt-2 p-3'/>
      <input type='password' placeholder='Enter Password here ' className=' w-100 form-control mt-5 pt-2 p-3'/>
      <input type='password' placeholder='ReEnter Password here ' className=' w-100 form-control mt-5 pt-2 p-3 '/>
        <button className=' btn btn-primary w-75 mt-5 pt-2'>Contact Me</button>
      </div></center>
      </>
    )
  }
}
