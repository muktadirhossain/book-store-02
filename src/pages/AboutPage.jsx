import React from 'react'
import DashboardTitle from '../components/DashboardTitle'

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">About TheBuchhandlung</h1>
    <p className="text-lg text-gray-600 leading-relaxed mb-4">
      Welcome to <span className="font-semibold text-gray-800">TheBuchhandlung</span>, a revolutionary platform designed to bring Germany’s local and international book stores into the digital age. 
      This project aims to support independently owned bookstores in creating a robust online presence, enhancing customer access to diverse collections, and bridging the gap between offline and online retail experiences.
    </p>
    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
    <p className="text-lg text-gray-600 leading-relaxed mb-4">
      The mission of TheBuchhandlung is to empower local book stores across Germany by offering them a seamless platform to:
    </p>
    <ul className="list-disc pl-6 text-lg text-gray-600 mb-4">
      <li>Advertise their unique catalogues, including German and international books.</li>
      <li>Provide customers the convenience of online purchases and secure payments.</li>
      <li>Offer flexible fulfillment options like shipping or in-store pickup.</li>
    </ul>
    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why This Platform Matters</h2>
    <p className="text-lg text-gray-600 leading-relaxed mb-4">
      Many independent bookstores face challenges in reaching a wider audience due to limited digital resources. 
      By joining TheBuchhandlung, bookstores can:
    </p>
    <ul className="list-disc pl-6 text-lg text-gray-600 mb-4">
      <li>Expand their customer base to include locals, tourists, and international readers.</li>
      <li>Leverage modern technology to simplify inventory management and transactions.</li>
      <li>Adapt to evolving customer preferences while preserving their local charm.</li>
    </ul>
    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Commitment to Excellence</h2>
    <p className="text-lg text-gray-600 leading-relaxed">
      This platform was built with a strong commitment to innovation, accessibility, and user-friendly design. 
      Every feature is tailored to meet the unique needs of local bookstores and their customers, ensuring that books continue to bring people together across Germany and beyond.
    </p>
  </div>
  )
}

export default AboutPage