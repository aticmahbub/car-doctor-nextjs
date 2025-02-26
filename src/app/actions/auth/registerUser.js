'use server';

import dbConnect, {collectionsObj} from '@/lib/dbConnect';
import bcrypt from 'bcrypt';
export const registerUser = async (payload) => {
    const usersCollection = dbConnect(collectionsObj.usersCollection);
    // validation
    const {email, password} = payload;
    if (!email || !password) {
        return null;
    }
    const user = await usersCollection.findOne({email: payload.email});
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;
        const result = await usersCollection.insertOne(payload);
        result.insertedId = result.insertedId.toString();
        return result;
    }
    return null;
};
