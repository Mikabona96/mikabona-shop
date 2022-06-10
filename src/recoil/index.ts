import { atom } from "recoil"
import {User} from '../firebase/index'

type InitialAtopType = {
    key: string
    default: User | null
}

const initialAtomObject: InitialAtopType = {
    key: "userState",
    default: null
}

export const userState = atom(initialAtomObject)
