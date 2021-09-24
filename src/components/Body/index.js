import React, { Component } from "react";

import {
  MainTitle, 
  MainDescription
} from "../common/Typography/index";

import Container from "../common/Container";
import ApiResponse from "../../Api/ApiResponse";
import ModalButton from "../common/ModalButton";


class Body extends Component {
    render() {
    
        return (
          <div>
            <Container>
              <Container>
                <MainTitle>VUTTR</MainTitle>
                <MainDescription>Very usefull tools to remember</MainDescription>
                <ModalButton></ModalButton>
              </Container>              
              <ApiResponse></ApiResponse>      
            </Container> 
          </div>        
        );
      }
}

export default Body;