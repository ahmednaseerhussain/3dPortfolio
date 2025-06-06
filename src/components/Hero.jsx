import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
// import { repeat } from "maath/dist/declarations/src/misc"

const Hero = () => {
  return (
    <section className=" relative w-full h-screen mx-auto">
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5">
      <div className="w-5 h-5 rounded-full bg-[#968A8A]"/> 
      <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className="text-[#968A8A]">Ahmed</span>
        </h1>
        <p className={`${styles.heroSubText}`}>
        I develop apps, user <br className=" sm-block hidden"/>
        interfaces and <br/> web application
        </p>
      </div>
    </div>
    <div className="relative h-screen flex justify-center items-center lg:ml-[400px]">
    <ComputersCanvas/>
    </div>
      
    <div className=" absolute bottom-32 xs:bottom-[1px] w-full flex justify-center items-center">
    <a href="#about"> 
      <div className=" w-[34px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 sm:block hidden">
        <motion.dev 
          animate={{
            y: [0, 24, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className="w-3 h-3 rounded-full bg-secondary mb-1 sm:block hidden"
        />
      </div>
    </a>
    </div>
    </section>
  )
}

export default Hero