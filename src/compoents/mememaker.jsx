import React from "react";
import "./memecss.css";
class MemeGenerator extends React.Component {
  state = {
    loading: false,
    topText: "",
    bottomText: "",
    allMemeImgs: [],
    randomImg: "http://i.imgflip.com/1bij.jpg"
  };
  componentDidMount() {
    this.setState({
      loading: true
    });

    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(content =>
        this.setState({
          allMemeImgs: content.data.memes,
          loading: false
        })
      );
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { allMemeImgs } = this.state;
    const rand =
      allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url;
    this.setState({
      randomImg: rand
    });
  };

  render() {
    return (
        <>
      <div style={{marginTop:'130px',maxWidth:'500px'}} className="container-sm">
        
 <br />
        <div className="meme">
          <img src={this.state.randomImg} alt="meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
        <form className="meme-form d-flex flex-column " onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter Text"
            type="text"
            value={this.state.topText}
            name="topText"
            onChange={this.handleChange}
            className='form-control m-2 w-100'
          />
          <input
            placeholder="Enter Text"
            type="text"
            value={this.state.bottomText}
            name="bottomText"
            onChange={this.handleChange}
                        className='form-control m-2 w-100'
          />
          <button className="btn btn-primary">Generate</button>
        </form>
      </div>
      </>
    );
  }
}

export default MemeGenerator;
