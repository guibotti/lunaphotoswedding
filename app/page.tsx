'use client';

import { ArrowDown, ArrowUpRight, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

const instagram = 'https://www.instagram.com/lunaphotoswedding/';
const photos = [
  ['/portfolio/01.webp', 'Casal de noivos em um jardim iluminado pelo sol'],
  ['/portfolio/03.webp', 'Retrato espontâneo de casamento'],
  ['/portfolio/05.webp', 'Detalhe afetivo do ensaio de casamento'],
  ['/portfolio/08.webp', 'Momento natural entre os noivos'],
  ['/portfolio/10.webp', 'Casal durante ensaio fotográfico de casamento'],
  ['/portfolio/12.webp', 'Retrato de casamento com luz natural'],
];
const faqs = [
  ['Como consulto minha data?', 'Clique em “Consultar minha data”. Você será direcionado ao Instagram da Luna para conversar sobre data, local e o tipo de celebração.'],
  ['O trabalho é só para casamento?', 'O perfil é dedicado a histórias de casamento. Para outros tipos de ensaio, você também pode conhecer o perfil geral @lunaphotograph_.'],
  ['Como funciona o orçamento?', 'Cada história tem necessidades diferentes. Na conversa inicial, você conta o que está planejando e recebe as opções adequadas ao seu dia.'],
  ['E se a gente não souber posar?', 'A proposta é registrar conexão e movimento com leveza. A direção acontece quando precisa, sem transformar o momento em uma sequência artificial.'],
];

function Cta({ inverse = false, label = 'Consultar minha data' }: { inverse?: boolean; label?: string }) {
  return <a href={instagram} target="_blank" rel="noreferrer" className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[13px] font-semibold uppercase tracking-[.12em] transition duration-300 ${inverse ? 'bg-[#f4eee5] text-[#302b27] hover:bg-white' : 'bg-[#302b27] text-white hover:bg-[#ad755d]'}`}>{label}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  return <main className="overflow-hidden bg-[#f4eee5] text-[#302b27]">
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/20 text-white"><div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
      <a href="#inicio" className="font-serif text-lg tracking-[.18em]">LUNA <span className="font-sans text-[9px] tracking-[.3em]">WEDDING</span></a>
      <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[.16em] md:flex" aria-label="Navegação principal"><a href="#portfolio">Histórias</a><a href="#experiencia">Experiência</a><a href="#duvidas">Dúvidas</a></nav>
      <a href={instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.14em]"><span aria-hidden="true">◎</span><span className="hidden sm:inline">Instagram</span></a>
    </div></header>

    <section id="inicio" className="relative h-[100svh] min-h-[760px] text-white">
      <img src="/portfolio/01.webp" alt="Casal de noivos em um jardim" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,23,20,.72),rgba(28,23,20,.2))]"/><div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/45 to-transparent"/>
      <div className="relative mx-auto flex h-full max-w-[1440px] items-end px-5 pb-24 md:items-center md:px-10 md:pb-0 lg:px-16"><div className="max-w-3xl pt-20">
        <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.28em]"><span className="h-px w-10 bg-white/70"/> Fotografia de casamento</p>
        <h1 className="font-serif text-[clamp(3.5rem,8.8vw,8.3rem)] leading-[.84] tracking-[-.055em]">O seu amor,<br/><em className="font-normal">do jeito que é.</em></h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-white/85 md:text-lg">Fotografias sensíveis e verdadeiras para guardar o que o tempo não consegue repetir.</p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><Cta inverse/><span className="text-xs text-white/70">Converse diretamente com a fotógrafa</span></div>
      </div></div><a href="#manifesto" aria-label="Continuar" className="absolute bottom-8 right-8 hidden h-14 w-14 items-center justify-center rounded-full border border-white/40 md:flex"><ArrowDown className="h-5 w-5"/></a>
    </section>

    <section id="manifesto" className="mx-auto grid max-w-[1320px] gap-12 px-5 py-24 md:grid-cols-[.75fr_1.25fr] md:px-10 md:py-36 lg:px-16"><p className="eyebrow">Mais que fotografar</p><div>
      <h2 className="max-w-4xl font-serif text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.02] tracking-[-.04em]">Seu casamento não precisa parecer uma produção. Precisa parecer <em>vocês.</em></h2>
      <div className="mt-10 grid gap-8 text-[#6d625a] sm:grid-cols-2"><p className="leading-7">Entre abraços apertados, mãos trêmulas e risadas fora do roteiro, moram as imagens que continuam vivas anos depois.</p><p className="leading-7">A Luna acompanha o dia com presença e delicadeza, dirigindo quando necessário e deixando a história respirar.</p></div>
    </div></section>

    <section id="portfolio" className="bg-[#302b27] py-24 text-white md:py-32"><div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow text-[#c59b84]">Histórias reais</p><h2 className="mt-4 font-serif text-5xl tracking-[-.04em] md:text-7xl">O que fica.</h2></div><p className="max-w-sm text-sm leading-6 text-white/60">Um olhar documental, íntimo e solar sobre encontros que merecem permanecer.</p></div>
      <div className="grid auto-rows-[240px] grid-cols-2 gap-2 md:auto-rows-[340px] md:grid-cols-4 md:gap-3">{photos.map(([src,alt],i)=><figure key={src} className={`group overflow-hidden ${i===0||i===4?'row-span-2':''} ${i===2?'md:col-span-2':''}`}><img src={src} alt={alt} loading={i>1?'lazy':undefined} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"/></figure>)}</div>
      <div className="mt-10 flex justify-center"><Cta inverse label="Ver mais histórias"/></div>
    </div></section>

    <section id="experiencia" className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36 lg:px-16"><div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-center">
      <div className="relative pb-7 pr-7"><img src="/portfolio/03.webp" alt="Momento espontâneo de um casamento" className="relative z-10 aspect-[4/5] w-full object-cover"/><div className="absolute bottom-0 right-0 h-[65%] w-[65%] border border-[#ad755d]"/></div>
      <div><p className="eyebrow">A experiência</p><h2 className="mt-4 font-serif text-[clamp(2.8rem,5vw,4.8rem)] leading-[1] tracking-[-.04em]">Presença leve.<br/>Memórias inteiras.</h2><p className="mt-7 max-w-lg leading-7 text-[#6d625a]">Vocês vivem o dia. A câmera encontra os gestos pequenos, as pessoas importantes e tudo aquilo que acontece rápido demais para ser percebido na hora.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">{[['Direção sem rigidez','Orientação natural para vocês se sentirem seguros, nunca engessados.'],['Olhar para o essencial','A emoção de quem está perto e os detalhes que contam a história.'],['Conversa próxima','Clareza desde o primeiro contato até a entrega das memórias.'],['Imagem atemporal','Cores e luz que preservam a verdade do momento.']].map(([title,text],i)=><div key={title} className="border-t border-[#cbbdaf] pt-5"><span className="mb-3 block font-serif text-2xl text-[#ad755d]">0{i+1}</span><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#746960]">{text}</p></div>)}</div>
      </div>
    </div></section>

    <section className="bg-[#d9c4b3] px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-5xl text-center"><Sparkles className="mx-auto h-6 w-6 text-[#ad755d]"/><p className="mt-7 font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.08] tracking-[-.035em]">“Não é sobre posar para uma fotografia. É sobre reconhecer nela tudo o que vocês sentiram.”</p><div className="mx-auto mt-8 h-px w-16 bg-[#ad755d]"/></div></section>

    <section className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36 lg:px-16"><div className="mb-14 text-center"><p className="eyebrow">Do primeiro oi ao grande dia</p><h2 className="mt-4 font-serif text-5xl tracking-[-.04em] md:text-7xl">Como começa</h2></div><div className="grid gap-5 md:grid-cols-3">
      {[['01','Vocês contam a história','Data, lugar, planos e tudo o que torna essa celebração só de vocês.'],['02','A experiência ganha forma','Vocês conhecem as possibilidades e escolhem o que combina com o casamento.'],['03','O dia vira memória','Com espaço para viver cada momento — e fotografias para voltar a ele.']].map(([n,title,text])=><article key={n} className="border border-[#cfc0b4] p-8 md:p-10"><span className="font-serif text-4xl text-[#ad755d]">{n}</span><h3 className="mt-10 font-serif text-3xl">{title}</h3><p className="mt-4 leading-7 text-[#746960]">{text}</p></article>)}
    </div></section>

    <section id="duvidas" className="bg-[#eee3d8] py-24 md:py-32"><div className="mx-auto grid max-w-[1200px] gap-14 px-5 md:grid-cols-[.8fr_1.2fr] md:px-10 lg:px-16"><div><p className="eyebrow">Antes de conversar</p><h2 className="mt-4 font-serif text-5xl tracking-[-.04em] md:text-6xl">Dúvidas<br/><em>comuns.</em></h2><p className="mt-6 max-w-xs leading-7 text-[#746960]">Se ainda ficar alguma pergunta, é só chamar. Cada casamento pede uma conversa própria.</p></div>
      <div className="border-t border-[#c7b6a8]">{faqs.map(([q,a],i)=><div key={q} className="border-b border-[#c7b6a8]"><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} className="flex w-full items-center justify-between gap-4 py-6 text-left font-medium" aria-expanded={openFaq===i}><span>{q}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#ad9b8d]">{openFaq===i?'−':'+'}</span></button>{openFaq===i&&<p className="max-w-xl pb-7 pr-12 text-sm leading-6 text-[#746960]">{a}</p>}</div>)}</div>
    </div></section>

    <section className="relative min-h-[620px] text-white"><img src="/portfolio/09.webp" alt="Casal celebrando o casamento" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-[#241f1b]/65"/><div className="relative mx-auto flex min-h-[620px] max-w-4xl flex-col items-center justify-center px-5 text-center"><Heart className="h-7 w-7"/><p className="eyebrow mt-6 text-white/65">Sua história merece espaço na agenda</p><h2 className="mt-5 font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[.95] tracking-[-.05em]">Vamos guardar<br/><em>esse dia?</em></h2><p className="mt-7 max-w-lg leading-7 text-white/75">Conte a data e como vocês imaginam a celebração. A conversa começa sem compromisso, direto com a Luna.</p><div className="mt-9"><Cta inverse/></div></div></section>

    <footer className="bg-[#302b27] px-5 py-12 text-white md:px-10 lg:px-16"><div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-8 border-b border-white/15 pb-10 md:flex-row md:items-end"><div><p className="font-serif text-2xl tracking-[.15em]">LUNA</p><p className="mt-2 text-[9px] uppercase tracking-[.3em] text-white/50">Photograph Wedding</p></div><a href={instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm"><span aria-hidden="true">◎</span> @lunaphotoswedding</a></div><div className="mx-auto mt-7 flex max-w-[1320px] flex-col justify-between gap-2 text-[10px] uppercase tracking-[.14em] text-white/35 sm:flex-row"><span>Fotografia para histórias reais</span><span>© 2026 Luna Photograph Wedding</span></div></footer>
    <a href={instagram} target="_blank" rel="noreferrer" aria-label="Conversar com a Luna no Instagram" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#ad755d] text-white shadow-xl transition hover:scale-105 md:hidden"><MessageCircle className="h-6 w-6"/></a>
  </main>;
}
