import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Card from '../components/card'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Piece - Fix Property Forever</title>
        <meta
          name="description"
          content="Piece is a social network for sustainable affordable housing. Earn pieces and points by building better shelter for all."
        />
        <meta property="og:title" content="Piece - Fix Property Forever" />
        <meta
          property="og:description"
          content="Piece is a social network for sustainable affordable housing. Earn pieces and points by building better shelter for all."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/278961ff-9b39-423f-b8fb-60238a66ff16/c130985d-c208-4de0-a76d-b688ac1849f2?org_if_sml=1"
        />
      </Helmet>
      <div className={projectStyles['navbar-container']}>
        <div className={projectStyles['max-width']}>
          <div className={styles['Logo']}>
            <Link to="/" className={styles['navlink']}>
              <img
                src="/playground_assets/piece-logo-200h.png"
                alt="image"
                className={styles['image']}
              />
            </Link>
          </div>
          <div className={styles['Links']}>
            <span
              className={` ${styles['Text']} ${projectStyles['navbar-Link']} `}
            >
              How it works
            </span>
            <span
              className={` ${styles['text01']} ${projectStyles['navbar-Link']} `}
            >
              Features
            </span>
            <span
              className={` ${styles['text02']} ${projectStyles['navbar-Link']} `}
            >
              Blog
            </span>
            <span
              className={` ${styles['text03']} ${projectStyles['navbar-Link']} `}
            >
              Pricing
            </span>
            <button
              className={` ${projectStyles['button-secondary']} ${projectStyles['button']} `}
            >
              Log in
            </button>
            <button
              className={` ${projectStyles['button']} ${projectStyles['button-primary']} `}
            >
              Get started
            </button>
          </div>
          <div
            className={` ${styles['BurgerMenu']} ${projectStyles['navbar-burger-menu']} `}
          >
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={` ${projectStyles['hero-container']} ${projectStyles['section-container']} `}
      >
        <div
          className={` ${styles['max-width1']} ${projectStyles['max-width']} `}
        >
          <div className={styles['Content']}>
            <span
              className={` ${styles['text04']} ${projectStyles['before-Heading']} `}
            >
              up-start finance system
            </span>
            <h1 className={styles['text05']}>
              <span className={styles['text06']}>
                Unlock the next generation banking
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className={styles['text07']}>experience</span>
            </h1>
            <span className={styles['text08']}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className={styles['container01']}>
              <button
                className={` ${projectStyles['button']} ${projectStyles['button-gradient']} `}
              >
                Get started
              </button>
              <button
                className={` ${projectStyles['button']} ${projectStyles['button-transparent']} `}
              >
                Log in
              </button>
            </div>
          </div>
          <div className={styles['Image1']}>
            <img
              alt="image"
              src="/playground_assets/hero-600w.png"
              className={styles['hero-image']}
            />
            <img
              alt="image"
              src="/playground_assets/union-400w.png"
              className={styles['graphic-top']}
            />
            <img
              alt="image"
              src="/playground_assets/group%2018-1200w.png"
              className={styles['image2']}
            />
          </div>
        </div>
      </div>
      <div className={projectStyles['section-container']}>
        <div
          className={` ${styles['max-width2']} ${projectStyles['max-width']} `}
        >
          <div className={styles['Image3']}>
            <img
              alt="image"
              src="/playground_assets/group%2020-1200w.png"
              className={styles['hero-image1']}
            />
          </div>
          <div className={styles['Content1']}>
            <span
              className={` ${styles['text09']} ${projectStyles['before-Heading']} `}
            >
              how it works
            </span>
            <h1 className={styles['text10']}>
              <span className={styles['text11']}>
                Pay and get paid
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className={styles['text12']}>
                faster
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className={styles['text13']}>than ever.</span>
              <span className={styles['text14']}></span>
            </h1>
            <span className={styles['text15']}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className={styles['container02']}>
              <button
                className={` ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['bg-transparent']} `}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${styles['Section1']} ${projectStyles['section-container']} `}
      >
        <div
          className={` ${styles['max-width3']} ${projectStyles['max-width']} `}
        >
          <div className={styles['Content2']}>
            <span
              className={` ${styles['text16']} ${projectStyles['before-Heading']} `}
            >
              save money
            </span>
            <h1 className={styles['text17']}>
              <span className={styles['text18']}>Earn cashback</span>
              <br></br>
              <span className={styles['text20']}>
                from your favorite brands
              </span>
            </h1>
            <span className={styles['text21']}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className={styles['container03']}>
              <button
                className={` ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['bg-transparent']} `}
              >
                See how
              </button>
            </div>
          </div>
          <div className={styles['Image4']}>
            <img
              alt="image"
              src="/playground_assets/group%2021-1200w.png"
              className={styles['hero-image2']}
            />
          </div>
        </div>
      </div>
      <div
        className={` ${styles['Section2']} ${projectStyles['section-container']} `}
      >
        <div
          className={` ${styles['max-width4']} ${projectStyles['max-width']} `}
        >
          <div className={styles['Image5']}>
            <img
              alt="image"
              src="/playground_assets/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-1200w.png"
              className={styles['hero-image3']}
            />
          </div>
          <div className={styles['Content3']}>
            <span
              className={` ${styles['text22']} ${projectStyles['before-Heading']} `}
            >
              get started
            </span>
            <h1 className={styles['text23']}>Open your account today</h1>
            <div className={styles['Step']}>
              <div className={styles['Number']}>
                <span className={styles['text24']}>1</span>
              </div>
              <div className={styles['container04']}>
                <span className={styles['title']}>Download UpStart App</span>
                <span className={styles['text25']}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className={styles['Step1']}>
              <div className={styles['Number1']}>
                <span className={styles['text26']}>2</span>
              </div>
              <div className={styles['container05']}>
                <span className={styles['title1']}>
                  Create your free account
                </span>
                <span className={styles['text27']}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className={styles['Step2']}>
              <div className={styles['Number2']}>
                <span className={styles['text28']}>3</span>
              </div>
              <div className={styles['container06']}>
                <span className={styles['title2']}>
                  Link your existing credit cards
                </span>
                <span className={styles['text29']}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={projectStyles['section-container']}>
        <div
          className={` ${styles['max-width5']} ${projectStyles['max-width']} `}
        >
          <span
            className={` ${styles['text30']} ${projectStyles['before-Heading']} `}
          >
            get started
          </span>
          <h1 className={styles['text31']}>
            <span>No matter what you do,</span>
            <br></br>
            <span>UpStart will save you money</span>
          </h1>
          <div className={styles['cards-container']}>
            <Card rootClassName="rootClassName2"></Card>
            <Card text="Personal" rootClassName="rootClassName"></Card>
            <Card text="Family" rootClassName="rootClassName1"></Card>
          </div>
        </div>
      </div>
      <div
        className={` ${styles['Section4']} ${projectStyles['section-container']} `}
      >
        <div
          className={` ${styles['max-width6']} ${projectStyles['max-width']} `}
        >
          <div className={styles['FAQ']}>
            <div className={styles['Questions']}>
              <span
                className={` ${styles['text34']} ${projectStyles['before-Heading']} `}
              >
                faq
              </span>
              <h1 className={styles['text35']}>
                <span className={styles['text36']}>
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className={styles['text38']}>Questions</span>
              </h1>
              <div data-role="Accordion" className={projectStyles['question']}>
                <div data-type="accordion-header" className={styles['Trigger']}>
                  <span className={styles['text39']}>
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div
                  data-type="accordion-content"
                  className={projectStyles['question-content']}
                >
                  <span className={styles['text40']}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className={projectStyles['question']}>
                <div
                  data-type="accordion-header"
                  className={styles['Trigger1']}
                >
                  <span className={styles['text41']}>
                    Do you operate in United Stated?
                  </span>
                  <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div
                  data-type="accordion-content"
                  className={projectStyles['question-content']}
                >
                  <span className={styles['text42']}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className={projectStyles['question']}>
                <div
                  data-type="accordion-header"
                  className={styles['Trigger2']}
                >
                  <span className={styles['text43']}>
                    Is this a globally available bank?
                  </span>
                  <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div
                  data-type="accordion-content"
                  className={projectStyles['question-content']}
                >
                  <span className={styles['text44']}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className={projectStyles['question']}>
                <div
                  data-type="accordion-header"
                  className={styles['Trigger3']}
                >
                  <span className={styles['text45']}>
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div
                  data-type="accordion-content"
                  className={projectStyles['question-content']}
                >
                  <span className={styles['text46']}>
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
              className={styles['image6']}
            />
          </div>
          <div className={styles['Banner']}>
            <span
              className={` ${styles['text47']} ${projectStyles['before-Heading']} `}
            >
              get started
            </span>
            <h1 className={styles['text48']}>
              <span>Push your finances to</span>
              <br></br>
              <span></span>
              <span></span>
              <span> the next level.</span>
            </h1>
            <span className={styles['text54']}>
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
            <div className={styles['btns']}>
              <button
                className={` ${styles['button6']} ${projectStyles['button']} ${projectStyles['button-transparent']} `}
              >
                See all plans
              </button>
              <button
                className={` ${styles['button7']} ${projectStyles['button']} ${projectStyles['button-gradient']} `}
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles['Footer']}>
        <div className={styles['LinksContainer']}>
          <div className={styles['Container07']}>
            <div className={projectStyles['footer-column']}>
              <span className={styles['text58']}>Product</span>
              <span className={styles['text59']}>How it works</span>
              <span className={styles['text60']}>Features</span>
              <span className={styles['text61']}>Pricing</span>
              <span className={styles['text62']}>Blog</span>
              <span>FAQ</span>
            </div>
            <div className={projectStyles['footer-column']}>
              <span className={styles['text64']}>App</span>
              <span className={styles['text65']}>Download iOS app</span>
              <span className={styles['text66']}>Download Android app</span>
              <span className={styles['text67']}>Log in to Portal</span>
              <span className={styles['text68']}>Administrative</span>
              <span>Legal</span>
            </div>
            <div className={projectStyles['footer-column']}>
              <span className={styles['text70']}>Company</span>
              <span className={styles['text71']}>About us</span>
              <span className={styles['text72']}>Culture</span>
              <span className={styles['text73']}>Code of conduct</span>
              <span className={styles['text74']}>Careers</span>
              <span className={styles['text75']}>News</span>
              <span>Contact</span>
            </div>
            <div className={projectStyles['footer-column']}>
              <span className={styles['text77']}>Invest</span>
              <span className={styles['text78']}>Commodity</span>
              <span className={styles['text79']}>Savings</span>
              <span className={styles['text80']}>
                <span>Taxes and fees</span>
                <br></br>
                <span></span>
              </span>
              <span className={styles['text83']}>
                <span>Currency exchange</span>
              </span>
              <span>Community</span>
            </div>
            <div className={projectStyles['footer-column']}>
              <span className={styles['text86']}>Security</span>
              <span className={styles['text87']}>Security status</span>
              <span className={styles['text88']}>ISO</span>
              <span className={styles['text89']}>System status</span>
              <span>Customer Help</span>
            </div>
            <div className={projectStyles['footer-column']}>
              <span className={styles['text91']}>Follow</span>
              <span className={styles['text92']}>Instagram</span>
              <span className={styles['text93']}>Twitter</span>
              <span className={styles['text94']}>Facebook</span>
              <span className={styles['text95']}>Tik Tok</span>
              <span className={styles['text96']}>Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
