export const weightScroll = (scrollRef, objRef, select) => {
  if (select !== 1 && objRef.current !== null) {
    objRef.current.scrollIntoView({block: 'nearest', inline: 'start'})
  } else if (select == 1) {
    scrollRef.current.scrollTop = 0
  }
}
