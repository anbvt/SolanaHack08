
"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type DataType = {
  id: number ;
  src: string;
  description: string;
  organization: string;
  funded: number;
  total: number;
  lastDonation: string;
};

interface ContextProps {
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
  nextId: number;
  setNextId: Dispatch<SetStateAction<number>>; 
}

export const GlobalContext = createContext<ContextProps>({
  data: [],
  setData: () => [],
  nextId: 1,
  setNextId: () => {},
});

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<DataType[]>([]);
  const [nextId, setNextId] = useState(1); 

  return (
    <GlobalContext.Provider value={{ data, setData, nextId, setNextId }}>
          {children}
    </GlobalContext.Provider>
  );
};

export const userGlobalContext = () => useContext(GlobalContext);
