import Link from 'next/link'

export default function Navbar() {
    return(
    <div className={`fixed z-20 top-0 mb-60
    flex justify-between w-screen bg-black/30 px-8 py-4 
    backdrop-blur-[2px] font-semibold text-md border-slate-300/10 border-b
    `}>
        <a className="text-white" href="/">RogerTech</a>

        <div className={`
        flex gap-4 text-slate-100
        `}>
            
            <Link href="/projetos" className="hover:text-blue-500">Projetos</Link>
            <Link href="/sobre" className="hover:text-blue-500">Sobre</Link>
        </div>
    </div>
    )
}