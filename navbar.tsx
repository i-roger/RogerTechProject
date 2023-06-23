import Link from 'next/link'

export default function Navbar() {
    return(
    <div className={`absolute z-20
    flex justify-between w-screen bg-slate-950/10 px-8 py-4 
    backdrop-blur-[1.5px] font-semibold text-md border-slate-300/10 border-b
    `}>
        <a className="bg-blue-400" href="/">RogerTech</a>

        <div className={`
        flex gap-4 bg-green-300
        `}>
        <a href="/">Projetos</a>
        <a href="/">Sobre</a>
        </div>
    </div>
    )
}