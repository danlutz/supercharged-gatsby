import * as React from 'react'
import { CloudinaryContext } from 'cloudinary-react'

import { SEODefaults } from '../components/SEO'
import Footer from '../components/Footer'

import '../styles/global.scss'

const { GATSBY_CLOUDINARY_CLOUD_NAME } = process.env

const Layout = ({ children }: Props) => {
  return (
    <CloudinaryContext cloudName={GATSBY_CLOUDINARY_CLOUD_NAME}>
      <SEODefaults />
      <main>{children}</main>
      <Footer />
    </CloudinaryContext>
  )
}

interface Props {
  children: React.ReactChildren | string
}

export default Layout
