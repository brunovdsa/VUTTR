
import React, { useEffect, useState } from "react";

import Api from '../../../Api/Api';
import { 
    DefaultParagraph, 
    DefaultLink, 
    DefaultBold, 
    DefaultTitle 
  } from '../Typography/index';

  import './styles.css'

const SearchInput = () => {

    const [ tools, setTools ] = useState([]);
    const [ search, setSearch] = useState('');
    const [ tags, setTags ] = useState(false);

    async function getTools() {
        if (tags) {
            const response = await Api.get(`?tags_like=${search}`);
            setTools(response.data);
        } else {
            const response = await Api.get(`?q=${search}`);
            setTools(response.data);
        }
    }
    useEffect(() => {
        getTools()
    }, [search]);
  
    return(
        <div>
            <form>
                <input 
                    type="text" 
                    placeholder="Search a tool!"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-bar"
                    />
                <div className="checkbox">
                    <input type="checkbox" id="check" onChange={() => setTags(!tags)} />
                    <label htmlFor="check">Search by tags only!</label>
                </div>
                <div>
                
                </div>
            </form>
        </div>
    )
}

export default SearchInput;