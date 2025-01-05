import React from 'react'
import Portfolio from './portfolio'
import { useTranslation } from 'react-i18next'

export default function Home () {
  const {t} = useTranslation()
  return (
    <>
      <div className='flex sm:flex-row flex-col-reverse justify-around items-center w-full h-[auto] '>
        <div className="flex flex-col justify-center bg-[url('./assets/bg.jpg')] bg-cover bg-no-repeat sm:ml-20 ml-0 sm:w-[790px] w-[100%] sm:h-[92vh] h-[500px]">
          <div className='flex flex-col justify-center bg-backgrounOpacity w-[100%] h-[100%] home-text'>
            <h1 className='sm:mt-5 mt-10 sm:ml-32 ml-0 sm:p-8 p-10 font-semibold sm:text-[72px] text-[36px] text-textWhite'>
              {t("heroH")}
            </h1>
            <div className='bg-backgroundWhite sm:mt-5 mt-0 mb-0 sm:ml-40 ml-10 w-[40%] h-[5px]'></div>
            <p className='sm:ml-28 ml-0 p-10 sm:text-[22px] text-[17px] text-textWhite'>
              {t("heroP")}
            </p>
            <a className='bg-backgroundWhite sm:ml-[155px] ml-[40px] rounded-[8px] sm:w-[150px] w-[120px] sm:h-[45px] h-[40px] flex justify-center items-center sm:text-[18px] text-[15px] cursor-pointer'>
              {t("button")}
            </a>
          </div>
        </div>
        <div className='sm:relative block sm:w-[500px] w-[100%] sm:h-[700px] h-[400px]'>
          <div className="sm:top-[-10px] top-[25px] sm:right-[-50px] right-0  z-10 absolute bg-[url('./assets/user.png')] bg-cover bg-no-repeat  sm:w-[970px] w-[100%] sm:h-[770px] h-[300px] sm:mt-0 mt-5 sm:object-contain object-cover user-image"></div>
        </div>
      </div>
      <Portfolio />
    </>
  )
}
