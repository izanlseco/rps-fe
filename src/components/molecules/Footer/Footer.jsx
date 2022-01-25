import React from 'react'

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

library.add(faAt, faLinkedinIn, faGithub)

const Footer = () => {
  return (
    <footer className="footer mt-6">
      <div className="content has-text-centered">
        <div className="columns">
          <div className="column">With <span role="img" aria-label="heart emoji">❤️</span> by Izan López Seco @ 2022</div>
        </div>
        <div className="columns is-1i is-mobile is-centered">
          <div className="column is-narrow">
            <a
              href="https://github.com/izanlseco"
              title="Access to GitHub"
              aria-label="Author's github"
              rel="noopener noreferrer"
              target="_blank"
              className="icon"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <div className="column is-narrow">
            <a
              href="https://www.linkedin.com/in/izanlopezseco/"
              title="Access to LinkedIN"
              aria-label="LinkedIN profile"
              rel="noopener noreferrer"
              target="_blank"
              className="icon"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
          </div>
          <div className="column is-narrow">
            <a
              href="mailto:IzanLS09@gmail.com"
              title="Send an e-mail"
              aria-label="Contact via mail"
              rel="noopener noreferrer"
              target="_blank"
              className="icon"
            >
              <FontAwesomeIcon icon={faAt} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer