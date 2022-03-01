/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactAutocomplete from 'react-autocomplete'

import useSearch from './hooks/useSearch'
import useDebounce from './hooks/useDebounce'
import useSearchForm from './hooks/useSearchForm'
// import { useSearch, useDebounce, useSearchForm } from './hooks'

import Input from './components/Input'

function App () {
  const { searchValue, onSearchChange } = useSearchForm()
  const { articles, error } = useSearch(useDebounce(searchValue))

  return (
    <div className="App container p-8">
      {
        error && <p>Error: <span>{error}</span></p> 
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

export default App;
