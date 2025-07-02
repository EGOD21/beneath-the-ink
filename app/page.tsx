'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const megaMenuCategories = [
  {
    title: 'Business Cards',
    featured: true,
    subcategories: [
      'Standard Business Cards',
      'Premium Business Cards',
      'Specialty Finishes',
      'Eco-Friendly Options'
    ]
  },
  {
    title: 'Marketing Materials',
    subcategories: [
      'Brochures',
      'Flyers',
      'Postcards',
      'Door Hangers',
      'Rack Cards'
    ]
  },
  {
    title: 'Signs & Banners',
    subcategories: [
      'Vinyl Banners',
      'Yard Signs',
      'Retractable Banners',
      'A-Frame Signs',
      'Window Clings'
    ]
  },
  {
    title: 'Stickers & Labels',
    subcategories: [
      'Custom Stickers',
      'Product Labels',
      'Bumper Stickers',
      'Die Cut Stickers',
      'Roll Labels'
    ]
  },
  {
    title: 'Invitations & Stationery',
    subcategories: [
      'Wedding Invitations',
      'Business Invitations',
      'Letterhead',
      'Envelopes',
      'Thank You Cards'
    ]
  }
]

const featuredProducts = [
  {
    title: 'Business Cards',
    subtitle: 'Starting at $19.99',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    title: 'Flyers',
    subtitle: 'Starting at $29.99',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    title: 'Banners',
    subtitle: 'Starting at $49.99',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    title: 'Stickers',
    subtitle: 'Starting at $14.99',
    image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    popular: true
  }
]

const quickOrder = [
  { name: 'Business Cards', link: '#' },
  { name: 'Flyers', link: '#' },
  { name: 'Brochures', link: '#' },
  { name: 'Banners', link: '#' },
  { name: 'Postcards', link: '#' },
  { name: 'Stickers', link: '#' }
]

export default function BeneathTheInk() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-purple-700 text-white text-sm py-2">
        <div className="container-max px-4 flex justify-between items-center">
          <div>
            📞 Need Help? Call (555) 123-4567 | 🎁 Free Sample Kit Available
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-purple-200">Account</a>
            <a href="#" className="hover:text-purple-200">Help</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container-max px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="https://godwinsolutions.cc" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BTI</span>
                </div>
                <span className="text-2xl font-bold text-purple-700">Beneath The Ink</span>
              </a>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-purple-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Login</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-purple-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L8 7h12m-8 6v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H6a2 2 0 00-2-2v6z" />
                </svg>
                <span className="hidden md:inline">Cart</span>
                <span className="bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Navigation */}
        <nav className="bg-gray-50 border-t border-gray-200">
          <div className="container-max px-4">
            <div className="flex items-center space-x-8 py-3">
              <button
                className="flex items-center space-x-1 text-purple-700 font-semibold hover:text-purple-800"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>All Products</span>
              </button>
              
              {megaMenuCategories.slice(0, 4).map((category) => (
                <button
                  key={category.title}
                  className="text-gray-700 hover:text-purple-700 font-medium hidden lg:block"
                  onMouseEnter={() => setActiveCategory(category.title)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {category.title}
                </button>
              ))}
              
              <a href="#quote" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 font-medium">
                Get Quote
              </a>
            </div>
          </div>

          {/* Mega Menu Dropdown */}
          {isMenuOpen && (
            <div
              className="absolute left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-40"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <div className="container-max px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  {megaMenuCategories.map((category) => (
                    <div key={category.title}>
                      <h3 className="font-bold text-purple-700 mb-3 text-lg">
                        {category.title}
                        {category.featured && <span className="ml-2 text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded">POPULAR</span>}
                      </h3>
                      <ul className="space-y-2">
                        {category.subcategories.map((sub) => (
                          <li key={sub}>
                            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">{sub}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container-max px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Professional Printing
                <span className="text-yellow-400 block">Made Simple</span>
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                High-quality printing with competitive prices and fast turnaround. 
                From business cards to large format banners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#products" className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-center">
                  Shop Now
                </a>
                <a href="#quote" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-700 transition-colors text-center">
                  Get Free Quote
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional Printing Services"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Order Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-max px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Quick Order</h2>
            <p className="text-gray-600">Jump straight to our most popular products</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {quickOrder.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="bg-white border border-gray-200 px-6 py-3 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors font-medium text-gray-700 hover:text-purple-700"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16" id="products">
        <div className="container-max px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular printing services with competitive pricing and superior quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  {product.popular && (
                    <span className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-purple-600 font-semibold text-lg mb-4">{product.subtitle}</p>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-max px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Why Choose Beneath The Ink?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                🎨
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Design Services</h3>
              <p className="text-gray-600">Professional design help available for all projects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Quick production times without sacrificing quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                💎
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">High-quality materials and printing processes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Best value for professional printing services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white" id="quote">
        <div className="container-max px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Get a free quote for your printing project today. Our team is ready to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Jeremy@GodwinSolutions.cc?subject=Printing Quote Request"
                className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-lg"
              >
                Get Free Quote
              </a>
              <a
                href="tel:555-123-4567"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-700 transition-colors text-lg"
              >
                Call (555) 123-4567
              </a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-purple-200 mb-2">
                🎁 <strong>Free Sample Kit Available</strong>
              </p>
              <p className="text-sm text-purple-300">
                Email us with "Sample Kit" in the subject line to request samples
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container-max px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">BTI</span>
                </div>
                <span className="text-xl font-bold">Beneath The Ink</span>
              </div>
              <p className="text-gray-400">
                Professional printing services with competitive pricing and exceptional quality.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Business Cards</a></li>
                <li><a href="#" className="hover:text-white">Flyers</a></li>
                <li><a href="#" className="hover:text-white">Banners</a></li>
                <li><a href="#" className="hover:text-white">Stickers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Sample Kit</a></li>
                <li><a href="#" className="hover:text-white">Design Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <div className="text-gray-400 space-y-2">
                <p>📞 (555) 123-4567</p>
                <p>📧 Jeremy@GodwinSolutions.cc</p>
                <a href="https://godwinsolutions.cc" className="text-purple-400 hover:text-purple-300">
                  Back to Main Site
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Beneath The Ink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}