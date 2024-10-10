import { VisibilityFilters } from "../Actions/Index";
const VisibilityFilter = (state = VisibilityFilters.SHOW_ALL,action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
export default VisibilityFilter