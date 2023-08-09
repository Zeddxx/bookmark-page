import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Feature from "./Components/Feature"
import Extension from "./Components/Extension"
import Faq from "./Components/Faq"
import Email from "./Components/Email"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      {/* Navbar */}
        <Navbar />
      <header className="h-auto lg:h-screen w-auto overflow-x-hidden">
        {/* header */}
        <Header />
      </header>
      <main className="h-auto">
        <section className="relative lg:before-1/2 before:w-full before:h-[20%] lg:before:h-1/2 before:rounded-full before:bg-soft-blue before:absolute lg:before:bottom-0 before:bottom-[30%] before:-left-[40%] lg:before:-left-2/3">
          <Feature />
        </section>
        <section>
          <Extension />
        </section>
        <Faq />
        <Email />
      </main>
      <Footer />
    </>
  )
}

export default App
