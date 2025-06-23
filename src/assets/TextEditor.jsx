import React from 'react'

const TextEditor = () => {
  return (
    <div className='flex justify-center'>
        <div className='h-[50vh] w-[50vw] bg-amber-200'>
        <form action="">
          <label htmlFor="title" className='text-6xl m-4'>Title</label><br />
          <input type="text" className='border rounded p-2 m-4 w-1/2'/> <br />
          <label htmlFor="body" className='text-3xl m-4'>Body</label> <br />
          <input type="text" name="body" id="body" className=' border m-4 rounded' />
        </form>
      </div>
    </div>
  )
}

export default TextEditor