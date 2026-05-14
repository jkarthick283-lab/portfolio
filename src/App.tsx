import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState, MouseEvent } from 'react'

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif','https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif','https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif','https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif','https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif','https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif','https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif','https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif','https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif','https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif','https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif','https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif','https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif','https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif','https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif','https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif','https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif','https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif','https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif','https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif','https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif'
]

const projects = [
  {
    number: '01',
    type: 'Enterprise · 2024',
    name: 'IRESEAL — Railway Ops Portal',
    liveUrl: null,
    tags: ['ASP.NET', 'C#', 'MySQL', 'Stored Procedures'],
    images: [
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
      'https://images.unsplash.com/photo-1601024445121-e294ee1e3e99?w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
    ]
  },
  {
    number: '02',
    type: 'Client · 2024',
    name: 'Smart Tailors — Shop Platform',
    liveUrl: 'https://tailors-shop.vercel.app//',
    tags: ['Python', 'Django', 'Bootstrap', 'MySQL'],
    images: [
      '/assets/smart-tailors-1.png',
      '/assets/smart-tailors-2.png',
      '/assets/smart-tailors-1.png'
    ]
  },
  {
    number: '03',
    type: 'Agency · 2025',
    name: 'Brew Coders — Digital Agency',
    liveUrl: null,
    tags: ['Branding', 'Web Dev', 'React', 'Digital Marketing'],
    images: [
      '/assets/brew-coders-1.png',
      '/assets/brew-coders-1.png',
      '/assets/brew-coders-1.png'
    ]
  },
  {
    number: '04',
    type: 'Branding · 2024',
    name: "Soul Snapper's — Photography Brand",
    liveUrl: null,
    tags: ['Logo Design', 'Branding', 'Visual Identity'],
    images: [
      '/assets/soul-snappers-gold.jpeg',
      '/assets/soul-snappers-black.jpeg',
      '/assets/soul-snappers-gold.jpeg'
    ]
  }
]

function FadeIn({children,delay=0,duration=0.7,x=0,y=30}:{children:ReactNode;delay?:number;duration?:number;x?:number;y?:number}){return <motion.div initial={{opacity:0,x,y}} whileInView={{opacity:1,x:0,y:0}} viewport={{once:true,margin:'50px',amount:0}} transition={{delay,duration,ease:[0.25,0.1,0.25,1]}}>{children}</motion.div>}
function ContactButton(){return <a href="mailto:jkarthick283@gmail.com" className="rounded-full border-2 border-white text-white font-medium uppercase tracking-[0.3em] text-xs sm:text-sm md:text-base px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4" style={{background:'linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)',boxShadow:'0px 4px 4px rgba(181,1,167,.25), inset 4px 4px 12px #7721B1'}}>Contact Me</a>}
function LiveProjectButton({href}:{href?:string|null}){return href?<a href={href} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-base hover:bg-[#D7E2EA]/10 transition">Live Project</a>:<button className="rounded-full border-2 border-[#D7E2EA]/40 text-[#D7E2EA]/40 font-medium uppercase tracking-widest px-6 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-base cursor-default">View Work</button>}
function Magnet({children}:{children:ReactNode}){const ref=useRef<HTMLDivElement>(null);const move=(e:MouseEvent<HTMLDivElement>)=>{if(!ref.current)return;const r=ref.current.getBoundingClientRect();const x=e.clientX-r.left-r.width/2;const y=e.clientY-r.top-r.height/2;ref.current.style.transform=`translate3d(${x/3}px,${y/3}px,0)`};const reset=()=>{if(ref.current)ref.current.style.transform='translate3d(0,0,0)'};return <div ref={ref} onMouseMove={move} onMouseLeave={reset} className="transition-transform duration-300 will-change-transform">{children}</div>}
function AnimatedText({text}:{text:string}){return <p className="text-[#D7E2EA] text-center max-w-[560px] leading-relaxed font-medium text-[clamp(1rem,2vw,1.35rem)]">{text.split('').map((c,i)=><motion.span key={i} initial={{opacity:.2}} whileInView={{opacity:1}} transition={{delay:i*.012}}>{c}</motion.span>)}</p>}

function HeroSection(){return <section className="relative h-screen flex flex-col overflow-x-clip"><FadeIn y={-20}><nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]"><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav></FadeIn><div className="flex-1 flex flex-col justify-between"><FadeIn delay={.15} y={40}><div className="overflow-hidden"><h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">Hi, i&apos;m Karthick</h1></div></FadeIn><FadeIn delay={.6} y={30}><div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"><Magnet><img alt="Uma Karthick portrait" src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"/></Magnet></div></FadeIn><div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20"><FadeIn delay={.35} y={20}><p className="text-[#D7E2EA] uppercase tracking-wide leading-snug font-light text-[clamp(.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">a full stack developer building enterprise-grade systems & digital experiences</p></FadeIn><FadeIn delay={.5} y={20}><ContactButton/></FadeIn></div></div></section>}

function MarqueeSection(){const [offset,setOffset]=useState(0);useEffect(()=>{const on=()=>setOffset(window.scrollY*.3);window.addEventListener('scroll',on,{passive:true});on();return()=>window.removeEventListener('scroll',on)},[]);const row1=[...marqueeImages.slice(0,11),...marqueeImages.slice(0,11),...marqueeImages.slice(0,11)];const row2=[...marqueeImages.slice(11),...marqueeImages.slice(11),...marqueeImages.slice(11)];return <section className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden bg-[#0C0C0C]"><div className="flex flex-col gap-3"><motion.div className="flex gap-3 will-change-transform" animate={{x:offset-200}} transition={{type:'tween',duration:.1}}>{row1.map((img,i)=><img key={i} src={img} loading="lazy" className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" />)}</motion.div><motion.div className="flex gap-3 will-change-transform" animate={{x:-(offset-200)}} transition={{type:'tween',duration:.1}}>{row2.map((img,i)=><img key={i} src={img} loading="lazy" className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" />)}</motion.div></div></section>}

function AboutSection(){return <section id="about" className="min-h-screen relative flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"><FadeIn delay={.1} x={-80} y={0}><img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"/></FadeIn><FadeIn delay={.25} x={-80} y={0}><img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"/></FadeIn><FadeIn delay={.15} x={80} y={0}><img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"/></FadeIn><FadeIn delay={.3} x={80} y={0}><img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"/></FadeIn><div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10"><FadeIn y={40}><h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">About me</h2></FadeIn><AnimatedText text="With 1+ years of hands-on experience, I build enterprise-grade systems using ASP.NET WebForms, C#, and MySQL. From railway operations to tailoring platforms, I focus on clean architecture, optimized databases, and interfaces that feel alive. Based in Tamil Nadu, building globally."/><div className="pt-8"><ContactButton/></div></div></section>}

function ServicesSection(){const services=[['Full Stack Development','End-to-end web applications using ASP.NET WebForms, C#, and MySQL — from architecture to deployment, built for scale and performance.'],['Database Architecture','Designing and optimizing MySQL schemas, stored procedures, and DAL patterns that power enterprise-level systems efficiently.'],['Web & UI Design','Clean, modern interfaces with Bootstrap and CSS — responsive, user-friendly, and polished for real-world use.'],['Digital Marketing','SEO, social media strategy, and online presence building under Brew Coders — helping local businesses stand out.'],['Agency & Freelance','Full-service web development and digital marketing through Brew Coders — from concept to launch for startups and local businesses.']];return <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C]"><h2 className="font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">Services</h2><div className="max-w-5xl mx-auto">{services.map((s,i)=><FadeIn key={s[0]} delay={i*.1}><div className="border-b border-black/15 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row gap-8"><div className="font-black text-[clamp(3rem,10vw,140px)] leading-none">0{i+1}</div><div className="flex flex-col gap-3 justify-center"><h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">{s[0]}</h3><p className="font-light leading-relaxed max-w-2xl opacity-60 text-[clamp(.85rem,1.6vw,1.25rem)]">{s[1]}</p></div></div></FadeIn>)}</div></section>}

function ProjectCard({project,index}:{project:typeof projects[number];index:number}){
  const ref=useRef(null)
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','start start']})
  const target=1-(projects.length-1-index)*.025
  const scale=useTransform(scrollYProgress,[0,1],[1,target])
  const isSoulSnappers = project.number === '04'

  return (
    <motion.div ref={ref} style={{scale,top:`${index*28}px`}} className="sticky top-24 md:top-32 h-[85vh]">
      <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full overflow-hidden">
        <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
          <div>
            <div className="text-[clamp(2.5rem,8vw,100px)] font-black leading-none text-[#D7E2EA]">{project.number}</div>
            <p className="uppercase tracking-[.2em] text-[#D7E2EA]/50 mt-1 text-xs sm:text-sm">{project.type}</p>
            <h3 className="text-[clamp(1.4rem,3vw,3rem)] font-bold mt-3 text-[#D7E2EA]">{project.name}</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map(t=><span key={t} className="text-[10px] sm:text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/50">{t}</span>)}
            </div>
          </div>
          <LiveProjectButton href={project.liveUrl}/>
        </div>

        {isSoulSnappers ? (
          /* Soul Snapper's — two logo variants side by side */
          <div className="grid grid-cols-2 gap-4 h-[52%] md:h-[58%]">
            <div className="rounded-[24px] md:rounded-[36px] overflow-hidden bg-white flex items-center justify-center p-6 md:p-10">
              <img src={project.images[1]} alt="Soul Snappers black logo" className="object-contain max-h-full w-full"/>
            </div>
            <div className="rounded-[24px] md:rounded-[36px] overflow-hidden bg-[#f5f0e8] flex items-center justify-center p-6 md:p-10">
              <img src={project.images[0]} alt="Soul Snappers gold logo" className="object-contain max-h-full w-full"/>
            </div>
          </div>
        ) : (
          /* All other projects — original 2+1 layout */
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-[52%] md:h-[58%]">
            <div className="md:col-span-2 flex gap-4 md:flex-col">
              <img src={project.images[0]} className="rounded-[24px] md:rounded-[36px] object-cover h-full md:h-[clamp(120px,14vw,210px)] w-1/2 md:w-full"/>
              <img src={project.images[1]} className="rounded-[24px] md:rounded-[36px] object-cover h-full md:flex-1 w-1/2 md:w-full"/>
            </div>
            <div className="md:col-span-3">
              <img src={project.images[2]} className="rounded-[24px] md:rounded-[36px] object-cover h-full w-full"/>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function ProjectsSection(){return <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20"><h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-20">Projects</h2><div className="flex flex-col gap-20">{projects.map((p,i)=><ProjectCard key={p.number} project={p} index={i}/>)}</div></section>}

function ContactSection(){return <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32"><div className="max-w-4xl mx-auto flex flex-col items-center gap-12 text-center"><FadeIn y={30}><h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,120px)] leading-none">Let's work together</h2></FadeIn><FadeIn delay={.15} y={20}><p className="text-[#D7E2EA]/70 text-[clamp(1rem,2vw,1.3rem)] max-w-[520px] leading-relaxed">Open to full-time roles, freelance projects, and creative collaborations. Based in Tamil Nadu, working globally.</p></FadeIn><FadeIn delay={.25} y={20}><div className="flex flex-col sm:flex-row gap-4 items-center flex-wrap justify-center"><a href="mailto:jkarthick283@gmail.com" className="rounded-full border-2 border-white text-white font-medium uppercase tracking-[0.3em] text-xs sm:text-sm px-8 py-3 sm:px-10 sm:py-3.5 hover:opacity-80 transition" style={{background:'linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)',boxShadow:'0px 4px 4px rgba(181,1,167,.25), inset 4px 4px 12px #7721B1'}}>jkarthick283@gmail.com</a><a href="https://www.linkedin.com/in/uma-karthick" target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-base hover:bg-[#D7E2EA]/10 transition">LinkedIn</a><a href="https://wa.me/919342923745" target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-base hover:bg-[#D7E2EA]/10 transition">WhatsApp</a></div></FadeIn><FadeIn delay={.35} y={20}><p className="text-[#D7E2EA]/30 text-xs font-mono tracking-widest uppercase">+91 93429 23745 · Tamil Nadu, India</p></FadeIn></div></section>}

export default function App(){return <main className="bg-[#0C0C0C] overflow-x-clip" style={{overflowX:'clip'}}><HeroSection/><MarqueeSection/><AboutSection/><ServicesSection/><ProjectsSection/><ContactSection/></main>}
