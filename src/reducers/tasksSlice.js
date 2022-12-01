import {createSlice} from  "@reduxjs/toolkit"
import taskData from '../data/tasks.json'

const initialState=[...taskData]
export const tasksSlice= createSlice({
    name: 'tasks',
    initialState,
    reducers:{  addTasks:action => action.payload ,
                 addTask:(state, action) => [...state, action.payload] ,
                 deleteTask:(state, action) => state.filter(task => task.id !== action.payload) ,
                 updateTask:(state, action) => state.map( task => task.id === action.payload.id ? {...task, ...action.payload} : task ) 

    }


})


export const {addTask,deleteTask,updateTask,addTasks} =tasksSlice.actions
export default tasksSlice.reducer