import React, {useState} from 'react';

import Modal from '../common/Modal/index';

import './styles.css';

import Api from '../../Api/Api';


function Form() {

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
    }

  
    return (
        <form onSubmit={addTool} id="add-tool-form">
            <h1>Add new tool!</h1>
            <div className="fields">
                <label>Title:</label>
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="fields">
                <label>Link:</label>
                <input
                    required
                    type="text"
                    name="link"
                    placeholder="http://example.com"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
            </div>            
            <div className="fields">
                <label>Description:</label>
                <textarea
                    required
                    name="description"
                    placeholder="Tell us about the tool"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="fields">
                <label>Tags:</label>                
                <input
                    required
                    type="text"
                    name="tags"
                    placeholder="Enter your tags!"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
            </div>
            <div className="btn-post">
                <input type="submit" value="submit"/>
            </div>                
        </form>
      );
    }

export default Form;