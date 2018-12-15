import React from "react"
import { LinkedIn, Github, Codepen, Hackerrank, Stackoverflow, Twitter, Medium, } from '../Icons'
import config from '../../config.js'

const SocialLinks = () => (
  <div className='socials'>
    {config.linkedIn &&
      <a className='icon-linkedin' href={config.github} target='_blank' rel="noopener noreferrer" title='LinkedIn' aria-label="LinkedIn"><LinkedIn /></a>}

    {config.github &&
      <a className='icon-github' href={config.github} target='_blank' rel="noopener noreferrer" title='GitHub' aria-label="Github"><Github /></a>}

    {config.codepen &&
      <a className='icon-codepen' href={config.codepen} target='_blank' rel="noopener noreferrer" title='CodePen' aria-label="Codepen"><Codepen /></a>}

    {config.hackerrank &&
      <a className='icon-hackerrank' href={config.hackerrank} target='_blank' rel="noopener noreferrer" title='HackerRank' aria-label="Hackerrank"><Hackerrank /></a>}

    {config.stackoverflow &&
      <a className='icon-stackoverflow' href={config.stackoverflow} target='_blank' rel="noopener noreferrer" title='Stackoverflow' aria-label="Stackoverflow"><Stackoverflow /></a>}

    {config.twitter &&
      <a className='icon-twitter' href={config.twitter} target='_blank' rel="noopener noreferrer" title='Twitter' aria-label="Twitter"><Twitter /></a>}

    {config.medium &&
      <a className='icon-medium' href={config.medium} target='_blank' rel="noopener noreferrer" title='Medium' aria-label="Medium"><Medium /></a>}
  </div>
)

export default SocialLinks
