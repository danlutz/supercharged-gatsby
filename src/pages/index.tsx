import * as React from 'react'
import { Container } from 'reactstrap'

import styles from './index.module.scss'

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h1>Supercharged Gatsby</h1>
      </Container>
    </div>
  )
}

export default HomePage
