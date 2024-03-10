import { useEffect, useState } from 'react'
import { SearchForm } from './components/SearchFrom/SearchForm'
import { SearchResults } from './components/SearchResults/SearchResults'
import { SearchContext } from './components/SearchResults/SearchContext'

import { User } from './types'

export default function App() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setErrors] = useState<string | null>(null)

  async function doSearch(keyword: string) {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${keyword}`
      )
      if (!response.ok) {
        throw new Error('Ошибка при получении данных')
      }
      const data: { users: User[] } = await response.json()
      setUsers(data.users)
      console.log(data.users)
    } catch (error) {
      console.error('Error: ', error)
      setErrors(`${error}`)
    }
  }

  useEffect(() => {
    doSearch('')
  }, [])

  return (
    <>
      <SearchContext.Provider value={{ users }}>
        <SearchForm onSearch={doSearch} />
        {error && error.length > 0 && (
          <div style={{ color: 'red' }}>{error}</div>
        )}
        <SearchResults />
      </SearchContext.Provider>
    </>
  )
}
