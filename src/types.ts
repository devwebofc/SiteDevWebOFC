import { ReactNode } from "react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  url?: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}
