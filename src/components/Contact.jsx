import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#8ee4af] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/438225d2-a80d-4c93-bc73-65d7ec20c825" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#edf5e1] text-[#05386b]'>Contact</p>
                <p className='text-[#379683] py-4'> Submit the form below to get in touch!</p>
            </div>
            <input className='p-2 bg-[#edf5e1] text-[#05386b]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#edf5e1] text-[#05386b]' type="text" placeholder='Email' name='email' />
            <textarea className='text-[#05386b] bg-[#edf5e1] p-2' name="message" rows="10" placeholder="Message"></textarea>
            <button className='text-[#edf5e1] border-2 hover:bg-[#77DD77] hover:border-[#77DD77] hover:text-[#edf5e1] px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>
        
    </div>
  )
}

export default Contact