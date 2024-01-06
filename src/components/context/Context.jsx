import { createContext, useEffect, useState } from "react";
// import {localDB} from '../../../public/localDB'

export const UserContext = createContext();

const TaskProvider = ({ children }) => {
  const hello = "hello from context";
  const variants = {
    navOpen: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 0.7,
      },
    },
    navClosed: {
      opacity: 0,
      width: 0,
      transition: {
        duration: 0.7,
      },
    },
    hidden: (i) => ({
      opacity: 0,
      x: i * 100,
      transition: {
        duration: i * 0.3
      },
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: Math.abs(i) * 0.5,
        staggerChildren: 0.5,
        delay: i * 0.1,
      },
    })
  };

  const [productData, setProductData] = useState([]);
  const [partnerData, setpartnerData] = useState([]);
  const [galleryData, setgalleryData] = useState([]);
  const [productNavItem, setProductNavItem] = useState([]);
  useEffect(() => {
    const fetchedData = async (url, setState) => {
      const response = await fetch(url)
      const DbData = await response.json()
      setState(DbData)
    }

    fetchedData('./localDBevents.json', setgalleryData)
    fetchedData('./localDBpartners.json', setpartnerData)
    fetchedData('./localDBproducts.json', setProductData)
    fetchedData('./localProductNavItem.json', setProductNavItem)
  }, []);

  const [shopingCard, setShopingCard] = useState([]);
  const buyNowBtn = (product) => {
    setShopingCard([...shopingCard, product]);
  };

  // Navigation bar open and close
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // if (isOpen) {
  //   document.body.style.overflowY = "hidden"
  // }
  // else {
  //   document.body.style.overflowY = "scroll"
  // }

  return (
    <UserContext.Provider
      value={{
        hello,
        variants,
        productData,
        productNavItem,
        galleryData,
        partnerData,
        shopingCard,
        isOpen
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default TaskProvider;
