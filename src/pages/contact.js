import React from "react"
import { navigate } from "gatsby"
import Recaptcha from "react-google-recaptcha"
import Layout from "../components/Layout"
import "../styles/contact.scss"

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your Netlify build environment variables. 
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  Note this demo is specifically for Recaptcha v2
  `)
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef()

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <div className="contact-form-container">
        <h2 className="form-title">Contact</h2>
        <div className="contact-form">
          <form
            name="contact-recaptcha"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-recaptcha="true"
            onSubmit={handleSubmit}
          >
            <noscript>
              <p>This form won’t work with Javascript disabled</p>
            </noscript>
            <p className="input-container">
              <label>Your name:</label>
              <input type="text" name="name" onChange={handleChange} />
            </p>
            <p className="input-container">
              <label>Your email:</label>
              <input type="email" name="email" onChange={handleChange} />
            </p>
            <p className="input-container">
              <label>Message:</label>
              <textarea name="message" onChange={handleChange} />
            </p>
            <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
            <p>
              <button className="send-button" type="submit">
                Send
              </button>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  )
}
