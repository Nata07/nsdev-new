import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Poppins, Space_Grotesk } from 'next/font/google'
import { Step } from './components/Step'

const steps = [
  {
    "title": "Descoberta",
    "description": "Nessa etapa faremos uma imersão completa no seu negócio entendendo seus objetivos, seus produtos e sua maneira de operar. Tudo isso com o objetivo claro de criarmos uma comunicação que reflita a essência da empresa.",
    "number": "01",
    "imgUrl": "discover.svg",
    "items": [
      { "text": "Briefing"},
      { "text": "Proposta Comercial"},
      { "text": "Contrato"},
      { "text": "Reuniões"},
      { "text": "Definição de objetivos"}
    ] 
  },
  {
    "title": "Ideação",
    "description": "Nesta etapa você terá a primeira visão do projeto, através de um quadro de referencias visuais apresentaremos a direção visual e a estrutura de navegação.",
    "number": "02", 
    "imgUrl": "ideacao.svg",
    "items": [
      { "text": "Wireframes"},
      { "text": "Moodboard"},
      { "text": "Testes"}
    ]  
  },
  {
    "title": "Prototipação",
    "description": "Nesta etapa você visualizará uma versão do projeto final com toda a estrutura e design profissional criados a partir das etapas anteriores. É nessa etapa que o seu projeto ganha vida.",
    "number": "03", 
    "imgUrl": "prototipacao.svg",
    "items": [
      { "text": "Visual Design"},
      { "text": "Interações"},
      { "text": "Protótipos navegáveis"},
      { "text": "Testes"},
      { "text": "Style Guide"}
    ]  
  },
  {
    "title": "Desenvolvimento",
    "description": "Durante a etapa de desenvolvimento, trabalharemos na construção do seu site/aplicação, garantindo que todas as características, posicionamentos e estruturas aprovadas nas fases anteriores estejam presentes no produto final, pronto para ser lançado com perfeito funcionamento.",
    "number": "04", 
    "imgUrl": "desenvolvimento.svg",
    "items": [
      { "text": "Desenvolvimento"},
      { "text": "Otimizações e SEO"},
      { "text": "Testes e Refinamentos"},
      { "text": "Publicação"},
      { "text": "Handoff"}
    ]  
  },
  {
    "title": "Entrega",
    "description": "Na fase de entrega, nossa equipe se empenha para garantir que seu projeto seja lançado em perfeito funcionamento, incluindo todas as características, posicionamentos e estruturas aprovadas nas fases anteriores. Nosso objetivo é ajudar você a alcançar o sucesso com sua solução digital, proporcionando resultados excepcionais.",
    "number": "05", 
    "imgUrl": "entrega.svg",
    "items": []  
  }
]
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: '500'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  style:'normal'
})


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="hero items-center max-w-7xl w-full">
          <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex mb-16">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Seja bem vindo à&nbsp;
              {/* <code className="font-mono font-bold">src/app/page.tsx</code> */}
            </p>
            <div className="fixed bottom-0 sm:mt-7xl left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                // href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo-escrita-w.svg"
                  alt="Vercel Logo"
                  // className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>
          <div className='mb-24 flex justify-center '>
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#d501ff] after:dark:opacity-40 before:lg:h-[360px]">
              <Image
                className="relative purple:drop-shadow-[0_0_0.3rem_#4a07db6f] purple:invert"
                src="/logo.png"
                alt="NSDEV Logo"
                width={180}
                height={37}
                priority
              />
              <Image
                className="ml-8 mb-8"
                src="/nsdev-white.svg"
                alt="NSDEV Logo"
                width={600}
                height={367}
                priority
              />
            </div>
          </div> {/* logo center */}
          <div className="z-2 w-full max-w-7xl flex justify-between items-center mb-12">
            <div className='max-w-lg'>
              <div className='flex items-center gap-2'>
                <div className="w-2 h-3 bg-gradient-to-r from-[#8e25ea] from-20% to-[#d501ff] to-66.33%" />
                <small className={`${spaceGrotesk.className} font-bold uppercase text-transparent text-sm bg-clip-text bg-gradient-to-r from-[#8e25ea] to-[#d501ff] to-66.33% `}>Evolua sua marca</small>
              </div>
              <h2 className={`${spaceGrotesk.className} text-[80px]`}>Tecnologia e <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#8e25ea] via-[#ff2689] via-66.33% to-[#ff9c2b] ">resultados</strong></h2>  {/* to-[262.46deg,#ff9c2b,#ff2689 66.33%,#9747ff] */}
            </div>
            <div className="max-w-[350px] flex flex-col gap-12">
              {/* <p className={`${spaceGrotesk.className} font-normal text-[1.1rem] text-end`}>Criamos soluções através do design e tecnologia para sua empresa gerar mais resultados. <strong>Vamos começar?</strong></p> */}
              <p className={`${spaceGrotesk.className} text-[1.1rem] leading-8`}>Criamos soluções através do design e tecnologia, para sua empresa gerar mais resultados. <strong>Vamos começar?</strong></p>
              <div className='w-full'>
                <div className='max-w-[250px] border-transparent border-2 items-center flex rounded-full bg-gradient-radial to-[#8e25ea] from-[#ff9c2b] hover:border-0'>
                  <button className='w-full cursor-pointer text-center bg-[#0B011D] rounded-full px-6 h-12 hover:bg-gradient-to-r from-[#8e25ea] via-[#ff2689] via-80.33% to-[#ff9c2b]/80 to-90% '> Quero começar agora</button>
                </div>
              </div>
            </div>
          </div>
          <div className="max-h-10 animate-bounce flex items-center justify-center mt-6 mb-14">
            <svg width="11" height="52" viewBox="0 0 11 66" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" d="M5.5 0V64M5.5 64L1 59.5M5.5 64L10 59.5" stroke="white"></path><path d="M1 60L5.5 64.5L10 60" stroke="white"></path></svg>
          </div>
        </section>  {/* hero end */}
      </main>
      <div className="flex flex-col items-center min-h-[300vh] top-0">
        <div className="content w-full max-w-7xl">
          <div className="flex items-center justify-between gap-6 w-full mx-auto max-w-7xl">
            <div className="flex flex-col max-w-[800px] pr-24 items-start">
              <div className='flex items-center gap-2'>
                <div className="w-2 h-3 bg-gradient-to-r from-[#8e25ea] from-20% to-[#d501ff] to-66.33%" />
                <small className={`${spaceGrotesk.className} uppercase text-base antialiased`}>Nosso método</small>
              </div>
              <h2 className={`${spaceGrotesk.className} mt-4 text-[2.3rem] max-w-[550px] leading-[4rem]`}>Conheça como é nosso processo de criação</h2>
            </div>
          </div>
        </div>
        
        {steps.map(step => (
          <Step key={Math.random()} title={step.title} description={step.description} imgUrl={step.imgUrl} number={step.number} items={step.items} />
        ))}

      </div>
      <footer className="flex bottom-0 w-full items-center justify-center mt-6 max-[420px]:align-center max-[420px]:flex-col">
        <div className="w-full max-w-7xl py-12 border-zinc-800 flex items-center justify-between border-t">
          <div className="d-block">
            <Image
              src="/logo-escrita-w.svg"
              alt="Vercel Logo"
              width={120}
              height={24}
              priority
            />
            <p className={`${spaceGrotesk.className} text-base mt-4`}>© 2023 - NSDEV Tecnologia. Todos os direitos reservados</p>
          </div>
          <div className='flex gap-8 font-bold'>
            <a href='https://instagram.com/natanaeldev'>INSTAGRAM</a>
            <a href='https://www.linkedin.com/in/natanaeldev/'>LINKEDIN</a>
          </div>
        </div>
      </footer>
    </>
  )
}
