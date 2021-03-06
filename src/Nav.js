import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/nav.css';
import logo from './img/logo.png';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.active = 'active-nav';
    this.state = {
      hideNav: true,
      navBg: false,
      home: true,
      pastLanding: false
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', e => this.handleScroll(e));
    this.pageChange(this.props);
  }

  componentWillReceiveProps(next) {
    this.pageChange(next);
  }

  pageChange(props) {
    if(!props.match.params.page) {
      this.setState({
        home: true
      });
    } else {
      this.setState({
        home: false
      });
    }
  }

  handleScroll(e) {
    const { pastLanding, hideNav } = this.state;
    const { scrollY, innerHeight } = window;
    const height = innerHeight * 7/10 - 100;
    if(scrollY < height && pastLanding) {
      this.setState({
        navBg: !hideNav,
        pastLanding: false
      });
    } else if(scrollY >= height && !pastLanding) {
      this.setState({
        navBg: true,
        pastLanding: true
      });
    }
  }

  toggleNav(e) {
    const { navBg, pastLanding, hideNav } = this.state;
    this.setState({
      hideNav: !hideNav,
      navBg: pastLanding ? true : !navBg
    });
  }

  handleBlur(event) {
    const { currentTarget } = event;
    setTimeout(() => {
      if(!currentTarget.contains(document.activeElement)) {
        this.collapseNav();
      }
    });
  }

  collapseNav() {
    this.setState({
      hideNav: true,
      navBg: this.state.pastLanding
    })
  }

  render() {
    const { hideNav, navBg } = this.state;
    const navLinksClass = 'navlinks' + (hideNav ? ' hide-nav' : '') + (navBg ? ' nav-bg' : '');
    const navClass = 'nav' + (navBg ? ' nav-bg' : '');

    return (
      <nav className={navClass} tabIndex='1' onBlur={e => hideNav ? null : this.handleBlur(e)}>
        <div className='company'>
          <NavLink exact to='/'>
            <img src={logo} className='logo' alt='logo'/>
            <span>Lens Vision</span>
          </NavLink>
        </div>
        <div className='navbtn' onClick={(e) => this.toggleNav(e)}>Menu</div>
        <div className={navLinksClass} onClick={e => this.collapseNav()}>
          <NavLink exact to='/' activeClassName={this.active}>Home</NavLink>
          <NavLink to='/about' activeClassName={this.active}>About</NavLink>
          <NavLink to='/services' activeClassName={this.active}>Services</NavLink>
          <NavLink to='/contacts' activeClassName={this.active}>Contact</NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;