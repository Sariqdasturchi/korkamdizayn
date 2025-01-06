import { interyer } from '@/utils/constants'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Interyer () {
  const { t } = useTranslation()
  return (
    <>
      <div className='flex sm:flex-row flex-col sm:justify-between justify-center w-full h-[auto] sm:mt-0 mt-[-25px]'>
        {interyer.map((item, id) => (
          <div
            key={item.id}
            className={`${
              id !== interyer.length - 1 ? 'mr-4' : 'mr-0'
            } relative rounded-[5px] sm:w-[48%] w-[100%] sm:h-[650px] h-[500px] sm:mb-0 mb-10  cursor-pointer portfolio-card`}
          >
            <LazyLoadImage
              src={item.img}
              alt={item.title}
              loading='lazy'
              className='w-full sm:h-[650px] h-[500px] hover:opacity-55 transition-all duration-500'
            />
            <a
              href=''
              className='bottom-3 left-1/2 absolute flex justify-center items-center bg-backgroundWhite rounded-[5px] sm:w-[150px] w-[120px] sm:h-[45px] h-[40px] -translate-x-1/2 sm:text-[18px] text-[15px] '
            >
              {t('cardbutton')}
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
