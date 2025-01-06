import { apartment } from '@/utils/constants'
import Carousel from 'react-bootstrap/Carousel'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from "react-lazy-load-image-component";

function CarouselComponent () {
  const {t} = useTranslation()
  return (
    <Carousel className='flex sm:mt-0 mt-[-25px]'>
      {apartment.map(item => (
        <Carousel.Item key={item.id} className='relative  cursor-pointer'>
          <LazyLoadImage
            className='w-full h-[550px] object-cover hover:opacity-55 transition-all duration-50 '
            src={item.url}
            alt={item.title}
            loading='lazy'
          />
          <Carousel.Caption>
            <h5 className='mb-20 font-semibold sm:text-[36px] text-[24px] uppercase'>
             {t(item.title)}
            </h5>
            <a
              href=''
              className='bottom-10 left-1/2 absolute flex justify-center items-center bg-backgroundWhite rounded-[5px] sm:w-[150px] w-[120px] sm:h-[45px] h-[40px] text-gray-dark transform -translate-x-1/2 link-hover text-backgroundBlack'
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
