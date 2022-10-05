//* Domain
import jwtDefaultConfig from '@src/@core/auth/jwt/jwtDefaultConfig'

// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getAllData = createAsyncThunk('appUsers/getAllData', async () => {
  // const response = await axios.get('/api/users/list/all-data')
  return response.data
})

export const getData = createAsyncThunk('appUsers/getData', async params => {
  // const response = await axios.get('/api/users/list/data', params)
  console.log(params)
  try {
    const response = await axios.get(`${jwtDefaultConfig.endPoint}/api/v1/user?skip=${params.page - 1}&limit=${params.perPage}&order_by=id%20DESC&is_deleted=true&search=${params.q}`)
    if (params.handleProgress !== undefined) params.handleProgress(false)
    return {
      params,
      // data: response.data.users,
      data: response.data.data,
      // totalPages: response.data.total
      totalPages: response.data.page_total * response.data.page_size
    }
    
  } catch (error) {
    if (params.handleProgress !== undefined) params.handleProgress(false)
    return {
      params,
      // data: response.data.users,
      data: [],
      // totalPages: response.data.total
      totalPages: 1
    }
  }
})

export const getUser = createAsyncThunk('appUsers/getUser', async id => {
  // const response = await axios.get('/api/users/user', { id })
  const response = await axios.get(`${jwtDefaultConfig.endPoint}/api/v1/user/user?user_id=${id}`, { id })
  return response.data
})

export const addUser = createAsyncThunk('appUsers/addUser', async (user, { dispatch, getState }) => {
  await axios.post('/apps/users/add-user', user)
  await dispatch(getData(getState().users.params))
  await dispatch(getAllData())
  return user
})

export const deleteUser = createAsyncThunk('appUsers/deleteUser', async (id, { dispatch, getState }) => {
  await axios.delete('/apps/users/delete', { id })
  await dispatch(getData(getState().users.params))
  await dispatch(getAllData())
  return id
})

export const appUsersSlice = createSlice({
  name: 'appUsers',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    selectedUser: -1
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action.payload
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.params = action.payload.params
        state.total = action.payload.totalPages
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.selectedUser = action.payload
      })
  }
})

export default appUsersSlice.reducer
