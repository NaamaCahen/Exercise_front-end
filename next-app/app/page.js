import Image from 'next/image'
import styles from './page.module.css'
import ExPage from './exercise/page'

export default function Home() {
  return (
    <main>
      <ExPage></ExPage>
    </main>
  )
}
