import React from "react";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ClickBox from "./components/ClickBox";
import images from "./clickon.json"
import CurrentScore from "./components/CurrentScore";
import Hiscore from "./components/HighScoreBox"
import Body from "./components/Body";
import ContainItems from "./components/ContainItems";
import "./style.css";




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listofChar: images,
      hiscore: 0,
      score: 0,
      trackImg: []
    }
    //this.differClick = this.differClick().bind(this);


  }
  renderchar() {
    //console.log(this.state.listofChar.length)
    let alreadyrend = [];
    for (let i = 0; i <= this.state.listofChar.length;) {
      let rand = this.state.listofChar[Math.floor(Math.random() * this.state.listofChar.length)]
      if (alreadyrend.includes(rand)) {
      } else {
        alreadyrend.push(rand);
        i++
        if (alreadyrend.length === this.state.listofChar.length) {
          return alreadyrend;
        }
      }
    }
  }

  checkifExist(array, id) {
    console.log(array.some(element => id === element))
    return array.some(element => id === element)
  }


  differClick = (id) => {
    console.log(this.state.trackImg)
    if (this.state.trackImg.length === 0) {
      console.log(id)
      this.pointAdded(id);
    } else {
      console.log(id)

      /**************************************************************************
       *         THIS.STATE.TRACKIMG.FOREACH((ITEM, INDEX, ARRAY) => {          *
       *                           IF (ITEM === ID) {                           *
       *                 CONSOLE.LOG(ITEM + "          " + ID)                  *
       *                              THIS.LOSE();                              *
       *               } ELSE IF (INDEX === (ARRAY.LENGTH - 1)) {               *
       *                          THIS.POINTADDED(ID);                          *
       * } ELSE IF (THIS.STATE.SCORE.LENGTH === THIS.STATE.LISTOFCHAR.LENGTH) { *
       *                             THIS.WINNER();                             *
       *                                   }                                    *
       *                                   })                                   *
       **************************************************************************/

      if ((this.checkifExist(this.state.trackImg, id)) === true) {
        this.lose();
      } else {
        this.pointAdded(id);
      }


    }
  }

  pointAdded = (id) => {
    var joined = this.state.trackImg.concat(id)
    this.setState({
      score: this.state.score + 1,
      trackImg: joined
    })
    if (this.state.score > this.state.hiscore) {
      this.setState({
        hiscore: this.state.score
      })
    }
  }
  lose = () => {
    alert("You Lose")
    this.setState({
      score: 0,
      trackImg: []
    })
  }
  winner = (id) => {
    alert("You Win")
    this.setState({
      score: 0
    })
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
        <div className="container containerItems">
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
