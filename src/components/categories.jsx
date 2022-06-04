import React from 'react'

export const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
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
          <li onClick={() => setActiveIndex(index)} key={index} className={activeIndex === index ? "active" : ''}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
