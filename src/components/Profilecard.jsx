import React from 'react'

function Profilecard({ records, onDelete, onEdit }) {
    return (
        <>
            {records.map((record) => (
                <div className="w-full mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 " key={record.id}>
                    <div className="rounded-t-lg h-32 overflow-hidden">
                        <img className="object-cover object-top w-full" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Mountain" />
                    </div>
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img className="object-cover object-center h-32" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Woman looking front" />
                    </div>
                    <div className="text-center mt-2">
                        <h2 className="font-semibold">{record.name}</h2>
                        <p className="text-gray-500">{record.title}</p>
                    </div>
                    <div className="portfolio-list p-5 flex flex-col">
                        <h1 className="text-xl font-bold">Portfolio</h1>
                        <div className="bg-white shadow rounded p-5">
                            <h2 className="text-xl font-bold">{record.position}</h2>
                            <h3 className='text-gray-500'>My Skill</h3>
                            <span className="text-gray-500"></span>
                            <p className='text-black'>{record.desc}</p>
                        </div>

                    </div>
                    <div className="p-4 border-t mx-8 mt-2 flex justify-center">
                        <button
                            className="py-1 px-4 mt-2 border-[1px] rounded-lg text-sm border-blue-700 mr-2"
                            onClick={() => onEdit(record.id)}
                        >
                            Edit
                        </button>
                        <button
                            className="py-1 px-4 mt-2 border-[1px] rounded-lg text-sm border-blue-700 mr-2"
                            onClick={() => onDelete(record.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Profilecard