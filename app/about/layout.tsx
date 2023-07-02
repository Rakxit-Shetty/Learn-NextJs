

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
    <main>
        {children}
    </main>
    </>
  )
}
