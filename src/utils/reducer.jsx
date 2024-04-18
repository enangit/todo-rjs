function reducer(state, action) {
    switch (action.type) {
        case 'handleAddCreateProject':
            return {
                ...state,
                selectedProjectId: action.payload,
            }
        case 'cancelCreateProject':
            return {
                ...state,
                selectedProjectId: action.payload,
            }

        case 'handleCreateProject':
            return {
                ...state,
                projects: [...state.projects, action.payload],
                selectedProjectId: 'not creating',
            }

        case 'addTask':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            }

        case 'deleteProject':
            return {
                ...state,
                selectedProjectId: 'not creating',
                projects: [...state.projects.filter(project => project.id !== state.selectedProjectId)],
                tasks: [...state.tasks.filter(task => task.projectId !== state.selectedProjectId)],
            }

        case 'deleteTask':
            return {
                ...state,
                tasks: state.tasks
                    .filter(task => task.id !== action.payload)
            }

        case 'handleCompleteTask':
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task)
            }

        case 'handleSelectActiveProject':
            return {
                ...state,
                selectedProjectId: action.payload,
            }

        default:
            return state
    }
}

export default reducer;
