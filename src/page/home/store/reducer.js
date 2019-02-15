import { fromJS } from "immutable";
import * as constants from './contacts'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    showTop: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA: 
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        case constants.ADD_MORE_DATA:
            let data = state.get('articleList').concat(action.list)
            return state.set('articleList',data)
        default: return state;
    }
}