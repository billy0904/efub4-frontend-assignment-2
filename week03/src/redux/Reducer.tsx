import { TOGGLE_COLOR } from './Action';

// 타입 정의
interface State {
    backGroundColor: string;
    textColor: string;
    movieTitleColor: string;
}

interface Action {
    type: string;
}

const initialState: State = {
    backGroundColor: '#000000',
    textColor: '#00ff84',
    movieTitleColor: '#ffffff'
};

const Reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case TOGGLE_COLOR:
            return {
                ...state,
                backGroundColor: state.backGroundColor === '#000000' ? '#ffffff' : '#000000',
                textColor: state.textColor === '#00ff84' ? '#00664f' : '#00ff84',
                movieTitleColor: state.movieTitleColor === '#ffffff' ? '#00664f' : '#ffffff'
            };
        default:
            return state;
    }
};

export default Reducer;
