import React from 'react'

function Footer() {
  return (
    <footer className='h-15 border-t-4 border-t-[#E4E4E7] flex flex-row justify-between items-center px-5'>
        <p className='text-sm'>TASK_MANAGER</p>
        <div className='flex flex-row gap-4'>
            <p className='text-xs underline'>TERMS</p>
            <p className='text-xs underline'>PRIVACY</p>
        </div>
        <div>
            <p className='text-sm'>2026 TASK_MANAGER</p>
        </div>
    </footer>
  )
}

export default Footer