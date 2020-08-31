const notices = (state={
    isAllRead: false,
    count: 8
}, action: any) => {
    switch (action.type) {
        case 'READ_ALL':
        return {...state, isAllRead: true};
        default: 
        return state
    }
}
export default notices