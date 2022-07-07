import { createSlice } from '@reduxjs/toolkit'



export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    categoryId: 0,
    sort: {
      id: 0,
      name: 'популярности',
      sortProperty: 'rating'
    }
  },
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    }
  }
})

export const {setCategoryId, setSort} = filterSlice.actions



export default filterSlice.reducer
