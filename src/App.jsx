import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/navbar'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translationEn } from './locale/en'
import { translationUz } from './locale/uz'
import { translationRu } from './locale/ru'
import CardDetials from './components/shared/cardDetials'

// i18n konfiguratsiyasi
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    uz: { translation: translationUz },
    ru: {translation: translationRu}
  },
  lng: 'uz', // Default til
  fallbackLng: 'uz' // Til topilmasa fallback til
})

function App () {
  const onChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    console.log(lang);
  }
  return (
    <BrowserRouter>
      <Navbar onChangeLanguage={onChangeLanguage} />
      <div className='w-full h-[auto] bg-backgroundBlack'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<CardDetials />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
