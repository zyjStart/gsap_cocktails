import { useGSAP } from '@gsap/react'
import { SplitText,ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
const Hero = () => {
    const videoRef = useRef()
    const isMobile = useMediaQuery({maxWidth:767})
    useGSAP(()=>{
        const titleSplit = SplitText.create('.title',{type:'chars,words',charsClass:'text-gradient'})
        const paraSplit = SplitText.create('.subtitle',{type:'lines'})
        // titleSplit.chars.forEach(char=>char.classList.add('text-gradient'))
        gsap.from(titleSplit.chars,{
            yPercent:100,
            duration:1.8,
            ease:"expo.out",
            stagger:0.06,
        })
        gsap.from(paraSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease:"expo.out",
            stagger:0.06,
            delay:1
        })
        gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start:"top top",
                end:"bottom top",
                scrub:true
            }
        }).to(".right-leaf",{y:200},0)
        .to(".left-leaf",{y:-200},0)
        // 元素顶部达到视口的50%时
        const startValue = isMobile ? 'top 50%':'center 60%'
        const endValue = isMobile ? '120% 50%' : 'bottom top'
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'video',
                start:startValue,
                end:endValue,
                scrub:.5,
                pin:true,
            }
        })
        videoRef.current.onloadedmetadata = ()=>{
            tl.to(videoRef.current,{
                currentTime:videoRef.current.duration
            })
        }
    },[])
  return (
    <>
    <section id='hero' className='noisy'>
        <h1 className='title'>MOJITOL</h1>
        <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
        <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />

        <div className='body'>
            <div className='content'>
                <div className='space-y-5 hidden md:block'>
                    <p>Cool. Crisp. Classic.</p>
                    <p className='subtitle'>
                        Sip the Spirit <br/> of Summer 
                    </p>
                </div>
            <div className='view-cocktails'>
                <p className='subtitle'>
                Every cocktail on our menu is a
                blend of premium ingredients,
                creative flair,and timeless recipes
                designed to delight your senses.
                </p>
                <a href="#cocktails">View cocktails</a>
            </div>
            </div>
        </div>
    </section>
    <div className='video absolute inset-0'>
        <video ref={videoRef} src="/videos/output.mp4" muted playsInline preload='auto'></video>
    </div>
    </>
  )
}

export default Hero