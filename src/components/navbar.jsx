import React, { useState } from 'react'
import { languages, navLinks } from '../utils/constants'
import logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function Navbar ({ onChangeLanguage }) {
  const [menubtn, setMenubtn] = useState(false)
  const { t } = useTranslation()

  const handleClose = () => setMenubtn(false)
  const handleShow = () => setMenubtn(true)

  const changeLanguage = e => {
    onChangeLanguage(e.target.value)
  }

  return (
    <>
      <header className='w-[100%] sm:h-[70px] h-[60px] fixed  flex justify-center items-center backdrop-blur-sm z-40  navigation-menu'>
        <nav className='w-[80%] flex justify-between items-center '>
          <div className='logo'>
            <a href='/'>
              <img className='w-[50%] sm:w-[40%] md:w-[30%] lg:w-[12%]' src={logo} alt='' />
            </a>
          </div>
          <div className='w-[50%] sm:w-[40%] md:w-[70%] lg:w-[620px] h-[55px]  flex justify-around items-center'>
            <ul className=' w-full  hidden sm:flex md:hidden lg:flex justify-center items-center'>
              {navLinks.map((item, id) => (
                <li
                  key={item.id}
                  className={`${
                    id !== navLinks.length - 1 ? 'mr-6' : 'mr-0'
                  } text-textWhite list-none`}
                >
                  <a href={`#${item.link}`} className='text-[16px] sm:text-[17px] md:text-[16px]'>{t(item.title)}</a>
                </li>
              ))}
            </ul>
            <div className='w-20 ml-2'>
              <select
                className='w-[50px] text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] focus:outline-none bg-card text-textWhite cursor-pointer'
                onChange={changeLanguage}
              >
                {languages.map((item, id) => (
                  <option
                    key={item.id}
                    value={item.value}
                    className='text-backgroundBlack  cursor-pointer'
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex sm:flex md:flex lg:hidden '>
              {!menubtn && (
                <FiMenu
                  className='text-textWhite text-[22px] sm:text-[22px] md:text-[26px]'
                  onClick={handleShow}
                />
              )}

              <div
                className={`fixed top-0 left-0 h-screen  bg-mobilemenuBg w-[92%] transform transition-transform duration-500 ease-in-out z-50 ${
                  menubtn ? 'translate-x-0' : '-translate-x-full'
                }`}
              >
                <div className='w-[100%] h-[45px] relative'>
                  <IoMdClose
                    className='text-textWhite text-[22px] sm:text-[22px] md:text-[26px] absolute right-4 top-4'
                    onClick={handleClose}
                  />
                </div>
                <div className='w-[80%]  mx-auto'>
                  <ul className=' w-full flex-col justify-center items-center'>
                    {navLinks.map((item, id) => (
                      <li
                        key={item.id}
                        className='mt-6 text-textWhite list-none '
                      >
                        <a href={`#${item.link}`} className='text-[16px] sm:text-[16px] md:text-[20px]'>{t(item.title)}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
