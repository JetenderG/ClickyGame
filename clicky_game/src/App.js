import React from "react";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ClickBox from "./components/ClickBox";
import images from "./clickon.json"
import CurrentScore  from "./components/CurrentScore";
import Hiscore from "./components/HighScoreBox"
import Body from "./components/Body";




class App extends React.Component {

  constructor() {
    super();
    this.state = {
      listofChar: images,
      hiscore: 0,
      score: 0,
      trackImg: []
    }
  }


  renderchar() {
    //console.log(this.state.listofChar.length)
    let alreadyrend = [];
    for (let i = 0; i <= this.state.listofChar.length;) {
      let rand = this.state.listofChar[Math.floor(Math.random() * this.state.listofChar.length)]
      if (alreadyrend.includes(rand)) {
      } else {


        alreadyrend.push(rand);
        //      console.log(rand)

        //        console.log(alreadyrend)
        i++
        if (alreadyrend.length === this.state.listofChar.length) {
            console.log(alreadyrend)
          return alreadyrend;
        }
      }

    }
  }



  lose() {
    console.log("lose:   ")
    console.log(this.state.trackImg)
    alert("You Lose")
    this.setState({
      score: 0,
      trackImg:[]
    })
    }

  differClick = (id) => {
    console.log(this.state.trackImg)
    if (this.state.trackImg.length === 0) {
      console.log(id)

      this.winner(id);
    } else {
      this.state.trackImg.forEach((item, index, array) => {
        console.log(id)
        console.log(item)

        if (item === id) {

          this.lose();

        } else if (index === (array.length - 1)) {
            console.log(index)
            console.log(array)
            console.log(array.length)
          this.winner(id);

        }else{}
      })

    }

  }

  winner =(id) => {
    console.log("point added")

    console.log(this.state.trackImg)

    var joined = this.state.trackImg.concat(id)

    console.log(joined)

    this.setState({
      score: this.state.score + 1,
      trackImg: joined
    })

    if (this.state.score > this.state.hiscore) {

      this.setState({
        hiscore: this.state.score
      })
    }

    if (this.state.score.length === this.state.listofChar.length) {

      alert("You Win   " + id)
      this.setState({
        score: 0
      })
    }

  }


  render() {
    let rndArray = this.renderchar()
    return (

    <Body>
    < Header >
    <div className="container">
      <div className="row">
        <div className="col">
          <CurrentScore
                            score={this.state.score}
          />
        </div>
        <div className="col">
        <Hiscore 
                              hiScore={this.state.hiscore}
        />
        </div>
      </div>
    </div>
          
          
    </Header>
        

        


 <div className="container">

       
  
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




    


    </Body>
      
    )
  }
}





export default App;
