// src/constants/academyStages.js

import {
  Award,
  UserCheck,
  Zap,
  TrendingUp,
  Shield,
  Layers,
} from "lucide-react";

export const ACADEMY_STAGES = [
  {
    icon: Layers,
    title: "1. Foundational Career Stage",
    subtitle: "Beginners & Recent Graduates",
    description:
      "Master the fundamental GxP compliance, regulatory standards, and essential process management skills needed to enter the industry.",
    color: "border-blue-500",
    details: [
      "Basic GxP/Compliance & Audits",
      "Process Validation (VMPs, Protocols)",
      "Regulatory Filing Basics (CTD/eCTD)",
      "Introduction to Quality Management Systems (QMS)",
    ],
  },
  {
    icon: UserCheck,
    title: "2. Core Career Stage",
    subtitle: "Managers & Senior Professionals",
    description:
      "Focus on specialized skills in AI in Drug Discovery, Pharma 4.0, advanced regulatory affairs, and critical project management.",
    color: "border-indigo-500",
    details: [
      "AI in Drug Discovery (Gene Therapy)",
      "Pharma 4.0 & Digital Tools",
      "Advanced Regulatory Strategy (USFDA/EMA)",
      "Data Integrity & Cloud Compliance",
      "Continuous Processing & Validation",
    ],
  },
  {
    icon: TrendingUp,
    title: "3. Strategic Leadership Stage",
    subtitle: "Executives & Directors",
    description:
      "Develop executive-level strategies covering AI roadmaps, ethical compliance, investment modeling, and global data privacy.",
    color: "border-green-500",
    details: [
      "AI Strategy & Roadmap Development",
      "Ethical AI & Bias Mitigation",
      "Digital Transformation Leadership",
      "Investment & ROI Modeling for AI/Robotics",
      "Regulatory Strategy for AI/SaMD",
      "Data Privacy & Global Compliance",
    ],
  },
];
