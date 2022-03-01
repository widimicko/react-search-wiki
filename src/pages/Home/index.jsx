import React from "react";

import Container from '../../components/Container'
import AutoComplete from '../../components/AutoComplete'

import googleLogo from '../../assets/logo-google.png'

function Home() {
 return (
   <div className="container flex flex-col items-center gap-6 mt-36">
    <img src={googleLogo} alt="" className="max-w-[400px]" />
    <Container>
      { ({ searchValue, onSearchChange, articles, error }) => <AutoComplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue} error={error} /> }
    </Container>
   </div>
 )
}

export default Home

