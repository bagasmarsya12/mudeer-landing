export type Status = 'Tenant' | 'Owner' | 'N/A';

export interface Tenant {
  id: number;
  firstName: string;
  lastName: string;
  building: string;
  phone: string;
  email: string;
  lastUpdated: string;
  status: Status;
  hausbuddyActive: boolean;
}

export const buildingDistrict: Record<string, string> = {
  'Tulip Building':             'Marina',
  'Orchid Building':            'Jumeirah',
  'Rose Building':              'Downtown',
  'Sunflower Building':         'Business Bay',
  'Maple Tower':                'Business Bay',
  'Palm Residences':            'Palm Jumeirah',
  'Jasmine Court':              'Al Barsha',
  'Cedar Heights':              'Motor City',
  'Ammana Building Dubai':      'Deira',
  'Royal Building Dubai':       'Marina',
  'Sky View Tower Dubai':       'Downtown',
  'Al Shera Building':          'Al Quoz',
  'Marina Heights Dubai':       'JBR',
  'Gold Tower Dubai':           'DIFC',
  'Burj Views':                 'DIFC',
  'Amina Tower':                'Corniche',
  'Highland Tower Abu Dhabi':   'Al Reem Island',
  'Al Noor Residences':         'Al Khalidiyah',
  'Corniche Towers':            'Corniche',
  'Saadiyat View':              'Saadiyat Island',
  'Yas Island Residences':      'Yas Island',
  'Al Wahda Complex':           'Al Wahda',
  'Capital Gate Residences':    'Capital District',
  'Al Bateen Residences':       'Al Bateen',
  'Sharjah Grand':              'Al Nahda',
  'Al Taawun Plaza':            'Al Taawun',
  'Buhaira Towers':             'Al Buhaira',
  'Al Qasba Residences':        'Al Qasba',
  'Al Majaz Residences':        'Al Majaz',
  'Rolla Square':               'Rolla',
  'Emirates Height':            'Al Hamra',
  'Al Hamra Residences':        'Al Hamra',
  'Julphar Tower':              'Al Nakhil',
  'Al Dhait Complex':           'Al Dhait',
};

export const statusStyle: Record<Status, string> = {
  Tenant: 'bg-[#eef6ee] text-[#3a7d44]',
  Owner:  'bg-[#eef0fa] text-[#3a52a0]',
  'N/A':  'bg-[#f0ebe0] text-[#7d7870]',
};

export const tenants: Tenant[] = [
  { id:  1, firstName: 'Mohammed',  lastName: 'Al-Farsi',      building: 'Tulip Building',           phone: '+971 50 123 4567', email: 'mohammed.alfarsi@gmail.com',    lastUpdated: '06 Apr 2026, 09:00', status: 'Tenant', hausbuddyActive: true  },
  { id:  2, firstName: 'Ahmed',     lastName: 'Hassan',         building: 'Royal Building Dubai',     phone: '+971 52 234 5678', email: 'ahmed.hassan@outlook.com',      lastUpdated: '05 Apr 2026, 14:30', status: 'Owner',  hausbuddyActive: true  },
  { id:  3, firstName: 'Khalid',    lastName: 'Al-Nasser',      building: 'Amina Tower',              phone: '+971 55 345 6789', email: 'khalid.nasser@icloud.com',      lastUpdated: '04 Apr 2026, 11:15', status: 'Tenant', hausbuddyActive: true  },
  { id:  4, firstName: 'Sara',      lastName: 'Al-Rashid',      building: 'Orchid Building',          phone: '+971 56 456 7890', email: 'sara.alrashid@gmail.com',       lastUpdated: '03 Apr 2026, 08:45', status: 'Tenant', hausbuddyActive: true  },
  { id:  5, firstName: 'Nour',      lastName: 'Farhat',         building: 'Sky View Tower Dubai',     phone: '+971 54 567 8901', email: 'nour.farhat@hausbuddy.com',     lastUpdated: '02 Apr 2026, 16:00', status: 'Tenant', hausbuddyActive: true  },
  { id:  6, firstName: 'Omar',      lastName: 'Al-Rashid',      building: 'Maple Tower',              phone: '+971 50 678 9012', email: 'omar.alrashid@gmail.com',       lastUpdated: '01 Apr 2026, 10:20', status: 'Owner',  hausbuddyActive: false },
  { id:  7, firstName: 'Ali',       lastName: 'Al-Mansoori',    building: 'Cedar Heights',            phone: '+971 52 789 0123', email: 'ali.mansoori@yahoo.com',        lastUpdated: '31 Mar 2026, 09:10', status: 'Tenant', hausbuddyActive: false },
  { id:  8, firstName: 'Hassan',    lastName: 'Ibrahim',        building: 'Ammana Building Dubai',    phone: '+971 55 890 1234', email: 'hassan.ibrahim@gmail.com',      lastUpdated: '30 Mar 2026, 13:55', status: 'Tenant', hausbuddyActive: true  },
  { id:  9, firstName: 'Fatima',    lastName: 'Al-Zaabi',       building: 'Palm Residences',          phone: '+971 56 901 2345', email: 'fatima.alzaabi@icloud.com',     lastUpdated: '29 Mar 2026, 07:30', status: 'Owner',  hausbuddyActive: true  },
  { id: 10, firstName: 'Layla',     lastName: 'Ibrahim',        building: 'Al Wahda Complex',         phone: '+971 50 012 3456', email: 'layla.ibrahim@gmail.com',       lastUpdated: '28 Mar 2026, 15:40', status: 'Tenant', hausbuddyActive: true  },
  { id: 11, firstName: 'Mariam',    lastName: 'Al-Dhaheri',     building: 'Corniche Towers',          phone: '+971 52 123 4567', email: 'mariam.aldhaheri@outlook.com',  lastUpdated: '27 Mar 2026, 11:20', status: 'Owner',  hausbuddyActive: true  },
  { id: 12, firstName: 'Hind',      lastName: 'Al-Suwaidi',     building: 'Al Noor Residences',       phone: '+971 55 234 5678', email: 'hind.alsuwaidi@gmail.com',      lastUpdated: '26 Mar 2026, 09:05', status: 'Tenant', hausbuddyActive: false },
  { id: 13, firstName: 'Noura',     lastName: 'Al-Mazrouei',    building: 'Yas Island Residences',    phone: '+971 56 345 6789', email: 'noura.mazrouei@gmail.com',      lastUpdated: '25 Mar 2026, 14:30', status: 'Tenant', hausbuddyActive: true  },
  { id: 14, firstName: 'Reem',      lastName: 'Al-Shamsi',      building: 'Buhaira Towers',           phone: '+971 54 456 7890', email: 'reem.alshamsi@icloud.com',      lastUpdated: '24 Mar 2026, 10:15', status: 'Tenant', hausbuddyActive: false },
  { id: 15, firstName: 'Aisha',     lastName: 'Mansoor',        building: 'Highland Tower Abu Dhabi', phone: '+971 50 567 8901', email: 'aisha.mansoor@gmail.com',       lastUpdated: '23 Mar 2026, 16:45', status: 'Owner',  hausbuddyActive: true  },
  { id: 16, firstName: 'Zainab',    lastName: 'Al-Hosani',      building: 'Al Taawun Plaza',          phone: '+971 52 678 9012', email: 'zainab.alhosani@gmail.com',     lastUpdated: '22 Mar 2026, 08:30', status: 'Tenant', hausbuddyActive: true  },
  { id: 17, firstName: 'Yusuf',     lastName: 'Al-Hamdan',      building: 'Jasmine Court',            phone: '+971 55 789 0123', email: 'yusuf.alhamdan@outlook.com',    lastUpdated: '21 Mar 2026, 13:00', status: 'Tenant', hausbuddyActive: false },
  { id: 18, firstName: 'Tariq',     lastName: 'Al-Mansouri',    building: 'Cedar Heights',            phone: '+971 56 890 1234', email: 'tariq.almansouri@gmail.com',    lastUpdated: '20 Mar 2026, 09:25', status: 'Tenant', hausbuddyActive: true  },
  { id: 19, firstName: 'Faisal',    lastName: 'Al-Marzouqi',    building: 'Tulip Building',           phone: '+971 54 901 2345', email: 'faisal.almarzouqi@icloud.com',  lastUpdated: '19 Mar 2026, 15:10', status: 'Owner',  hausbuddyActive: true  },
  { id: 20, firstName: 'Karim',     lastName: 'Badawi',         building: 'Rose Building',            phone: '+971 50 111 2233', email: 'karim.badawi@gmail.com',        lastUpdated: '18 Mar 2026, 11:30', status: 'Tenant', hausbuddyActive: false },
  { id: 21, firstName: 'Samir',     lastName: 'Elias',          building: 'Maple Tower',              phone: '+971 52 222 3344', email: 'samir.elias@gmail.com',         lastUpdated: '17 Mar 2026, 07:45', status: 'Tenant', hausbuddyActive: true  },
  { id: 22, firstName: 'Walid',     lastName: 'Nasser',         building: 'Ammana Building Dubai',    phone: '+971 55 333 4455', email: 'walid.nasser@outlook.com',      lastUpdated: '16 Mar 2026, 14:00', status: 'Owner',  hausbuddyActive: false },
  { id: 23, firstName: 'Hisham',    lastName: 'Taha',           building: 'Sky View Tower Dubai',     phone: '+971 56 444 5566', email: 'hisham.taha@gmail.com',         lastUpdated: '15 Mar 2026, 10:20', status: 'Tenant', hausbuddyActive: true  },
  { id: 24, firstName: 'Wael',      lastName: 'Darwish',        building: 'Royal Building Dubai',     phone: '+971 54 555 6677', email: 'wael.darwish@yahoo.com',        lastUpdated: '14 Mar 2026, 16:35', status: 'Tenant', hausbuddyActive: true  },
  { id: 25, firstName: 'Adel',      lastName: 'Barakat',        building: 'Palm Residences',          phone: '+971 50 666 7788', email: 'adel.barakat@gmail.com',        lastUpdated: '13 Mar 2026, 09:00', status: 'Tenant', hausbuddyActive: false },
  { id: 26, firstName: 'Bassam',    lastName: 'Suleiman',       building: 'Cedar Heights',            phone: '+971 52 777 8899', email: 'bassam.suleiman@icloud.com',    lastUpdated: '12 Mar 2026, 13:15', status: 'Owner',  hausbuddyActive: true  },
  { id: 27, firstName: 'Rami',      lastName: 'Khoury',         building: 'Orchid Building',          phone: '+971 55 888 9900', email: 'rami.khoury@gmail.com',         lastUpdated: '11 Mar 2026, 08:50', status: 'Tenant', hausbuddyActive: true  },
  { id: 28, firstName: 'Sami',      lastName: 'Al-Amin',        building: 'Yas Island Residences',    phone: '+971 56 999 0011', email: 'sami.alamin@gmail.com',         lastUpdated: '10 Mar 2026, 15:30', status: 'Tenant', hausbuddyActive: false },
  { id: 29, firstName: 'Jad',       lastName: 'Fadel',          building: 'Corniche Towers',          phone: '+971 54 111 3344', email: 'jad.fadel@outlook.com',         lastUpdated: '09 Mar 2026, 11:45', status: 'Tenant', hausbuddyActive: true  },
  { id: 30, firstName: 'Dina',      lastName: 'Moussa',         building: 'Al Bateen Residences',     phone: '+971 50 222 4455', email: 'dina.moussa@gmail.com',         lastUpdated: '08 Mar 2026, 09:20', status: 'Tenant', hausbuddyActive: true  },
  { id: 31, firstName: 'Nadia',     lastName: 'Ezzat',          building: 'Highland Tower Abu Dhabi', phone: '+971 52 333 5566', email: 'nadia.ezzat@gmail.com',         lastUpdated: '07 Mar 2026, 14:10', status: 'Tenant', hausbuddyActive: false },
  { id: 32, firstName: 'Rana',      lastName: 'Qasim',          building: 'Jasmine Court',            phone: '+971 55 444 6677', email: 'rana.qasim@gmail.com',          lastUpdated: '06 Mar 2026, 10:35', status: 'Owner',  hausbuddyActive: true  },
  { id: 33, firstName: 'Mona',      lastName: 'Al-Sayed',       building: 'Sunflower Building',       phone: '+971 56 555 7788', email: 'mona.alsayed@icloud.com',       lastUpdated: '05 Mar 2026, 16:00', status: 'Tenant', hausbuddyActive: true  },
  { id: 34, firstName: 'Asma',      lastName: 'Ibrahim',        building: 'Al Qasba Residences',      phone: '+971 54 666 8899', email: 'asma.ibrahim@gmail.com',        lastUpdated: '04 Mar 2026, 08:15', status: 'Tenant', hausbuddyActive: false },
  { id: 35, firstName: 'Dawoud',    lastName: 'Al-Shehhi',      building: 'Sharjah Grand',            phone: '+971 50 777 9900', email: 'dawoud.alshehhi@gmail.com',     lastUpdated: '03 Mar 2026, 13:40', status: 'Tenant', hausbuddyActive: true  },
  { id: 36, firstName: 'James',     lastName: 'Miller',         building: 'Cedar Heights',            phone: '+971 52 888 1122', email: 'james.miller@gmail.com',        lastUpdated: '02 Mar 2026, 09:55', status: 'Tenant', hausbuddyActive: false },
  { id: 37, firstName: 'Emma',      lastName: 'Schneider',      building: 'Tulip Building',           phone: '+971 55 999 2233', email: 'emma.schneider@outlook.com',    lastUpdated: '01 Mar 2026, 15:20', status: 'Tenant', hausbuddyActive: true  },
  { id: 38, firstName: 'David',     lastName: 'Richter',        building: 'Maple Tower',              phone: '+971 56 111 4455', email: 'david.richter@gmail.com',       lastUpdated: '28 Feb 2026, 11:05', status: 'Owner',  hausbuddyActive: true  },
  { id: 39, firstName: 'Sarah',     lastName: 'Thompson',       building: 'Rose Building',            phone: '+971 54 222 5566', email: 'sarah.thompson@icloud.com',     lastUpdated: '27 Feb 2026, 07:30', status: 'Tenant', hausbuddyActive: false },
  { id: 40, firstName: 'Michael',   lastName: 'Walsh',          building: 'Orchid Building',          phone: '+971 50 333 6677', email: 'michael.walsh@gmail.com',       lastUpdated: '26 Feb 2026, 14:45', status: 'Tenant', hausbuddyActive: true  },
  { id: 41, firstName: 'Lisa',      lastName: 'Hoffman',        building: 'Palm Residences',          phone: '+971 52 444 7788', email: 'lisa.hoffman@gmail.com',        lastUpdated: '25 Feb 2026, 10:10', status: 'Tenant', hausbuddyActive: true  },
  { id: 42, firstName: 'Thomas',    lastName: 'Bauer',          building: 'Ammana Building Dubai',    phone: '+971 55 555 8899', email: 'thomas.bauer@gmail.com',        lastUpdated: '24 Feb 2026, 16:25', status: 'Tenant', hausbuddyActive: false },
  { id: 43, firstName: 'Anna',      lastName: 'Klein',          building: 'Royal Building Dubai',     phone: '+971 56 666 9900', email: 'anna.klein@gmail.com',          lastUpdated: '23 Feb 2026, 09:40', status: 'Tenant', hausbuddyActive: true  },
  { id: 44, firstName: 'Lucas',     lastName: 'Weber',          building: 'Sky View Tower Dubai',     phone: '+971 54 777 1122', email: 'lucas.weber@gmail.com',         lastUpdated: '22 Feb 2026, 13:55', status: 'Tenant', hausbuddyActive: false },
  { id: 45, firstName: 'Carlos',    lastName: 'Mendez',         building: 'Amina Tower',              phone: '+971 50 888 2233', email: 'carlos.mendez@gmail.com',       lastUpdated: '21 Feb 2026, 08:20', status: 'Owner',  hausbuddyActive: true  },
  { id: 46, firstName: 'Elena',     lastName: 'Kowalski',       building: 'Highland Tower Abu Dhabi', phone: '+971 52 999 3344', email: 'elena.kowalski@gmail.com',      lastUpdated: '20 Feb 2026, 15:35', status: 'Tenant', hausbuddyActive: true  },
  { id: 47, firstName: 'Julia',     lastName: 'Hartmann',       building: 'Corniche Towers',          phone: '+971 55 111 5566', email: 'julia.hartmann@outlook.com',    lastUpdated: '19 Feb 2026, 11:50', status: 'Tenant', hausbuddyActive: false },
  { id: 48, firstName: 'Oliver',    lastName: 'Grant',          building: 'Sunflower Building',       phone: '+971 56 222 6677', email: 'oliver.grant@gmail.com',        lastUpdated: '18 Feb 2026, 07:15', status: 'Owner',  hausbuddyActive: true  },
  { id: 49, firstName: 'Sophie',    lastName: 'Müller',         building: 'Cedar Heights',            phone: '+971 54 333 7788', email: 'sophie.muller@gmail.com',       lastUpdated: '17 Feb 2026, 14:30', status: 'Tenant', hausbuddyActive: false },
  { id: 50, firstName: 'Priya',     lastName: 'Patel',          building: 'Maple Tower',              phone: '+971 50 444 8899', email: 'priya.patel@gmail.com',         lastUpdated: '16 Feb 2026, 10:45', status: 'Tenant', hausbuddyActive: true  },
];
