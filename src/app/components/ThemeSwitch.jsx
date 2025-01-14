'use client';

import {MdLightMode, MdDarkMode} from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitch () {
    const {theme, setTheme, systemTheme}= useTheme('dark');
    const [mounted, setMounted] = useState(false);

    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(() => setMounted(true), [])
    return <div>
        {mounted && (currentTheme === 'dark' ? <MdLightMode onClick={() => setTheme('light')} className='text-xl hover:text-amber-500'/> : <MdDarkMode onClick={() => setTheme('dark')} className='text-xl hover:text-amber-500'/>)}
    </div>
}