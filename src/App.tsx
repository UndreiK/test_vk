import { useEffect, useState } from 'react'
import { SearchForm } from './components/SearchFrom/SearchForm'
import { SearchContext } from './components/SearchResults/SearchContext'
import { SearchResults } from './components/SearchResults/SearchResults'
// import { UserCard } from './components/UserCard/UserCard'
import { User } from './types'

export default function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users/')
        const data = await response.json()
        setUsers(data.users)
        console.log(data.users)
      } catch (error) {
        console.error('Error: ', error)
      }
    }

    fetchData()
  }, [])

  return (
    <SearchContext.Provider value={{ users }}>
      <>
        <SearchForm />
        <SearchResults />
      </>
    </SearchContext.Provider>
    // <>
    //   <SearchForm />
    //   {users ? (
    //     users.map((user: User) => <UserCard key={user.id} {...user} />)
    //   ) : (
    //     <div>Not found</div>
    //   )}
    // </>
  )
}
