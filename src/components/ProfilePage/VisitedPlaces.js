import React from 'react'
import VisitCard from './VisitCard'

function VisitedPlaces() {
    const num = 40;
    return (
        <div className='px-5 py-4 overflow-hidden'>
            <p className='w-fit pb-2 pr-5 mb-3 border-b border-b-teal-400'>Previous Visits <span className='text-gray-300'>( scroll to right )</span></p>
            <div className="w-full h-full overflow-hidden relative">
                <div className="visitcontainer outline-4 outline-slate-950 max-w-xl rounded-lg px-2  py-5 flex flex-row justify-start gap-5 overflow-x-scroll drop-shadow-xl">
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                    <VisitCard />
                </div>
            </div>
            
        </div>
    )
}

export default VisitedPlaces