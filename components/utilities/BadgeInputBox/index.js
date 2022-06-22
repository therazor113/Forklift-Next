
const BadgeInputBox = ({ onClick, inputValue }) => {

	const handleClick = async () => {
		try {
      const response = await fetch(`api/NamesApi/${inputValue}`)
      const data = await response.json()
      console.log(data)
      let result = data.first
      onClick(result)
		} catch {
			console.log('error')
      onClick([])
		}		
	}

  return (
    <button onMouseDown={handleClick}>Bruh</button>
  )
}

export default BadgeInputBox