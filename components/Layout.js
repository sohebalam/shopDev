import { Container } from "@material-ui/core"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Container>
        <Navbar />
        {children}
      </Container>
    </div>
  )
}

export default Layout
