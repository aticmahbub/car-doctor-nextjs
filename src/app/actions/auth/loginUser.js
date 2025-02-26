'use server';

import bcrypt from 'bcrypt';
import dbConnect, {collectionsObj} from '@/lib/dbConnect';
export const loginUser = async (payload) => {
    const {email, password} = payload;
    const usersCollection = dbConnect(collectionsObj.usersCollection);
    const user = await usersCollection.findOne({email});

    if (!user) return null;

    const isPassword = bcrypt.compare(user.password, password);
    if (!isPassword) return null;
    return user;
};
