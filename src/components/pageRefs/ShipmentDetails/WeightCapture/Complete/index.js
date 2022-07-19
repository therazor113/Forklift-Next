export const Complete = async (currentPro, setCurrentPro, hu, weight) => {
  const updateRes = await fetch(`api/DatabaseApi/freight/updateHuWeight/${currentPro.proNumber}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ handlingUnits: hu, totalWeight: weight })
  })
  await updateRes.json()
  const res = await fetch(`api/DatabaseApi/freight/${currentPro.proNumber}`)
  const data = await res.json()
  setCurrentPro(data)
}
