// import { useEffect, useState } from "react"
// import apiClient from "../services/api-client"
// import { AxiosRequestConfig, CanceledError } from "axios"


// const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
//   // console.log("Calling useData w deps")
//   // console.log(deps)
//   const [ data, setData] =  useState<T[]>()
//   const [ isLoading, setLoading] = useState(false)
//   const [error, setError] = useState("")
  
//   useEffect(()=> {
//     // console.log("refreshing")
//     const controller = new AbortController()
//     setLoading(true)
//     apiClient.get<FetchResponse<T>>(endpoint, { signal:  controller.signal, ...requestConfig })
//     .then((res)=> {
//       setData(res.data.results)
//       setLoading(false)
//     })
//     .catch(err => {
//       if (err instanceof CanceledError) return
//       setError(err.message)
//       setLoading(false)
//     })

//     return (() => {
//       controller.abort()
//     })
//   }, deps ? [...deps] :[])
//   return { data, error, isLoading}
// }

// export default useData