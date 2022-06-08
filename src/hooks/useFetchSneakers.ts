import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase'

export const useFetchSneakers = () => {
    const [sneakers, setSneakers] = useState<any>([])
    useEffect(() =>{
        const fetchSneakers = async () => {
            const arr: any = []
            const querySnapshot = await getDocs(collection(db, "sneakers"));
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
            //   console.log(doc.id, " => ", doc.data());
                arr.push(doc.data())
            });

            setSneakers(arr)
        }
        fetchSneakers()
    }, []);

    return {
        sneakers
    }
}