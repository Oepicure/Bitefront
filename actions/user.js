import { UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_USERNAME, UPDATE_OCCUPATION, UPDATE_USER_LOCATION, UPDATE_ABOUT_USER} from './types'


export const updateEmail = (email) => {
    return {type: UPDATE_EMAIL, payload: email}
}

export const updatePassword = (password) => {
    return {type: UPDATE_PASSWORD, payload: password}
}

export const updateUsername = (username) => {
    return {type: UPDATE_USERNAME, payload: username}
}


export const updateOccupation = (occupation) => {
    return {type: UPDATE_OCCUPATION, payload: occupation}
}


export const updateUserLocation = (userLocation) => {
    return {type: UPDATE_USER_LOCATION, payload: userLocation}
}


export const updateAboutUser = (aboutUser) => {
    return {type: UPDATE_ABOUT_USER, payload: aboutUser}
}

