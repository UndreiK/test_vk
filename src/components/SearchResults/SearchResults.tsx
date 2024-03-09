import { useContext } from 'react'
import { SearchContext } from './SearchContext'
import { UserCard } from '../UserCard/UserCard'

import './style.css'
import { User } from '../../types'

export function SearchResults() {
  const { users } = useContext(SearchContext)

  return (
    <div className="usersList">
      {users && users.map((user: User) => <UserCard key={user.id} {...user} />)}
    </div>
  )
}
