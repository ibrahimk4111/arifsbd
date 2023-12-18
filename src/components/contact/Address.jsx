import React from 'react'


const Address = () => {
    const buttonStyle = "bg-[#00cba9] text-white font-bold md:p-4 p-2 rounded-full shadow-2xl shadow-slate-800"
    const eachAddress = 'flex flex-col flex-row justify-start items-center gap-10 w-full md:p-3 shadow-2xl shadow-slate-300 rounded-md'
    const contacts = [
        {
            "name": "MR. K.K. ARIF",
            "designation": "Managing Director",
            "email": "cdm@dhaka.net"
        },
        {
            "name": "MR. S.A. KHAN",
            "designation": "Executive Director",
            "email": "arifs@dhaka.net"
        },
        {
            "name": "DR. ADHIR R. DAS",
            "designation": "Sr. Technical Manager",
            "email": "adhir@arifs_bd.com"
        },{
            "name": "MR. P. K.DATTA (Apu)",
            "designation": "G.M – Operations",
            "email": "apu@arifs_bd.com",
            "email2": "pronaydatta@gmail.com"
        }
    ]


    return (
        <div className='grid lg:grid-cols-8 grid-cols-1 md:p-10 p-5 gap-5'>
            
            <div className={`md:col-span-4 ${eachAddress}`}>
                <div className="flex items-center justify-between">
                    <div className={buttonStyle}>
                        {/* <MdMarkEmailRead className='text-2xl' /> */}
                    </div>
                </div>
                <div className=' flex flex-wrap justify-start gap-5 '>
                    {
                        contacts.map((contact, index) => (
                            <div key={index} className=' text-black md:text-base text-sm'>
                                <h1 className='font-bold text-base'>{contact.name}</h1>
                                <p className='text-sm'>{contact.designation}</p>
                                <p className='text-sm'>{contact.email}</p>
                                <p className='text-sm'>{contact.email2}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={` col-span-2 ${eachAddress}`}>
                <div className="flex items-center justify-between">
                    <div className={buttonStyle}>
                        {/* <FaMapMarkerAlt className=' text-2xl' /> */}
                    </div>
                </div>
                
            </div>

            <div className={` col-span-2 ${eachAddress}`}>
                <div className="flex items-center justify-between">
                    <div className={buttonStyle}>
                        {/* <FaPhoneAlt className='text-2xl' /> */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Address