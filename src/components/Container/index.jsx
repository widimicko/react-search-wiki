/* eslint-disable no-unused-vars */
import React from 'react'

import useSearch from '../../hooks/useSearch'
import useDebounce from '../../hooks/useDebounce'
import useSearchForm from '../../hooks/useSearchForm'

function Container ({ children }) {
  const { searchValue, onSearchChange } = useSearchForm()
  const { articles, error } = useSearch(useDebounce(searchValue), 10)

  return children({searchValue, onSearchChange, articles, error})
}

export default Container
