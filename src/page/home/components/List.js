import React, { PureComponent } from 'react'
import { LoadMore,ListItem, ListInfo} from '../style'
import {connect} from'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store';
class List extends PureComponent {
    render() {
        const { list } = this.props
        return (
            <div>
                {
                    list.map((item,index) => {
                        return(
                            <Link key={index} to={`/detail/${item.get('id')}`}>
                                <ListItem >
                                    <img className='pic' src={item.get('imgUrl')} alt='240' />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={this.props.getMore}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => ({
    getMore() {
        dispatch(actionCreators.getMore())
    }
})

const mapStateToProps = (state) => ({
    list: state.get('home').get('articleList')
})

export default connect(mapStateToProps,mapDispatch)(List);