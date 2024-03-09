import { useContext, useState } from 'react'
import './styles.css'
import { SearchContext } from '../SearchResults/SearchContext'
import { User } from '../../types'

export function SearchForm() {
  const { users } = useContext(SearchContext)
  const [search, setSearch] = useState('')

  const handleSearch = (event: any) => {
    event.preventDefault()

    setSearch(event.target.value)
    console.log(event.target.value)

    setSearch('')
  }

  return (
    <div className="searchForm">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  )
}
