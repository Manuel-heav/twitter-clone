export const initialState = {
    username: 'hello',
    imageURL: 'sup',
};

const reducer = (state, action) => {
    switch(action.type){
        case 'UPDATE_USERNAME':
            return { 
                username: username
            };
            case 'UPDATE_IMAGEURL':
                    return { 
                        imageURL: imageURL
                    };
        default: 
            return state;
    }
}

export default reducer