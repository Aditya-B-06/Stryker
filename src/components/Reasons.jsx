import React from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router'

const box = {
  borderRadius: "28px",
  padding: "52px",
  margin: "160px auto",
  maxWidth: "900px",
  background: "rgba(0,0,0,0.65)",
  border: "1px solid rgba(0,180,255,0.6)",
  boxShadow: `
    0 0 30px rgba(0,180,255,0.55),
    0 0 90px rgba(0,180,255,0.35),
    0 0 160px rgba(0,180,255,0.2),
    inset 0 0 25px rgba(255,255,255,0.05)
  `
}

const heading = {
  fontSize: "2.2rem",
  fontWeight: 600,
  marginBottom: "18px",
  color: "#ffffff",
  letterSpacing: "-0.03em"
}

const body = {
  color: "rgba(255,255,255,0.65)",
  lineHeight: "1.7",
  fontSize: "0.95rem",
  maxWidth: "520px"
}

function Reasons() {
  const navigate = useNavigate();
  return (
    <div>
      <motion.div style={box} 
        initial={{opacity:0,y:40}}
        whileInView ={{opacity:1, y:0}}
        transition={{duration:0.8,ease:"easeOut"}}
        viewport={{once:false, amount:0.3}}
        whileHover={{scale:1.1}}
      >
        <h1 style={heading}>Curated, reliable gear</h1>
        <p style={body}>We dont just sell weapons, we sell reliable,performance driven firearms and ammunition trusted by professionals and enthusaists alike</p>
      </motion.div>
      <motion.div 
        style={box}
        initial={{opacity:0,y:40}}
        whileInView ={{opacity:1, y:0}}
        transition={{duration:0.8,ease:"easeOut"}}
        viewport={{once:false, amount:0.3}}
        whileHover={{scale:1.1}}
      >
        <h1 style={heading}>Quality and Authencity guranteed</h1>
        <p style={body}>Every product on Stryker is 100% authentic, quality-checked and sourced from the besr manufacturers. What you see is exactly what you get. Built to last, built to perform</p>
      </motion.div>
      <motion.div
       style={box}
        initial={{opacity:0,y:40}}
        whileInView ={{opacity:1, y:0}}
        transition={{duration:0.8,ease:"easeOut"}}
        viewport={{once:false, amount:0.3}}
        whileHover={{scale:1.1}}
      >
        <h1 style={heading}>Seamless and Secure purchasing</h1>
        <p style={body}>From browsing to checkout, Stryker is designed to be fast, secure and hassle free.</p>
      </motion.div>
      <motion.div
       style={box}
        initial={{opacity:0,y:40}}
        whileInView ={{opacity:1, y:0}}
        transition={{duration:0.8,ease:"easeOut"}}
        viewport={{once:false, amount:0.3}}
        whileHover={{scale:1.1}}
      >
        <h1 style={heading}>For the enthusiasts</h1>
        <p style={body}>Stryker is built for those who value precison, power and control. Whether you are a collector, sport shooter or a professional, this is the gear meant for the best, by the best</p>
      </motion.div>
      <div className='flex justify-center mb-20'>
  <motion.button
    className='bg-black p-5 rounded-3xl border-4 border-blue-500'
    whileHover={{
      scale: 1.1,
      boxShadow: `
        0 0 30px rgba(0,180,255,0.55),
        0 0 90px rgba(0,180,255,0.35),
        0 0 160px rgba(0,180,255,0.2),
        inset 0 0 25px rgba(255,255,255,0.05)
      `
    }}
    transition={{ duration: 0.3, ease: "easeIn" }}
  >
    <button onClick={()=> navigate("/light-arms",{replace:true})}>
      Click here to shop now!
    </button>
    
  </motion.button>
</div>
    </div>
  )
}

export default Reasons