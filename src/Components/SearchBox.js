import React from 'react';

const SearchBox=({searchfield,searchChange})=>{
    return(
        <div className='pad2'>
        <input 
        className='pa3 ba b--dreen bg-lightest-blue'
        type='search'
         placeholder='Search Robots'
         onChange={searchChange}
         />
         </div>
    );
}
export default SearchBox; 