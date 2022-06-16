import React from 'react'

export const Categories = ({categoryId, setCategoryId}) => {
 
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые"
  ]


  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li onClick={() => setCategoryId(index)} key={index} className={categoryId === index ? "active" : ''}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
