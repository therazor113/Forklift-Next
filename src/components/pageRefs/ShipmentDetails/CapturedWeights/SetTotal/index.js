export const SetTotal = (weightData, setTotal, setCount) => {
// Set hu and weight total
  if (weightData.length === 0) {
    setTotal({ hu: 0, weight: 0 })
  } else {
    setTotal({
      hu: weightData.map(i => i.hu).reduce((x, y) => x + y),
      weight: weightData.map(i => i.weight).reduce((x, y) => x + y)
    })
    // Increment count
    setCount(val => val + 1)
  }
}
