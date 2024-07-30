export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const RESET = 'reset'

export default function reducer(state, action){
    switch(action.type){
        case 'increment':
            return state + action.payload
        case 'decrement':
            return state - action.payload
        case 'reset':
            return  0
        default:
            return state
    }
}
