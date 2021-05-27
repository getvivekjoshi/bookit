import { ALL_ROOM_SUCCESS, ALL_ROOM_FAIL, ROOM_DETAILS_SUCCESS, ROOM_DETAILS_FAIL, CLEAR_ERRORS } from '../constants/roomConstants'



//All room reducers
export const allRoomReducer = (state = { rooms: [] }, action) => {
    switch (action.type) {
        case ALL_ROOM_SUCCESS:
            return {
                roomsCount: action.payload.roomsCount,
                resPerPage: action.payload.resPerPage,
                filteredRoomsCount: action.payload.filteredRoomsCount,
                rooms: action.payload.rooms
            }
        case ALL_ROOM_FAIL:
            return { error: action.payload }
        case CLEAR_ERRORS:
            return {...state, error: null }
        default:
            return state;
    }
}


//Room details reducers
export const roomDetailsReducer = (state = { rooms: {} }, action) => {
    switch (action.type) {
        case ROOM_DETAILS_SUCCESS:
            return {             
                room: action.payload
            }
        case ROOM_DETAILS_FAIL:
            return { error: action.payload }
        case CLEAR_ERRORS:
            return {...state, error: null }
        default:
            return state;
    }
}