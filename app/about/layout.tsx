import styles from "../about/styles.module.css"

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
   <nav>
   About Nav Bar
    </nav> 
    <main className={styles.main}>
        {children}
    </main>
    </>
  )
}
