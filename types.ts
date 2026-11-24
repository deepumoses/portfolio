/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  filterKey: 'ai' | 'enterprise' | 'ecommerce';
  image: string;
  year: string;
  description: string;
  summary: string;
  stack: string[];
  outcomes: string[];
}

export enum Section {
  HERO = 'hero',
  SYSTEMS = 'systems',
  WORK = 'work',
  EXPERIENCE = 'experience',
  SKILLS = 'skills',
  CONTACT = 'contact',
}
