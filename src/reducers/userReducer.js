
const initialState = {
    submitted: false,
    email:'',
    hobbies:''
};

export default function userReducer (state = initialState, action) {

    switch (action.type) {
        case 'SUBMIT_SUCCESS':
            return  {submitted:true, email:action.payload.email, hobbies:action.payload.hobbies};
        default:
            return state;
    }
}
