import React, {useState} from 'react';

import { GoPlus } from 'react-icons/go';

import { 
    DefaultParagraph, 
    DefaultLink, 
    DefaultBold, 
    DefaultTitle,
    SecondaryTitle 
  } from '../../components/common/Typography/index';

import './styles.css';

import Api from '../../Api/Api';


function Form() {

    function refreshPage(){ 
        window.history.go(0); 
    }

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [tags, setTags] = useState('');

    async function addTool(e) {
        e.preventDefault()
        const tagArr = tags.split(' ')

        await Api.post('', {
        title,
        description,
        link,
        tags: tagArr
        });
    };
    
    return (
        <form onSubmit={addTool} id="add-tool-form">
            <div className="form-header">
                <GoPlus className="go-plus"/>
                <DefaultTitle>Add new tool!</DefaultTitle>               
            </div>
            <div className="fields">
                <label>
                    <SecondaryTitle>Title:</SecondaryTitle>
                </label>
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="Title"
                    className="input-form"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="fields">
                <label>
                    <SecondaryTitle>Link:</SecondaryTitle>
                </label>
                <input
                    required
                    type="text"
                    name="link"
                    placeholder="http://example.com"
                    className="input-form"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
            </div>            
            <div className="fields">
                <label>
                    <SecondaryTitle>Description:</SecondaryTitle>
                </label>
                <textarea
                    required
                    name="description"
                    placeholder="Tell us about the tool"
                    className="input-form"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="fields">
                <label>
                    <SecondaryTitle>Tags:</SecondaryTitle>
                </label>                
                <input
                    required
                    type="text"
                    name="tags"
                    placeholder="Enter your tags!"
                    className="input-form"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
            </div>
            <div className="btn-post">
                <input type="submit" value="Add tool" onClick={refreshPage}/>
            </div>                
        </form>
      );
    }

export default Form;