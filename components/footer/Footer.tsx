"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaDribbble, FaTwitter, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const Footer: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <footer ref={ref} className={`bg-gray-100 text-gray-700 section-animate ${isVisible ? 'animate' : ''}`}>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded"></div>
              <span className="text-2xl font-bold text-primary">EVAKEY</span>
            </div>
            <p className="text-gray-600 max-w-md">
              Your trusted partner for custom promotional products, keychains, and branded merchandise. We help businesses create lasting impressions through quality custom items.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaDribbble />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">My Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Sign in</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Register</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Order status</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wishlist</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sizing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact us</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Keychains</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Promotional Items</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Merchandise</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-primary" />
                  <span>+91 81047 80513</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Legal Stuff</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary transition-colors">Shipping & Delivery</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy & Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            Copyright ©2024 EVAKEY. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

