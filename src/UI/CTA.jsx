export default function CTA({ color, children }) {
  const colorVariants = {
    red: 'text-white bg-soft-red hover:text-soft-red hover:border-soft-red',
    blue: 'text-white bg-soft-blue hover:text-soft-blue hover:border-soft-blue',
    grey: 'text-stone-700 bg-stone-100 hover:text-stone-700 hover:border-stone-700',
  }

  return (
    <button
      className={`${colorVariants[color]} text-sm font-semibold rounded-md border-2 border-transparent py-2 px-6 hover:bg-transparent hover:border-2`}
      type="button"
    >
      {children}
    </button>
  )
}