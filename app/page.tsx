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
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
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
    {/* flexにしてalign-items-centerにすることで要素が縦に中央へ行く */}
    <div className={`${styles.hero} vh-100 d-flex align-items-center`} id="hero">
      {/* container: bootstrap特有の幅指定。レスポンシブ対応 */}
      <div className="container">
        <div className="row">
          {/* col: colam（カラム）のこと。列。 */}
          {/*7: 七分割。この数字を下げるとさらに要素が小さくなる */}
          {/* max-auto: 左右のmarginを自動的に設ける */}
          <div className="col-lg-7 mx-auto text-center">
            <h1 className={`${styles.heading} display-4 text-white`}>Bootstarp5 Page</h1>
            {/* my-3: marginを3空ける */}
            {/* lorem15: 15文字の適当な文章を入力してくれる */}
            <p className='text-white my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quisquam dolores facilis incidunt obcaecati illo perspiciatis minima molestiae fugiat eos. Omnis laudantium dicta esse porro ducimus, enim neque et. Libero.</p>
            <a href="#" className="btn btn-primary me-2">Go Page</a>
            <a href="#" className="btn btn-outline-light">Contact</a>
          </div>
        </div>
      </div>
    </div>

    {/* Service section */}
    <section id="servies" className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h6 className={`${styles.heading} text-primary`}>SERVICES</h6>
            <h1 className={`${styles.heading}`}>Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, praesentium.</p>
          </div>
        </div>

        {/* row: 横並びにする */}
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className={`${styles.service} ${styles.cardEffect}`}>
              <div className={styles.iconbox}>
              <i className='bx bxs-comment-detail' ></i>
              </div>
              <h5>Service</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt expedita, dolorem natus quae eligendi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}

export default BasicExample;
