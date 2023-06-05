const useAPI = () => {
  const url = '/api'
  return [
    async (path, method, body) => {
      try {
        let data = []
        if (method === 'GET') {
          const res = await fetch(`${url}${path}`)
          data = await res.json()
        } else if (method === ('POST' || 'PUT')) {
          const res = await fetch(`${url}${path}`, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          })
          data = await res.json()
        }
        return data
      } catch (err) {
        console.error(err.message)
      }
    }
  ]
}

export default useAPI
