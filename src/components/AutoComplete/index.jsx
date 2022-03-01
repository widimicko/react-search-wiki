import React from 'react'

import ReactAutocomplete from 'react-autocomplete'
import { Link } from "react-router-dom"

import Input from '../Input'

function AutoComplete ({articles, error, searchValue, onSearchChange}) {
  return (
    <div className="">
      {
        error && <p className='font-bold'>Error: <span className='text-red-500'>{error}</span></p> 
      }
      <ReactAutocomplete
        items={articles}
        renderInput={Input}
        inputProps={{ placeholder: "input a search term" }}
        renderMenu={(children, searchValue) => {
          return articles && articles.length ?
            (<div className="rounded-md border mt-1 p-2">
              {children}
              <a href={`/search/${searchValue}`} className="underline text-blue-500">
                See all Results
              </a>
            </div>) :
            <></>
        }}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            <Link to={`/search/${item.label}`}>{item.label}</Link>
            {/* <a href={item.id} class>{item.label}</a> */}
          </div>
        }
        value={searchValue}
        onChange={onSearchChange}
      />
    </div>
  )
}

export default AutoComplete;
