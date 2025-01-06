import { projectDetails } from '@/utils/constants'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function CardList () {
  const {t} = useTranslation()
  return (
    <>
      <div className='w-[100%] h-[auto] sm:grid flex-wrap grid-cols-4 gap-4 '>
        {
          projectDetails.map((item, id) => (
            <div key={item.id} className='sm:w-[370px] w-full h-[450px] rounded-[16px] mb-5  cursor-pointer relative project-card'>
              <h2 className='text-[20px] font-medium mb-2 text-textWhite'>{t(item.id)}</h2>
              <img src={item.img} alt={item.title} className='w-full h-full object-cover rounded-[16px] hover:opacity-55 transition-all duration-500' />
              <Link
              to={`/product/${item.id}`}
              className='bottom-3 left-1/2 absolute flex justify-center items-center bg-backgroundWhite rounded-[5px] w-[150px]  h-[45px] -translate-x-1/2'
            >
              {t("cardbutton")}
            </Link>
            </div>
          ))
        }
      </div>
    </>
  )
}
