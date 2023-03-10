import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
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

  constructor(props){
    super(props);
    this.state = {
      focused: false
    }
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleInputFocus= this.handleInputFocus.bind(this);
  }
  render(){
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
                in={this.state.focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch 
                  className = {this.state.focused ? 'focused':''}
                  onFocus = {this.handleInputFocus}
                  onBlur = {this.handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              
              <i className={this.state.focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe662;</i>
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

  handleInputFocus(){
    this.setState({
      focused:true
    })
  }

  handleInputBlur(){
    this.setState({
      focused:false
    })
  }
}

export default Header;
