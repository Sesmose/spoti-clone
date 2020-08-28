export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state, 
                user: action.user
            }
        default: 
        return state;
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.user,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
    }
};


export default reducer;