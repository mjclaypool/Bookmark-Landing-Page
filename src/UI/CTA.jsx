import { motion } from "framer-motion"

export default function CTA({ color, type, children }) {
  const colorVariants = {
    red: 'text-white bg-soft-red hover:text-soft-red hover:border-soft-red',
    blue: 'text-white bg-soft-blue hover:text-soft-blue hover:border-soft-blue',
    grey: 'text-stone-700 bg-stone-100 hover:text-stone-700 hover:border-stone-700',
  }

  return (
    <>
      {type == "submit" ?
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`${colorVariants[color]} text-sm font-semibold rounded-md border-2 border-transparent shadow-md py-2 px-4 lg:px-6 hover:bg-transparent hover:border-2`}
          type="submit"
        >
          {children}
        </motion.button>
      :
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`${colorVariants[color]} text-sm font-medium rounded-md border-2 border-transparent shadow-md py-2 px-4 lg:px-6 hover:bg-transparent hover:border-2`}
          type="button"
        >
          {children}
        </motion.button>
      }
    </>
  )
}