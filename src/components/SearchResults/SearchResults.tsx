import { useContext } from 'react'
import { SearchContext } from './SearchContext'
import { UserCard } from '../UserCard/UserCard'

import './style.css'
import { User } from '../../types'

export function SearchResults() {
  const { users } = useContext(SearchContext)

  return (
    <div className="usersList">
      {users.length !== 0 ? (
        users.map((user: User) => <UserCard key={user.id} {...user} />)
      ) : (
        <div>No users found</div>
      )}
    </div>
  )
}
