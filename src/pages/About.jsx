import React from 'react'
import logo from '../assets/Images'
import Tiltle from '../componant/Tiltle'
import images from '../assets/Images'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div id='about' className=' max-sm:h-auto'>
          
          <Tiltle text={t('titlea')} data-aos="fade-left" data-aos-duration="800"/>

     <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5 gap-40 px-[5%]  max-sm:mt-7   -mt-12">

        <div className="w-100  max-sm:order-1 ml-  h-100 max-sm:mr-0  max-sm:mt-20 -py-20 max-sm:-py-0 max-sm:ml-[10px] relative mr-[180px]  z-10">
                   <img src={images.Diyar} data-aos="fade-right" data-aos-duration="900" alt=""  className='w-[320px] max-sm:w-[300px] max-sm:mx-auto rounded-full max-sm:-mt-[200px] -mt-[100px]'/>
                   <div data-aos="fade-left" data-aos-duration="900" className="w-80 h-80 mt-[130px] max-sm:mt-[20px] max-sm:w-[400px] max-sm:h-[400px] -z-10 absolute top-0 left-0 bg-second bg-opacity-80 animate-morph max-sm:-left-10  flex items-center justify-center "></div>
       
          </div>


          <div className=" max-sm:order-2 max-sm:py-[70px] py-[120px]">
              
              <h1 data-aos="fade-right" data-aos-duration="600"  className="text-3xl max-sm:leading-normal w-full tracking-widest  mb-5 text-four">{t('heading')}
                </h1>
              
                <p data-aos="fade-left" data-aos-duration="900"  className="max-w-3xl mt-5 max-sm:max-w-full max-sm:text-lg  tracking-widest text-md">{t('paragraph1')}</p>
                <p data-aos="fade-right" data-aos-duration="1300" className="max-w-4xl mt-5 max-sm:max-w-full max-sm:text-lg tracking-widest  text-md">{t('paragraph2')}</p>


                <div data-aos="fade-left" data-aos-duration="900" className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:gap-5 gap-7 mt-10">
                  <div className="bg-third w-[150px] max-sm:w-full  h-[120px] rounded-lg  text-center py-3 px-3">
                    <img src={images.person} alt="" className="w-5 max-sm:h-7 max-sm:w-7   h-5 mb-2  mx-auto" />
                    <h1 className="text-md font-bold max-sm:text-lg ">{t('leadership')}</h1>
                      <p className="max-w-60 mt-1 text-sm max-sm:mx-auto max-sm:text-md">{t('leadership_desc')}</p>
                  </div>
                  <div className="bg-[#203651] w-[150px] max-sm:w-full  h-[120px] rounded-lg text-center py-3 px-3">
                    <img src={images.target} alt="" className="w-5 max-sm:h-7 max-sm:w-7   h-5 mb-2  mx-auto" />
                    <h1 className="text-md font-bold max-sm:text-lg ">{t('delivery')}</h1>
                      <p className="max-w-60 mt-1 text-sm max-sm:mx-auto max-sm:text-md">{t('delivery_desc')}</p>
                  </div>
                  <div className="bg-third w-[150px] max-sm:w-full  h-[120px] rounded-lg text-center py-3 px-3">
                    <img src={images.quality} alt="" className="w-5 max-sm:h-7 max-sm:w-7   h-5 mb-2  mx-auto" />
                    <h1 className="text-md font-bold max-sm:text-lg ">{t('quality')}</h1>
                      <p className="max-w-60 mt-1 text-sm max-sm:mx-auto max-sm:text-md">{t('quality_desc')}</p>
                  </div>
                </div>

                

                

          </div>

        
      </div>
      
    </div>
  )
}

export default About
