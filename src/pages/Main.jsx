import React from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Cart } from '../components/PizzaBlock';
import Sceleton from '../components/PizzaBlock/Sceleton'
import { Categories } from '../components/categories';
import { Sort } from '../components/sort';
import '../scss/app.scss';

import { setCategoryId } from '../redux/slices/filterSlice';



export const Main = ({searchValue}) => {
  const [items, setItems] = React.useState([])
  const [sortActive, setSortActive] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(true)

  const categoryId = useSelector((state) => state.filter.categoryId)
  const dispath = useDispatch();

  const clickOnChange = (id) => {
    dispath(setCategoryId(id))
  }

  React.useEffect(() => {
    setIsLoading(true)
    const category = categoryId > 0 ? `category=${categoryId}`: '';
    const search = searchValue ? `&search${searchValue}`: ''; 

    axios.get(`https://6294acdda7203b3ed06e7c05.mockapi.io/items?${category}${search}`)
      .then((res) => {
        setItems(res.data);
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
        <Categories categoryId={categoryId} setCategoryId={clickOnChange}/>
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
