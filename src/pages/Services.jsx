import React from 'react'
import Tiltle from '../componant/Tiltle'
import images from '../assets/Images'
import BottomWaveDivider from '../componant/BottomWaveDivider'
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  return (
    
    <div id='services' className=' relative h-auto bg-home max-sm:py-1  py-20'>
       <Tiltle text={t('services_title')}/>
       <BottomWaveDivider />
       <h3 data-aos="zoom-in" data-aos-duration="800" className="max-w-xl   text-center mx-auto mt-8 text-lg">{t('services_subtitle')}</h3>

       <div className="grid max-sm:grid-cols-1 max-sm:mb-[200px]   grid-cols-3 gap-14 mb-20  mt-20 px-[5%]">


          <div  data-aos="zoom-in-right" data-aos-duration="800" className=" bg-second p-5 w-[350px] rounded-lg hover:scale-105 transition-all duration-500 ">
            <div className="bg-third max-w-max mx-auto p-2 rounded-full"><img src={images.code} alt="" className="w-10 h-10 mx-auto"  /></div>
            
            <h1 className="text-center text-2xl py-5">{t('services_webdev_title')}</h1>
            <p className="text-md text-center">{t('services_webdev_desc')}</p>
            <div className="mt-8 ">
              <h3 className="text-xl mb-2">{t('services_webdev_features_title')}</h3>
              <ul className="">
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_webdev_features-1')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_webdev_features-2')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_webdev_features-3')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_webdev_features-4')}</li>
              </ul>
            </div>
          </div>

           <div data-aos="zoom-in-up" data-aos-duration="800" className=" bg-second p-5 w-[350px] rounded-lg hover:scale-105 transition-all duration-500 ">
            <div className="bg-third max-w-max mx-auto p-2 rounded-full"><img src={images.design} alt="" className="w-10 h-10 mx-auto"  /></div>
            
            <h1 className="text-center text-2xl py-5">{t('services_design_title')}</h1>
            <p className="text-md text-center">{t('services_design_desc')}</p>
            <div className="mt-8 ">
              <h3 className="text-xl mb-2">{t('services_design_features_title')}</h3>
              <ul className="">
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_design_features-1')} </li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_design_features-2')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_design_features-3')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_design_features-4')}</li>
              </ul>
            </div>
          </div>

           <div data-aos="zoom-in-left" data-aos-duration="800" className=" bg-second p-5 w-[350px] rounded-lg hover:scale-105 transition-all duration-500 ">
            <div className="bg-third max-w-max mx-auto p-2 rounded-full"><img src={images.ui} alt="" className="w-10 h-10 mx-auto"  /></div>
            
            <h1 className="text-center text-2xl py-5">{t('services_uiux_title')}</h1>
            <p className="text-md text-center">{t('services_uiux_desc')}</p>
            <div className="mt-8 ">
              <h3 className="text-xl mb-2">{t('services_uiux_features_title')}</h3>
              <ul className="">
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_uiux_features-1')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_uiux_features-2')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_uiux_features-3')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_uiux_features-4')}</li>
              </ul>
            </div>
          </div>

           <div data-aos="zoom-in-right" data-aos-duration="1200" className=" bg-second p-5 w-[350px] rounded-lg hover:scale-105 transition-all duration-500 ">
            <div className="bg-third max-w-max mx-auto p-2 rounded-full"><img src={images.project} alt="" className="w-10 h-10 mx-auto"  /></div>
            
            <h1 className="text-center text-2xl py-5">{t('services_project_title')}</h1>
            <p className="text-md text-center">{t('services_project_desc')}</p>
            <div className="mt-8 ">
              <h3 className="text-xl mb-2">{t('services_project_features_title')}</h3>
              <ul className="">
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div>{t('services_project_features-1')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_project_features-2')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_project_features-3')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_project_features-4')}</li>
              </ul>
            </div>
          </div>

           <div data-aos="zoom-in-up" data-aos-duration="1200" className=" bg-second p-5 w-[350px] rounded-lg hover:scale-105 transition-all duration-500 ">
            <div className="bg-third max-w-max mx-auto p-2 rounded-full"><img src={images.agile} alt="" className="w-10 h-10 mx-auto"  /></div>
            
            <h1 className="text-center text-2xl py-5">{t('services_agile_title')}</h1>
            <p className="text-md text-center">{t('services_agile_desc')}</p>
            <div className="mt-8 ">
              <h3 className="text-xl mb-2">{t('services_agile_features_title')}</h3>
              <ul className="">
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_agile_features-1')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_agile_features-2')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_agile_features-3')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div>{t('services_agile_features-4')}</li>
              </ul>
            </div>
          </div>

           <div data-aos="zoom-in-right" data-aos-duration="1200"  className=" bg-second p-5 w-[350px] rounded-lg hover:scale-105 transition-all duration-500 ">
            <div className="bg-third max-w-max mx-auto p-2 rounded-full"><img src={images.team} alt="" className="w-10 h-10 mx-auto"  /></div>
            
            <h1 className="text-center text-2xl py-5">{t('services_communication_title')}</h1>
            <p className="text-md text-center">{t('services_communication_desc')}</p>
            <div className="mt-8 ">
              <h3 className="text-xl mb-2">{t('services_communication_features_title')}</h3>
              <ul className="">
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div>{t('services_communication_features-1')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_communication_features-2')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_communication_features-3')}</li>
                <li className="mt-2 line-clamp-4 flex gap-3 items-center"><div className="w-2 h-2  rotate-45 ml-2 border border-gray-200"></div> {t('services_communication_features-4')}</li>
              </ul>
            </div>
          </div>

       </div>
    </div>
  )
}

export default Services
