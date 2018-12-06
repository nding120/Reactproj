import React from 'react';
import Logo from '../../components/logo/logo';
//import {WhiteSpace} from 'react-dom';

const Search = ()=>{
    return(
        <div className="searchPage">
            <Logo/>
            <h2>Welcome to Van Gogh World(search)</h2>
            {/* <WhiteSpace/> */}
            <div id="searchInput">
                <input id="searchInput" type="text" placeholder="Search Items"/>
            </div>
        </div>
    )
}

export default Search;