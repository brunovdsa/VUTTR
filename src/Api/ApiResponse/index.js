import axios from 'axios';
import React, { Component } from 'react';
import Container from '../../components/common/Container';

import { 
  DefaultParagraph, 
  DefaultLink, 
  DefaultBold, 
  DefaultTitle 
} from '../../components/common/Typography';

import Api from '../Api';

import ApiDApiDeleteBtn from '../ApiDelete';

import './styles.css'

class ApiResponse extends Component {

  state={
    tools: [],
  }

  async componentDidMount(){
    const response = await Api.get('');   

    this.setState({tools: response.data});
  
  }
  render() {
    
    const { tools } = this.state;
        
    return (
      <div>
        <section className="main-section">  
          <Container>
            {tools.map(tool => (
              <div key={tool.id} className="card">                
                <div className="header-card">
                  <DefaultTitle>{tool.title}</DefaultTitle>
                  <button 
                    className="remove-button"
                    onClick={(id)=>{
                      axios.delete(`http://localhost:3000/tools/${tool.id}`)

                      this.setState(tools.filter(tool => tool.id !== id))                      
                    }}                   
                    >Remove
                    </button>
                </div>
                <DefaultParagraph>{tool.description}</DefaultParagraph>
                <DefaultLink>{tool.link}</DefaultLink>
                <div className="tag">                  
                {tool.tags.map(tag => (
                  <p key={tag}>
                    <DefaultBold>#{tag}</DefaultBold>
                  </p>
                ))}
                </div>
              </div>
            ))}            
          </Container>
          </section>       
      </div>        
    );
  }
}
export default ApiResponse;