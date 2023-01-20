import { createContext } from "react";

type termosType = {
  id: number;
  termo: string;
  status: string;
  links: string[];
};
type PropsTermosContext = {
  state: termosType[];
  setState: React.Dispatch<React.SetStateAction<termosType>>;
};

const DEFAULT_TERMOS = {
  state: [{
    id: 0,
    termo: "",
    status: "",
    links: [],
  }],
  setState: () => { },
}

const TermosContext = createContext<PropsTermosContext>(DEFAULT_TERMOS);

export default TermosContext;
