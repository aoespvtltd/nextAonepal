"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import PageBar from "@/components/Header/PageBar";

const MapLocation = dynamic(() => import("@/components/Contacts/MapLocation"), {
  ssr: false, // Disable server-side rendering for Map
});
const MessageForm = dynamic(() => import("@/components/Contacts/MessageForm"));

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Contacts() {
  return (
    <div>
      <PageBar leftText="Contact Us" />

      <motion.div
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.div className="mb-12 text-center" variants={fadeInUp}>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Get in touch with us. We're here to help and answer any questions you might have.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div className="flex flex-col gap-8" variants={staggerChildren}>
            <motion.div className="rounded-2xl bg-white p-8 shadow-lg" variants={fadeInUp}>
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">Contact Information</h2>
              <motion.div className="space-y-6" variants={staggerChildren}>
                <motion.div className="flex items-start" variants={fadeInUp}>
                  <MapPin className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium text-gray-900">Our Location</h3>
                    <p className="mt-1 text-gray-600">National Innovation Center, Kirtipur, Nepal</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" variants={fadeInUp}>
                  <Phone className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone Number</h3>
                    <p className="mt-1 text-gray-600">+977-1-4470000</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" variants={fadeInUp}>
                  <Mail className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email Address</h3>
                    <p className="mt-1 text-gray-600">alphaomegaengsol@gmail.com</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Map */}
            <motion.div className="overflow-hidden rounded-2xl shadow-lg" variants={fadeInUp}>
              <Suspense fallback={<div>Loading map...</div>}>
                <MapLocation />
              </Suspense>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="rounded-2xl bg-white p-8 shadow-lg" variants={fadeInUp}>
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">Send Us a Message</h2>
            <Suspense fallback={<div>Loading form...</div>}>
              <MessageForm />
            </Suspense>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
