'use server';

import dbConnect, {collectionsObj} from '@/lib/dbConnect';

export const registerUser = async (payload) => {
    const usersCollection = dbConnect(collectionsObj.usersCollection);

    // validation
    const {email, password} = payload;
    if (!email || !password) {
        return {success: false};
    }
    const user = await usersCollection.findOne({email: payload.email});
    if (!user) {
        const result = await usersCollection.insertOne(payload);
        const {_id} = result;
        return {_id};
    }
    return {success: false};
};
