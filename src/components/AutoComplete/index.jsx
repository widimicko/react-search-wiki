import React from 'react'

import ReactAutocomplete from 'react-autocomplete'

import Input from '../Input'

function AutoComplete ({articles, error, searchValue, onSearchChange}) {
  return (
    <div className="container p-8">
      {
        error && <p className='font-bold'>Error: <span className='text-red-500'>{error}</span></p> 
      }
      <ReactAutocomplete
        items={articles}
        renderInput={Input}
        inputProps={{ placeholder: "input a search term" }}
        renderMenu={(children, searchValue) => {
          return articles && articles.length ?
            (<div className="">
              {children}
              <a href={`/search?query=${searchValue}`} className="underline text-blue-500">
                See all Results
              </a>
            </div>) : <></>
        }}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item.label}
          </div>
        }
        value={searchValue}
        onChange={onSearchChange}
      />
    </div>
  )
}

export default AutoComplete;
