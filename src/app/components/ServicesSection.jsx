import dbConnect, {collectionsObj} from '@/lib/dbConnect';
import Link from 'next/link';
import React from 'react';
import {FaArrowCircleRight} from 'react-icons/fa';

export default async function ServicesSection() {
    const serviceCollection = dbConnect(collectionsObj.servicesCollection);
    const data = await serviceCollection.find({}).toArray();
    return (
        <div>
            <h2 className='text-3xl'>Services</h2>
            <div className='grid grid-cols-12'>
                {data?.map((item, idx) => {
                    return (
                        <div
                            className='col-span-12 md:col-span-6 lg:col-span-4'
                            key={idx}
                        >
                            <img
                                priority
                                alt='car servicing image'
                                src={`${item.img}`}
                                width={314}
                                height={208}
                            />
                            <p>{item?.title}</p>
                            <p>Price: {item.price}</p>
                            <Link href={`/services/${item._id}`}>
                                <FaArrowCircleRight className='text-orange-500' />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
