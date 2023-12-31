import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";

import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import HelmetTitle from "../../../Components/Helmet/HelmetTitle";
const Order = () => {
  const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
    const [tabIndex,setTabIndex]= useState(initialIndex);
    const [menu] =  useMenu()
    
    const desserts = menu?.filter((item) => item.category === "dessert");
    const pizza = menu?.filter((item) => item.category === "pizza");
    const salad = menu?.filter((item) => item.category === "salad");
    const soup = menu?.filter((item) => item.category === "soup");
    const drinks = menu?.filter((item) => item.category === "drinks");
  return (
    <div>
      <HelmetTitle title={"Order Food"}></HelmetTitle>
      <Cover img={orderCover} title={"Order Food"}></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="text-center">
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        </div>
      
        <TabPanel>
       <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
       <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
       <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
       <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
       <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Order;
