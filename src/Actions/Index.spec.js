import * as actions from './Index'
describe('todo actions',() => {
  it('addTOdo should create ADD_TODO action',() => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type:'ADD_TODO',
      id:0,
      text:'Use_Redux'
    })
  })
  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action',() => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type:'SET_VISIBILITY_FILTER',
      filter:'active'
    })
  })
  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type:'TOGGLE_TODO',
      id:1
    })
  })
})