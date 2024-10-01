import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/ScrollToTop.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default ScrollToTop
