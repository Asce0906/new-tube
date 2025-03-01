import { SearchIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const SearchInput = (props: Props) => {
    // TODO: Add search functionality
    return (
        <form className='w-full flex max-w-[600px]'>
            <div className='w-full relative'>
                <input type="text" placeholder='Search' className='w-full py-2 pr-12 pl-4 rounded-l-full border focus:outline-none focus:border-blue-500' />
            </div>

            {/* // TODO: Add remove search button */}
            <button
                type='submit'
                className='px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'
            >
                <SearchIcon className='size-5' />
            </button>
        </form>
    )
}

export default SearchInput