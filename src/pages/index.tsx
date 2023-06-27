import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import printDownloader from '../../public/print_downloader.png'
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='px-4 lg:py-32 sm:py-32 max-sm:py-32'> {/* Para dar espaço para o conteudo */}
        <div className='relative max-w-5xl mx-auto'>
          <h1 className='font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-slate-50'>
          Downloader de videos e músicas!</h1>
        </div>

        <div className='justify-center flex transform skew-y-[-4deg] mt-6'>
          <Image className='hover:scale-90 hover:drop-shadow-2xl scale-75 drop-shadow-xl transition-transform rounded-xl' src={printDownloader} alt="Downloader by Matheus Roger"/> 
        </div>
        
        <div className='max-w-6xl mx-auto px-4 mt-6'>
          <p className=' text-xl tracking-tight  text-slate-50 text-center max-w-5xl mx-auto px-2'>
            Este é um dos projetos que desenvolvi em PYTHON, trata-se de um Downloader de músicas e videos.
            Basta colar a URL do video ou música que deseja e selecionar a respectiva opção.</p>
          <p className='mt-6 text-md mx-auto p-2 text-center max-w-2xl text-slate-50 rounded-md bg-[rgb(0,122,255)]'>
            Após o término do seu download, o arquivo será baixado no mesmo local onde o programa foi instalado.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
