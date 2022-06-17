import React from 'react'
import { Cart } from '../components/PizzaBlock';
import Sceleton from '../components/PizzaBlock/Sceleton'
import { Categories } from '../components/categories';
import { Sort } from '../components/sort';
import '../scss/app.scss';


export const Main = ({searchValue}) => {
  const [items, setItems] = React.useState([])
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortActive, setSortActive] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setIsLoading(true)
    const category = categoryId > 0 ? `category=${categoryId}`: '';
    const search = searchValue ? `&search${searchValue}`: ''; 

    fetch(`https://6294acdda7203b3ed06e7c05.mockapi.io/items?${category}${search}`)
      .then(res => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false)
    })
  }, [categoryId, searchValue])

  const pizzas = items.filter(
    arr => arr.title.toLowerCase().includes(searchValue.toLowerCase()) 
  ).map((item, index) => ( <Cart key={item.id} {...item} index={index}/>));
  const sceletons = [...new Array(4)].map((_, index) => <Sceleton key={index} />) 

  return (
    <div>
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={setCategoryId}/>
        <Sort sortActive={sortActive} setSortActive={setSortActive}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading 
          ? sceletons
          : pizzas
        }
      </div>
    </div>
  )
}
