'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Home,
  Archive,
  Trash2,
  Users,
  Mail,
  AlertTriangle,
  FileText,
  Wrench,
  Database,
  Settings,
  Search,
  Bell,
  Plus,
  ChevronRight,
  X,
  ChevronLeft,
  ChevronDown,
  Send,
  Inbox,
  Paperclip,
  MoreHorizontal,
  UserCircle2,
  Folder,
} from 'lucide-react';
import { navItems } from '@/lib/constants/navigation';

// ─── Data ─────────────────────────────────────────────────────────────────────


interface ChatMessage {
  id: number;
  sender: 'tenant' | 'manager';
  senderName: string;
  content: string;
  time: string;
  card?: { title: string; body: string[] };
}

interface MessageThread {
  id: number;
  firstName: string;
  lastName: string;
  building: string;
  unit: string;
  subject: string;
  thread: ChatMessage[];
}

const threads: MessageThread[] = [
  {
    id: 1,
    firstName: 'Mohammed',
    lastName: 'Al-Farsi',
    building: 'Tulip Building',
    unit: 'Unit 4A, Floor 4',
    subject: 'AC Unit Not Working - Unit 4A',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Mohammed Al-Farsi',
        content: 'Hello, I would like to report that the air conditioning unit in my apartment is not functioning properly. The unit is blowing warm air and making an unusual noise. Could you please arrange a technician visit?',
        time: '09:15 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Mohammed, thank you for reporting this. I have logged a maintenance request and assigned a certified HVAC technician. They will contact you within 24 hours to schedule a visit.',
        time: '09:15 AM',
        card: {
          title: 'HVAC Service Request',
          body: [
            'Ref: HVAC-0001',
            'Building: Tulip Building',
            'Issue: AC not cooling or unusual noise',
            'Priority: Standard',
            'Technician will call before visiting',
          ],
        },
      },
    ],
  },
  {
    id: 2,
    firstName: 'Ahmed',
    lastName: 'Hassan',
    building: 'Royal Building Dubai',
    unit: 'Unit 7B, Floor 7',
    subject: 'Lease Renewal Request for Unit 7B',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Ahmed Hassan',
        content: 'Good morning, I would like to initiate the lease renewal process for my unit. My contract expires next month and I am interested in renewing for another year under the same terms.',
        time: '02:30 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hello Ahmed, great to hear you would like to continue. I have prepared the renewal package and will send it to you via HausBuddy and email within 24 hours. Please sign within 7 days.',
        time: '02:30 PM',
        card: {
          title: 'Lease Renewal Package',
          body: [
            'Contract Ref: LR-0002',
            'Property: Royal Building Dubai',
            'Renewal term: 12 months',
            'Documents sent via HausBuddy',
            'Please sign within 7 days',
          ],
        },
      },
    ],
  },
  {
    id: 3,
    firstName: 'Khalid',
    lastName: 'Al-Nasser',
    building: 'Amina Tower',
    unit: 'Unit 11C, Floor 11',
    subject: 'Water Leak from Upstairs - Urgent',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Khalid Al-Nasser',
        content: 'Hi, I noticed a water leak coming from the ceiling in my bathroom, likely from the unit above. The dripping is steady and I am worried about damage to the flooring.',
        time: '11:00 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Khalid, I have escalated this as a priority case. Our plumber has been assigned and will inspect both units today. Please place a bucket under the affected area in the meantime.',
        time: '11:00 AM',
        card: {
          title: 'Plumbing Incident Report',
          body: [
            'Ref: PLMB-0003',
            'Building: Amina Tower',
            'Issue: Water ingress from floor above',
            'Status: Active - Plumber assigned',
            'Expected visit: Today',
          ],
        },
      },
    ],
  },
  {
    id: 4,
    firstName: 'Sara',
    lastName: 'Al-Rashid',
    building: 'Orchid Building',
    unit: 'Unit 2D, Floor 2',
    subject: 'Request to Install Additional Lock on Front Door',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Sara Al-Rashid',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '04:15 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Sara, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '04:15 PM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0004',
            'Building: Orchid Building',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 5,
    firstName: 'Nour',
    lastName: 'Farhat',
    building: 'Sky View Tower Dubai',
    unit: 'Unit 15E, Floor 15',
    subject: 'Noise Complaint - Late Night Disturbance Unit 19C',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Nour Farhat',
        content: 'Hello, I would like to formally raise a noise complaint about the unit above mine. The noise typically starts after 11 PM and includes loud music, making it difficult to sleep. This has been going on for a week.',
        time: '10:45 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Nour, I understand how disruptive this must be. I have sent a formal noise warning to the tenants in question and logged your complaint. Please inform us immediately if the issue continues.',
        time: '10:45 AM',
        card: {
          title: 'Noise Complaint Logged',
          body: [
            'Ref: NC-0005',
            'Building: Sky View Tower Dubai',
            'Issue: Noise after quiet hours',
            'Action: Warning notice sent to neighbour',
            'Escalation available if issue persists',
          ],
        },
      },
    ],
  },
  {
    id: 6,
    firstName: 'Omar',
    lastName: 'Al-Rashid',
    building: 'Maple Tower',
    unit: 'Unit 8F, Floor 8',
    subject: 'Parking Space Assignment Inquiry',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Omar Al-Rashid',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '03:00 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Omar, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '03:00 PM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0006',
            'Building: Maple Tower',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 7,
    firstName: 'Ali',
    lastName: 'Al-Mansoori',
    building: 'Cedar Heights',
    unit: 'Unit 22A, Floor 22',
    subject: 'Mold Reported in Bathroom - Unit 11B',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Ali Al-Mansoori',
        content: 'Hello, I discovered significant mold growth in my bedroom near the window. I am concerned about health implications and would like this addressed as soon as possible.',
        time: '09:30 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Ali, thank you for alerting us. I have scheduled our certified remediation team for within 48 hours. Please keep the room well-ventilated in the meantime.',
        time: '09:30 AM',
        card: {
          title: 'Remediation Order Raised',
          body: [
            'Ref: REM-0007',
            'Building: Cedar Heights',
            'Issue: Mold or pest concern reported',
            'Priority: High - Health concern',
            'Team dispatched within 48 hours',
          ],
        },
      },
    ],
  },
  {
    id: 8,
    firstName: 'Hassan',
    lastName: 'Ibrahim',
    building: 'Ammana Building Dubai',
    unit: 'Unit 18B, Floor 18',
    subject: 'Scheduled Maintenance Access - Saturday 04 Apr',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Hassan Ibrahim',
        content: 'Hi, I would like to confirm the scheduled maintenance visit for my unit. Could you please advise on the exact time window so I can make sure I am available?',
        time: '01:45 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Hassan, the maintenance visit is confirmed. Our team will arrive between 9 AM and 12 PM. You do not need to be present but it is recommended. Please ensure all rooms are accessible.',
        time: '01:45 PM',
        card: {
          title: 'Maintenance Visit Confirmation',
          body: [
            'Job Ref: MNT-0008',
            'Building: Ammana Building Dubai',
            'Window: 09:00 AM - 12:00 PM',
            'Team: Facilities and Engineering',
            'Please ensure access to all rooms',
          ],
        },
      },
    ],
  },
  {
    id: 9,
    firstName: 'Fatima',
    lastName: 'Al-Zaabi',
    building: 'Palm Residences',
    unit: 'Unit 3C, Floor 3',
    subject: 'Move-Out Notice Submitted - 30 April 2026',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Fatima Al-Zaabi',
        content: 'Hello, I would like to inform you that I wish to vacate my apartment, providing 30 days notice as per my tenancy agreement. Please advise on the move-out inspection process.',
        time: '11:20 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Fatima, thank you for your notice. I have logged your move-out and will arrange a pre-inspection 5 days before your vacate date. Your deposit will be processed within 14 days of final handover.',
        time: '11:20 AM',
        card: {
          title: 'Move-Out Process Summary',
          body: [
            'Ref: MO-0009',
            'Property: Palm Residences',
            'Notice: 30 days submitted',
            'Pre-inspection: 5 days before vacate',
            'Deposit processed within 14 days of handover',
          ],
        },
      },
    ],
  },
  {
    id: 10,
    firstName: 'Layla',
    lastName: 'Ibrahim',
    building: 'Al Wahda Complex',
    unit: 'Unit 9G, Floor 9',
    subject: 'Request for Tenancy Contract Copy',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Layla Ibrahim',
        content: 'Good morning, I would like to initiate the lease renewal process for my unit. My contract expires next month and I am interested in renewing for another year under the same terms.',
        time: '10:00 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hello Layla, great to hear you would like to continue. I have prepared the renewal package and will send it to you via HausBuddy and email within 24 hours. Please sign within 7 days.',
        time: '10:00 AM',
        card: {
          title: 'Lease Renewal Package',
          body: [
            'Contract Ref: LR-0010',
            'Property: Al Wahda Complex',
            'Renewal term: 12 months',
            'Documents sent via HausBuddy',
            'Please sign within 7 days',
          ],
        },
      },
    ],
  },
  {
    id: 11,
    firstName: 'Mariam',
    lastName: 'Al-Dhaheri',
    building: 'Corniche Towers',
    unit: 'Unit 4A, Floor 4',
    subject: 'Welcome to Corniche Towers - Onboarding Guide',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Mariam Al-Dhaheri',
        content: 'Hello, I just moved in and want to say thank you for the warm welcome. I have a few questions about gym access hours and how to set up the HausBuddy app.',
        time: '02:10 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Welcome to Corniche Towers, Mariam! We are delighted to have you. The gym is open 6 AM to 11 PM daily. To set up HausBuddy, download the app and enter the invite code sent to your email.',
        time: '02:10 PM',
        card: {
          title: 'Welcome Information Pack',
          body: [
            'Building: Corniche Towers',
            'Gym hours: 6 AM - 11 PM daily',
            'HausBuddy invite: sent to your email',
            'Facilities guide: available in app',
            'Emergency contact: +971 4 000 0000',
          ],
        },
      },
    ],
  },
  {
    id: 12,
    firstName: 'Hind',
    lastName: 'Al-Suwaidi',
    building: 'Al Noor Residences',
    unit: 'Unit 7B, Floor 7',
    subject: 'Elevator Out of Service - Estimated Repair 28 Mar',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Hind Al-Suwaidi',
        content: 'Hi, I would like to confirm the scheduled maintenance visit for my unit. Could you please advise on the exact time window so I can make sure I am available?',
        time: '08:55 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Hind, the maintenance visit is confirmed. Our team will arrive between 9 AM and 12 PM. You do not need to be present but it is recommended. Please ensure all rooms are accessible.',
        time: '08:55 AM',
        card: {
          title: 'Maintenance Visit Confirmation',
          body: [
            'Job Ref: MNT-0012',
            'Building: Al Noor Residences',
            'Window: 09:00 AM - 12:00 PM',
            'Team: Facilities and Engineering',
            'Please ensure access to all rooms',
          ],
        },
      },
    ],
  },
  {
    id: 13,
    firstName: 'Noura',
    lastName: 'Al-Mazrouei',
    building: 'Yas Island Residences',
    unit: 'Unit 11C, Floor 11',
    subject: 'Key Replacement Request - Unit 22A',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Noura Al-Mazrouei',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '03:40 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Noura, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '03:40 PM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0013',
            'Building: Yas Island Residences',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 14,
    firstName: 'Reem',
    lastName: 'Al-Shamsi',
    building: 'Buhaira Towers',
    unit: 'Unit 2D, Floor 2',
    subject: 'Confirmation of Rent Payment - March 2026',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Reem Al-Shamsi',
        content: 'Hi, I would like to confirm that I have transferred the rent payment for this month. Please let me know once it has been received and processed on your end.',
        time: '11:05 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Reem, thank you for your payment. I confirm the rent has been received and credited to your account. Your receipt is available in HausBuddy under Documents.',
        time: '11:05 AM',
        card: {
          title: 'Payment Confirmation',
          body: [
            'Receipt Ref: PAY-0014',
            'Property: Buhaira Towers',
            'Status: Payment Received',
            'Method: Bank Transfer',
            'Receipt available in HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 15,
    firstName: 'Aisha',
    lastName: 'Mansoor',
    building: 'Highland Tower Abu Dhabi',
    unit: 'Unit 15E, Floor 15',
    subject: 'Appliance Handover Checklist Request',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Aisha Mansoor',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '09:00 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Aisha, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '09:00 AM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0015',
            'Building: Highland Tower Abu Dhabi',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 16,
    firstName: 'Zainab',
    lastName: 'Al-Hosani',
    building: 'Al Taawun Plaza',
    unit: 'Unit 8F, Floor 8',
    subject: 'Community BBQ Event - Saturday 29 March',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Zainab Al-Hosani',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '04:30 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Zainab, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '04:30 PM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0016',
            'Building: Al Taawun Plaza',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 17,
    firstName: 'Yusuf',
    lastName: 'Al-Hamdan',
    building: 'Jasmine Court',
    unit: 'Unit 22A, Floor 22',
    subject: 'Blocked Drainage in Kitchen Sink',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Yusuf Al-Hamdan',
        content: 'Hi, I noticed a water leak coming from the ceiling in my bathroom, likely from the unit above. The dripping is steady and I am worried about damage to the flooring.',
        time: '10:20 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Yusuf, I have escalated this as a priority case. Our plumber has been assigned and will inspect both units today. Please place a bucket under the affected area in the meantime.',
        time: '10:20 AM',
        card: {
          title: 'Plumbing Incident Report',
          body: [
            'Ref: PLMB-0017',
            'Building: Jasmine Court',
            'Issue: Water ingress from floor above',
            'Status: Active - Plumber assigned',
            'Expected visit: Today',
          ],
        },
      },
    ],
  },
  {
    id: 18,
    firstName: 'Tariq',
    lastName: 'Al-Mansouri',
    building: 'Cedar Heights',
    unit: 'Unit 18B, Floor 18',
    subject: 'Quarterly Building Inspection - Notice',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Tariq Al-Mansouri',
        content: 'Hi, I would like to confirm the scheduled maintenance visit for my unit. Could you please advise on the exact time window so I can make sure I am available?',
        time: '02:55 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Tariq, the maintenance visit is confirmed. Our team will arrive between 9 AM and 12 PM. You do not need to be present but it is recommended. Please ensure all rooms are accessible.',
        time: '02:55 PM',
        card: {
          title: 'Maintenance Visit Confirmation',
          body: [
            'Job Ref: MNT-0018',
            'Building: Cedar Heights',
            'Window: 09:00 AM - 12:00 PM',
            'Team: Facilities and Engineering',
            'Please ensure access to all rooms',
          ],
        },
      },
    ],
  },
  {
    id: 19,
    firstName: 'Faisal',
    lastName: 'Al-Marzouqi',
    building: 'Tulip Building',
    unit: 'Unit 3C, Floor 3',
    subject: 'Permission to Sublet Request',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Faisal Al-Marzouqi',
        content: 'Good morning, I would like to initiate the lease renewal process for my unit. My contract expires next month and I am interested in renewing for another year under the same terms.',
        time: '09:45 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hello Faisal, great to hear you would like to continue. I have prepared the renewal package and will send it to you via HausBuddy and email within 24 hours. Please sign within 7 days.',
        time: '09:45 AM',
        card: {
          title: 'Lease Renewal Package',
          body: [
            'Contract Ref: LR-0019',
            'Property: Tulip Building',
            'Renewal term: 12 months',
            'Documents sent via HausBuddy',
            'Please sign within 7 days',
          ],
        },
      },
    ],
  },
  {
    id: 20,
    firstName: 'Karim',
    lastName: 'Badawi',
    building: 'Rose Building',
    unit: 'Unit 9G, Floor 9',
    subject: 'Broken Window Latch - Unit 5D',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Karim Badawi',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '01:30 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Karim, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '01:30 PM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0020',
            'Building: Rose Building',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 21,
    firstName: 'Samir',
    lastName: 'Elias',
    building: 'Maple Tower',
    unit: 'Unit 4A, Floor 4',
    subject: 'Annual Meter Reading Reminder',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Samir Elias',
        content: 'Hello, I have taken the utility meter readings for this month as requested. Please let me know if you need photos of the meter panels uploaded as well.',
        time: '11:50 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Samir, thank you for submitting the readings. They have been recorded in the system. Please upload meter photos via HausBuddy if required. Your bill will be generated within 3 working days.',
        time: '11:50 AM',
        card: {
          title: 'Meter Reading Recorded',
          body: [
            'Ref: MTR-0021',
            'Building: Maple Tower',
            'Status: Readings received and logged',
            'Upload photos via HausBuddy if needed',
            'Bill generated within 3 working days',
          ],
        },
      },
    ],
  },
  {
    id: 22,
    firstName: 'Walid',
    lastName: 'Nasser',
    building: 'Ammana Building Dubai',
    unit: 'Unit 7B, Floor 7',
    subject: 'Fire Safety Inspection Scheduled - 20 March',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Walid Nasser',
        content: 'Hi, I would like to confirm the scheduled maintenance visit for my unit. Could you please advise on the exact time window so I can make sure I am available?',
        time: '03:15 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Walid, the maintenance visit is confirmed. Our team will arrive between 9 AM and 12 PM. You do not need to be present but it is recommended. Please ensure all rooms are accessible.',
        time: '03:15 PM',
        card: {
          title: 'Maintenance Visit Confirmation',
          body: [
            'Job Ref: MNT-0022',
            'Building: Ammana Building Dubai',
            'Window: 09:00 AM - 12:00 PM',
            'Team: Facilities and Engineering',
            'Please ensure access to all rooms',
          ],
        },
      },
    ],
  },
  {
    id: 23,
    firstName: 'Hisham',
    lastName: 'Taha',
    building: 'Sky View Tower Dubai',
    unit: 'Unit 11C, Floor 11',
    subject: 'Lease Amendment - Approval Request',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Hisham Taha',
        content: 'Good morning, I would like to initiate the lease renewal process for my unit. My contract expires next month and I am interested in renewing for another year under the same terms.',
        time: '09:10 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hello Hisham, great to hear you would like to continue. I have prepared the renewal package and will send it to you via HausBuddy and email within 24 hours. Please sign within 7 days.',
        time: '09:10 AM',
        card: {
          title: 'Lease Renewal Package',
          body: [
            'Contract Ref: LR-0023',
            'Property: Sky View Tower Dubai',
            'Renewal term: 12 months',
            'Documents sent via HausBuddy',
            'Please sign within 7 days',
          ],
        },
      },
    ],
  },
  {
    id: 24,
    firstName: 'Wael',
    lastName: 'Darwish',
    building: 'Royal Building Dubai',
    unit: 'Unit 2D, Floor 2',
    subject: 'Late Rent Notice - February 2026',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Wael Darwish',
        content: 'Hi, I would like to confirm that I have transferred the rent payment for this month. Please let me know once it has been received and processed on your end.',
        time: '04:00 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Wael, thank you for your payment. I confirm the rent has been received and credited to your account. Your receipt is available in HausBuddy under Documents.',
        time: '04:00 PM',
        card: {
          title: 'Payment Confirmation',
          body: [
            'Receipt Ref: PAY-0024',
            'Property: Royal Building Dubai',
            'Status: Payment Received',
            'Method: Bank Transfer',
            'Receipt available in HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 25,
    firstName: 'Adel',
    lastName: 'Barakat',
    building: 'Palm Residences',
    unit: 'Unit 15E, Floor 15',
    subject: 'Guest Registration Request',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Adel Barakat',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '10:30 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Adel, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '10:30 AM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0025',
            'Building: Palm Residences',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 26,
    firstName: 'Bassam',
    lastName: 'Suleiman',
    building: 'Cedar Heights',
    unit: 'Unit 8F, Floor 8',
    subject: 'New House Rules Document Issued',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Bassam Suleiman',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '02:45 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Bassam, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '02:45 PM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0026',
            'Building: Cedar Heights',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 27,
    firstName: 'Rami',
    lastName: 'Khoury',
    building: 'Orchid Building',
    unit: 'Unit 22A, Floor 22',
    subject: 'Request for Parking Visitor Pass',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Rami Khoury',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '11:00 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Rami, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '11:00 AM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0027',
            'Building: Orchid Building',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 28,
    firstName: 'Sami',
    lastName: 'Al-Amin',
    building: 'Yas Island Residences',
    unit: 'Unit 18B, Floor 18',
    subject: 'Rubbish Disposal Issue - Ground Floor Bin Area',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Sami Al-Amin',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '03:20 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Sami, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '03:20 PM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0028',
            'Building: Yas Island Residences',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 29,
    firstName: 'Jad',
    lastName: 'Fadel',
    building: 'Corniche Towers',
    unit: 'Unit 3C, Floor 3',
    subject: 'Gym Access Card Not Working',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Jad Fadel',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '09:55 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Jad, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '09:55 AM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0029',
            'Building: Corniche Towers',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 30,
    firstName: 'Dina',
    lastName: 'Moussa',
    building: 'Al Bateen Residences',
    unit: 'Unit 9G, Floor 9',
    subject: 'Utility Bill Query - January 2026',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Dina Moussa',
        content: 'Hi, I would like to confirm that I have transferred the rent payment for this month. Please let me know once it has been received and processed on your end.',
        time: '01:10 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Dina, thank you for your payment. I confirm the rent has been received and credited to your account. Your receipt is available in HausBuddy under Documents.',
        time: '01:10 PM',
        card: {
          title: 'Payment Confirmation',
          body: [
            'Receipt Ref: PAY-0030',
            'Property: Al Bateen Residences',
            'Status: Payment Received',
            'Method: Bank Transfer',
            'Receipt available in HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 31,
    firstName: 'Nadia',
    lastName: 'Ezzat',
    building: 'Highland Tower Abu Dhabi',
    unit: 'Unit 4A, Floor 4',
    subject: 'Pest Control Visit Scheduled - 12 March',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Nadia Ezzat',
        content: 'Hello, I discovered significant mold growth in my bedroom near the window. I am concerned about health implications and would like this addressed as soon as possible.',
        time: '10:05 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Nadia, thank you for alerting us. I have scheduled our certified remediation team for within 48 hours. Please keep the room well-ventilated in the meantime.',
        time: '10:05 AM',
        card: {
          title: 'Remediation Order Raised',
          body: [
            'Ref: REM-0031',
            'Building: Highland Tower Abu Dhabi',
            'Issue: Mold or pest concern reported',
            'Priority: High - Health concern',
            'Team dispatched within 48 hours',
          ],
        },
      },
    ],
  },
  {
    id: 32,
    firstName: 'Rana',
    lastName: 'Qasim',
    building: 'Jasmine Court',
    unit: 'Unit 7B, Floor 7',
    subject: 'Security Camera Request for Unit Floor',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Rana Qasim',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '04:45 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Rana, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '04:45 PM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0032',
            'Building: Jasmine Court',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 33,
    firstName: 'Mona',
    lastName: 'Al-Sayed',
    building: 'Sunflower Building',
    unit: 'Unit 11C, Floor 11',
    subject: 'Community Pool Maintenance - Closed 07-08 Mar',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Mona Al-Sayed',
        content: 'Hi, I would like to confirm the scheduled maintenance visit for my unit. Could you please advise on the exact time window so I can make sure I am available?',
        time: '08:30 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Mona, the maintenance visit is confirmed. Our team will arrive between 9 AM and 12 PM. You do not need to be present but it is recommended. Please ensure all rooms are accessible.',
        time: '08:30 AM',
        card: {
          title: 'Maintenance Visit Confirmation',
          body: [
            'Job Ref: MNT-0033',
            'Building: Sunflower Building',
            'Window: 09:00 AM - 12:00 PM',
            'Team: Facilities and Engineering',
            'Please ensure access to all rooms',
          ],
        },
      },
    ],
  },
  {
    id: 34,
    firstName: 'Asma',
    lastName: 'Ibrahim',
    building: 'Al Qasba Residences',
    unit: 'Unit 2D, Floor 2',
    subject: 'Roof Access Permission Request',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Asma Ibrahim',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '02:00 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Asma, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '02:00 PM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0034',
            'Building: Al Qasba Residences',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 35,
    firstName: 'Dawoud',
    lastName: 'Al-Shehhi',
    building: 'Sharjah Grand',
    unit: 'Unit 15E, Floor 15',
    subject: 'Power Outage Reported - Floor 12',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Dawoud Al-Shehhi',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '11:15 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Dawoud, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '11:15 AM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0035',
            'Building: Sharjah Grand',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 36,
    firstName: 'James',
    lastName: 'Miller',
    building: 'Cedar Heights',
    unit: 'Unit 8F, Floor 8',
    subject: 'Contract Expiry Reminder - 30 April 2026',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'James Miller',
        content: 'Good morning, I would like to initiate the lease renewal process for my unit. My contract expires next month and I am interested in renewing for another year under the same terms.',
        time: '03:35 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hello James, great to hear you would like to continue. I have prepared the renewal package and will send it to you via HausBuddy and email within 24 hours. Please sign within 7 days.',
        time: '03:35 PM',
        card: {
          title: 'Lease Renewal Package',
          body: [
            'Contract Ref: LR-0036',
            'Property: Cedar Heights',
            'Renewal term: 12 months',
            'Documents sent via HausBuddy',
            'Please sign within 7 days',
          ],
        },
      },
    ],
  },
  {
    id: 37,
    firstName: 'Emma',
    lastName: 'Schneider',
    building: 'Tulip Building',
    unit: 'Unit 22A, Floor 22',
    subject: 'Service Provider Access - Plumber Visit 05 Mar',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Emma Schneider',
        content: 'Hi, I would like to confirm the scheduled maintenance visit for my unit. Could you please advise on the exact time window so I can make sure I am available?',
        time: '09:20 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Emma, the maintenance visit is confirmed. Our team will arrive between 9 AM and 12 PM. You do not need to be present but it is recommended. Please ensure all rooms are accessible.',
        time: '09:20 AM',
        card: {
          title: 'Maintenance Visit Confirmation',
          body: [
            'Job Ref: MNT-0037',
            'Building: Tulip Building',
            'Window: 09:00 AM - 12:00 PM',
            'Team: Facilities and Engineering',
            'Please ensure access to all rooms',
          ],
        },
      },
    ],
  },
  {
    id: 38,
    firstName: 'David',
    lastName: 'Richter',
    building: 'Maple Tower',
    unit: 'Unit 18B, Floor 18',
    subject: 'Intercom System Not Working - Unit 8F',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'David Richter',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '01:40 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi David, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '01:40 PM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0038',
            'Building: Maple Tower',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 39,
    firstName: 'Sarah',
    lastName: 'Thompson',
    building: 'Rose Building',
    unit: 'Unit 3C, Floor 3',
    subject: 'Damage Report Follow-up - Bathroom Leak Ref 28',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Sarah Thompson',
        content: 'Hi, I noticed a water leak coming from the ceiling in my bathroom, likely from the unit above. The dripping is steady and I am worried about damage to the flooring.',
        time: '10:00 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Sarah, I have escalated this as a priority case. Our plumber has been assigned and will inspect both units today. Please place a bucket under the affected area in the meantime.',
        time: '10:00 AM',
        card: {
          title: 'Plumbing Incident Report',
          body: [
            'Ref: PLMB-0039',
            'Building: Rose Building',
            'Issue: Water ingress from floor above',
            'Status: Active - Plumber assigned',
            'Expected visit: Today',
          ],
        },
      },
    ],
  },
  {
    id: 40,
    firstName: 'Michael',
    lastName: 'Walsh',
    building: 'Orchid Building',
    unit: 'Unit 9G, Floor 9',
    subject: 'End of Lease Move-Out Inspection Confirmation',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Michael Walsh',
        content: 'Good morning, I would like to initiate the lease renewal process for my unit. My contract expires next month and I am interested in renewing for another year under the same terms.',
        time: '04:10 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hello Michael, great to hear you would like to continue. I have prepared the renewal package and will send it to you via HausBuddy and email within 24 hours. Please sign within 7 days.',
        time: '04:10 PM',
        card: {
          title: 'Lease Renewal Package',
          body: [
            'Contract Ref: LR-0040',
            'Property: Orchid Building',
            'Renewal term: 12 months',
            'Documents sent via HausBuddy',
            'Please sign within 7 days',
          ],
        },
      },
    ],
  },
  {
    id: 41,
    firstName: 'Lisa',
    lastName: 'Hoffman',
    building: 'Palm Residences',
    unit: 'Unit 4A, Floor 4',
    subject: 'Electricity Meter Change-Out Notice',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Lisa Hoffman',
        content: 'Hello, I have taken the utility meter readings for this month as requested. Please let me know if you need photos of the meter panels uploaded as well.',
        time: '11:30 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Lisa, thank you for submitting the readings. They have been recorded in the system. Please upload meter photos via HausBuddy if required. Your bill will be generated within 3 working days.',
        time: '11:30 AM',
        card: {
          title: 'Meter Reading Recorded',
          body: [
            'Ref: MTR-0041',
            'Building: Palm Residences',
            'Status: Readings received and logged',
            'Upload photos via HausBuddy if needed',
            'Bill generated within 3 working days',
          ],
        },
      },
    ],
  },
  {
    id: 42,
    firstName: 'Thomas',
    lastName: 'Bauer',
    building: 'Ammana Building Dubai',
    unit: 'Unit 7B, Floor 7',
    subject: 'Urgent: Broken Gate - Parking Level B2',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Thomas Bauer',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '02:50 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Thomas, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '02:50 PM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0042',
            'Building: Ammana Building Dubai',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 43,
    firstName: 'Anna',
    lastName: 'Klein',
    building: 'Royal Building Dubai',
    unit: 'Unit 11C, Floor 11',
    subject: 'HausBuddy App Setup Assistance Request',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Anna Klein',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '09:00 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Anna, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '09:00 AM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0043',
            'Building: Royal Building Dubai',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 44,
    firstName: 'Lucas',
    lastName: 'Weber',
    building: 'Sky View Tower Dubai',
    unit: 'Unit 2D, Floor 2',
    subject: 'Swimming Pool Rules - Reminder Notice',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Lucas Weber',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '03:25 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Lucas, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '03:25 PM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0044',
            'Building: Sky View Tower Dubai',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 45,
    firstName: 'Carlos',
    lastName: 'Mendez',
    building: 'Amina Tower',
    unit: 'Unit 15E, Floor 15',
    subject: 'Request for Early Termination of Lease',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Carlos Mendez',
        content: 'Good morning, I would like to initiate the lease renewal process for my unit. My contract expires next month and I am interested in renewing for another year under the same terms.',
        time: '10:45 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hello Carlos, great to hear you would like to continue. I have prepared the renewal package and will send it to you via HausBuddy and email within 24 hours. Please sign within 7 days.',
        time: '10:45 AM',
        card: {
          title: 'Lease Renewal Package',
          body: [
            'Contract Ref: LR-0045',
            'Property: Amina Tower',
            'Renewal term: 12 months',
            'Documents sent via HausBuddy',
            'Please sign within 7 days',
          ],
        },
      },
    ],
  },
  {
    id: 46,
    firstName: 'Elena',
    lastName: 'Kowalski',
    building: 'Highland Tower Abu Dhabi',
    unit: 'Unit 8F, Floor 8',
    subject: 'Gas Meter Photo Submission',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Elena Kowalski',
        content: 'Hello, I have taken the utility meter readings for this month as requested. Please let me know if you need photos of the meter panels uploaded as well.',
        time: '01:00 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Elena, thank you for submitting the readings. They have been recorded in the system. Please upload meter photos via HausBuddy if required. Your bill will be generated within 3 working days.',
        time: '01:00 PM',
        card: {
          title: 'Meter Reading Recorded',
          body: [
            'Ref: MTR-0046',
            'Building: Highland Tower Abu Dhabi',
            'Status: Readings received and logged',
            'Upload photos via HausBuddy if needed',
            'Bill generated within 3 working days',
          ],
        },
      },
    ],
  },
  {
    id: 47,
    firstName: 'Julia',
    lastName: 'Hartmann',
    building: 'Corniche Towers',
    unit: 'Unit 22A, Floor 22',
    subject: 'New Resident Onboarding - Unit 14C',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Julia Hartmann',
        content: 'Hello, I just moved in and want to say thank you for the warm welcome. I have a few questions about gym access hours and how to set up the HausBuddy app.',
        time: '11:20 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Welcome to Corniche Towers, Julia! We are delighted to have you. The gym is open 6 AM to 11 PM daily. To set up HausBuddy, download the app and enter the invite code sent to your email.',
        time: '11:20 AM',
        card: {
          title: 'Welcome Information Pack',
          body: [
            'Building: Corniche Towers',
            'Gym hours: 6 AM - 11 PM daily',
            'HausBuddy invite: sent to your email',
            'Facilities guide: available in app',
            'Emergency contact: +971 4 000 0000',
          ],
        },
      },
    ],
  },
  {
    id: 48,
    firstName: 'Oliver',
    lastName: 'Grant',
    building: 'Sunflower Building',
    unit: 'Unit 18B, Floor 18',
    subject: 'HVAC Annual Service Completion Report',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Oliver Grant',
        content: 'Hello, I would like to report that the air conditioning unit in my apartment is not functioning properly. The unit is blowing warm air and making an unusual noise. Could you please arrange a technician visit?',
        time: '04:05 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Oliver, thank you for reporting this. I have logged a maintenance request and assigned a certified HVAC technician. They will contact you within 24 hours to schedule a visit.',
        time: '04:05 PM',
        card: {
          title: 'HVAC Service Request',
          body: [
            'Ref: HVAC-0048',
            'Building: Sunflower Building',
            'Issue: AC not cooling or unusual noise',
            'Priority: Standard',
            'Technician will call before visiting',
          ],
        },
      },
    ],
  },
  {
    id: 49,
    firstName: 'Sophie',
    lastName: 'Mueller',
    building: 'Cedar Heights',
    unit: 'Unit 3C, Floor 3',
    subject: 'Pet Registration Application - Unit 9B',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Sophie Mueller',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '09:35 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Sophie, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '09:35 AM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0049',
            'Building: Cedar Heights',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
  {
    id: 50,
    firstName: 'Priya',
    lastName: 'Patel',
    building: 'Maple Tower',
    unit: 'Unit 9G, Floor 9',
    subject: 'Request for Additional Storage Unit',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Priya Patel',
        content: 'Hello, I have a general enquiry regarding my tenancy. I would appreciate a response at your earliest convenience.',
        time: '02:20 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa - Manager',
        content: 'Hi Priya, thank you for reaching out. Your enquiry has been noted and a team member will follow up within 1 business day. Please use HausBuddy for any attachments.',
        time: '02:20 PM',
        card: {
          title: 'Enquiry Acknowledged',
          body: [
            'Ref: ENQ-0050',
            'Building: Maple Tower',
            'Status: Under Review',
            'Response time: 1 business day',
            'Attach files via HausBuddy',
          ],
        },
      },
    ],
  },
];

// ─── Sidebar ──────────────────────────────────────────────────────────────────

const Sidebar = () => (
  <aside className="w-[280px] shrink-0 bg-[#faf8f5] flex flex-col h-screen sticky top-0">
    <div className="px-6 pt-6 pb-4 flex items-center gap-3">
      <div className="flex flex-col gap-[3px]">
        <div className="w-[18px] h-1 bg-[#cda460] rounded-full" />
        <div className="w-[14px] h-1 bg-[#cda460] rounded-full" />
        <div className="w-[10px] h-1 bg-[#cda460] rounded-full" />
      </div>
      <div className="flex flex-col gap-[2px]">
        <span className="font-black text-[18px] tracking-[-0.89px] text-[#1a1814] leading-none">THE MUDEER</span>
        <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#7d7870] leading-none">Property Management</span>
      </div>
    </div>

    <nav className="flex-1 px-3 py-2 overflow-y-auto scrollbar-minimal" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}>
      <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[#7d7870] hover:bg-[#f0ebe0] transition-colors mb-1">
        <Home size={18} /><span className="text-[14px] font-semibold">Overview</span>
      </Link>

      {navItems.map(({ icon: Icon, label, href }) => {
        const isMessages = label === 'Messages';
        return (
          <div key={label}>
            <Link
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-colors mb-1 ${
                isMessages ? 'bg-[#f0ebe0] text-[#1a1814]' : 'text-[#7d7870] hover:bg-[#f0ebe0]'
              }`}
            >
              <Icon size={18} />
              <span className="text-[14px] font-semibold flex-1">{label}</span>
              {isMessages && <ChevronDown size={14} className="opacity-50" />}
            </Link>
            {isMessages && (
              <div className="ml-7 mb-1 flex flex-col gap-0.5">
                {/* All Inbox */}
                <button className="flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] font-bold text-[#1a1814] hover:bg-[#f0ebe0] transition-colors w-full text-left justify-between">
                  <div className="flex items-center gap-2.5">
                    <Inbox size={14} />
                    All Inbox
                  </div>
                  <ChevronDown size={12} className="opacity-50" />
                </button>
                {/* Sub-items */}
                <div className="ml-3 pl-3 border-l-2 border-[#e6e2d8] flex flex-col gap-0.5 py-1">
                  <button className="flex items-center gap-2 px-2 py-1.5 rounded-[7px] text-[12px] text-[#7d7870] hover:bg-[#f0ebe0] transition-colors w-full text-left">
                    <Folder size={13} /> New Folder
                  </button>
                  <button className="flex items-center gap-2 px-2 py-1.5 rounded-[7px] text-[12px] font-semibold text-[#b8975a] hover:bg-[#f4ebd9] transition-colors w-full text-left">
                    <Plus size={13} /> Create New Folder
                  </button>
                </div>
                {[
                  { icon: Send,    label: 'All Sent' },
                  { icon: Archive, label: 'All Drafts' },
                  { icon: Trash2,  label: 'Recycle Bin' },
                ].map(sub => (
                  <button key={sub.label} className="flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] font-medium text-[#7d7870] hover:bg-[#f0ebe0] transition-colors w-full text-left">
                    <sub.icon size={14} />{sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>

    <div className="px-3 pb-6">
      <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[#7d7870] hover:bg-[#f0ebe0] transition-colors">
        <Settings size={18} /><span className="text-[14px] font-semibold">Settings</span>
      </Link>
    </div>
  </aside>
);

// ─── TopBar ───────────────────────────────────────────────────────────────────

const TopBar = ({ tenantName }: { tenantName: string }) => (
  <header className="h-[88px] flex items-center px-8 gap-4 bg-[#faf8f5]">
    <div className="flex items-center gap-2 text-[14px] flex-1 flex-wrap">
      <Link href="/dashboard">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors">
          <X size={12} className="text-[#7d7870]" />
          <span className="text-[#7d7870] font-medium">Overview</span>
        </button>
      </Link>
      <ChevronRight size={14} className="text-[#c5bfb5]" />
      <Link href="/dashboard/messages">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors">
          <X size={12} className="text-[#7d7870]" />
          <span className="text-[#7d7870] font-medium">Messages</span>
        </button>
      </Link>
      <ChevronRight size={14} className="text-[#c5bfb5]" />
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0ebe0] rounded-[10px]">
        <span className="text-[#1a1814] font-semibold">{tenantName}</span>
        <Link href="/dashboard/messages">
          <X size={12} className="text-[#7d7870] cursor-pointer hover:text-[#1a1814] transition-colors" />
        </Link>
      </div>
      <button className="w-7 h-7 flex items-center justify-center rounded-[8px] bg-[#e6e1d8] hover:bg-[#ddd8cf] transition-colors">
        <Plus size={13} className="text-[#7d7870]" />
      </button>
    </div>

    <div className="flex items-center gap-2 bg-white border border-[#e8e4db] rounded-full px-4 py-2 w-[220px] shadow-sm">
      <Search size={14} className="text-[#7d7870] shrink-0" />
      <input type="text" placeholder="Search" className="bg-transparent text-[14px] text-[#1a1814] placeholder:text-[#7d7870] outline-none w-full" />
    </div>
    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors">
      <Bell size={20} className="text-[#1a1814]" />
    </button>
  </header>
);

// ─── Message Bubble ───────────────────────────────────────────────────────────

const TenantBubble = ({ msg }: { msg: ChatMessage }) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-full bg-[#f0ebe0] border border-[#e8dcc8] flex items-center justify-center shrink-0">
        <UserCircle2 size={16} className="text-[#c5bfb5]" />
      </div>
      <span className="text-[13px] font-semibold text-[#1a1814]">{msg.senderName}</span>
    </div>
    <div className="ml-9">
      <div className="bg-[#f0ebe0] rounded-[16px] rounded-tl-[4px] px-4 py-3 max-w-[480px]">
        <p className="text-[14px] text-[#1a1814] leading-[1.55]">{msg.content}</p>
      </div>
      <p className="text-[11px] text-[#9e9e9e] mt-1 ml-1">{msg.time}</p>
    </div>
  </div>
);

const ManagerBubble = ({ msg }: { msg: ChatMessage }) => (
  <div className="flex flex-col items-end gap-1">
    <div className="flex items-center gap-2 justify-end">
      <span className="text-[13px] font-semibold text-[#1a1814]">{msg.senderName}</span>
      <div className="w-7 h-7 rounded-full bg-[#1a1814] flex items-center justify-center shrink-0">
        <span className="text-[10px] font-bold text-white">AM</span>
      </div>
    </div>
    <div className="flex flex-col items-end gap-2 mr-9">
      {msg.content && (
        <div className="bg-white border border-[#e8e4db] shadow-sm rounded-[16px] rounded-tr-[4px] px-4 py-3 max-w-[480px]">
          <p className="text-[14px] text-[#1a1814] leading-[1.55]">{msg.content}</p>
        </div>
      )}
      {msg.card && (
        <div className="bg-white border border-[#e8e4db] shadow-md rounded-[16px] p-5 w-[360px] text-center">
          <p className="text-[15px] font-bold text-[#1a1814] mb-3">{msg.card.title}</p>
          {msg.card.body.map((line, i) => (
            <p key={i} className="text-[13px] text-[#4a453d] leading-[1.7]">{line}</p>
          ))}
        </div>
      )}
      <p className="text-[11px] text-[#9e9e9e] mr-1">{msg.time}</p>
    </div>
  </div>
);

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function MessageDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const thread = threads.find(t => t.id === id);

  const [input, setInput] = useState('');

  if (!thread) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#faf8f5]">
        <div className="text-center">
          <p className="text-[18px] font-bold text-[#1a1814] mb-2">Message not found</p>
          <Link href="/dashboard/messages" className="text-[14px] text-[#b8975a] hover:underline">Back to Messages</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#faf8f5] overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <TopBar tenantName={thread.firstName} />

        {/* Main area */}
        <div className="flex-1 bg-[#f0ebe0] rounded-tl-[36px] overflow-hidden min-h-0">
          <div
            className="h-full overflow-y-auto p-6 scrollbar-minimal"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
          >
            {/* + add tab button */}
            <button className="mb-3 w-8 h-8 rounded-[9px] bg-[#e6e1d8] hover:bg-[#ddd8cf] flex items-center justify-center transition-colors shadow-sm">
              <Plus size={14} className="text-[#7d7870]" />
            </button>

            <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden" style={{ height: 'calc(100vh - 180px)' }}>

              {/* ─── Thread header ─────────────────────────────────────── */}
              <div className="flex items-center gap-3 px-7 py-5 border-b border-[#e8e4db] shrink-0">
                <Link href="/dashboard/messages">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
                    <ChevronLeft size={18} className="text-[#1a1814]" />
                  </button>
                </Link>
                <div className="w-10 h-10 rounded-full bg-[#f0ebe0] border border-[#e8dcc8] flex items-center justify-center shrink-0">
                  <UserCircle2 size={24} className="text-[#c5bfb5]" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-[16px] font-bold text-[#1a1814] leading-tight">
                    {thread.firstName} {thread.lastName}
                  </span>
                  <span className="text-[12px] text-[#7d7870]">
                    {thread.unit}, {thread.building}
                  </span>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors">
                  <MoreHorizontal size={17} className="text-[#7d7870]" />
                </button>
              </div>

              {/* ─── Subject ───────────────────────────────────────────── */}
              <div className="px-7 py-4 border-b border-[#e8e4db] shrink-0">
                <p className="text-[15px] font-bold text-[#1a1814]">Subject: {thread.subject}</p>
              </div>

              {/* ─── Messages ──────────────────────────────────────────── */}
              <div
                className="flex-1 overflow-y-auto px-7 py-6 flex flex-col gap-6 scrollbar-minimal"
                style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
              >
                {thread.thread.map(msg => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {msg.sender === 'tenant'
                      ? <TenantBubble msg={msg} />
                      : <ManagerBubble msg={msg} />
                    }
                  </motion.div>
                ))}
              </div>

              {/* ─── Input bar ─────────────────────────────────────────── */}
              <div className="px-6 py-4 border-t border-[#e8e4db] bg-[#fcfbf9] shrink-0">
                <div className="flex items-center gap-3">
                  <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
                    <Paperclip size={18} className="text-[#7d7870]" />
                  </button>
                  <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') setInput(''); }}
                    placeholder="Write your message here..."
                    className="flex-1 bg-white border border-[#e8e4db] rounded-full px-5 py-2.5 text-[14px] text-[#1a1814] placeholder:text-[#c5bfb5] outline-none shadow-sm"
                  />
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1a1814] text-white rounded-full text-[14px] font-semibold hover:bg-[#2d2820] transition-colors shadow-md shrink-0">
                    Send
                    <Send size={15} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
