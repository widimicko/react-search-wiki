import React from "react";

import { useParams } from "react-router-dom";

import useSearch from "../../hooks/useSearch";
import Container from '../../components/Container'
import AutoComplete from '../../components/AutoComplete'

function Search() {
  const params = useParams()

  const { articles, error } = useSearch(params.label, 100)

  return (
    <div className="p-10">
      <Container>
        { ({ searchValue, onSearchChange, articles, error }) => <AutoComplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue} error={error} /> }
      </Container>
      { articles && articles.length && !error ?
          articles.map(article => {
            return <div key={article.id}>
              <a href={article.id} target="_blank" rel="noreferrer">
                {article.label}
              </a><hr />
            </div>
          }):
          <div>
            <h1>No Data</h1>
          </div>
      }
    </div>
  )
}

export default Search