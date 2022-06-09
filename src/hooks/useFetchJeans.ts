import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase'

export const useFetchJeans = () => {
    const [jeans, setJeans] = useState<any>([])
    useEffect(() =>{
        const fetchHats = async () => {
            const arr: any = []
            const querySnapshot = await getDocs(collection(db, "jeans"));
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
            //   console.log(doc.id, " => ", doc.data());
                arr.push(doc.data())
            });

            setJeans(arr)
        }
        fetchHats()
    }, []);

    return {
        jeans
    }
}