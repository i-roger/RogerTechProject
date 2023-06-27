export default function footer() {
    return(
        <div className={`
        flex justify-between items-center h-20 px-8 w-full
        backdrop-blur-[2px] border-slate-300/10 border-t bg-black/30
        `}>
            <p className="text-sm tracking-tighter text-slate-700">Copyright © 2023 Matheus Roger | RogerTech</p>
        </div>
    )
}