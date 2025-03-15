import { createRoot } from 'react-dom/client'
import './assets/styles/style.scss'
import RootCmp from './RootCmp.tsx'

createRoot(document.getElementById('root')!).render(
  <RootCmp />
)
