import React from "react";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ClickBox from "./components/ClickBox";
import images from "./clickon.json"





class App extends React.Component {

  state = {

    listofChar : images,
    hiscore : 0,
    score : 0

  }

  componentDidMount() {

    renderchar();

  }

  renderchar(){
    let alreadyrend =[];


        for (let i = 0; i < alreadyrend.length;){
          var rnd = Math.floor(Math.random()*11)

          

        }
    

  }

  lose(){


  }

  addScore(){


  }

  winner(){



  }


  render() {
    return (

      <Wrapper>
        <NavBar />
        < Header />



 <ClickBox



 />

      </Wrapper>




    )
  }
}





export default App;
