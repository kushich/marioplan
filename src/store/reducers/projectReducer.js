const initState = {
  projects: [
    {id: '1', title: 'project 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, soluta!'},
    {id: '2', title: 'project 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, soluta!'},
    {id: '3', title: 'project 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, soluta!'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project ', action.project)
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err)
      return state
    default:
      return state
  }
}

export default projectReducer