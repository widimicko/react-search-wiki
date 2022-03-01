import React from "react";

import Container from '../../components/Container'
import AutoComplete from '../../components/AutoComplete'

function Home() {
 return (
   <Container>
      { ({ searchValue, onSearchChange, articles, error }) => <AutoComplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue} error={error} /> }
    </Container>
 )
}

export default Home

