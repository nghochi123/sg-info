import React from 'react';

import './Search.css';

const Search = (props) => {
    const buttonPress = (res, e) =>{
        props.returnSearchInfo(res);
        e.preventDefault();
    }
    return (
        <form action="#" onSubmit={(e)=>buttonPress(props.search, e)} className="Search-box">
            <input className="Input-box" id={props.placeholder} key="abc" value={props.search} placeholder={props.placeholder} onChange={e=>props.setSearch(e.target.value)}/>
            <button type="submit">Search</button>      
        </form>
    )
}

export default Search;