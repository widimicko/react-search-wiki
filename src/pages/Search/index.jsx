import React from "react";

import { useParams } from "react-router-dom";

import useSearch from "../../hooks/useSearch";
import Container from '../../components/Container'
import ListItem from '../../components/ListItem'
import AutoComplete from '../../components/AutoComplete'

function Search() {
  const params = useParams()

  const { articles, error } = useSearch(params.label, 100)

  return (
    <div className="p-10">
      <div className="text-center">
        <Container>
          { ({ searchValue, onSearchChange, articles, error }) => <AutoComplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue} error={error} /> }
        </Container>
      </div>
      { articles && articles.length && !error
          ? articles.map(article => <ListItem key={article.id} {...article} />)
          : <div>
            <h1>No Data</h1>
          </div>
      }
    </div>
  )
}

export default Search