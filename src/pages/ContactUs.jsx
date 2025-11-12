// src/pages/ContactUs.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT_CHANNELS } from '@/constants/contactChannels';

const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/**
 * Contact Us Page: Features inquiry channels and a detailed contact form.
 */
const ContactUs = () => {
    return (
        <div className="py-12 md:py-16">
            {/* Wrapper */}
            <div className="container mx-auto px-4">

                {/* Header & Ready to Connect Message */}
                <motion.header
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariant}
                    className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
                >
                    <Mail className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Ready to Connect: How Can We Help?
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-semibold">
                        We’re here to support your career growth and your organization's operational needs.
                    </p>
                </motion.header>

                {/* Main Content: Channels & Form (Desktop 2-column layout) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

                    {/* A. Inquiry Channels (2/3 of the page on desktop) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={sectionVariant}
                        viewport={{ once: true, amount: 0.3 }}
                        className="lg:col-span-1 bg-slate-50 p-6 md:p-8 rounded-xl shadow-lg border border-slate-200"
                    >
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-3">
                            Inquiry Channels (Updated)
                        </h2>
                        <div className="space-y-6">
                            {CONTACT_CHANNELS.map((channel, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <channel.icon className={`w-6 h-6 flex-shrink-0 ${channel.color} mt-1`} />
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">{channel.title}</h3>
                                        <p className="text-sm text-slate-600">{channel.description}</p>
                                        <a href={`mailto:${channel.email}`} className={`text-sm font-medium ${channel.color.replace('text', 'hover:text')} transition-colors block mt-1`}>
                                            {channel.email}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-4 border-t">
                            <p className="text-sm text-slate-500 flex items-center">
                                <Check className="w-4 h-4 text-indigo-500 mr-2" />
                                We aim to respond to all inquiries within 24-48 hours.
                            </p>
                        </div>
                    </motion.div>

                    {/* B. Contact Form (1/3 of the page on desktop) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={sectionVariant}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="lg:col-span-2 p-6 md:p-8 rounded-xl shadow-2xl bg-white border-t-4 border-indigo-600"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                            Send Us a Message
                        </h2>

                        <form className="space-y-4">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Full Name" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" required />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                                <input type="email" id="email" name="email" placeholder="you@example.com" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" required />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="e.g., Inquiry about Pharma Academy" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" required />
                            </div>

                            {/* Optional Field: Organizational Need */}
                            <div>
                                <label htmlFor="orgNeed" className="block text-sm font-medium text-slate-700">
                                    Organizational Need (Optional)
                                </label>
                                <select id="orgNeed" name="orgNeed" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border bg-white">
                                    <option value="">Select your primary need (B2B)</option>
                                    <option value="regulatory_remediation">Regulatory Remediation</option>
                                    <option value="project_stabilization">Large-Scale Project Stabilization</option>
                                    <option value="talent_upskilling">Enterprise Talent Upskilling</option>
                                    <option value="alliance_management">Portfolio & Alliance Management</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="How can Pharma Empower Solutions assist you?" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" required></textarea>
                            </div>

                            {/* Submit Button (No scale animation) */}
                            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md mt-6">
                                <Send className="w-4 h-4 mr-2" />
                                Submit Inquiry
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;