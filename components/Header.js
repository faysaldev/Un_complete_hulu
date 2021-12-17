import HeaderOption from './HeaderOption'
import Image from 'next/image'
import {BadgeCheckIcon,CollectionIcon,HomeIcon,SearchIcon,LightningBoltIcon,UserIcon} from '@heroicons/react/outline'

function Header() {

    const api_key = process.env.API_KEY;
    console.log(api_key)

    return (
        <header className='flex flex-col sm:flex-row justify-between m-4 h-auto'>

            <div className="flex flex-grow items-center justify-evenly max-w-2xl">
            <HeaderOption Icon={HomeIcon} text="HOME" />
            <HeaderOption Icon={LightningBoltIcon} text="TRENDING" />
            <HeaderOption Icon={BadgeCheckIcon} text="VERIFIED" />
            <HeaderOption Icon={CollectionIcon} text="COLLECTIONS" />
            <HeaderOption Icon={SearchIcon} text="SEARCH" />
            <HeaderOption Icon={UserIcon} text="ACCOUNT" />
            </div>
            <Image className="object-contain" src="/logo.png" width={200} height={100} />
        </header>
    )
}

export default Header
