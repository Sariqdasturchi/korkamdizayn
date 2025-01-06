import { projectDetails } from '@/utils/constants'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function CardList () {
  const { t } = useTranslation()
  return (
    <>
      <div className='w-[100%] h-[auto] flex-wrap sm:flex-col md:grid lg:grid md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-4 sm:mt-0 mt-[-25px]'>
        {projectDetails.map((item, id) => (
          <div
            key={item.id}
            className='w-full sm:w-full md:w-full lg:w-[370px]  h-[450px] rounded-[16px] mb-5  cursor-pointer relative project-card'
          >
            {/* <h2 className='text-[20px] font-medium mb-2 text-textWhite'>{t(item.id)}</h2> */}
            <LazyLoadImage
              src={item.img}
              alt={item.title}
              loading='lazy'
              className='w-full h-full object-cover rounded-[16px] hover:opacity-55 transition-all duration-500'
            />
            <Link
              to={`/product/${item.id}`}
              className='bottom-3 left-1/2 absolute flex justify-center items-center bg-backgroundWhite rounded-[5px] wsm:w-[150px] w-[120px] sm:h-[45px] h-[40px] -translate-x-1/2'
            >
              {t('cardbutton')}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
