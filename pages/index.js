import Header from "@/components/PortfolioMainPage/Header/PortfolioMainHeader";
import PortfolioMainPage from "@/components/PortfolioMainPage/PortfolioMainPage";
import { useState, useEffect } from "react";

export default function PortfolioPage(toggleTheme) {
  

  return (
   <PortfolioMainPage onClick={toggleTheme}></PortfolioMainPage>  
  )
}
