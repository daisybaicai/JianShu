import * as constants from './contants'
import axios from 'axios';
import { fromJS } from 'immutable';

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const data = res.data.data
            dispatch(changeHomeData(data))
        }).catch(() => {
            console.log('error')
        })
    }
}

const changeHomeData = (data) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: data.topicList,
    articleList: data.articleList,
    recommendList: data.recommendList,
    writerList: data.writerList
})

const addMoreData = (data) => ({
    type: constants.ADD_MORE_DATA,
    list: fromJS(data)
})

export const getMore = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) => {
            const data = res.data.data
            dispatch(addMoreData(data))
        }).catch((err) => {
            console.log(err)
        })
    }
}

const showTopChange = (data) => ({
    type: constants.SHOW_TOP,
    showTop: data
})

export const showTop = (show) => {
    return (dispatch) => {
        dispatch(showTopChange(show))
    }
}