/* eslint-disable no-unused-vars */
import React from 'react'

import Container from './components/Container';
import AutoComplete from './components/AutoComplete';

function App () {

  return (
    <Container>
      {({searchValue, onSearchChange, articles}) => <AutoComplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue} />}
    </Container>
  )
}

export default App;
