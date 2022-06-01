import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Piece - The People's Property Platform</title>
        <meta
          name="description"
          content="Piece is a social network for sustainable affordable housing. Earn pieces and points by building better shelter for all."
        />
        <meta
          property="og:title"
          content="About - Piece - The People's Property Platform"
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
    </div>
  )
}

export default About
