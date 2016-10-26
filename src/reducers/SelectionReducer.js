// state: last state (at the first run it is called with undefined, thats
// why we need the default param)
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
}
