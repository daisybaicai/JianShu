import  React,{ PureComponent} from 'react'
import { BackTop,HomeWrapper, HomeLeft, HomeRight} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {actionCreators} from './store'
import {connect} from 'react-redux'
import Link from 'react-router-dom/Link';
class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Link to='/'>
                        <img  className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4611/5645ed8603a55d79042f2f7d8e7cc1d533cc30ac.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
                    </Link>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                <BackTop onClick={this.handleScrollTop.bind(this)}>顶部</BackTop>
            </HomeWrapper>
        )
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    handleScrollTop () {
        window.scrollTo(0, 0)
    }
    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => ({
    showTop: state.get('home').get('showTop')
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeData())
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.showTop())
        } else {
            dispatch(actionCreators.showTop())
        }
    }
})
export default connect(mapStateToProps,mapDispatch)(Home);