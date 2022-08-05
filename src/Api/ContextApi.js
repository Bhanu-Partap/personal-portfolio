import { collection } from "firebase/firestore";
import { createContext, useContext } from "react";
import { db } from "../Backend/firebase.cofig";

const Api = createContext()
export default function ContextApi({children}){
 const collectionref = collection(db,'message')
    return <>
        <Api.Provider>{children}

        </Api.Provider>
    </>

}

export function useAppstate(){
    return useContext(Api)
}