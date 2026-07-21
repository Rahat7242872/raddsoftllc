import React from 'react'
import Landing from "./components/Hero"
import Services from "./components/ServicesSection"
import About from "./components/About"
import ServiceBanners from './components/Servicebanner'
// আপনি যদি অফার সেকশনটি যোগ করতে চান, তবে নিচের লাইনটির কমেন্ট (//) তুলে দিন:
// import PromoOffers from '@/components/PromoOffers' 

function page() {
  return (
    <div>
       <Landing/>
       <Services/>
       <ServiceBanners/>
       <About/>
    </div>
  )
}

export default page