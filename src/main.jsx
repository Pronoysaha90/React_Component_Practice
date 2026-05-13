import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './components/Counter'
import Card from './components/Card'
import BGchanger from './components/BGchanger'
import PassGen from './components/PassGen'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    {/* <Card heading="Pronoy" para="Pronoy is a good boy, he practice React Js." btn="Read More"/>
    <Card heading="Saha" />
    <Card /> */}
    {/* <BGchanger /> */}
    <PassGen />
  </StrictMode>,
)
