import React, { useState } from "react";
import reactDom from "react-dom";
import { render } from "react-dom";
import Login from "./Login";
import myJobs from "./myJobs";

export const uidContext = React.createContext(0);
export const tokenContext = React.createContext(0);

const Index = () => {
    const [uid, setuid] = useState(0);


    return (
        <uidContext.Provider value={[uid, setuid]}>

        </uidContext.Provider>


    );
}

const Index2 = () => {
    const [token, settoken] = useState(0);


    return (
        <tokenContext.Provider value={[token, settoken]}>

        </tokenContext.Provider>


    );
}