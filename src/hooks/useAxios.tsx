import { useState, useEffect, useReducer } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

interface ReducerAction {
  type: 'FETCH_INIT' | 'FETCH_SUCCESS' | 'FETCH_FAILURE'
  payload?: any
}

const reducer = (state = {}, action: ReducerAction) => {
  const { type, payload } = action

  switch (type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload.data,
        statusCode: payload.status,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}

const useAxios = (
  initialUrl = '',
  initialAxiosOptions: AxiosRequestConfig = {},
  initialData = null,
) => {
  const [url, setUrl] = useState(initialUrl)
  const [axiosOptions, setAxiosOptions] = useState(initialAxiosOptions)

  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    isError: false,
    data: initialData,
    statusCode: null,
  })

  useEffect(() => {
    let didCancel = false

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' })

      try {
        const result = await axios(url, axiosOptions)

        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result })
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' })
        }
      }
    }

    if (url) fetchData()

    return () => {
      didCancel = true
    }
  }, [url, axiosOptions])

  const doFetch = (url: string, axiosOptions: AxiosRequestConfig = {}) => {
    setUrl(url)
    setAxiosOptions(axiosOptions)
  }

  return { ...state, doFetch } as {
    isLoading: boolean
    isError: boolean
    data: any
    statusCode: number
    doFetch: (url: string, axiosOptions?: AxiosRequestConfig) => void
  }
}

export default useAxios
