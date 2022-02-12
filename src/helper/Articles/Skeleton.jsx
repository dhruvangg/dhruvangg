import React from 'react'

export default function Skeleton() {
    return (
        <div className='prose prose-xl mx-auto'>
            <div className="animate-pulse shadow mt-4 p-4 rounded">
                <div className="flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-200 rounded w-1/3"></div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                        <div className="space-y-5">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animate-pulse shadow mt-4 p-4 rounded">
                <div className="h-72 bg-slate-200 rounded w-full mb-8"></div>
                <div className="flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-200 rounded w-1/3"></div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                        <div className="space-y-5">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animate-pulse shadow mt-4 p-4 rounded">
                <div className="flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-200 rounded w-1/3"></div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                        <div className="space-y-5">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animate-pulse shadow mt-4 p-4 rounded">
                <div className="flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-200 rounded w-1/3"></div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                        <div className="space-y-5">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


