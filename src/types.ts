/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TheaterFormat {
  id: 'intimo' | 'medio' | 'completo';
  title: string;
  subtitle: string;
  capacity: string;
  recommendedSpace: string;
  description: string;
  features: string[];
  icon: string;
  badge: string;
  recommendedFor: string;
}

export interface PostShowWorkshop {
  id: 'tertulia' | 'masterclass' | 'inmersivo';
  title: string;
  duration: string;
  instructor: string;
  description: string;
  keyOutcomes: string[];
  icon: string;
  badge: string;
}

export interface AcademicPillar {
  id: string;
  number: string;
  title: string;
  verbs: string[];
  focus: string;
  description: string;
  curriculumBenefit: string;
  iconName: string;
}

export interface BookingFormState {
  schoolName: string;
  schoolType: 'publica' | 'privada' | 'charter' | 'universidad' | 'otra';
  cityState: string;
  contactName: string;
  contactRole: string;
  contactEmail: string;
  contactPhone: string;
  selectedFormatId: 'intimo' | 'medio' | 'completo';
  selectedWorkshopId: 'tertulia' | 'masterclass' | 'inmersivo' | 'none';
  preferredDate: string;
  estimatedAudience: number;
  gradeLevels: string[];
  specialRequirements: string;
}
