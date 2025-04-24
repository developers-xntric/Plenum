import ServiceHero from '@/components/service/hero'
import ServicesList from '@/components/service/services-list'
import React from 'react'
import { ServiceList } from "@/data/service-list";
import ServiceContact from '@/components/service/service-contact';

const Service = () => {
    return (
        <div>
            <ServiceHero />
            <ServicesList serviceList={ServiceList} />
            <ServiceContact/>
        </div>
    )
}

export default Service
