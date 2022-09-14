import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import { useTranslation } from 'react-i18next';







const Hero = () => {

  const { t, i18n } = useTranslation();


  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Dream Home ' subtitle='Find your dream house with us.' />

          <form className='flex'>

            
            
            <div className='box'>
           
              
              <span>{t('Welcome to React')}</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
           
            <div className='box'>
              <h4> Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
