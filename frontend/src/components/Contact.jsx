import React, { useState } from 'react'
import axios from 'axios'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact/`, formData)
      if (response.status === 200) {
        setStatus({ type: 'success', message: 'Message sent successfully!' })
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus({ type: '', message: '' }), 5000)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Have You Any Question?</h3>
        <h4 className="contact-sub-tittle padd-15">I'M AT YOUR SERVICES</h4>
        <div className="row">
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-phone"></i></div>
            <h4>Call Me</h4>
            <p>+91 9971431645</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fas fa-map-marker-alt abc"></i></div>
            <h4>Gamma</h4>
            <p>Greater Noida</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-envelope"></i></div>
            <h4>Email</h4>
            <a href="mailto:himanshudhiman0004@gmail.com">himanshudhiman0004@gmail.com</a>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-envelope"></i></div>
            <h4>Email</h4>
            <a href="https://github.com/himanshudhi-004">Github Link</a>
          </div>
        </div>
        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-tittle padd-15">I'M VERY RESPONSIVE TO MESSAGE</h4>
        
        {status.message && (
          <div className={`alert alert-${status.type === 'success' ? 'success' : 'danger'} text-center mb-3`} style={{ maxWidth: '600px', margin: '0 auto 20px auto' }}>
            {status.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input type="text" name="subject" className="form-control" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea name="message" className="form-control" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact