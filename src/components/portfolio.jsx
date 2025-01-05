import { useTranslation } from 'react-i18next'
import CardList from './shared/cardList'
import CarouselComponent from './shared/carousel'
import Interyer from './shared/interyer'
// import CardList from './shared/cardList'

export default function Portfolio () {
  const {t} = useTranslation()
  return (
    <>
      <div className='mx-auto w-[80%] h-[auto] sm:mb-0 mb-5'>
      {/* interyer block */}
        <div className='mt-5 w-full h-[auto]'>
          <div className='w-[50%] h-[70px]'>
            <h1 className='font-semibold text-[32px] text-textWhite uppercase'>
              {t("h2")}
            </h1>
          </div>
          <Interyer />
        </div>
        {/* carousel in apartment block */}
        <div className='mt-4 mb-10 w-full h-[auto]'>
          <div className='w-[50%] h-[70px]'>
            <h1 className='font-semibold text-[32px] text-textWhite uppercase'>
              {t("h3")}
            </h1>
          </div>
          <CarouselComponent />
        </div>
        <div className='sm:mt-4 mt-0 w-full h-[auto]'>
          <div className='w-[50%] h-[70px]'>
            <h1 className='font-semibold text-[32px] text-textWhite uppercase'>
              Ishlarim
            </h1>
          </div>
          {/* project cards block */}
          <CardList />
        </div>
      </div>
    </>
  )
}
