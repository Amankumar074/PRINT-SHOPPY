import React from 'react'

const AboutUs = () => {
  return (
     <div className="max-w-5xl mx-auto px-4 py-10 text-gray-700">
      
      {/* Title */}
      <h2 className="text-center text-2xl font-bold text-orange-500 mb-8">
        ABOUT US
      </h2>

      {/* Section */}
      <section className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">
          WELCOME TO OUR ONLINE DESIGN AND PRINT PLATFORM!
        </h3>
        <p className="leading-7 text-sm">
          We operate as a modern online print platform, delivering high-quality
          print solutions with ease and reliability. Our goal is to transform
          your ideas into premium print products.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">OUR VISION:</h3>
        <p className="leading-7 text-sm">
          To be globally recognized for creativity, innovation, and
          uncompromising quality in printing while maintaining affordability
          and customer satisfaction.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">
          MISSION AND PURPOSE OF EVOLUTION:
        </h3>
        <p className="leading-7 text-sm">
          Our mission is to redefine the print shopping experience by combining
          digital convenience with world-class print quality, making premium
          printing accessible to everyone.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">WHAT WE OFFER?</h3>
        <p className="leading-7 text-sm">
          We provide high-quality, customizable print products for individuals
          and businesses—ensuring accuracy, durability, and fast delivery.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">OUR EXPERTISE:</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Advanced printing technology</li>
          <li>Custom design & personalization</li>
          <li>Fast and reliable delivery</li>
          <li>Quality assurance and support</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">
          CREATIVE PRINTING DATABASE:
        </h3>
        <p className="leading-7 text-sm">
          Our platform integrates innovative tools and creative resources to
          ensure consistent, high-quality output for all print products.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">OUR TEAM:</h3>
        <p className="leading-7 text-sm">
          A dedicated team of professionals focused on innovation, precision,
          and customer satisfaction from concept to delivery.
        </p>
      </section>

      {/* Contact */}
      <section className="border border-gray-200 rounded-md p-4 mt-8 bg-gray-50">
        <h3 className="font-semibold text-gray-800 mb-3">
          CONTACT INFORMATION:
        </h3>
        <p className="text-sm">
          <strong>Phone:</strong> 999-999-999
        </p>
        <p className="text-sm">
          <strong>Email:</strong> support@printshoppy.com
        </p>
        <p className="text-sm">
          <strong>Address:</strong> jaipur, Rajasthan, India
        </p>
      </section>

      {/* Footer Quote */}
      <div className="text-center mt-10 text-orange-500 text-sm font-medium">
        Create With Passion, Print With Perfection.
        <div className="text-xs mt-1">— Team PrintShoppy</div>
      </div>

    </div>
  
  )
}

export default AboutUs


