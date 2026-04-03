'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children:   ReactNode
  delay?:     number
  direction?: 'up'|'down'|'left'|'right'|'none'
  className?: string
  once?:      boolean
}

export default function FadeIn({ children, delay=0, direction='up', className='', once=true }: Props) {
  const dir = { up:{y:28,x:0}, down:{y:-28,x:0}, left:{y:0,x:28}, right:{y:0,x:-28}, none:{y:0,x:0} }
  return (
    <motion.div
      initial={{ opacity:0, ...dir[direction] }}
      whileInView={{ opacity:1, y:0, x:0 }}
      viewport={{ once, margin:'-60px' }}
      transition={{ duration:0.65, delay, ease:[0.22,1,0.36,1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
