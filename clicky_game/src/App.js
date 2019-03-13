import React from "react";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ClickBox from "./components/ClickBox";
import images from "./clickon.json"





class App extends React.Component {

  state = {

    listofChar: images,
    hiscore: 0,
    score: 0,
    trackImg:[]

  }


  renderchar() {
    console.log(this.state.listofChar.length)
    let alreadyrend = [];
    for (let i = 0; i <= this.state.listofChar.length;) {
      let rand = this.state.listofChar[Math.floor(Math.random() * this.state.listofChar.length)]
      if (alreadyrend.includes(rand)) {
      } else {


        alreadyrend.push(rand);
        console.log(rand)

        console.log(alreadyrend)
        i++
        if (alreadyrend.length === this.state.listofChar.length) {
          console.log(alreadyrend)
          return alreadyrend;
        }
      }

    }
  }



  lose() {

    alert("You Lose")
    this.setState({
      score: 0
    })
  }

  differClick( id) {

    this.state.trackImg.forEach((item, index,array) =>{

      if (item ===id){

       this.lose();

      }else if(index === array.length - 1){ 

              this.winner();

      }
    })
  }

  winner() {

this.setState({
    score: this.state.scrore +1
})

if (this.state.score >this.state.hiscore){

  this.setState({
   hiscore: this.state.score
  })
}

if(this.state.score.length === this.state.listofChar.length){

  alert("You Win")
  this.setState({

    score : 0
  })
}

  }


  render() {
    let rndArray = this.renderchar()
    return (
      <div className="container">

        <NavBar />
        < Header />

        <Wrapper>

          {rndArray.map(img => (

            <ClickBox
              id={img.id}
              key={img.id}
              alt={img.animal}
              images={img.images}
              clickevent={this.differClick}
          
            />
          ))}

        </Wrapper>


      </div>




    )
  }
}





export default App;
