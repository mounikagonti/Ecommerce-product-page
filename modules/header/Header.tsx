import React, {useState} from 'react'
import {IoMenu} from 'react-icons/io5'
import {IoClose} from 'react-icons/io5'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import Image from 'next/image'
import {useWindowSize} from '@/hooks/useWindowSize'

const Header = () => {
  const {windowSize} = useWindowSize()
  const isMobileDevice = windowSize?.width < 768

  const [menu, setMenu] = useState<boolean>(false)

  const handleOnMenuClick = () => {
    setMenu((prev) => !prev)
  }

  return (
    <div className='header'>
      <div className='header_container'>
        <div className='header_left'>
          {isMobileDevice ? (
            <div className='menu_wrapper'>
              <div onClick={handleOnMenuClick} className='menu'>
                {menu ? <IoClose /> : <IoMenu />}
              </div>
            </div>
          ) : (
            ''
          )}
          <div className='logo_wrapper'>sneakers</div>
          <div
            className={
              menu ? 'header_options_wrapper_mobile' : 'header_options_wrapper'
            }
          >
            <a href=''>Collections</a>
            <a href=''>Men</a>
            <a href=''>Women</a>
            <a href=''>About</a>
            <a href=''>Contact</a>
          </div>
        </div>
        <div className='header_right'>
          <div className='shopping_cart_icon'>
            <HiOutlineShoppingCart />
          </div>
          <div className='avatar'>
            <Image
              src={
                'https://lh3.googleusercontent.com/a/AEdFTp5QS5hAN4pQsbCmAZ-RUfPS9FZUNMeiPXPlIkvkUw=s96-c'
              }
              alt='avatar'
              width={35}
              height={35}
              style={{borderRadius: '50%'}}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Header
