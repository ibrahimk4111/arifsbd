import { createContext, useEffect, useState } from "react";
// import {localDB} from '../../../public/localDB'

export const UserContext = createContext();

const TaskProvider = ({ children }) => {

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


  // animation part 
  const [isVisible, setVisible] = useState(false)

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 300) {
      setVisible(true)
    }
    else {
      setVisible(false)
    }
  }

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
      y: i > 15 ? i * 30 : i > 5 ? i * 30 : i * 70,
      transition: {
        duration: i * 0.3
      },
    }),
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: i > 15 ? Math.abs(i) * 0.1 : i > 5 ? Math.abs(i) * 0.3 : Math.abs(i) * 0.7,
        delay: i > 15 ? Math.abs(i) * 0.1 : i > 5 ? Math.abs(i) * 0.2 : Math.abs(i) * 0.3
      },
    })
  };

  return (
    <UserContext.Provider
      value={{
        hello,
        variants,
        productData,
        productNavItem,
        galleryData,
        partnerData,
        isVisible
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default TaskProvider;
