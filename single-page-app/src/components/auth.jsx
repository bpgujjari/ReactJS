import React, { useState,useContext } from "react";

const AuthContext=React.createContext();


export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);

    const login=(user)=>{setUser(user)}

    const logout=()=>{setUser(null)}

    return(<>

        <AuthContext.Provider value={{login,logout,user}}>{children}</AuthContext.Provider>

    </>)
    
}
export  const useAuth=()=>{ return useContext(AuthContext)}

