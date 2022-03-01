import { useState, useEffect, useRef } from "react"
import axios from "axios"

const useSearch = (query, limit = 10) => {
  const [state, setState] = useState({
    articles:  [],
    status: 'idle',
    error: ''
  })

  const cancelToken = useRef(null)

  if (cancelToken.current) {
    cancelToken.current.cancel()
  }

  useEffect(() => {
    if (query.length < 3) {
      return;
    }

    cancelToken.current = axios.CancelToken.source()

    axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}&limit=${limit}`, {
      cancelToken: cancelToken.current.token
    })
      .then((response) => {
        const parsedResponse = []

        for (let i = 0; i < response.data[1].length; i++) {
          parsedResponse.push({
            id: response.data[3][i],
            label: response.data[1][i]
          })
        }
        setState({
          articles: parsedResponse,
          status: 'success',
          error: null
        })
      })

      .catch((error) => {
        if (axios.isCancel(error)) {
          return;
        }
        console.error(error);
        setState({
          articles: [],
          status: 'failed',
          error: error
        })
      })
  }, [query])

  return state
}

export default useSearch
