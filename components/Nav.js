import request from "../utils/request"
import {useRouter} from 'next/router'

function Nav() {

    const router = useRouter();

    return (
        <nav className='relative'>
            <div className='flex px-10 sm:px-20 whitespace-nowrap scrollbar-hide overflow-x-scroll space-x-10 sm:space-x-20'>
            {Object.entries(request).map(([key,doc])=> (                                       
                <h2 onClick={()=> router.push(`/?genre=${key}`)} key={key} className='last:pr-24 cursor-pointer transition ease-in-out duration-300 transform hover:scale-125 hover:text-white active:text-red-500'>{doc.title}</h2>
    ))}
            </div>

            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
        </nav>
    )
}

export default Nav