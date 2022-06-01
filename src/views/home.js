import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Card from '../components/card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Piece - The People's Property Platform</title>
        <meta
          name="description"
          content="Piece is a social network for sustainable affordable housing. Earn pieces and points by building better shelter for all."
        />
        <meta
          property="og:title"
          content="Piece - The People's Property Platform"
        />
        <meta
          property="og:description"
          content="Piece is a social network for sustainable affordable housing. Earn pieces and points by building better shelter for all."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/278961ff-9b39-423f-b8fb-60238a66ff16/c130985d-c208-4de0-a76d-b688ac1849f2?org_if_sml=1"
        />
      </Helmet>
      <div className="navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <Link to="/" className="home-navlink">
              <img
                alt="image"
                src="/playground_assets/piece-logo-200h.png"
                className="home-image"
              />
            </Link>
          </div>
          <div className="home-links">
            <span className="home-text navbar-Link">How it works</span>
            <span className="home-text001 navbar-Link">Features</span>
            <span className="home-text002 navbar-Link">Blog</span>
            <span className="home-text003 navbar-Link">Pricing</span>
            <button className="button-secondary button">Log in</button>
            <button className="button button-primary">Get started</button>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="home-hero hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <h1 className="home-text004">
              <span className="home-text005">Robinhood</span>
              <br></br>
              <span>
                Robin Hood
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>for Real Estate</span>
            </h1>
            <span className="home-text010">
              <span className="home-text011">
                Build sustainable, affordable housing,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="home-container01">
              <button className="button button-gradient">Get started</button>
              <button className="button button-transparent">Log in</button>
            </div>
          </div>
          <div className="home-content1"></div>
          <div className="home-image1">
            <img
              alt="image"
              src="/playground_assets/hero-600w.png"
              className="home-hero-image"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image2">
            <img
              alt="image"
              src="/playground_assets/group%2020-1200w.png"
              className="home-hero-image1"
            />
          </div>
          <div className="home-content2">
            <span className="home-text012 before-Heading">how it works</span>
            <h1 className="home-text013">
              <span className="home-text014">
                Pay and get paid
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text015">
                faster
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text016">than ever.</span>
              <span className="home-text017"></span>
            </h1>
            <span className="home-text018">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className="home-container02">
              <button className="button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-content3">
            <span className="home-text019 before-Heading">save money</span>
            <h1 className="home-text020">
              <span className="home-text021">Earn cashback</span>
              <br></br>
              <span className="home-text023">from your favorite brands</span>
            </h1>
            <span className="home-text024">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className="home-container03">
              <button className="button-secondary button bg-transparent">
                See how
              </button>
            </div>
          </div>
          <div className="home-image3">
            <img
              alt="image"
              src="/playground_assets/group%2021-1200w.png"
              className="home-hero-image2"
            />
          </div>
        </div>
      </div>
      <div className="home-section2 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-image4">
            <img
              alt="image"
              src="/playground_assets/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-1200w.png"
              className="home-hero-image3"
            />
          </div>
          <div className="home-content4">
            <span className="home-text025 before-Heading">get started</span>
            <h1 className="home-text026">Open your account today</h1>
            <div className="home-step">
              <div className="home-number">
                <span className="home-text027">1</span>
              </div>
              <div className="home-container04">
                <span className="home-title">Download UpStart App</span>
                <span className="home-text028">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text029">2</span>
              </div>
              <div className="home-container05">
                <span className="home-title1">Create your free account</span>
                <span className="home-text030">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text031">3</span>
              </div>
              <div className="home-container06">
                <span className="home-title2">
                  Link your existing credit cards
                </span>
                <span className="home-text032">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width5 max-width">
          <span className="home-text033 before-Heading">get started</span>
          <h1 className="home-text034">
            <span>No matter what you do,</span>
            <br></br>
            <span>UpStart will save you money</span>
          </h1>
          <div className="home-cards-container">
            <Card rootClassName="card-root-class-name2"></Card>
            <Card text="Personal" rootClassName="card-root-class-name"></Card>
            <Card text="Family" rootClassName="card-root-class-name1"></Card>
          </div>
        </div>
      </div>
      <div className="home-section4 section-container">
        <div className="home-max-width6 max-width">
          <div className="home-f-a-q">
            <div className="home-questions">
              <span className="home-text037 before-Heading">faq</span>
              <h1 className="home-text038">
                <span className="home-text039">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text041">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger">
                  <span className="home-text042">
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text043">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text044">
                    Do you operate in United Stated?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text045">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text046">
                    Is this a globally available bank?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text047">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger3">
                  <span className="home-text048">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text049">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/group%202-1200w.png"
              className="home-image5"
            />
          </div>
          <div className="home-banner">
            <span className="home-text050 before-Heading">get started</span>
            <h1 className="home-text051">
              <span>Push your finances to</span>
              <br></br>
              <span></span>
              <span></span>
              <span> the next level.</span>
            </h1>
            <span className="home-text057">
              <span>
                Amet minim mollit non deserunt ullamco est sit
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                aliqua dolor do amet sint.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="home-btns">
              <button className="home-button6 button button-transparent">
                See all plans
              </button>
              <button className="home-button7 button button-gradient">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container07">
            <div className="footer-column">
              <span className="home-text061">Product</span>
              <span className="home-text062">How it works</span>
              <span className="home-text063">Features</span>
              <span className="home-text064">Pricing</span>
              <span className="home-text065">Blog</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="home-text067">App</span>
              <span className="home-text068">Download iOS app</span>
              <span className="home-text069">Download Android app</span>
              <span className="home-text070">Log in to Portal</span>
              <span className="home-text071">Administrative</span>
              <span>Legal</span>
            </div>
            <div className="footer-column">
              <span className="home-text073">Company</span>
              <Link to="/about" className="home-navlink1">
                About us
              </Link>
              <span className="home-text074">Culture</span>
              <span className="home-text075">Code of conduct</span>
              <span className="home-text076">Careers</span>
              <span className="home-text077">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="home-text079">Invest</span>
              <span className="home-text080">Commodity</span>
              <span className="home-text081">Savings</span>
              <span className="home-text082">
                <span>Taxes and fees</span>
                <br></br>
                <span></span>
              </span>
              <span className="home-text085">
                <span>Currency exchange</span>
              </span>
              <span>Community</span>
            </div>
            <div className="footer-column">
              <span className="home-text088">Security</span>
              <span className="home-text089">Security status</span>
              <span className="home-text090">ISO</span>
              <span className="home-text091">System status</span>
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="home-text093">Follow</span>
              <span className="home-text094">Instagram</span>
              <span className="home-text095">Twitter</span>
              <span className="home-text096">Facebook</span>
              <span className="home-text097">Tik Tok</span>
              <span className="home-text098">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
