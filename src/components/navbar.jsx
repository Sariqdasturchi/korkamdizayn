import React from 'react'
import { languages, navLinks } from '../utils/constants'
import logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'

export default function Navbar ({ onChangeLanguage }) {
const {t} = useTranslation()

  const changeLanguage = e => {
    console.log(e.target.value);
    onChangeLanguage(e.target.value)
  }

  return (
    <>
      <header className='w-[100%] sm:h-[70px] h-[60px] fixed  flex justify-center items-center backdrop-blur-sm z-40  navigation-menu'>
        <nav className='w-[80%] flex justify-between items-center '>
          <div className='logo'>
            <a href='/'>
              <img className='sm:w-[12%] w-[50%]' src={logo} alt='' />
            </a>
          </div>
          <div className='w-[620px] h-[55px]  flex justify-around items-center'>
            <ul className=' w-full sm:flex hidden justify-center items-center'>
              {navLinks.map((item, id) => (
                <li
                  key={item.id}
                  className={`${
                    id !== navLinks.length - 1 ? 'mr-6' : 'mr-0'
                  } text-textWhite list-none`}
                >
                  <a href={`#${item.link}`}>{t(item.title)}</a>
                </li>
              ))}
            </ul>
            <div className='w-20 ml-2'>
              <select
                className='w-[50px] text-[16px] focus:outline-none bg-card text-textWhite cursor-pointer'
                onChange={changeLanguage}
              >
                {languages.map((item, id) => (
                  <option
                    key={item.id}
                    value={item.value}
                    className='text-backgroundBlack cursor-pointer'
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
