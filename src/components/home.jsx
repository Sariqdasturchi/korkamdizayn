import React from 'react'
import Portfolio from './portfolio'
import { useTranslation } from 'react-i18next'

export default function Home () {
  const {t} = useTranslation()
  return (
    <>
      <div className='flex-row sm:flex-col md:flex-col lg:flex  justify-around items-center w-full h-[auto] sm:h-[auto] md:h-[100vh] lg:h-[auto] '>
        <div className="flex flex-col justify-center bg-[url('./assets/bg.jpg')] bg-cover bg-no-repeat ml-0 sm:ml-20 md:ml-[-50px] lg:ml-20  sm:w-[790px] w-[100%] sm:h-[92vh] h-[500px]">
          <div className='flex flex-col justify-center bg-backgrounOpacity w-[100%] h-[100%] home-text'>
            <h1 className='mt-10 sm:mt-10 md:mt-0 lg:mt-5  ml-0 sm:ml-0 md:ml-28 lg:ml-32 sm:p-8 p-10 font-semibold text-[36px] sm:text-[36px] md:text-[82px] lg:text-[72px]  text-textWhite'>
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
        <div className='relative hidden sm:flex md:hidden lg:flex sm:w-[500px] w-[100%] sm:h-[700px] h-[400px]'>
          <div className="sm:top-[-10px] top-[25px] sm:right-[-50px] right-0  z-10 absolute bg-[url('./assets/user.png')] bg-cover bg-no-repeat  sm:w-[970px] w-[100%] sm:h-[770px] h-[300px] sm:mt-0 mt-5 sm:object-contain object-cover user-image"></div>
        </div>
      </div>
      <Portfolio />
    </>
  )
}
