export const Enter = async (currentPro, setCurrentPro, inputValue) => {
  const updateRes = await fetch(`api/DatabaseApi/freight/updateLoadedDocked/${currentPro.pronumber}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ loaded: null, docked: inputValue, onTrailer: null })
  })
  await updateRes.json()
  const res = await fetch(`api/DatabaseApi/freight/${currentPro.pronumber}`)
  const data = await res.json()
  setCurrentPro(data)
}
