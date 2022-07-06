export const WeightListActive = (scroll, setTop, setBottom) => {
  const top = scroll.current.scrollTop
  const height = scroll.current.scrollHeight - 600
// Add '* * * *' when top weight is not !visible
  if (top !== 0) {
    setTop('* * * *')
  } else {
    setTop('')
  }
// Add '* * * *' when bottom weight is !visible
  if (top !== height) {
    setBottom('* * * *')
  } else {
    setBottom('')
  }
}