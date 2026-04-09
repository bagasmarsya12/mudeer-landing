export interface DamageReport {
  id: number;
  urgency: 'High' | 'Medium' | 'Low';
  date: string;
  time: string;
  lastUpdated: string;
  firstName: string;
  lastName: string;
  building: string;
  title: string;
  category: string;
  status: 'In Progress' | 'Appointment' | 'Completed' | 'Cancelled';
}

export const urgencyBadge: Record<string, string> = {
  High:   'bg-red-50 text-red-500 border border-red-200',
  Medium: 'bg-[#f5f0e8] text-[#7d7870] border border-[#e8dcc8]',
  Low:    'bg-[#f4f4f4] text-[#aaa9a7] border border-[#e8e4db]',
};

export const statusColor: Record<string, string> = {
  'In Progress': 'text-[#b8975a]',
  'Appointment': 'text-[#b8975a]',
  'Completed':   'text-emerald-600',
  'Cancelled':   'text-[#9e9e9e]',
};

export const reports: DamageReport[] = [
  { id:  1, urgency: 'High',   date: '06 Apr 2026', time: '10:15 AM', lastUpdated: '06 April 2026, 10:15',     firstName: 'Mohammed',  lastName: 'Al-Farsi',    building: 'Tulip Building',           title: 'Main Water Pipe Burst — Unit 4A',         category: 'Plumbing',    status: 'In Progress' },
  { id:  2, urgency: 'High',   date: '05 Apr 2026', time: '08:42 AM', lastUpdated: '05 April 2026, 08:42',     firstName: 'Ahmed',     lastName: 'Hassan',      building: 'Royal Building Dubai',     title: 'Elevator Completely Out of Service',      category: 'Elevator',    status: 'Appointment' },
  { id:  3, urgency: 'High',   date: '04 Apr 2026', time: '11:30 AM', lastUpdated: '04 April 2026, 11:30',     firstName: 'Khalid',    lastName: 'Al-Nasser',   building: 'Amina Tower',              title: 'Gas Smell Reported in Kitchen',           category: 'Kitchen',     status: 'In Progress' },
  { id:  4, urgency: 'High',   date: '03 Apr 2026', time: '03:20 PM', lastUpdated: '03 April 2026, 15:20',     firstName: 'Sara',      lastName: 'Al-Rashid',   building: 'Orchid Building',          title: 'Electrical Panel Tripped — No Power',     category: 'Electrical',  status: 'Appointment' },
  { id:  5, urgency: 'High',   date: '02 Apr 2026', time: '09:10 AM', lastUpdated: '02 April 2026, 09:10',     firstName: 'Nour',      lastName: 'Farhat',      building: 'Sky View Tower Dubai',     title: 'Sewage Backup Flooding Bathroom Floor',   category: 'Bathroom',    status: 'In Progress' },
  { id:  6, urgency: 'High',   date: '01 Apr 2026', time: '02:55 PM', lastUpdated: '01 April 2026, 14:55',     firstName: 'Omar',      lastName: 'Al-Rashid',   building: 'Maple Tower',              title: 'Roof Structural Crack Near Stairwell',    category: 'Roof',        status: 'Appointment' },
  { id:  7, urgency: 'High',   date: '31 Mar 2026', time: '07:50 AM', lastUpdated: '31 March 2026, 07:50',     firstName: 'Ali',       lastName: 'Al-Mansoori', building: 'Cedar Heights',            title: 'Severe Mold Infestation in Bedroom',      category: 'Bedroom',     status: 'In Progress' },
  { id:  8, urgency: 'High',   date: '30 Mar 2026', time: '04:35 PM', lastUpdated: '30 March 2026, 16:35',     firstName: 'Hassan',    lastName: 'Ibrahim',     building: 'Ammana Building Dubai',    title: 'Fire Alarm System Not Responding',        category: 'Common Area', status: 'Appointment' },
  { id:  9, urgency: 'High',   date: '29 Mar 2026', time: '11:00 AM', lastUpdated: '29 March 2026, 11:00',     firstName: 'Fatima',    lastName: 'Al-Zaabi',    building: 'Palm Residences',          title: 'AC Refrigerant Leak — Complete Failure',  category: 'HVAC',        status: 'In Progress' },
  { id: 10, urgency: 'High',   date: '28 Mar 2026', time: '01:40 PM', lastUpdated: '28 March 2026, 13:40',     firstName: 'Layla',     lastName: 'Ibrahim',     building: 'Al Wahda Complex',         title: 'Ceiling Collapsed in Living Room',        category: 'Living Room', status: 'Appointment' },
  { id: 11, urgency: 'High',   date: '27 Mar 2026', time: '09:25 AM', lastUpdated: '27 March 2026, 09:25',     firstName: 'James',     lastName: 'Miller',      building: 'Corniche Towers',          title: 'Water Heater Explosion Risk',             category: 'Bathroom',    status: 'In Progress' },
  { id: 12, urgency: 'High',   date: '26 Mar 2026', time: '03:15 PM', lastUpdated: '26 March 2026, 15:15',     firstName: 'Mariam',    lastName: 'Al-Dhaheri',  building: 'Al Noor Residences',       title: 'Underground Parking Flood',               category: 'Parking',     status: 'Appointment' },
  { id: 13, urgency: 'High',   date: '25 Mar 2026', time: '10:05 AM', lastUpdated: '25 March 2026, 10:05',     firstName: 'Hind',      lastName: 'Al-Suwaidi',  building: 'Yas Island Residences',    title: 'Facade Panel Fell from 8th Floor',        category: 'Facade',      status: 'In Progress' },
  { id: 14, urgency: 'High',   date: '24 Mar 2026', time: '08:30 AM', lastUpdated: '24 March 2026, 08:30',     firstName: 'Emma',      lastName: 'Schneider',   building: 'Buhaira Towers',           title: 'Short Circuit Caused Fire in Kitchen',    category: 'Kitchen',     status: 'Appointment' },
  { id: 15, urgency: 'High',   date: '23 Mar 2026', time: '02:00 PM', lastUpdated: '23 March 2026, 14:00',     firstName: 'David',     lastName: 'Richter',     building: 'Saadiyat View',            title: 'Balcony Railing Structurally Unsafe',     category: 'Balcony',     status: 'In Progress' },
  { id: 16, urgency: 'Medium', date: '22 Mar 2026', time: '11:45 AM', lastUpdated: '22 March 2026, 11:45',     firstName: 'Noura',     lastName: 'Al-Mazrouei', building: 'Yas Island Residences',    title: 'AC Unit Not Cooling — Unit 12C',          category: 'HVAC',        status: 'In Progress' },
  { id: 17, urgency: 'Medium', date: '21 Mar 2026', time: '04:10 PM', lastUpdated: '21 March 2026, 16:10',     firstName: 'Reem',      lastName: 'Al-Shamsi',   building: 'Buhaira Towers',           title: 'Toilet Clogged and Overflowing',          category: 'Bathroom',    status: 'Appointment' },
  { id: 18, urgency: 'Medium', date: '20 Mar 2026', time: '09:30 AM', lastUpdated: '20 March 2026, 09:30',     firstName: 'Aisha',     lastName: 'Mansoor',     building: 'Highland Tower Abu Dhabi', title: 'Broken Glass Panel on Front Door',        category: 'Hallway',     status: 'Completed'   },
  { id: 19, urgency: 'Medium', date: '19 Mar 2026', time: '01:20 PM', lastUpdated: '19 March 2026, 13:20',     firstName: 'Zainab',    lastName: 'Al-Hosani',   building: 'Al Taawun Plaza',          title: 'Ceiling Water Stain Growing Larger',      category: 'Bedroom',     status: 'In Progress' },
  { id: 20, urgency: 'Medium', date: '18 Mar 2026', time: '10:50 AM', lastUpdated: '18 March 2026, 10:50',     firstName: 'Yusuf',     lastName: 'Al-Hamdan',   building: 'Jasmine Court',            title: 'Parking Gate Motor Failure',              category: 'Parking',     status: 'Appointment' },
  { id: 21, urgency: 'Medium', date: '17 Mar 2026', time: '03:40 PM', lastUpdated: '17 March 2026, 15:40',     firstName: 'Tariq',     lastName: 'Al-Mansouri', building: 'Cedar Heights',            title: 'Kitchen Exhaust Fan Not Working',         category: 'Kitchen',     status: 'Completed'   },
  { id: 22, urgency: 'Medium', date: '16 Mar 2026', time: '08:15 AM', lastUpdated: '16 March 2026, 08:15',     firstName: 'Faisal',    lastName: 'Al-Marzouqi', building: 'Tulip Building',           title: 'Intercom Malfunction — Unit 6F',          category: 'Hallway',     status: 'In Progress' },
  { id: 23, urgency: 'Medium', date: '15 Mar 2026', time: '12:30 PM', lastUpdated: '15 March 2026, 12:30',     firstName: 'Karim',     lastName: 'Badawi',      building: 'Rose Building',            title: 'Hot Water Pressure Drop',                 category: 'Bathroom',    status: 'Appointment' },
  { id: 24, urgency: 'Medium', date: '14 Mar 2026', time: '02:55 PM', lastUpdated: '14 March 2026, 14:55',     firstName: 'Samir',     lastName: 'Elias',       building: 'Maple Tower',              title: 'Drain Blocked in Laundry Room',           category: 'Plumbing',    status: 'Completed'   },
  { id: 25, urgency: 'Medium', date: '13 Mar 2026', time: '10:20 AM', lastUpdated: '13 March 2026, 10:20',     firstName: 'Walid',     lastName: 'Nasser',      building: 'Ammana Building Dubai',    title: 'Lobby Ceiling Light Cluster Failure',     category: 'Common Area', status: 'In Progress' },
  { id: 26, urgency: 'Medium', date: '12 Mar 2026', time: '04:05 PM', lastUpdated: '12 March 2026, 16:05',     firstName: 'Hisham',    lastName: 'Taha',        building: 'Sky View Tower Dubai',     title: 'Window Hinge Broken — Cannot Close',      category: 'Living Room', status: 'Appointment' },
  { id: 27, urgency: 'Medium', date: '11 Mar 2026', time: '09:50 AM', lastUpdated: '11 March 2026, 09:50',     firstName: 'Wael',      lastName: 'Darwish',     building: 'Royal Building Dubai',     title: 'Pool Equipment Room Flooding',            category: 'Common Area', status: 'In Progress' },
  { id: 28, urgency: 'Medium', date: '10 Mar 2026', time: '01:35 PM', lastUpdated: '10 March 2026, 13:35',     firstName: 'Adel',      lastName: 'Barakat',     building: 'Palm Residences',          title: 'Electric Shutter Motor Stuck',            category: 'Living Room', status: 'Completed'   },
  { id: 29, urgency: 'Medium', date: '09 Mar 2026', time: '11:10 AM', lastUpdated: '09 March 2026, 11:10',     firstName: 'Bassam',    lastName: 'Suleiman',    building: 'Cedar Heights',            title: 'Radiator Leaking in Study Room',          category: 'HVAC',        status: 'Appointment' },
  { id: 30, urgency: 'Medium', date: '08 Mar 2026', time: '03:25 PM', lastUpdated: '08 March 2026, 15:25',     firstName: 'Sarah',     lastName: 'Thompson',    building: 'Corniche Towers',          title: 'Stairwell Handrail Loose',                category: 'Stairwell',   status: 'Completed'   },
  { id: 31, urgency: 'Medium', date: '07 Mar 2026', time: '10:00 AM', lastUpdated: '07 March 2026, 10:00',     firstName: 'Rami',      lastName: 'Khoury',      building: 'Orchid Building',          title: 'Roof Drainage Blocked — Water Pooling',   category: 'Roof',        status: 'In Progress' },
  { id: 32, urgency: 'Medium', date: '06 Mar 2026', time: '02:15 PM', lastUpdated: '06 March 2026, 14:15',     firstName: 'Sami',      lastName: 'Al-Amin',     building: 'Yas Island Residences',    title: 'Door Lock Failure on Main Entry',         category: 'Hallway',     status: 'Appointment' },
  { id: 33, urgency: 'Medium', date: '05 Mar 2026', time: '12:40 PM', lastUpdated: '05 March 2026, 12:40',     firstName: 'Michael',   lastName: 'Walsh',       building: 'Al Hamra Residences',      title: 'Washing Machine Drain Overflow',          category: 'Kitchen',     status: 'Completed'   },
  { id: 34, urgency: 'Medium', date: '04 Mar 2026', time: '09:05 AM', lastUpdated: '04 March 2026, 09:05',     firstName: 'Jad',       lastName: 'Fadel',       building: 'Corniche Towers',          title: 'Ventilation Duct Noise — Unit 18B',       category: 'HVAC',        status: 'In Progress' },
  { id: 35, urgency: 'Medium', date: '03 Mar 2026', time: '04:30 PM', lastUpdated: '03 March 2026, 16:30',     firstName: 'Dina',      lastName: 'Moussa',      building: 'Al Bateen Residences',     title: 'Basement Storage Damp and Musty',         category: 'Basement',    status: 'Appointment' },
  { id: 36, urgency: 'Low',    date: '02 Mar 2026', time: '11:20 AM', lastUpdated: '02 March 2026, 11:20',     firstName: 'Nadia',     lastName: 'Ezzat',       building: 'Highland Tower Abu Dhabi', title: 'Paint Peeling in Bedroom Corner',          category: 'Bedroom',     status: 'Completed'   },
  { id: 37, urgency: 'Low',    date: '01 Mar 2026', time: '03:50 PM', lastUpdated: '01 March 2026, 15:50',     firstName: 'Rana',      lastName: 'Qasim',       building: 'Jasmine Court',            title: 'Mailbox Lock Broken',                     category: 'Common Area', status: 'Completed'   },
  { id: 38, urgency: 'Low',    date: '28 Feb 2026', time: '10:30 AM', lastUpdated: '28 February 2026, 10:30',  firstName: 'Mona',      lastName: 'Al-Sayed',    building: 'Sunflower Building',       title: 'Scratched Floor Tiles in Hallway',        category: 'Hallway',     status: 'Completed'   },
  { id: 39, urgency: 'Low',    date: '27 Feb 2026', time: '02:00 PM', lastUpdated: '27 February 2026, 14:00',  firstName: 'Asma',      lastName: 'Ibrahim',     building: 'Al Qasba Residences',      title: 'Kitchen Tap Dripping Slowly',             category: 'Kitchen',     status: 'In Progress' },
  { id: 40, urgency: 'Low',    date: '26 Feb 2026', time: '09:15 AM', lastUpdated: '26 February 2026, 09:15',  firstName: 'Dawoud',    lastName: 'Al-Shehhi',   building: 'Sharjah Grand',            title: 'Bathroom Mirror Mounting Loose',          category: 'Bathroom',    status: 'Cancelled'   },
  { id: 41, urgency: 'Low',    date: '25 Feb 2026', time: '04:40 PM', lastUpdated: '25 February 2026, 16:40',  firstName: 'Oliver',    lastName: 'Grant',       building: 'Sunflower Building',       title: 'Wardrobe Door Hinge Damaged',             category: 'Bedroom',     status: 'Completed'   },
  { id: 42, urgency: 'Low',    date: '24 Feb 2026', time: '11:55 AM', lastUpdated: '24 February 2026, 11:55',  firstName: 'Sophie',    lastName: 'Müller',      building: 'Cedar Heights',            title: 'Balcony Water Pooling After Rain',         category: 'Balcony',     status: 'In Progress' },
  { id: 43, urgency: 'Low',    date: '23 Feb 2026', time: '01:10 PM', lastUpdated: '23 February 2026, 13:10',  firstName: 'Priya',     lastName: 'Patel',       building: 'Maple Tower',              title: 'Bedroom Light Fixture Flickering',        category: 'Bedroom',     status: 'Cancelled'   },
  { id: 44, urgency: 'Low',    date: '22 Feb 2026', time: '08:35 AM', lastUpdated: '22 February 2026, 08:35',  firstName: 'Lisa',      lastName: 'Hoffman',     building: 'Palm Residences',          title: 'Door Stopper Missing — Unit 22A',         category: 'Hallway',     status: 'Completed'   },
  { id: 45, urgency: 'Low',    date: '21 Feb 2026', time: '03:20 PM', lastUpdated: '21 February 2026, 15:20',  firstName: 'Thomas',    lastName: 'Bauer',       building: 'Ammana Building Dubai',    title: 'Rusted Balcony Railing Surface',          category: 'Balcony',     status: 'In Progress' },
  { id: 46, urgency: 'Low',    date: '20 Feb 2026', time: '10:45 AM', lastUpdated: '20 February 2026, 10:45',  firstName: 'Anna',      lastName: 'Klein',       building: 'Royal Building Dubai',     title: 'Window Seal Worn — Draft in Winter',      category: 'Living Room', status: 'Cancelled'   },
  { id: 47, urgency: 'Low',    date: '19 Feb 2026', time: '02:30 PM', lastUpdated: '19 February 2026, 14:30',  firstName: 'Lucas',     lastName: 'Weber',       building: 'Sky View Tower Dubai',     title: 'Minor Wall Crack Near Window Frame',      category: 'Living Room', status: 'Completed'   },
  { id: 48, urgency: 'Low',    date: '18 Feb 2026', time: '09:00 AM', lastUpdated: '18 February 2026, 09:00',  firstName: 'Carlos',    lastName: 'Mendez',      building: 'Amina Tower',              title: 'Gym Shower Nozzle Broken',                category: 'Common Area', status: 'In Progress' },
  { id: 49, urgency: 'Low',    date: '17 Feb 2026', time: '04:15 PM', lastUpdated: '17 February 2026, 16:15',  firstName: 'Elena',     lastName: 'Kowalski',    building: 'Highland Tower Abu Dhabi', title: 'External Mailbox Label Missing',          category: 'Common Area', status: 'Cancelled'   },
  { id: 50, urgency: 'Low',    date: '16 Feb 2026', time: '11:30 AM', lastUpdated: '16 February 2026, 11:30',  firstName: 'Julia',     lastName: 'Hartmann',    building: 'Corniche Towers',          title: 'Squeaking Door Hinge in Unit 33D',        category: 'Hallway',     status: 'Completed'   },
];
