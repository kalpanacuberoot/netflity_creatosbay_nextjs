import About_Us from "@/components/About_Us"
import Contact_Us from "@/components/Contact_Us"
import Faq from "@/components/Faq"
import Navbar from "@/components/Navbar"
import Team from "@/components/Team"


const index = () => {

  return (
    <>

      <Navbar />
      <About_Us />
      <Team />
      <Faq />
      <Contact_Us />
    </>
  )
}

export default index