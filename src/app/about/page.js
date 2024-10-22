'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to our theater! We are dedicated to bringing captivating performances to life, 
            creating unforgettable experiences for our audiences. From timeless classics to contemporary masterpieces, 
            our passion lies in the art of storytelling through the magic of live theater.
        </p>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center mb-16 space-y-8 md:space-y-0 md:space-x-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://i.pinimg.com/originals/e4/af/44/e4af4458bc0e51f0765e7a64a640a6fe.jpg"
            width={600}
            height={400}
            alt="About Image"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-4">
                At the heart of our theater lies a deep passion for the performing arts. We are a collective of creative minds directors, actors, designers, and storytellers united by our commitment to bringing powerful narratives to life on stage.
            </p>
            <p className="text-lg text-gray-600">
                Our productions span a wide array of genres, from classic dramas and musicals to experimental performances, all designed to inspire and entertain. Our mission is to create an inclusive space where audiences and performers alike can experience the transformative power of live theater.
            </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <Image
              src="https://avatars.githubusercontent.com/u/119391570?v=4"
              width={200}
              height={200}
              alt="Team Member 1"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Charles Adu Boakye</h3>
            <p className="text-gray-600">Software Developer</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQFKV5VenCADBQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728661968501?e=1735171200&v=beta&t=DXocC179nPzZLFVMR3GJgInpmnMb4bdktV9Pw1kaUuQ"
              width={200}
              height={200}
              alt="Team Member 2"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Ayesha Imam</h3>
            <p className="text-gray-600">Project Supporter</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <Image
              src="https://source.unsplash.com/random/200x200?sig=2"
              width={200}
              height={200}
              alt="Team Member 3"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Mark Johnson</h3>
            <p className="text-gray-600">CTO</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-blue-500 text-white rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-lg mb-8">
          Want to know more about our work? Get in touch with us and lets start a conversation!
        </p>
        <a href="/contact" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105">
          Contact Us
        </a>
      </section>
    </div>
  );
}
