import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 rounded-full hover:bg-neutral-800 transition-all duration-300 group"
    >
      <ArrowLeft className="w-5 h-5 text-neutral-200 group-hover:-translate-x-1 transition-transform" />
      <span className="text-sm text-neutral-200" style={{ fontFamily: 'Lato, sans-serif' }}>
        Back
      </span>
    </button>
  )
}

export default BackButton

