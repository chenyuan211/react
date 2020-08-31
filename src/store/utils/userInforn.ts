
const userInforn = (state={
    userInforn: {}
}, action: any) => {
    console.log(action)
    switch(action.type) {
        case 'User_Inforn':
        return {...action.userInforn};
        default:
        return state
    }
}

export default userInforn