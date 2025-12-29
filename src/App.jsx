import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import CreateAccount from "./components/LoginPopup/CreateAccount";

import Hero from "./components/HeroSlider/HeroSlider";
import Products from "./components/Products/Products";
import BusinessInsurance from "./components/BusinessInsurance/BusinessInsurance";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Testimonials from "./components/Testimonials/Testimonials";
import Core from "./components/Core/Core";
import TabsSection from "./components/TabSection/TabSection";
import ServiceData from "./components/ServiceData/ServiceData";
import WhatsNew from "./components/WhatsNew/WhatsNew";
import OurNetwork from "./components/OurNetwork/OurNetwork";
import BlogHeader from "./components/Blog/header";
import BlogSection from "./components/Blog/BlogSection";
import HearFromUs from "./components/HearFromUs/HearFromUs";
import Awards from "./components/Awards and Accolades/Awards";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

const Home = () => (
  <>
    <Header />
    <LoginPopup />
    <CreateAccount />
     <Hero />
    <Products />
    <BusinessInsurance />
    <WhyChoose />
    <Testimonials />
    <Core />
    <TabsSection />
    <ServiceData />
    <WhatsNew />
    <OurNetwork />
    <BlogHeader />
    <BlogSection />
    <HearFromUs />
    <Awards />
    <Breadcrumb />
    <Footer />
  </>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
