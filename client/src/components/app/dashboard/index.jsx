import React from 'react'
import { Text } from '@nextui-org/react'
import FeaturesCard from './featuresCard'

function index() {
    return (
        <div className='mt-2'>
            <Text b h1 size={40} className='flex justify-center items-center'>
                LawBot Express Dashboard
            </Text>

            <FeaturesCard />

            <div className="statsText mt-8">
                <Text b h1 size={30} className='flex justify-center items-center'>
                    0 Total Consultations
                </Text>
                <Text size="$md" className='flex justify-center items-center '>
                    #Together We Can Make a Legal Difference
                </Text>
            </div>
        </div>
    )
}

export default index