import React from 'react'

const DashboardWrapper = ({ children} : { children: React.ReactNode}) => {
  return (
    <div className="text-2xl text-blue-500 font-bold">Tailwind is working!
        Sidebar
        <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50`}>
            {children }
        </main>
    </div>
  )
}

export default DashboardWrapper
