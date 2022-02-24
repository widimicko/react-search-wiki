import React, { useState } from 'react'
import ReactAutocomplete from 'react-autocomplete'
import { useSearch, useDebounce } from './hooks'

import Input from './components/Input'

function App () {
  const [value, setValue] = useState('')
  const {articles, error} = useSearch(useDebounce(value))

  return (
    <div className="App">
      <p className=''>Error: <span style={{ color: 'red' }}>{error ?? 'Oke'}</span></p>
      <ReactAutocomplete
        items={articles}
        renderInput={Input}
        inputProps={{ placeholder: "input a search term" }}
        renderMenu={(children, value) => (
          <div style={{  }}>
            {children}
            <a href={`/search?query=${value}`}>See all Results</a>
          </div>
        )}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item.label}
          </div>
        }
        value={value}
        onChange={e => setValue(e.target.value)}
        onSelect={value => setValue(value)}
      />
    </div>
  )
}

export default App;
