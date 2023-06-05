const FetchLogIn = async (handleFetch, inputValue) => {
  const path = '/UsersApi'
  return await handleFetch(path, 'POST', { id: inputValue })
}

export default FetchLogIn
