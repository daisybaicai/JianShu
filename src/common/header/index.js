import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { SearchInfoItem,SearchInfoList,SearchInfoSwitch,SearchInfoTitle,SearchInfo,SearchWrapper, Button, Addition, HeaderWrapper, Logo, Nav , NavItem, NavSearch} from './style'
import { actionCreators } from './store';
import { actionCreators as loginactionCreators } from '../../page/login/store';
import { Link } from 'react-router-dom'

class Header extends Component {
    getListArea () {
        const { totalPage, focused, mouseIn, handleChangePage,list, page, handleMouseEnter, handleMouseLeave} = this.props;
        const newList = list.toJS()
        const pageList = []

        if(newList.length) {
            for (let i = (page-1) *10; i< page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                         onClick={()=> handleChangePage(page, totalPage)}
                        >换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }

    render () {
        const { login,focused, handleInputFocus, handleInputBlur, list} = this.props
        return (
            <HeaderWrapper>
                <Link to='/'><Logo></Logo></Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    {
                        login ? <NavItem className='right' onClick={this.props.logout}>退出</NavItem> :
                            <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                    }
                    <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}>
                            </NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</span>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'><span className="iconfont">&#xe670;</span>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //state.get('header').get('focused')
        login: state.getIn(['login','login']),
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleInputFocus(list) {
            (list.size===0)&&dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage) {
            if(page<totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        },
        logout() {
            dispatch(loginactionCreators.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)