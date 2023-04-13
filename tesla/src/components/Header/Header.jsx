import React,{useRef} from 'react'
import './header.css'
import logo from '../../images/logo.svg'

const Header = () => {
  const refBtnMenu = useRef()
  const refMenu = useRef()
  const refCerrarMenu = useRef()


  const handleMenu = (e) =>{
    if(refBtnMenu.current.innerText === 'Menu'){
      refMenu.current.style.display = 'flex'
    }else{
      refMenu.current.style.display = 'none'
    }
  }

  const cerrarMenu = (e) =>{
    refMenu.current.style.display = 'none'
  }
  
  return (
    <header>
      <div className='header-logo'>
        <img src={logo} alt="logo"/>
      </div>

      <div className='header-links'>
          <a href="1">Model S</a>
          <a href="1">Model 3</a>
          <a href="1">Model X</a>
          <a href="1">Model Y</a>
          <a href="1">Solar Roof</a>
          <a href="1">Solar Panels</a>
          <a href="1">Powewall</a>
      </div>
      <div className='header-links-shop'>
          <a href="1">Shop</a>
          <a href="1">Account</a>
      </div>
        <p className='menu-btn' href="1" ref={refBtnMenu} onClick={handleMenu}>Menu</p>

        <div className='header-menu-lateral' ref={refMenu} style={{display: 'none'}}>
          <p ref={refCerrarMenu} onClick={cerrarMenu}>X</p>
          <a href="1">Model S</a>
          <a href="1">Model 3</a>
          <a href="1">Model X</a>
          <a href="1">Model Y</a>
          <a href="1">Solar Roof</a>
          <a href="1">Solar Panels</a>
          <a href="1">Powewall</a>
          <a href="1">Shop</a>
          <a href="1">Account</a>
        </div>
    </header>
  )
}

export default Header