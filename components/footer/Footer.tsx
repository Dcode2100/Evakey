"use client";
import React from "react";
import Image from "next/image";
import { FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const Footer: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <footer ref={ref} className={`bg-gray-100 text-gray-700 section-animate ${isVisible ? 'animate' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8">
                <Image
                  src="/evakey/evakey_logo.svg"
                  alt="EVAKEY Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-primary">EVAKEY</span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-md">
              Your trusted partner for custom promotional products, keychains, and branded merchandise. We help businesses create lasting impressions through quality custom items.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram className="text-sm sm:text-base" />
              </a>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">My Account</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base hover:text-primary transition-colors">Sign in</a></li>
              <li><a href="#" className="text-sm sm:text-base hover:text-primary transition-colors">Register</a></li>
              <li><a href="#" className="text-sm sm:text-base hover:text-primary transition-colors">Order status</a></li>
              <li><a href="#" className="text-sm sm:text-base hover:text-primary transition-colors">Wishlist</a></li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">Shop</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base hover:text-primary transition-colors">All Products</a></li>
              <li><a href="#" className="text-sm sm:text-base hover:text-primary transition-colors">Keychains</a></li>
              <li><a href="#" className="text-sm sm:text-base hover:text-primary transition-colors">Promotional Items</a></li>
              <li><a href="#" className="text-sm sm:text-base hover:text-primary transition-colors">Custom Merchandise</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-primary text-sm sm:text-base" />
                  <span className="text-sm sm:text-base">+91 81047 80513</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-primary text-sm sm:text-base" />
                  <span className="text-sm sm:text-base">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">Legal Stuff</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="text-sm sm:text-base hover:text-primary transition-colors">Shipping & Delivery</a></li>
                <li><a href="#" className="text-sm sm:text-base hover:text-primary transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-sm sm:text-base hover:text-primary transition-colors">Privacy & Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-gray-600">
            Copyright ©2024 EVAKEY. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

