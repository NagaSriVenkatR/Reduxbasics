import { combineReducers } from "redux";
import todos from './Todos'
import VisibilityFilter from "./VisibilityFilter";

export default combineReducers({
  todos,
  VisibilityFilter
})