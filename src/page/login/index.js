import React, { PureComponent} from 'react'
import { LoginWrapper, LoginBox, Button, Input} from './style'
import {connect} from 'react-redux'
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
class login extends PureComponent {
    render() {
        const { loginStatus } = this.props
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='帐号' type='text' ref={(input) => { this.account = input }}/>
                        <Input placeholder='密码' type='password' ref={(input) => { this.password = input }}/>
                        <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            ) 
        } else {
            return <Redirect to='/'></Redirect>
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
    login(account, password) {
        dispatch(actionCreators.login(account.value,password.value))
    }
})

export default connect(mapStateToProps,mapDispatch)(login)