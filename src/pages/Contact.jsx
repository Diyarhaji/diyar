import React from 'react'
import Tiltle from '../componant/Tiltle'
import images from '../assets/Images'
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
  return (
    <div id='contact' className='bg-home  h-auto py-20 max-sm:py-1 '>
       <Tiltle text={t('title-contact')}/>
       <p data-aos="zoom-in" data-aos-duration="800"   className="text-center mx-auto px-[3%] tracking-widest text-lg max-w-xl max-sm:max-w-sm mt-10">{t('intro')}</p>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-20 mt-20 px-[4%]">
          <div className="">
            <h2 data-aos="fade-right" data-aos-duration="900" className="text-2xl mb-4 tracking-widest ">{t('startConversationTitle')}</h2>
            <p data-aos="fade-left" data-aos-duration="1000" className="text-md tracking-widest max-sm:text-lg">{t('startConversationText')}</p>

            <div className="mt-10">
              <a data-aos="fade-right" data-aos-duration="1200" href="mailto:diyargohdarhaji@gmail.com" className=" flex gap-6 items-center mt-7 rounded-lg bg-[#0c2941] max-w-3xl py-3 px-5">
                <div className="bg-[#3a4f60] p-3 rounded-full">
                  <img src={images.mail} alt="" className="" />
                </div>
                <div className="">
                  <h2 className="text-lg tracking-widest ">{t('emailLabel')}</h2>
                  <p className="text-md tracking-widest ">diyargohdarhaji@gmail.com</p>
                </div>
              </a>
              <a data-aos="fade-left" data-aos-duration="1400" href="tel:+9647511978863" className=" flex gap-6 items-center mt-7 rounded-lg bg-[#0c2941] max-w-3xl py-3 px-5">
                <div className="bg-[#3a4f60] p-3 rounded-full">
                  <img src={images.call} alt="" className="" />
                </div>
                <div className="">
                  <h2 className="text-lg tracking-widest ">{t('phoneLabel')}</h2>
                  <p className="text-md tracking-widest ">+9647511978863</p>
                </div>
              </a>
              <a data-aos="fade-right" data-aos-duration="1500" href="https://maps.app.goo.gl/Hfpa8wMyN5uFCHkDA" className=" flex gap-6 items-center mt-7 rounded-lg bg-[#0c2941] max-w-3xl py-3 px-5">
                <div className="bg-[#3a4f60] p-3 rounded-full">
                  <img src={images.location} alt="" className="" />
                </div>
                <div className="">
                  <h2 className="text-lg tracking-widest ">{t('locationLabel')}</h2>
                  <p className="text-md tracking-widest ">{t('locationValue')}</p>
                </div>
              </a>
            </div>


            <div className="mt-8">
              <h1 data-aos="fade-left" data-aos-duration="1600" className="text-xl">{t('followMe')}</h1>
                <div  data-aos="fade-right" data-aos-duration="1600" className="flex gap-5 mt-2">
              
                              <a  href="https://www.instagram.com/k.codestan/?next=%2F" className="bg-[#0c2941] p-3 rounded-full"><img src={images.insta} alt="" className="w-7 h-7" /></a>
                              <a href="https://www.linkedin.com/in/diyar-gohdar-haji-7b1980281/" className="bg-[#0c2941] p-3 rounded-full"><img src={images.linkedin} alt="" className="w-7 h-7" /></a>
                              <a href="https://www.threads.com/@k.codestan?xmt=AQF0xDWKGoke1kJhMzXK04hEYT3fCxxz0itM6FER8YNBlj8" className="bg-[#0c2941] p-3 rounded-full"><img src={images.threads} alt="" className="w-7 h-7" /></a>
                  </div>
            </div>
             
          </div>

            <form action="" data-aos="fade-left" data-aos-duration="800" className=" max-sm:mb-10 max-sm:flex-row justify-center items-center">
                <div className="bg-[#0c2941]  max-sm:py-10 max-sm:px-5  py-10 px-10 rounded-lg">
                     <h1 data-aos="fade-left" data-aos-duration="900" className="text-2xl ">{t('sendMessage')}</h1>
                      <div data-aos="fade-right" data-aos-duration="1100" className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 py-10">

                        <div className="flex flex-col  ">
                          <label htmlFor="name" className='text-lg mb-2'>{t('name-contact')}</label>
                          <input type="name" className='rounded-md max-sm:w-full py-2 px-3' placeholder={t('namePlaceholder')} />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="email" className='text-lg mb-2'>{t('email')}</label>
                          <input type="email" className='rounded-md py-2 px-3' placeholder=' your.email@example.com' />
                        </div>
                      </div>
                      <div data-aos="fade-left" data-aos-duration="1200" className="flex flex-col">
                        <label htmlFor="subject" className='text-lg mb-2'>{t('subject')}</label>
                        <input type="text" className='rounded-md py-2 p-3 w-full' placeholder={t('subjectPlaceholder')} />
                      </div>
                      <div data-aos="fade-right" data-aos-duration="1300" className="flex flex-col py-5">
                        <label htmlFor="" className='text-lg mb-2'>{t('message')}</label>
                        <textarea className='rounded-md py-2 p-3 w-full' name="text" placeholder={t('messagePlaceholder')} rows={5} cols={30} id=""></textarea>
                      </div>
                      <button data-aos="fade-left" data-aos-duration="14000" className="w-full text-center bg-[#214868] rounded-full py-2 text-md"> {t('submit')}</button>
                </div>
             
            </form>
        </div>
    </div>
  )
}

export default Contact
