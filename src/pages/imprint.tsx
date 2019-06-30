import * as React from 'react'
import { Container } from 'reactstrap'

import SEO from '../components/SEO'

import styles from './imprint.module.scss'

const title = 'Imprint | Supercharged Gatsby'
const description = 'Super interesting legal information'

const ImprintPage = () => {
  return (
    <div className={styles.wrapper}>
      <SEO title={title} description={description} />
      <Container>
        <h1>Imprint</h1>
      </Container>
    </div>
  )
}

export default ImprintPage
