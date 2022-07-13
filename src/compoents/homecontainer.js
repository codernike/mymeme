import React, { Component } from 'react'

export default class homecontainer extends Component {
  render() {
    return (
     <>
<div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://freepngimg.com/save/97579-meme-doge-free-png-hq/728x724" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Welcome to Memepie.com</h1>
        <p class="lead">You will never realize how weird are you ,until you have a kid that acts just like you</p>
        <div class="d-grid gap-2 mt-4 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-outline-primary  btn-lg px-4 me-md-2"  > <a href='/mememaker'>Make a meme</a></button>
          <button type="button" class="btn btn-outline-success  btn-lg px-4"> <a href="/moregames">Explore Meme's</a></button>
        </div>
      </div>
    </div>
  </div>
     </>
    )
  }
}
