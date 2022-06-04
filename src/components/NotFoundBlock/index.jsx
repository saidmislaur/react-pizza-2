import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <div>
        <h2>Ничего не найдено<icon>😕</icon></h2>
        <p>
          к сожалению, такой страницы нет на сайте
        </p>
      </div>
    </div>
  )
}

export default NotFoundBlock

