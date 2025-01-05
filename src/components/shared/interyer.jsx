import { interyer } from '@/utils/constants'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Interyer () {
   const {t} = useTranslation()
  return (
    <>
      <div className='flex sm:flex-row flex-col sm:justify-between justify-center w-full h-[auto]'>
        {interyer.map((item, id) => (
          <div key={item.id} className={`${id !== interyer.length - 1 ? 'mr-4' : 'mr-0'} relative rounded-[5px] sm:w-[48%] w-[100%] h-[650px] sm:mb-0 mb-10  cursor-pointer portfolio-card`}>
            <img src={item.img} alt={item.title} className='w-full h-[650px] hover:opacity-55 transition-all duration-500'/>
            <a
              href=''
              className='bottom-3 left-1/2 absolute flex justify-center items-center bg-backgroundWhite rounded-[5px] w-[150px] h-[45px] -translate-x-1/2'
            >
              {t("cardbutton")}
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
