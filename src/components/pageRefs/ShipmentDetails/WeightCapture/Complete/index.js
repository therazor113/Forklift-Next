export const Complete = async (currentPro, setCurrentPro, hu, weight) => {
  const updateRes = await fetch(`api/DatabaseApi/freight/updateHuWeight/${currentPro.pronumber}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ handlingUnits: hu, totalWeight: weight })
  })
  await updateRes.json()
  const res = await fetch(`api/DatabaseApi/freight/${currentPro.pronumber}`)
  const data = await res.json()
  setCurrentPro(data)
}
