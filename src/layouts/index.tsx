import Navbar from './header'
import Footer from './footer'
import {Container } from 'react-bootstrap';

type LayoutProps = {
  children: React.ReactNode,
};
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}