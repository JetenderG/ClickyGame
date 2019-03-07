import React from "react";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ClickBox from "./components/ClickBox";
import images from "./clickon.json"





class App extends React.Component {

  state = (
    images
  );

  componentDidMount() {

    console.log(images)


  }

  render() {
    return (

      <Wrapper>
        <NavBar />
        < Header />


        {this.state.images.map(img => (
          <ClickBox


          />
        ))}



      </Wrapper>




    )
  }
}





export default App;
