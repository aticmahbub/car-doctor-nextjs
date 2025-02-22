import dbConnect, {collectionsObj} from '@/lib/dbConnect';
import {ObjectId} from 'mongodb';
import Image from 'next/image';
import React from 'react';

export default async function ServiceDetails({params}) {
    const p = await params;
    const data = await dbConnect(collectionsObj.servicesCollection).findOne({
        _id: new ObjectId(p.id),
    });
    return (
        <div>
            <section className='flex justify-center'>
                <figure className='relative'>
                    <Image
                        src={'/assets/images/checkout/checkout.png'}
                        width={1137}
                        height={300}
                        alt='banner'
                    />
                    <div className='overlay-bg w-full h-full border-red-600 border-2 absolute top-0'>
                        <div className='w-full h-full flex items-center text-white'>
                            <h2 className='text-3xl flex items-center'>
                                Service Details
                            </h2>
                        </div>
                    </div>
                </figure>
            </section>

            <section>
                <div className='hero bg-base-200 min-h-screen'>
                    <div className='hero-content flex-col lg:flex-row-reverse'>
                        <img
                            src={data.img}
                            className='max-w-sm rounded-lg shadow-2xl'
                        />
                        <div>
                            <h1 className='text-5xl font-bold'>{data.title}</h1>
                            <p className='py-6'>{data.description}</p>
                            <button className='btn btn-primary'>Buy now</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
