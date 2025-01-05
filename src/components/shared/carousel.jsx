import { apartment } from '@/utils/constants'
import Carousel from 'react-bootstrap/Carousel'
import { useTranslation } from 'react-i18next'

function CarouselComponent () {
  const {t} = useTranslation()
  return (
    <Carousel className='flex'>
      {apartment.map(item => (
        <Carousel.Item key={item.id} className='relative  cursor-pointer'>
          <img
            className='w-full h-[650px] object-cover hover:opacity-55 transition-all duration-50 '
            src={item.url}
            alt={item.title}
          />
          <Carousel.Caption>
            <h5 className='mb-20 font-semibold text-[36px] uppercase'>
             {t(item.title)}
            </h5>
            <a
              href=''
              className='bottom-10 left-1/2 absolute flex justify-center items-center bg-backgroundWhite rounded-[5px] w-[150px] h-[45px] text-gray-dark transform -translate-x-1/2 link-hover'
            >
              {t("cardbutton")}
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselComponent
