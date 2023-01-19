
import { createContext } from "react";

type termosType = {
    id: string,
    status: string,
    links: string[]
}
type PropsTermosContext = {
    state: termosType,
    setState: React.Dispatch<React.SetStateAction<termosType>>
}

const DEFAULT_TERMOS = {
    state: {
        id: "1",
        status: "active",
        links: ["link1", "link2"]
    },
    setState: () => { },
}

const TermosContext = createContext<PropsTermosContext>(DEFAULT_TERMOS);

export default TermosContext;