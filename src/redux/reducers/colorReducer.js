const initialState = {
    backgroundColor: '#000000'
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': {
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        }
    }
}
