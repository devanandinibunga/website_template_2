import React from 'react'
import { jevelincontext,servicesData,partnersData } from '../JevelinDataContext/JevelinDataContext'
import { CoverPage } from '../CoverPage/CoverPage'
import { JevelinTestimonial } from '../JevelinTestimonial/JevelinTestimonial'
import { Layout } from '../Layout/Layout'
import { Partners } from '../Partners/Partners'
import { Services } from '../Services/Services'
import { Template } from '../Template/Template'

export const JevelinBody = () => {
  return (
    <div>
        <CoverPage/>
        <jevelincontext.Provider value={{servicesData}}>
            <Services/>
        </jevelincontext.Provider>
        <Layout/>
        <JevelinTestimonial/>
        <jevelincontext.Provider value={{partnersData}}>
            <Partners/>
        </jevelincontext.Provider>
        <Template/>
    </div>
  )
}
