import { Poppins, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { text } from "stream/consumers";

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  style:'normal'
})

interface Item {
  text: string;
}

interface StepProps {
  title: string;
  description: string;
  imgUrl: string;
  number: string;
  items: Item[];
}

export function Step({title, description, imgUrl, number, items = []}: StepProps) {
  return (
    <div className="w-full items-center py-16 flex flex-col sticky min-h-[100vh] top-0 bg-[url('/background2.png')] bg-cover bg-no-repeat bg-[#0B011D]">
      <div className="w-full max-w-7xl grid grid-cols-2 gap-8 items-center justify-center p-16">
        <div>
          <h1 className={`${spaceGrotesk.className} text-6xl mb-9`}><strong className='text-transparent bg-clip-text bg-gradient-to-r from-[#8e25ea] via-[#ff2689] via-66.33% to-[#ff9c2b]'>{number}. </strong>{title}</h1>
          <h3 className={`text-base font-normal antialiased mb-6`}>{description}</h3>
          <span className={`${poppins.className} text-sm text-zinc-300 antialiased font-normal`}>
            <ul className='flex flex-col gap-2'>
              {items.map(item => (
                <li key={Math.random()} className='flex flex-1 gap-4 items-center'>
                  <div className='w-1 h-3 bg-gradient-to-r from-[#8e25ea] from-20% to-[#d501ff] to-66.33%' />
                  {item.text}
                </li>
              ))}                 
            </ul>
          </span>
        </div>
        <div>
          <Image
            className="ml-8 mb-8"
            src={`/${imgUrl}`}
            alt={title}
            width={600}
            height={367}
            priority
          />
        </div>
      </div>
    </div>
  )
}