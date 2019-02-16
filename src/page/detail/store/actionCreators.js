import axios from "axios";
import * as constants from './constants'


const changeDetail = (res) => ({
    type: constants.GET_DETAIL,
    title: res.data.data.title,
    content: res.data.data.content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get(`/api/detail.json?id=${id}`).then((res) => {
            dispatch(changeDetail(res))
        }).catch((err) => {
            console.log(err)
        })
    }
}