import { useTranslation } from 'react-i18next'
import CardList from './shared/cardList'
import CarouselComponent from './shared/carousel'
import Interyer from './shared/interyer'
// import CardList from './shared/cardList'

export default function Portfolio () {
  const {t} = useTranslation()
  return (
    <>
      <div className='mx-auto w-[80%] sm:w-[80%] md:w-[90%] lg:w-[80%] h-[auto] mb-5 sm:mb-0 md:mb-2 lg:mb-1 '>
      {/* interyer block */}
        <div className='mt-5 sm:mt-0 md:mt-2 lg:mt-5 w-full h-[auto]'>
          <div className='sm:w-[50%] w-[100%] h-[70px]'>
            <h1 className='font-semibold sm:text-[32px] text-[24px] text-textWhite uppercase'>
              {t("h2")}
            </h1>
          </div>
          <Interyer />
        </div>
        {/* carousel in apartment block */}
        <div className='sm:mt-4 mt-2 mb-10 w-full h-[auto]'>
          <div className='sm:w-[50%] w-[100%] h-[70px]'>
            <h1 className='font-semibold sm:text-[32px] text-[24px] text-textWhite uppercase'>
              {t("h3")}
            </h1>
          </div>
          <CarouselComponent />
        </div>
        <div className='sm:mt-4 mt-0 w-full h-[100vh]'>
          <div className='sm:w-[50%] w-[100%] h-[70px]'>
            <h1 className='font-semibold sm:text-[32px] text-[24px] text-textWhite uppercase'>
              {t("h4")}
            </h1>
          </div>
          {/* project cards block */}
          <CardList />
        </div>
      </div>
    </>
  )
}
