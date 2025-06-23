import React from 'react'

const TextEditor = () => {
  return (
    <div>
        <div className='bg-amber-200 h-[100vh]'>
        <form action="GET">
          <label htmlFor="title" className='text-6xl m-4'>Title</label><br />
          <input type="text" className='border rounded p-2 m-4 w-1/2'/> <br />
          <label htmlFor="body" className='text-3xl m-4'>Body</label> <br />
          <textarea name="body" id="body" className='m-4 border rounded w-1/2'></textarea>
        </form>
      </div>
    </div>
  )
}

export default TextEditor