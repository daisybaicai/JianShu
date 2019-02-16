import axios from "axios";
import * as constants from './constants'

export const loginType = (value) => ({
    type: constants.CHANGE_LOGIN,
    login: value
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&&password=${password}`).then((res) => {
            const result = res.data.data
            console.log(result)
            if(result) {
                dispatch(loginType(true))
            } else {
                alert('登录失败')
            }
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(loginType(false))
    }
}