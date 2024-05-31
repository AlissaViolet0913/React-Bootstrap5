"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./style.module.css";
import { Button, Stack } from 'react-bootstrap';

function BasicExample() {
  return (
    <>
    {/* navbar section */}
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className={`${styles.bootstrap} text-white pt-1`}>Bootstrap5</Navbar.Brand>
        <Navbar.Toggle  />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* ms-auto: 要素右寄せ */}
          {/* me-auto: 要素左寄せ */}
          <Nav className="ms-auto">
              <Nav.Link href="#home" className={styles.navLink}>Home</Nav.Link>
              <Nav.Link href="#link" className={styles.navLink}>Link</Nav.Link>
              <Nav.Link href="#features" className={styles.navLink}>Features</Nav.Link>
              <Nav.Link href="#projects" className={styles.navLink}>Projects</Nav.Link>
              <Nav.Link href="#team" className={styles.navLink}>Team</Nav.Link>
              <Nav.Link href="#blog" className={styles.navLink}>Blog</Nav.Link>
              <Nav.Link href="contract" className={styles.navLink}>Contract</Nav.Link>
              <Button variant="primary">Join Us</Button>{' '}
            </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>

    {/* hero section */}
    {/* div.heroでショートカット⇓ */}
    <div className="hero" id="hero">
      {/* container: bootstrap特有の幅指定 */}
      <div className="container">
        <div className="row">
          {/* col: colam（カラム）のこと。列。 */}
          <div className="col-lg-7">
            <h1>Bootstarp5 Page</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default BasicExample;
