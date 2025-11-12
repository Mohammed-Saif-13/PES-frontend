// src/constants/homePillars.js
// Create this file in src/constants/

import { Zap, Lock, Users, Wrench } from "lucide-react";

export const PILLARS = [
  {
    icon: Zap,
    title: "Master Next-Gen Skills",
    description:
      "Specialized, GxP-compliant training in Pharma 4.0, AI in Drug Discovery, and Advanced Regulatory Affairs.",
    bgColor: "bg-indigo-500",
    iconColor: "text-indigo-500",
    delay: 0.1,
  },
  {
    icon: Lock,
    title: "Unlock Exclusive Insights",
    description:
      "Get real-time, curated industry news, regulatory alerts, and market analysis driven by AI.",
    bgColor: "bg-green-500",
    iconColor: "text-green-500",
    delay: 0.3,
  },
  {
    icon: Users,
    title: "Connect & Consult",
    description:
      "Gain direct access to career mentors, and consultation services for operational efficiency.",
    bgColor: "bg-red-500",
    iconColor: "text-red-500",
    delay: 0.5,
  },
  {
    icon: Wrench,
    title: "New Pillar: Operational Excellence",
    description:
      "Engage our network of veteran Project Managers and Subject Matter Experts (SMEs) for targeted short-term projects and regulatory remediation.",
    bgColor: "bg-yellow-500",
    iconColor: "text-yellow-500",
    delay: 0.7,
  },
];
