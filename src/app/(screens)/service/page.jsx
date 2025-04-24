import ServiceHero from '@/components/service/hero'
import ServicesList from '@/components/service/services-list'
import React from 'react'
import { ServiceList } from "@/data/service-list";

const Service = () => {
    return (
        <div>
            <ServiceHero />
            <ServicesList serviceList={ServiceList} />
        </div>
    )
}

export default Service
