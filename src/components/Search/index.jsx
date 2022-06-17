import React from 'react'
import {SearchContext} from '../../App'
import styles from './Search.module.scss'

const Search = () => {

  const { searchValue, setSearchValue } = React.useContext(SearchContext)

  return (
    <input
      value={searchValue}
      onChange={event => setSearchValue(event.target.value)}
      className={styles.input}
      placeholder='поиск пиццы...' />
  )
}

export default Search