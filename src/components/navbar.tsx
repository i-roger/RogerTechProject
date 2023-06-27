import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'

export default function NavbarTeste() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

    return(  
        <>      
        <nav className='fixed z-20 w-full h-20 shadow-xl bg-black/30 backdrop-blur-[2px] border-slate-300/10 border-b text-white'>
            <div className="flex justify-between items-center h-full w-full px-10">
                <div>
                    <Link href="/">Left Side</Link>
                </div>
                <div className='hidden sm:flex'>
                    <ul className='hidden sm:flex'>
                        <Link href="/projetos">
                            <li className="ml-10 uppercase hover:text-blue-500 text-xl">Projetos</li>
                        </Link>
                        <Link href="/sobre">
                            <li className="ml-10 uppercase hover:text-blue-500 text-xl">Sobre</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 uppercase hover:text-blue-500 text-xl">Why us</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className='sm:hidden cursor-pointer active:scale-90 rounded p-1 active:bg-zinc-700/30 active:text-white/50'> {/*Hambuerguer menu*/}
                    <AiOutlineMenu size={30}/>
                </div>
            </div>
        </nav>
        
        <div className={
            menuOpen
            ? "z-20 fixed left-0 top-0 w-[65%] sm:hidden h-screen ease-in duration-500 bg-black/50 backdrop-blur-[4px] border-slate-300/10 border-r" 
            : "z-20 fixed left-[-100%] w-[65%] h-screen top-0 ease-in duration-500 border-slate-300/10"
        }>
            <div className='flex w-full items-center justify-end px-4 py-7'>
                <div onClick={handleNav} className='cursor-pointer active:scale-90 text-white rounded p-1 active:bg-zinc-700/30 active:text-white/50'>
                    <AiOutlineClose size={30} />
                </div>
            </div>
            <div className="py-4 text-white text-xl">
                <ul className='flex flex-col gap-y-5 font-semibold'>
                    <Link href="/"><li className="text-center rounded mx-0.5 py-1.5 hover:bg-zinc-500/30 active:bg-zinc-700/30 active:text-white/50">Início</li></Link>
                    <Link href="/projetos"><li className="text-center rounded mx-0.5 py-1.5 hover:bg-zinc-500/30 active:bg-zinc-700/30 active:text-white/50">Projetos</li></Link>
                    <Link href="/sobre"><li className="text-center rounded mx-0.5 py-1.5 hover:bg-zinc-500/30 active:bg-zinc-700/30 active:text-white/50">Sobre</li></Link>
                </ul>
            </div>
        </div>
        </>
    )
}