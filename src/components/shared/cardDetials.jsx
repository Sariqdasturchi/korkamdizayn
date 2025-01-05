import { projectDetails } from '@/utils/constants'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

export default function CardDetails () {
   const {t} = useTranslation()
  let { id } = useParams()

  const product = projectDetails.find(product => product.id === Number(id))


  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <>
      <div className='w-full h-[100vh] flex justify-center items-center'>
        <div
          key={product.id}
          className='w-[90%] h-[660px] mx-auto flex items-center justify-center'
        >
          <img
            src={product.img}
            alt={product.title}
            className='w-[50%] h-[500px] object-cover'
          />
          <div className='w-[40%] h-[450px] ml-10'>
            <h1 className='text-textWhite font-semibold text-[36px]'>{t("title")}</h1>
            <p className='text-textWhite font-medium mt-4'>{t(product.description)}</p>
          </div>
        </div>
      </div>
    </>
  )
}
