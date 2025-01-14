import MenuItem from '@/app/components/MenuItem'
import ThemeSwitch from '@/app/components/ThemeSwitch'
import { AiFillHome } from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";

export default function Header() {
  return (
    <header className='max-w-4xl flex items-center w-full justify-between p-5 mx-auto shadow-sm'>
      <div className='p-1 px-4 bg-orange-500 text-lg rounded-md'>imdb</div>
      <div className='flex items-center gap-5'>
        <ThemeSwitch />
        <div className='flex items-center space-x-5 mx-3'>
            <MenuItem title='Home' Icon={AiFillHome} path='/' />
            <MenuItem title='About' Icon={BsFillInfoCircleFill} path='/about' />
        </div>
    </div>
    </header>
  );
}