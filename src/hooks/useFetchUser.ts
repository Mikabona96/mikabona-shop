import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { db } from '../firebase'
import { userState } from '../recoil';

export const useFetchUser = () => {
    const [user, setUser] = useRecoilState(userState);
    useEffect(() =>{
        const fetchUser = async () => {
            const arr: any = []
            const querySnapshot = await getDocs(collection(db, "currentUser"));
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
            //   console.log(doc.id, " => ", doc.data());
                arr.push(doc.data())
            });

            setUser(arr[0])
        }
        fetchUser()
    }, []);

    return {
        user
    }
}