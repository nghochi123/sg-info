import React, {useState} from 'react';

import './Search.css';

const Search = (props) => {
    const [searchState, setSearchState] = useState("");
    const buttonPress = (res) =>{
        props.returnSearchInfo(res)
    }
    return (
        <form action="#" onSubmit={()=>buttonPress(props.search)} className="Search-box">
            <input className="Input-box" id={props.placeholder} key="abc" value={props.search} placeholder={props.placeholder} onChange={e=>props.setSearch(e.target.value)}/>
            <button type="submit">Search</button>      
        </form>
    )
}

export default Search;