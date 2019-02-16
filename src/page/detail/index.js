import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent {
    render() {
        const {title,content} = this.props
        return ( 
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        let id = this.props.match.params.id
        this.props.getDetail(id)
    }
}

const mapStateToProps = (state) => ({
    title: state.get('detail').get('title'),
    content: state.get('detail').get('content')
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapStateToProps,mapDispatch)(withRouter(Detail));