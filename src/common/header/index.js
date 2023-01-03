import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from './store';
import { 
  Addition,
    Button,
    HeaderWrapper, 
    Logo, 
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper
} from './style';
 class Header extends Component {
  render(){
    const {focused, handleInputBlur, handleInputFocus} = this.props;
    return(     
        <HeaderWrapper >
          <Logo/>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={this.props.focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch 
                  in={this.props.focused}
                  className = {focused ? 'focused':''}
                  onFocus = {handleInputFocus}
                  onBlur = {handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              
              <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe662;</i>
            </SearchWrapper>
            <Addition>
              <Button className="reg">注册</Button>
              <Button className="writting">
              <i className="iconfont">&#xe615;</i>
                写文章</Button>
            </Addition>
          </Nav>
        </HeaderWrapper>

    )
  }

}

const mapStateToProps = (state) =>{
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleInputFocus(){
      dispatch(actionCreators.searchFocus());
    },  
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);
