import { useState } from 'react'
import './styles.css'

export function SearchForm(props: { onSearch: (keyword: string) => void }) {
  const [keyword, setKeyword] = useState('')

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    props.onSearch(keyword.trim())
    console.log(keyword)
    setKeyword('')
  }

  return (
    <div className="searchForm">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
    </div>
  )
}
