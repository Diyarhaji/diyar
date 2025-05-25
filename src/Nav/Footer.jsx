import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
  
  return (
    <div className='bg-[#04111c] '>
      <h1  className="text-center max-sm:px-[5%] py-6 text-lg">{t('footer')}</h1>
    </div>
  )
}

export default Footer
