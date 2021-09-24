import React, { Component } from 'react';
import Container from '../../components/common/Container';

import { 
  DefaultParagraph, 
  DefaultLink, 
  DefaultBold, 
  DefaultTitle 
} from '../../components/common/Typography';

import Api from '../Api';

import './styles.css';

class ApiResponse extends Component {

  constructor(props){
    super(props);

    this.state = {
      tools: [],
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({
      tools: this.state.tools.filter(function(tool) {
        return tool.id !== id;
      })
    });
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
                      if(window.confirm("Tem certeza que desaja remover uma ferramenta?")){
                        this.handleClick(tool.id)}}
                      }
                      >
                    Remove
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