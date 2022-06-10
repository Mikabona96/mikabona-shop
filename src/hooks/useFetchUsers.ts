import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase'

export const useFetchUsers = () => {
    const [users, setUsers] = useState<any>([])
    useEffect(() =>{
        const fetchUsers = async () => {
            const arr: any = []
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
            //   console.log(doc.id, " => ", doc.data());
                arr.push(doc.data())
            });

            setUsers(arr)
        }
        fetchUsers()
    }, []);

    return {
        users
    }
}