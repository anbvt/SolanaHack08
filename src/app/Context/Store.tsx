"use client"
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";

type DataType = {
  src: string;
  description: string;
  organization :string;
  funded: number;
  total: number;
  lastDonation: string;
};

interface ContextProps {
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
}
 
export const GlobalContext = createContext<ContextProps>({
  data: [],
  setData: () => [],
});

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<DataType[]>([]);
  return (
    <GlobalContext.Provider value={{ data, setData }}>
           {children}
    </GlobalContext.Provider>
  );
};

export const userGlobalContext =()=> useContext(GlobalContext)