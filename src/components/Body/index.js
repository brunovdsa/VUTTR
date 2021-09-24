import React, { Component } from "react";

import {
  MainTitle, 
  MainDescription
} from "../common/Typography/index";

import Container from "../common/Container";
import ApiResponse from "../../Api/ApiResponse";


class Body extends Component {
    render() {
    
        return (
          <div>
            <Container>
              <Container>
                <MainTitle>VUTTR</MainTitle>
                <MainDescription>Very usefull tools to remember</MainDescription>
              </Container>              
              <ApiResponse></ApiResponse>      
            </Container> 
          </div>        
        );
      }
}

export default Body;