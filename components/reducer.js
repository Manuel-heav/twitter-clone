
export const initialState = {
    userInfo: [
         "anonymus",
    ],
};

const reducer = (state, action) => {
    switch(action.type){
        case 'UPDATE_USER':
            return { 
                ...state,
                favorite: [...state.userInfo, action.item]
            };
      
        default: 
            return state;s
    }
}

export default reduce