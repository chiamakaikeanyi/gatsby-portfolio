import React from 'react'
import Layout from '../components/Layout'
import SocialLinks from '../components/SocialLinks'
import './index.css'

const IndexPage = () => (
  <Layout>
    <section className='wrapper'>
      <div className='description'>
        <header className='header'>
          <h1>Software Engineer</h1>
        </header>

        <main>
          <div className='about'>
            <p>Hi, I'm Chiamaka. I'm a Software Engineer based in Lagos, Nigeria. <br />I focus on Front-end engineering at <a href='https://www.konga.com?k_id=1042900' target='_blank' rel="noopener noreferrer">Konga Online Shopping</a> where I collaborate with awesome engineers to build amazing products for a huge customer base.</p>

            <p>In addition to my development work, I <em>write</em> articles on <a href='https://medium.com/fbdevclagos' target='_blank' rel='noopener noreferrer'>Facebook Developer Circles Lagos</a> and <a href='https://medium.freecodecamp.org/@chiamakaikeanyi' target='_blank' rel='noopener noreferrer'>freeCodeCamp</a>. Feel free to reach out.
          </p>
          </div>
          <SocialLinks />
        </main>
      </div>
    </section>
  </Layout>
)

export default IndexPage
