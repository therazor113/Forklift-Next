export const Enter = async (currentPro, setCurrentPro, inputValue, trailerId) => {
  const updateRes = await fetch(`api/DatabaseApi/freight/updateLoadedDocked/${currentPro.proNumber}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ loaded: inputValue, docked: null, onTrailer: trailerId?.trailerId })
  })
  await updateRes.json()
  const res = await fetch(`api/DatabaseApi/freight/${currentPro.proNumber}`)
  const data = await res.json()
  setCurrentPro(data)
}
