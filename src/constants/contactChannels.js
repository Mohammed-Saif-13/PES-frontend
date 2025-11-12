// src/constants/contactChannels.js

import { Mail, Headset, Briefcase, Users } from "lucide-react";

export const CONTACT_CHANNELS = [
  {
    icon: Mail,
    title: "General Inquiries & Training",
    email: "contact@pharmaemower.com",
    description:
      "For all initial questions regarding courses, partnerships, and general information.",
    color: "text-indigo-600",
  },
  {
    icon: Headset,
    title: "Support & Login Issues",
    email: "support@pharmaempower.com", 
    description:
      "Technical support for the Academy, Network, or website access issues.",
    color: "text-red-600",
  },
  {
    icon: Users,
    title: "Career Counseling & Mentorship",
    email: "counseling@pharmaempower.com",
    description:
      "Book a private session to strategize your career move or seek personalized guidance.",
    color: "text-green-600",
  },
];
