import React from 'react';
import { useTranslation } from 'react-i18next';
import images from '../assets/Images';
import MyComponent from '../componant/MyComponent';
import ShapeDividerBottom from '../componant/ShapeDividerBottom ';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id='home' className="bg-home relative h-screen max-sm:h-auto">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-20 px-[6%] max-sm:py-[120px] max-sm:py-19">
        <ShapeDividerBottom />

        {/* Left content */}
        <div className="max-sm:order-2 py-[130px] max-sm:py-[1px]">
          <p data-aos="fade-right" data-aos-duration="500" className="tracking-widest text-2xl mb-3">{t('greeting')}</p>
          <h1 data-aos="fade-left" data-aos-duration="800" className="text-7xl max-sm:text-5xl tracking-widest mb-5">
            {t('name')} <span className="text-fourth">{t('surname')}</span>
          </h1>

          <MyComponent />

          <p data-aos="fade-right" data-aos-duration="1200" className="max-w-xl mt-5 max-sm:max-w-full tracking-widest text-xl">
            {t('description')}
          </p>

          <div data-aos="fade-left" data-aos-duration="1400" className="flex gap-5 mt-8">
            <a href={images.DiyarResume} download className='bg-first py-3 px-6 text-md rounded-lg hover:bg-second transition-all duration-500'>
              {t('download_cv')}
            </a>
            <a href="#contact" className='bg-transparent border border-gray-200 py-3 px-6 text-md rounded-lg hover:bg-second transition-all duration-500'>
              {t('contact_me')}
            </a>
          </div>

          {/* Socials */}
          <div data-aos="fade-right" data-aos-duration="1700" className="flex gap-5 mt-8">
            <a href="https://www.instagram.com/k.codestan/?next=%2F" className="bg-[#021526] p-3 rounded-full">
              <img src={images.insta} alt="Instagram" className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/diyar-gohdar-haji-7b1980281/" className="bg-[#021526] p-3 rounded-full">
              <img src={images.linkedin} alt="LinkedIn" className="w-7 h-7" />
            </a>
            <a href="https://www.threads.com/@k.codestan?xmt=AQF0xDWKGoke1kJhMzXK04hEYT3fCxxz0itM6FER8YNBlj8" className="bg-[#021526] p-3 rounded-full">
              <img src={images.threads} alt="Threads" className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="w-100 max-sm:order-1 h-100 relative ml-[200px] mr-10 max-sm:ml-[10px] z-10">
          <img data-aos="fade-left" data-aos-duration="800" src={images.Diyar} alt="Profile" className='w-[320px] max-sm:w-[300px] max-sm:mx-auto rounded-full max-sm:-mt-[200px] -mt-[100px]' />
          <div className="w-80 h-80 mt-[130px] max-sm:mt-[20px] max-sm:w-[400px] max-sm:h-[400px] -z-10 absolute top-0 left-0 bg-second bg-opacity-80 animate-morph max-sm:-left-10 flex items-center justify-center"
            data-aos="fade-left" data-aos-duration="1300"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;