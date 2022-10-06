// ** Domain
// import jwt from '../../../../../../../src/@core/auth/jwt/jwtDefaultConfig'
import jwtDefaultConfig from '@src/@core/auth/jwt/jwtDefaultConfig'

// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
export const getData = createAsyncThunk('datatables/getData', async params => {
  try {
    if (params.handleProgress !== undefined) params.handleProgress(true)
    // console.log(`${jwt.endPoint}/api/v1/products?skip=${params.page - 1}&search=${params.q}&limit=${params.perPage}&order_by=id%20DESC&is_deleted=true`)
    const response = await axios.get(`${jwtDefaultConfig.endPoint}/api/v1/products?skip=${params.page - 1}&search=${params.q}&limit=${params.perPage}&order_by=id%20DESC&is_deleted=true`, params)
    if (params.handleProgress !== undefined) params.handleProgress(false)
    return { allData: [], data: response.data.data, totalPages: response.data.page_total * response.data.page_size, params }
  } catch (error) {
    if (params.handleProgress !== undefined) params.handleProgress(false)
    return { allData: [], data: [], totalPages: 1, params }
  }
})

export const datatablesSlice = createSlice({
  name: 'datatables',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload.data
      state.params = action.payload.params
      state.allData = action.payload.allData
      state.total = action.payload.totalPages
    })
  }
})

export default datatablesSlice.reducer