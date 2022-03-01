import { useState, useCallback } from 'react'

const useSearchForm = () => {
  const [searchValue, setSearchValue] = useState('')

  const onSearchChange = useCallback((e) => setSearchValue(e.target.value), [])

  return {
    searchValue,
    onSearchChange
  }
}

export default useSearchForm