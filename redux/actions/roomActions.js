import axios from 'axios'
import abosoluteUrl from 'next-absolute-url'

import { ALL_ROOM_SUCCESS, ALL_ROOM_FAIL, CLEAR_ERRORS, ROOM_DETAILS_SUCCESS, ROOM_DETAILS_FAIL } from '../constants/roomConstants'

//Get All Rooms
export const getRooms = (req) => async (dispatch) => {
    try {
        const {origin} = abosoluteUrl(req)

        const { data } = await axios.get(`${origin}/api/rooms`)

        dispatch({
            type: ALL_ROOM_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_ROOM_FAIL,
            payload: error.response.data.message
        })
    }
}


//Get room details
export const getRoomDetails = (req, id) => async (dispatch) => {
    try {
        const {origin} = abosoluteUrl(req)

        const { data } = await axios.get(`${origin}/api/rooms/${id}`)

        dispatch({
            type: ROOM_DETAILS_SUCCESS,
            payload: data.room
        })

    } catch (error) {
        dispatch({
            type: ROOM_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

//Clear errors

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type:CLEAR_ERRORS
    })
}