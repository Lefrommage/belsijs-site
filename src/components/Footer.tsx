import FooterButtons from "./FooterButtons"
import Logo from "./Logo"

const Footer = () => {
  return (
    <div>
      <Logo />
      <div>
        <FooterButtons />
      {/* <p className="flex justify-center text-2xl font-sirenia pb-6"> Openings uren |</p> */}
      </div>
    </div>
  )
}

export default Footer