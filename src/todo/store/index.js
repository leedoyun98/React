import {createStore} from 'redux'
import ScheduleReducer from './Schedule.reducer'

const store = createStore(ScheduleReducer)

export default store