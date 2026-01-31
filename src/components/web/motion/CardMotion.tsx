'use client';
import { motion } from 'framer-motion'
interface Props {
    children: React.ReactNode,
    delay: number,
    style?:string
}
const CardMotion = ({ children, delay, style }: Props) => {
    return (
        <motion.section
            initial={{ opacity: 0, x: 20 }} // ici on utilise la prop y
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay }}
            className={`${style}`}
        >
            {children}
        </motion.section>
    )
}

export default CardMotion
