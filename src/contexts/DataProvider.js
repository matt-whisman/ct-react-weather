import { createContext, useState, useEffect, useContext } from "react";
import {
    getFirestore,
    getDoc,
    getDocs,
    collection,
    doc,
    addDoc,
    Timestamp,
    orderBy,
    query,
    collectionGroup,
} from "@firebase/firestore";
import { AuthContext } from "./AuthProvider";

export const DataContext = createContext()

export const DataProvider = (props) => {
    const db = getFirestore()
    const { user } = useContext(AuthContext)

    

    const values = {

    }

    return (
        <DataContext.Provider value={values}>
            {props.children}
        </DataContext.Provider>
    );
}