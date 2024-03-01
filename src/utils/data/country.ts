import { countryDataType } from '@/types';

export const country_list = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua &amp; Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia &amp; Herzegovina',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Cape Verde',
    'Cayman Islands',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote D Ivoire',
    'Croatia',
    'Cruise Ship',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'French West Indies',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kuwait',
    'Kyrgyz Republic',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Pierre &amp; Miquelon',
    'Samoa',
    'San Marino',
    'Satellite',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'South Africa',
    'South Korea',
    'Spain',
    'Sri Lanka',
    'St Kitts &amp; Nevis',
    'St Lucia',
    'St Vincent',
    'St. Lucia',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    "Timor L'Este",
    'Togo',
    'Tonga',
    'Trinidad &amp; Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks &amp; Caicos',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'Uruguay',
    'Uzbekistan',
    'Venezuela',
    'Vietnam',
    'Virgin Islands (US)',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];

export const country_list_with_code = {
    AF: 'Afghanistan',
    AL: 'Albania',
    DZ: 'Algeria',
    AS: 'American Samoa',
    AD: 'Andorra',
    AO: 'Angola',
    AI: 'Anguilla',
    AQ: 'Antarctica',
    AG: 'Antigua and Barbuda',
    AR: 'Argentina',
    AM: 'Armenia',
    AW: 'Aruba',
    AU: 'Australia',
    AT: 'Austria',
    AZ: 'Azerbaijan',
    BS: 'Bahamas (the)',
    BH: 'Bahrain',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BY: 'Belarus',
    BE: 'Belgium',
    BZ: 'Belize',
    BJ: 'Benin',
    BM: 'Bermuda',
    BT: 'Bhutan',
    BO: 'Bolivia (Plurinational State of)',
    BQ: 'Bonaire, Sint Eustatius and Saba',
    BA: 'Bosnia and Herzegovina',
    BW: 'Botswana',
    BV: 'Bouvet Island',
    BR: 'Brazil',
    IO: 'British Indian Ocean Territory (the)',
    BN: 'Brunei Darussalam',
    BG: 'Bulgaria',
    BF: 'Burkina Faso',
    BI: 'Burundi',
    CV: 'Cabo Verde',
    KH: 'Cambodia',
    CM: 'Cameroon',
    CA: 'Canada',
    KY: 'Cayman Islands (the)',
    CF: 'Central African Republic (the)',
    TD: 'Chad',
    CL: 'Chile',
    CN: 'China',
    CX: 'Christmas Island',
    CC: 'Cocos (Keeling) Islands (the)',
    CO: 'Colombia',
    KM: 'Comoros (the)',
    CD: 'Congo (the Democratic Republic of the)',
    CG: 'Congo (the)',
    CK: 'Cook Islands (the)',
    CR: 'Costa Rica',
    HR: 'Croatia',
    CU: 'Cuba',
    CW: 'Curaçao',
    CY: 'Cyprus',
    CZ: 'Czechia',
    CI: "Côte d'Ivoire",
    DK: 'Denmark',
    DJ: 'Djibouti',
    DM: 'Dominica',
    DO: 'Dominican Republic (the)',
    EC: 'Ecuador',
    EG: 'Egypt',
    SV: 'El Salvador',
    GQ: 'Equatorial Guinea',
    ER: 'Eritrea',
    EE: 'Estonia',
    SZ: 'Eswatini',
    ET: 'Ethiopia',
    FK: 'Falkland Islands (the) [Malvinas]',
    FO: 'Faroe Islands (the)',
    FJ: 'Fiji',
    FI: 'Finland',
    FR: 'France',
    GF: 'French Guiana',
    PF: 'French Polynesia',
    TF: 'French Southern Territories (the)',
    GA: 'Gabon',
    GM: 'Gambia (the)',
    GE: 'Georgia',
    DE: 'Germany',
    GH: 'Ghana',
    GI: 'Gibraltar',
    GR: 'Greece',
    GL: 'Greenland',
    GD: 'Grenada',
    GP: 'Guadeloupe',
    GU: 'Guam',
    GT: 'Guatemala',
    GG: 'Guernsey',
    GN: 'Guinea',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HT: 'Haiti',
    HM: 'Heard Island and McDonald Islands',
    VA: 'Holy See (the)',
    HN: 'Honduras',
    HK: 'Hong Kong',
    HU: 'Hungary',
    IS: 'Iceland',
    IN: 'India',
    ID: 'Indonesia',
    IR: 'Iran (Islamic Republic of)',
    IQ: 'Iraq',
    IE: 'Ireland',
    IM: 'Isle of Man',
    IL: 'Israel',
    IT: 'Italy',
    JM: 'Jamaica',
    JP: 'Japan',
    JE: 'Jersey',
    JO: 'Jordan',
    KZ: 'Kazakhstan',
    KE: 'Kenya',
    KI: 'Kiribati',
    KP: "Korea (the Democratic People's Republic of)",
    KR: 'Korea (the Republic of)',
    KW: 'Kuwait',
    KG: 'Kyrgyzstan',
    LA: "Lao People's Democratic Republic (the)",
    LV: 'Latvia',
    LB: 'Lebanon',
    LS: 'Lesotho',
    LR: 'Liberia',
    LY: 'Libya',
    LI: 'Liechtenstein',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    MO: 'Macao',
    MG: 'Madagascar',
    MW: 'Malawi',
    MY: 'Malaysia',
    MV: 'Maldives',
    ML: 'Mali',
    MT: 'Malta',
    MH: 'Marshall Islands (the)',
    MQ: 'Martinique',
    MR: 'Mauritania',
    MU: 'Mauritius',
    YT: 'Mayotte',
    MX: 'Mexico',
    FM: 'Micronesia (Federated States of)',
    MD: 'Moldova (the Republic of)',
    MC: 'Monaco',
    MN: 'Mongolia',
    ME: 'Montenegro',
    MS: 'Montserrat',
    MA: 'Morocco',
    MZ: 'Mozambique',
    MM: 'Myanmar',
    NA: 'Namibia',
    NR: 'Nauru',
    NP: 'Nepal',
    NL: 'Netherlands (the)',
    NC: 'New Caledonia',
    NZ: 'New Zealand',
    NI: 'Nicaragua',
    NE: 'Niger (the)',
    NG: 'Nigeria',
    NU: 'Niue',
    NF: 'Norfolk Island',
    MP: 'Northern Mariana Islands (the)',
    NO: 'Norway',
    OM: 'Oman',
    PK: 'Pakistan',
    PW: 'Palau',
    PS: 'Palestine, State of',
    PA: 'Panama',
    PG: 'Papua New Guinea',
    PY: 'Paraguay',
    PE: 'Peru',
    PH: 'Philippines (the)',
    PN: 'Pitcairn',
    PL: 'Poland',
    PT: 'Portugal',
    PR: 'Puerto Rico',
    QA: 'Qatar',
    MK: 'Republic of North Macedonia',
    RO: 'Romania',
    RU: 'Russian Federation (the)',
    RW: 'Rwanda',
    RE: 'Réunion',
    BL: 'Saint Barthélemy',
    SH: 'Saint Helena, Ascension and Tristan da Cunha',
    KN: 'Saint Kitts and Nevis',
    LC: 'Saint Lucia',
    MF: 'Saint Martin (French part)',
    PM: 'Saint Pierre and Miquelon',
    VC: 'Saint Vincent and the Grenadines',
    WS: 'Samoa',
    SM: 'San Marino',
    ST: 'Sao Tome and Principe',
    SA: 'Saudi Arabia',
    SN: 'Senegal',
    RS: 'Serbia',
    SC: 'Seychelles',
    SL: 'Sierra Leone',
    SG: 'Singapore',
    SX: 'Sint Maarten (Dutch part)',
    SK: 'Slovakia',
    SI: 'Slovenia',
    SB: 'Solomon Islands',
    SO: 'Somalia',
    ZA: 'South Africa',
    GS: 'South Georgia and the South Sandwich Islands',
    SS: 'South Sudan',
    ES: 'Spain',
    LK: 'Sri Lanka',
    SD: 'Sudan (the)',
    SR: 'Suriname',
    SJ: 'Svalbard and Jan Mayen',
    SE: 'Sweden',
    CH: 'Switzerland',
    SY: 'Syrian Arab Republic',
    TW: 'Taiwan',
    TJ: 'Tajikistan',
    TZ: 'Tanzania, United Republic of',
    TH: 'Thailand',
    TL: 'Timor-Leste',
    TG: 'Togo',
    TK: 'Tokelau',
    TO: 'Tonga',
    TT: 'Trinidad and Tobago',
    TN: 'Tunisia',
    TR: 'Turkey',
    TM: 'Turkmenistan',
    TC: 'Turks and Caicos Islands (the)',
    TV: 'Tuvalu',
    UG: 'Uganda',
    UA: 'Ukraine',
    AE: 'United Arab Emirates (the)',
    GB: 'United Kingdom of Great Britain and Northern Ireland (the)',
    UM: 'United States Minor Outlying Islands (the)',
    US: 'United States of America (the)',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VU: 'Vanuatu',
    VE: 'Venezuela (Bolivarian Republic of)',
    VN: 'Viet Nam',
    VG: 'Virgin Islands (British)',
    VI: 'Virgin Islands (U.S.)',
    WF: 'Wallis and Futuna',
    EH: 'Western Sahara',
    YE: 'Yemen',
    ZM: 'Zambia',
    ZW: 'Zimbabwe',
    AX: 'Åland Islands'
};

export const currency_list = {
    AFA: 'Afghan Afghani',
    ALL: 'Albanian Lek',
    DZD: 'Algerian Dinar',
    AOA: 'Angolan Kwanza',
    ARS: 'Argentine Peso',
    AMD: 'Armenian Dram',
    AWG: 'Aruban Florin',
    AUD: 'Australian Dollar',
    AZN: 'Azerbaijani Manat',
    BSD: 'Bahamian Dollar',
    BHD: 'Bahraini Dinar',
    BDT: 'Bangladeshi Taka',
    BBD: 'Barbadian Dollar',
    BYR: 'Belarusian Ruble',
    BEF: 'Belgian Franc',
    BZD: 'Belize Dollar',
    BMD: 'Bermudan Dollar',
    BTN: 'Bhutanese Ngultrum',
    BTC: 'Bitcoin',
    BOB: 'Bolivian Boliviano',
    BAM: 'Bosnia-Herzegovina Convertible Mark',
    BWP: 'Botswanan Pula',
    BRL: 'Brazilian Real',
    GBP: 'British Pound Sterling',
    BND: 'Brunei Dollar',
    BGN: 'Bulgarian Lev',
    BIF: 'Burundian Franc',
    KHR: 'Cambodian Riel',
    CAD: 'Canadian Dollar',
    CVE: 'Cape Verdean Escudo',
    KYD: 'Cayman Islands Dollar',
    XOF: 'CFA Franc BCEAO',
    XAF: 'CFA Franc BEAC',
    XPF: 'CFP Franc',
    CLP: 'Chilean Peso',
    CLF: 'Chilean Unit of Account',
    CNY: 'Chinese Yuan',
    COP: 'Colombian Peso',
    KMF: 'Comorian Franc',
    CDF: 'Congolese Franc',
    CRC: 'Costa Rican Colón',
    HRK: 'Croatian Kuna',
    CUC: 'Cuban Convertible Peso',
    CZK: 'Czech Republic Koruna',
    DKK: 'Danish Krone',
    DJF: 'Djiboutian Franc',
    DOP: 'Dominican Peso',
    XCD: 'East Caribbean Dollar',
    EGP: 'Egyptian Pound',
    ERN: 'Eritrean Nakfa',
    EEK: 'Estonian Kroon',
    ETB: 'Ethiopian Birr',
    EUR: 'Euro',
    FKP: 'Falkland Islands Pound',
    FJD: 'Fijian Dollar',
    GMD: 'Gambian Dalasi',
    GEL: 'Georgian Lari',
    DEM: 'German Mark',
    GHS: 'Ghanaian Cedi',
    GIP: 'Gibraltar Pound',
    GRD: 'Greek Drachma',
    GTQ: 'Guatemalan Quetzal',
    GNF: 'Guinean Franc',
    GYD: 'Guyanaese Dollar',
    HTG: 'Haitian Gourde',
    HNL: 'Honduran Lempira',
    HKD: 'Hong Kong Dollar',
    HUF: 'Hungarian Forint',
    ISK: 'Icelandic Króna',
    INR: 'Indian Rupee',
    IDR: 'Indonesian Rupiah',
    IRR: 'Iranian Rial',
    IQD: 'Iraqi Dinar',
    ILS: 'Israeli New Sheqel',
    ITL: 'Italian Lira',
    JMD: 'Jamaican Dollar',
    JPY: 'Japanese Yen',
    JOD: 'Jordanian Dinar',
    KZT: 'Kazakhstani Tenge',
    KES: 'Kenyan Shilling',
    KWD: 'Kuwaiti Dinar',
    KGS: 'Kyrgystani Som',
    LAK: 'Laotian Kip',
    LVL: 'Latvian Lats',
    LBP: 'Lebanese Pound',
    LSL: 'Lesotho Loti',
    LRD: 'Liberian Dollar',
    LYD: 'Libyan Dinar',
    LTC: 'Litecoin',
    LTL: 'Lithuanian Litas',
    MOP: 'Macanese Pataca',
    MKD: 'Macedonian Denar',
    MGA: 'Malagasy Ariary',
    MWK: 'Malawian Kwacha',
    MYR: 'Malaysian Ringgit',
    MVR: 'Maldivian Rufiyaa',
    MRO: 'Mauritanian Ouguiya',
    MUR: 'Mauritian Rupee',
    MXN: 'Mexican Peso',
    MDL: 'Moldovan Leu',
    MNT: 'Mongolian Tugrik',
    MAD: 'Moroccan Dirham',
    MZM: 'Mozambican Metical',
    MMK: 'Myanmar Kyat',
    NAD: 'Namibian Dollar',
    NPR: 'Nepalese Rupee',
    ANG: 'Netherlands Antillean Guilder',
    TWD: 'New Taiwan Dollar',
    NZD: 'New Zealand Dollar',
    NIO: 'Nicaraguan Córdoba',
    NGN: 'Nigerian Naira',
    KPW: 'North Korean Won',
    NOK: 'Norwegian Krone',
    OMR: 'Omani Rial',
    PKR: 'Pakistani Rupee',
    PAB: 'Panamanian Balboa',
    PGK: 'Papua New Guinean Kina',
    PYG: 'Paraguayan Guarani',
    PEN: 'Peruvian Nuevo Sol',
    PHP: 'Philippine Peso',
    PLN: 'Polish Zloty',
    QAR: 'Qatari Rial',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    RWF: 'Rwandan Franc',
    SVC: 'Salvadoran Colón',
    WST: 'Samoan Tala',
    STD: 'São Tomé and Príncipe Dobra',
    SAR: 'Saudi Riyal',
    RSD: 'Serbian Dinar',
    SCR: 'Seychellois Rupee',
    SLL: 'Sierra Leonean Leone',
    SGD: 'Singapore Dollar',
    SKK: 'Slovak Koruna',
    SBD: 'Solomon Islands Dollar',
    SOS: 'Somali Shilling',
    ZAR: 'South African Rand',
    KRW: 'South Korean Won',
    SSP: 'South Sudanese Pound',
    XDR: 'Special Drawing Rights',
    LKR: 'Sri Lankan Rupee',
    SHP: 'St. Helena Pound',
    SDG: 'Sudanese Pound',
    SRD: 'Surinamese Dollar',
    SZL: 'Swazi Lilangeni',
    SEK: 'Swedish Krona',
    CHF: 'Swiss Franc',
    SYP: 'Syrian Pound',
    TJS: 'Tajikistani Somoni',
    TZS: 'Tanzanian Shilling',
    THB: 'Thai Baht',
    TOP: "Tongan Pa'anga",
    TTD: 'Trinidad & Tobago Dollar',
    TND: 'Tunisian Dinar',
    TRY: 'Turkish Lira',
    TMT: 'Turkmenistani Manat',
    UGX: 'Ugandan Shilling',
    UAH: 'Ukrainian Hryvnia',
    AED: 'United Arab Emirates Dirham',
    UYU: 'Uruguayan Peso',
    USD: 'US Dollar',
    UZS: 'Uzbekistan Som',
    VUV: 'Vanuatu Vatu',
    VEF: 'Venezuelan BolÃvar',
    VND: 'Vietnamese Dong',
    YER: 'Yemeni Rial',
    ZMK: 'Zambian Kwacha',
    ZWL: 'Zimbabwean dollar'
};

export const countriesData: { [key: string]: countryDataType } = {
    AF: {
        name: 'Afghanistan',
        currencies: 'AFN',
        languages: 'pus',
        code: 'AFG'
    },
    AL: {
        name: 'Albania',
        currencies: 'ALL',
        languages: 'sqi',
        code: 'ALB'
    },
    DZ: {
        name: 'Algeria',
        currencies: 'DZD',
        languages: 'ara',
        code: 'DZA'
    },
    AS: {
        name: 'American Samoa',
        currencies: 'USD',
        languages: 'eng,smo',
        code: 'ASM'
    },
    AD: {
        name: 'Andorra',
        currencies: 'EUR',
        languages: 'cat',
        code: 'AND'
    },
    AO: {
        name: 'Angola',
        currencies: 'AOA',
        languages: 'por',
        code: 'AGO'
    },
    AI: {
        name: 'Anguilla',
        currencies: 'XCD',
        languages: 'eng',
        code: 'AIA'
    },
    AQ: {
        name: 'Antarctica',
        currencies: '',
        languages: '',
        code: 'ATA'
    },
    AG: {
        name: 'Antigua And Barbuda',
        currencies: 'XCD',
        languages: 'eng',
        code: 'ATG'
    },
    AR: {
        name: 'Argentina',
        currencies: 'ARS',
        languages: 'spa',
        code: 'ARG'
    },
    AM: {
        name: 'Armenia',
        currencies: 'AMD',
        languages: 'hye,rus',
        code: 'ARM'
    },
    AW: {
        name: 'Aruba',
        currencies: 'AWG',
        languages: 'nld',
        code: 'ABW'
    },
    AC: {
        name: 'Ascension Island',
        currencies: 'USD',
        languages: 'eng',
        code: ''
    },
    AU: {
        name: 'Australia',
        currencies: 'AUD',
        languages: 'eng',
        code: 'AUS'
    },
    AT: {
        name: 'Austria',
        currencies: 'EUR',
        languages: 'deu',
        code: 'AUT'
    },
    AZ: {
        name: 'Azerbaijan',
        currencies: 'AZN',
        languages: 'aze',
        code: 'AZE'
    },
    BS: {
        name: 'Bahamas',
        currencies: 'BSD',
        languages: 'eng',
        code: 'BHS'
    },
    BH: {
        name: 'Bahrain',
        currencies: 'BHD',
        languages: 'ara',
        code: 'BHR'
    },
    BD: {
        name: 'Bangladesh',
        currencies: 'BDT',
        languages: 'ben',
        code: 'BGD'
    },
    BB: {
        name: 'Barbados',
        currencies: 'BBD',
        languages: 'eng',
        code: 'BRB'
    },
    BY: {
        name: 'Belarus',
        currencies: 'BYR',
        languages: 'bel,rus',
        code: 'BLR'
    },
    BE: {
        name: 'Belgium',
        currencies: 'EUR',
        languages: 'nld,fra,deu',
        code: 'BEL'
    },
    BZ: {
        name: 'Belize',
        currencies: 'BZD',
        languages: 'eng',
        code: 'BLZ'
    },
    BJ: {
        name: 'Benin',
        currencies: 'XOF',
        languages: 'fra',
        code: 'BEN'
    },
    BM: {
        name: 'Bermuda',
        currencies: 'BMD',
        languages: 'eng',
        code: 'BMU'
    },
    BT: {
        name: 'Bhutan',
        currencies: 'INR,BTN',
        languages: 'dzo',
        code: 'BTN'
    },
    BO: {
        name: 'Bolivia, Plurinational State Of',
        currencies: 'BOB,BOV',
        languages: 'spa,aym,que',
        code: 'BOL'
    },
    BQ: {
        name: 'Bonaire, Saint Eustatius And Saba',
        currencies: 'USD',
        languages: 'nld',
        code: 'BES'
    },
    BA: {
        name: 'Bosnia & Herzegovina',
        currencies: 'BAM',
        languages: 'bos,cre,srp',
        code: 'BIH'
    },
    BW: {
        name: 'Botswana',
        currencies: 'BWP',
        languages: 'eng,tsn',
        code: 'BWA'
    },
    BV: {
        name: 'Bouvet Island',
        currencies: 'NOK',
        languages: '',
        code: 'BVT'
    },
    BR: {
        name: 'Brazil',
        currencies: 'BRL',
        languages: 'por',
        code: 'BRA'
    },
    IO: {
        name: 'British Indian Ocean Territory',
        currencies: 'USD',
        languages: 'eng',
        code: 'IOT'
    },
    BN: {
        name: 'Brunei Darussalam',
        currencies: 'BND',
        languages: 'msa,eng',
        code: 'BRN'
    },
    BG: {
        name: 'Bulgaria',
        currencies: 'BGN',
        languages: 'bul',
        code: 'BGR'
    },
    BF: {
        name: 'Burkina Faso',
        currencies: 'XOF',
        languages: 'fra',
        code: 'BFA'
    },
    BI: {
        name: 'Burundi',
        currencies: 'BIF',
        languages: 'fra',
        code: 'BDI'
    },
    CV: {
        name: 'Cabo Verde',
        currencies: 'CVE',
        languages: 'por',
        code: 'CPV'
    },
    KH: {
        name: 'Cambodia',
        currencies: 'KHR',
        languages: 'khm',
        code: 'KHM'
    },
    CM: {
        name: 'Cameroon',
        currencies: 'XAF',
        languages: 'eng,fra',
        code: 'CMR'
    },
    CA: {
        name: 'Canada',
        currencies: 'CAD',
        languages: 'eng,fra',
        code: 'CAN'
    },
    IC: {
        name: 'Canary Islands',
        currencies: 'EUR',
        languages: '',
        code: ''
    },
    KY: {
        name: 'Cayman Islands',
        currencies: 'KYD',
        languages: 'eng',
        code: 'CYM'
    },
    CF: {
        name: 'Central African Republic',
        currencies: 'XAF',
        languages: 'fra,sag',
        code: 'CAF'
    },
    EA: {
        name: 'Ceuta, Mulilla',
        currencies: 'EUR',
        languages: '',
        code: ''
    },
    TD: {
        name: 'Chad',
        currencies: 'XAF',
        languages: 'ara,fra',
        code: 'TCD'
    },
    CL: {
        name: 'Chile',
        currencies: 'CLP,CLF',
        languages: 'spa',
        code: 'CHL'
    },
    CN: {
        name: 'China',
        currencies: 'CNY',
        languages: 'zho',
        code: 'CHN'
    },
    CX: {
        name: 'Christmas Island',
        currencies: 'AUD',
        languages: 'eng',
        code: 'CXR'
    },
    CP: {
        name: 'Clipperton Island',
        currencies: 'EUR',
        languages: '',
        code: ''
    },
    CC: {
        name: 'Cocos (Keeling) Islands',
        currencies: 'AUD',
        languages: 'eng',
        code: 'CCK'
    },
    CO: {
        name: 'Colombia',
        currencies: 'COP,COU',
        languages: 'spa',
        code: 'COL'
    },
    KM: {
        name: 'Comoros',
        currencies: 'KMF',
        languages: 'ara,fra',
        code: 'COM'
    },
    CK: {
        name: 'Cook Islands',
        currencies: 'NZD',
        languages: 'eng,mri',
        code: 'COK'
    },
    CR: {
        name: 'Costa Rica',
        currencies: 'CRC',
        languages: 'spa',
        code: 'CRI'
    },
    HR: {
        name: 'Croatia',
        currencies: 'HRK',
        languages: 'hrv',
        code: 'HRV'
    },
    CU: {
        name: 'Cuba',
        currencies: 'CUP,CUC',
        languages: 'spa',
        code: 'CUB'
    },
    CW: {
        name: 'Curacao',
        currencies: 'ANG',
        languages: 'nld',
        code: 'CUW'
    },
    CY: {
        name: 'Cyprus',
        currencies: 'EUR',
        languages: 'ell,tur',
        code: 'CYP'
    },
    CZ: {
        name: 'Czech Republic',
        currencies: 'CZK',
        languages: 'ces',
        code: 'CZE'
    },
    CI: {
        name: "Côte d'Ivoire",
        currencies: 'XOF',
        languages: 'fra',
        code: 'CIV'
    },
    CD: {
        name: 'Democratic Republic Of Congo',
        currencies: 'CDF',
        languages: 'fra,lin,kon,swa',
        code: 'COD'
    },
    DK: {
        name: 'Denmark',
        currencies: 'DKK',
        languages: 'dan',
        code: 'DNK'
    },
    DG: {
        name: 'Diego Garcia',
        currencies: 'USD',
        languages: '',
        code: ''
    },
    DJ: {
        name: 'Djibouti',
        currencies: 'DJF',
        languages: 'ara,fra',
        code: 'DJI'
    },
    DM: {
        name: 'Dominica',
        currencies: 'XCD',
        languages: 'eng',
        code: 'DMA'
    },
    DO: {
        name: 'Dominican Republic',
        currencies: 'DOP',
        languages: 'spa',
        code: 'DOM'
    },
    EC: {
        name: 'Ecuador',
        currencies: 'USD',
        languages: 'spa,que',
        code: 'ECU'
    },
    EG: {
        name: 'Egypt',
        currencies: 'EGP',
        languages: 'ara',
        code: 'EGY'
    },
    SV: {
        name: 'El Salvador',
        currencies: 'USD',
        languages: 'spa',
        code: 'SLV'
    },
    GQ: {
        name: 'Equatorial Guinea',
        currencies: 'XAF',
        languages: 'spa,fra,por',
        code: 'GNQ'
    },
    ER: {
        name: 'Eritrea',
        currencies: 'ERN',
        languages: 'eng,ara,tir',
        code: 'ERI'
    },
    EE: {
        name: 'Estonia',
        currencies: 'EUR',
        languages: 'est',
        code: 'EST'
    },
    ET: {
        name: 'Ethiopia',
        currencies: 'ETB',
        languages: 'amh',
        code: 'ETH'
    },
    EU: {
        name: 'European Union',
        currencies: 'EUR',
        languages: '',
        code: ''
    },
    FK: {
        name: 'Falkland Islands',
        currencies: 'FKP',
        languages: 'eng',
        code: 'FLK'
    },
    FO: {
        name: 'Faroe Islands',
        currencies: 'DKK',
        languages: 'fao,dan',
        code: 'FRO'
    },
    FJ: {
        name: 'Fiji',
        currencies: 'FJD',
        languages: 'eng,fij',
        code: 'FJI'
    },
    FI: {
        name: 'Finland',
        currencies: 'EUR',
        languages: 'fin,swe',
        code: 'FIN'
    },
    FR: {
        name: 'France',
        currencies: 'EUR',
        languages: 'fra',
        code: 'FRA'
    },
    FX: {
        name: 'France, Metropolitan',
        currencies: 'EUR',
        languages: 'fra',
        code: ''
    },
    GF: {
        name: 'French Guiana',
        currencies: 'EUR',
        languages: 'fra',
        code: 'GUF'
    },
    PF: {
        name: 'French Polynesia',
        currencies: 'XPF',
        languages: 'fra',
        code: 'PYF'
    },
    TF: {
        name: 'French Southern Territories',
        currencies: 'EUR',
        languages: 'fra',
        code: 'ATF'
    },
    GA: {
        name: 'Gabon',
        currencies: 'XAF',
        languages: 'fra',
        code: 'GAB'
    },
    GM: {
        name: 'Gambia',
        currencies: 'GMD',
        languages: 'eng',
        code: 'GMB'
    },
    GE: {
        name: 'Georgia',
        currencies: 'GEL',
        languages: 'kat',
        code: 'GEO'
    },
    DE: {
        name: 'Germany',
        currencies: 'EUR',
        languages: 'deu',
        code: 'DEU'
    },
    GH: {
        name: 'Ghana',
        currencies: 'GHS',
        languages: 'eng',
        code: 'GHA'
    },
    GI: {
        name: 'Gibraltar',
        currencies: 'GIP',
        languages: 'eng',
        code: 'GIB'
    },
    GR: {
        name: 'Greece',
        currencies: 'EUR',
        languages: 'ell',
        code: 'GRC'
    },
    GL: {
        name: 'Greenland',
        currencies: 'DKK',
        languages: 'kal',
        code: 'GRL'
    },
    GD: {
        name: 'Grenada',
        currencies: 'XCD',
        languages: 'eng',
        code: 'GRD'
    },
    GP: {
        name: 'Guadeloupe',
        currencies: 'EUR',
        languages: 'fra',
        code: 'GLP'
    },
    GU: {
        name: 'Guam',
        currencies: 'USD',
        languages: 'eng',
        code: 'GUM'
    },
    GT: {
        name: 'Guatemala',
        currencies: 'GTQ',
        languages: 'spa',
        code: 'GTM'
    },
    GG: {
        name: 'Guernsey',
        currencies: 'GBP',
        languages: 'fra',
        code: 'GGY'
    },
    GN: {
        name: 'Guinea',
        currencies: 'GNF',
        languages: 'fra',
        code: 'GIN'
    },
    GW: {
        name: 'Guinea-bissau',
        currencies: 'XOF',
        languages: 'por',
        code: 'GNB'
    },
    GY: {
        name: 'Guyana',
        currencies: 'GYD',
        languages: 'eng',
        code: 'GUY'
    },
    HT: {
        name: 'Haiti',
        currencies: 'HTG,USD',
        languages: 'fra,hat',
        code: 'HTI'
    },
    HM: {
        name: 'Heard Island And McDonald Islands',
        currencies: 'AUD',
        languages: '',
        code: 'HMD'
    },
    HN: {
        name: 'Honduras',
        currencies: 'HNL',
        languages: 'spa',
        code: 'HND'
    },
    HK: {
        name: 'Hong Kong',
        currencies: 'HKD',
        languages: 'zho,eng',
        code: 'HKG'
    },
    HU: {
        name: 'Hungary',
        currencies: 'HUF',
        languages: 'hun',
        code: 'HUN'
    },
    IS: {
        name: 'Iceland',
        currencies: 'ISK',
        languages: 'isl',
        code: 'ISL'
    },
    IN: {
        name: 'India',
        currencies: 'INR',
        languages: 'eng,hin',
        code: 'IND'
    },
    ID: {
        name: 'Indonesia',
        currencies: 'IDR',
        languages: 'ind',
        code: 'IDN'
    },
    IR: {
        name: 'Iran, Islamic Republic Of',
        currencies: 'IRR',
        languages: 'fas',
        code: 'IRN'
    },
    IQ: {
        name: 'Iraq',
        currencies: 'IQD',
        languages: 'ara,kur',
        code: 'IRQ'
    },
    IE: {
        name: 'Ireland',
        currencies: 'EUR',
        languages: 'eng,gle',
        code: 'IRL'
    },
    IM: {
        name: 'Isle Of Man',
        currencies: 'GBP',
        languages: 'eng,glv',
        code: 'IMN'
    },
    IL: {
        name: 'Israel',
        currencies: 'ILS',
        languages: 'heb,ara,eng',
        code: 'ISR'
    },
    IT: {
        name: 'Italy',
        currencies: 'EUR',
        languages: 'ita',
        code: 'ITA'
    },
    JM: {
        name: 'Jamaica',
        currencies: 'JMD',
        languages: 'eng',
        code: 'JAM'
    },
    JP: {
        name: 'Japan',
        currencies: 'JPY',
        languages: 'jpn',
        code: 'JPN'
    },
    JE: {
        name: 'Jersey',
        currencies: 'GBP',
        languages: 'eng,fra',
        code: 'JEY'
    },
    JO: {
        name: 'Jordan',
        currencies: 'JOD',
        languages: 'ara',
        code: 'JOR'
    },
    KZ: {
        name: 'Kazakhstan',
        currencies: 'KZT',
        languages: 'kaz,rus',
        code: 'KAZ'
    },
    KE: {
        name: 'Kenya',
        currencies: 'KES',
        languages: 'eng,swa',
        code: 'KEN'
    },
    KI: {
        name: 'Kiribati',
        currencies: 'AUD',
        languages: 'eng',
        code: 'KIR'
    },
    KP: {
        name: "Korea, Democratic People's Republic Of",
        currencies: 'KPW',
        languages: 'kor',
        code: 'PRK'
    },
    KR: {
        name: 'Korea, Republic Of',
        currencies: 'KRW',
        languages: 'kor',
        code: 'KOR'
    },
    XK: {
        name: 'Kosovo',
        currencies: 'EUR',
        languages: 'sqi,srp,bos,tur,rom',
        code: ''
    },
    KW: {
        name: 'Kuwait',
        currencies: 'KWD',
        languages: 'ara',
        code: 'KWT'
    },
    KG: {
        name: 'Kyrgyzstan',
        currencies: 'KGS',
        languages: 'rus',
        code: 'KGZ'
    },
    LA: {
        name: "Lao People's Democratic Republic",
        currencies: 'LAK',
        languages: 'lao',
        code: 'LAO'
    },
    LV: {
        name: 'Latvia',
        currencies: 'EUR',
        languages: 'lav',
        code: 'LVA'
    },
    LB: {
        name: 'Lebanon',
        currencies: 'LBP',
        languages: 'ara,hye',
        code: 'LBN'
    },
    LS: {
        name: 'Lesotho',
        currencies: 'LSL,ZAR',
        languages: 'eng,sot',
        code: 'LSO'
    },
    LR: {
        name: 'Liberia',
        currencies: 'LRD',
        languages: 'eng',
        code: 'LBR'
    },
    LY: {
        name: 'Libya',
        currencies: 'LYD',
        languages: 'ara',
        code: 'LBY'
    },
    LI: {
        name: 'Liechtenstein',
        currencies: 'CHF',
        languages: 'deu',
        code: 'LIE'
    },
    LT: {
        name: 'Lithuania',
        currencies: 'EUR',
        languages: 'lit',
        code: 'LTU'
    },
    LU: {
        name: 'Luxembourg',
        currencies: 'EUR',
        languages: 'fra,deu,ltz',
        code: 'LUX'
    },
    MO: {
        name: 'Macao',
        currencies: 'MOP',
        languages: 'zho,por',
        code: 'MAC'
    },
    MK: {
        name: 'Macedonia, The Former Yugoslav Republic Of',
        currencies: 'MKD',
        languages: 'mkd',
        code: 'MKD'
    },
    MG: {
        name: 'Madagascar',
        currencies: 'MGA',
        languages: 'fra,mlg',
        code: 'MDG'
    },
    MW: {
        name: 'Malawi',
        currencies: 'MWK',
        languages: 'eng,nya',
        code: 'MWI'
    },
    MY: {
        name: 'Malaysia',
        currencies: 'MYR',
        languages: 'msa,eng',
        code: 'MYS'
    },
    MV: {
        name: 'Maldives',
        currencies: 'MVR',
        languages: 'div',
        code: 'MDV'
    },
    ML: {
        name: 'Mali',
        currencies: 'XOF',
        languages: 'fra',
        code: 'MLI'
    },
    MT: {
        name: 'Malta',
        currencies: 'EUR',
        languages: 'mlt,eng',
        code: 'MLT'
    },
    MH: {
        name: 'Marshall Islands',
        currencies: 'USD',
        languages: 'eng,mah',
        code: 'MHL'
    },
    MQ: {
        name: 'Martinique',
        currencies: 'EUR',
        languages: '',
        code: 'MTQ'
    },
    MR: {
        name: 'Mauritania',
        currencies: 'MRO',
        languages: 'ara,fra',
        code: 'MRT'
    },
    MU: {
        name: 'Mauritius',
        currencies: 'MUR',
        languages: 'eng,fra',
        code: 'MUS'
    },
    YT: {
        name: 'Mayotte',
        currencies: 'EUR',
        languages: 'fra',
        code: 'MYT'
    },
    MX: {
        name: 'Mexico',
        currencies: 'MXN,MXV',
        languages: 'spa',
        code: 'MEX'
    },
    FM: {
        name: 'Micronesia, Federated States Of',
        currencies: 'USD',
        languages: 'eng',
        code: 'FSM'
    },
    MD: {
        name: 'Moldova',
        currencies: 'MDL',
        languages: 'ron',
        code: 'MDA'
    },
    MC: {
        name: 'Monaco',
        currencies: 'EUR',
        languages: 'fra',
        code: 'MCO'
    },
    MN: {
        name: 'Mongolia',
        currencies: 'MNT',
        languages: 'mon',
        code: 'MNG'
    },
    ME: {
        name: 'Montenegro',
        currencies: 'EUR',
        languages: 'mot',
        code: 'MNE'
    },
    MS: {
        name: 'Montserrat',
        currencies: 'XCD',
        languages: '',
        code: 'MSR'
    },
    MA: {
        name: 'Morocco',
        currencies: 'MAD',
        languages: 'ara',
        code: 'MAR'
    },
    MZ: {
        name: 'Mozambique',
        currencies: 'MZN',
        languages: 'por',
        code: 'MOZ'
    },
    MM: {
        name: 'Myanmar',
        currencies: 'MMK',
        languages: 'mya',
        code: 'MMR'
    },
    NA: {
        name: 'Namibia',
        currencies: 'NAD,ZAR',
        languages: 'eng',
        code: 'NAM'
    },
    NR: {
        name: 'Nauru',
        currencies: 'AUD',
        languages: 'eng,nau',
        code: 'NRU'
    },
    NP: {
        name: 'Nepal',
        currencies: 'NPR',
        languages: 'nep',
        code: 'NPL'
    },
    NL: {
        name: 'Netherlands',
        currencies: 'EUR',
        languages: 'nld',
        code: 'NLD'
    },
    NC: {
        name: 'New Caledonia',
        currencies: 'XPF',
        languages: 'fra',
        code: 'NCL'
    },
    NZ: {
        name: 'New Zealand',
        currencies: 'NZD',
        languages: 'eng',
        code: 'NZL'
    },
    NI: {
        name: 'Nicaragua',
        currencies: 'NIO',
        languages: 'spa',
        code: 'NIC'
    },
    NE: {
        name: 'Niger',
        currencies: 'XOF',
        languages: 'fra',
        code: 'NER'
    },
    NG: {
        name: 'Nigeria',
        currencies: 'NGN',
        languages: 'eng',
        code: 'NGA'
    },
    NU: {
        name: 'Niue',
        currencies: 'NZD',
        languages: 'eng',
        code: 'NIU'
    },
    NF: {
        name: 'Norfolk Island',
        currencies: 'AUD',
        languages: 'eng',
        code: 'NFK'
    },
    MP: {
        name: 'Northern Mariana Islands',
        currencies: 'USD',
        languages: 'eng',
        code: 'MNP'
    },
    NO: {
        name: 'Norway',
        currencies: 'NOK',
        languages: 'nor',
        code: 'NOR'
    },
    OM: {
        name: 'Oman',
        currencies: 'OMR',
        languages: 'ara',
        code: 'OMN'
    },
    PK: {
        name: 'Pakistan',
        currencies: 'PKR',
        languages: 'urd,eng',
        code: 'PAK'
    },
    PW: {
        name: 'Palau',
        currencies: 'USD',
        languages: 'eng',
        code: 'PLW'
    },
    PS: {
        name: 'Palestinian Territory, Occupied',
        currencies: 'JOD,EGP,ILS',
        languages: 'ara',
        code: 'PSE'
    },
    PA: {
        name: 'Panama',
        currencies: 'PAB,USD',
        languages: 'spa',
        code: 'PAN'
    },
    PG: {
        name: 'Papua New Guinea',
        currencies: 'PGK',
        languages: 'eng',
        code: 'PNG'
    },
    PY: {
        name: 'Paraguay',
        currencies: 'PYG',
        languages: 'spa',
        code: 'PRY'
    },
    PE: {
        name: 'Peru',
        currencies: 'PEN',
        languages: 'spa,aym,que',
        code: 'PER'
    },
    PH: {
        name: 'Philippines',
        currencies: 'PHP',
        languages: 'eng',
        code: 'PHL'
    },
    PN: {
        name: 'Pitcairn',
        currencies: 'NZD',
        languages: 'eng',
        code: 'PCN'
    },
    PL: {
        name: 'Poland',
        currencies: 'PLN',
        languages: 'pol',
        code: 'POL'
    },
    PT: {
        name: 'Portugal',
        currencies: 'EUR',
        languages: 'por',
        code: 'PRT'
    },
    PR: {
        name: 'Puerto Rico',
        currencies: 'USD',
        languages: 'spa,eng',
        code: 'PRI'
    },
    QA: {
        name: 'Qatar',
        currencies: 'QAR',
        languages: 'ara',
        code: 'QAT'
    },
    CG: {
        name: 'Republic Of Congo',
        currencies: 'XAF',
        languages: 'fra,lin',
        code: 'COG'
    },
    RE: {
        name: 'Reunion',
        currencies: 'EUR',
        languages: 'fra',
        code: 'REU'
    },
    RO: {
        name: 'Romania',
        currencies: 'RON',
        languages: 'ron',
        code: 'ROU'
    },
    RU: {
        name: 'Russian Federation',
        currencies: 'RUB',
        languages: 'rus',
        code: 'RUS'
    },
    RW: {
        name: 'Rwanda',
        currencies: 'RWF',
        languages: 'eng,fra,kin',
        code: 'RWA'
    },
    BL: {
        name: 'Saint Barthélemy',
        currencies: 'EUR',
        languages: 'fra',
        code: 'BLM'
    },
    SH: {
        name: 'Saint Helena, Ascension And Tristan Da Cunha',
        currencies: 'SHP',
        languages: 'eng',
        code: 'SHN'
    },
    KN: {
        name: 'Saint Kitts And Nevis',
        currencies: 'XCD',
        languages: 'eng',
        code: 'KNA'
    },
    LC: {
        name: 'Saint Lucia',
        currencies: 'XCD',
        languages: 'eng',
        code: 'LCA'
    },
    MF: {
        name: 'Saint Martin',
        currencies: 'EUR',
        languages: 'fra',
        code: 'MAF'
    },
    PM: {
        name: 'Saint Pierre And Miquelon',
        currencies: 'EUR',
        languages: 'eng',
        code: 'SPM'
    },
    VC: {
        name: 'Saint Vincent And The Grenadines',
        currencies: 'XCD',
        languages: 'eng',
        code: 'VCT'
    },
    WS: {
        name: 'Samoa',
        currencies: 'WST',
        languages: 'eng,smo',
        code: 'WSM'
    },
    SM: {
        name: 'San Marino',
        currencies: 'EUR',
        languages: 'ita',
        code: 'SMR'
    },
    ST: {
        name: 'Sao Tome and Principe',
        currencies: 'STD',
        languages: 'por',
        code: 'STP'
    },
    SA: {
        name: 'Saudi Arabia',
        currencies: 'SAR',
        languages: 'ara',
        code: 'SAU'
    },
    SN: {
        name: 'Senegal',
        currencies: 'XOF',
        languages: 'fra',
        code: 'SEN'
    },
    RS: {
        name: 'Serbia',
        currencies: 'RSD',
        languages: 'srp',
        code: 'SRB'
    },
    SC: {
        name: 'Seychelles',
        currencies: 'SCR',
        languages: 'eng,fra',
        code: 'SYC'
    },
    SL: {
        name: 'Sierra Leone',
        currencies: 'SLL',
        languages: 'eng',
        code: 'SLE'
    },
    SG: {
        name: 'Singapore',
        currencies: 'SGD',
        languages: 'eng,zho,msa,tam',
        code: 'SGP'
    },
    SX: {
        name: 'Sint Maarten',
        currencies: 'ANG',
        languages: 'nld',
        code: 'SXM'
    },
    SK: {
        name: 'Slovakia',
        currencies: 'EUR',
        languages: 'slk',
        code: 'SVK'
    },
    SI: {
        name: 'Slovenia',
        currencies: 'EUR',
        languages: 'slv',
        code: 'SVN'
    },
    SB: {
        name: 'Solomon Islands',
        currencies: 'SBD',
        languages: 'eng',
        code: 'SLB'
    },
    SO: {
        name: 'Somalia',
        currencies: 'SOS',
        languages: 'som',
        code: 'SOM'
    },
    ZA: {
        name: 'South Africa',
        currencies: 'ZAR',
        languages: 'afr,eng,nbl,som,tso,ven,xho,zul',
        code: 'ZAF'
    },
    GS: {
        name: 'South Georgia And The South Sandwich Islands',
        currencies: 'GBP',
        languages: 'eng',
        code: 'SGS'
    },
    SS: {
        name: 'South Sudan',
        currencies: 'SSP',
        languages: 'eng',
        code: 'SSD'
    },
    ES: {
        name: 'Spain',
        currencies: 'EUR',
        languages: 'spa',
        code: 'ESP'
    },
    LK: {
        name: 'Sri Lanka',
        currencies: 'LKR',
        languages: 'sin,tam',
        code: 'LKA'
    },
    SD: {
        name: 'Sudan',
        currencies: 'SDG',
        languages: 'ara,eng',
        code: 'SDN'
    },
    SR: {
        name: 'Suriname',
        currencies: 'SRD',
        languages: 'nld',
        code: 'SUR'
    },
    SJ: {
        name: 'Svalbard And Jan Mayen',
        currencies: 'NOK',
        languages: '',
        code: 'SJM'
    },
    SZ: {
        name: 'Swaziland',
        currencies: 'SZL',
        languages: 'eng,ssw',
        code: 'SWZ'
    },
    SE: {
        name: 'Sweden',
        currencies: 'SEK',
        languages: 'swe',
        code: 'SWE'
    },
    CH: {
        name: 'Switzerland',
        currencies: 'CHF,CHE,CHW',
        languages: 'deu,fra,ita,roh',
        code: 'CHE'
    },
    SY: {
        name: 'Syrian Arab Republic',
        currencies: 'SYP',
        languages: 'ara',
        code: 'SYR'
    },
    TW: {
        name: 'Taiwan',
        currencies: 'TWD',
        languages: 'zho',
        code: 'TWN'
    },
    TJ: {
        name: 'Tajikistan',
        currencies: 'TJS',
        languages: 'tgk,rus',
        code: 'TJK'
    },
    TZ: {
        name: 'Tanzania, United Republic Of',
        currencies: 'TZS',
        languages: 'swa,eng',
        code: 'TZA'
    },
    TH: {
        name: 'Thailand',
        currencies: 'THB',
        languages: 'tha',
        code: 'THA'
    },
    TL: {
        name: 'Timor-Leste, Democratic Republic of',
        currencies: 'USD',
        languages: 'por',
        code: 'TLS'
    },
    TG: {
        name: 'Togo',
        currencies: 'XOF',
        languages: 'fra',
        code: 'TGO'
    },
    TK: {
        name: 'Tokelau',
        currencies: 'NZD',
        languages: 'eng',
        code: 'TKL'
    },
    TO: {
        name: 'Tonga',
        currencies: 'TOP',
        languages: 'eng',
        code: 'TON'
    },
    TT: {
        name: 'Trinidad And Tobago',
        currencies: 'TTD',
        languages: 'eng',
        code: 'TTO'
    },
    TA: {
        name: 'Tristan de Cunha',
        currencies: 'GBP',
        languages: '',
        code: ''
    },
    TN: {
        name: 'Tunisia',
        currencies: 'TND',
        languages: 'ara',
        code: 'TUN'
    },
    TR: {
        name: 'Turkey',
        currencies: 'TRY',
        languages: 'tur',
        code: 'TUR'
    },
    TM: {
        name: 'Turkmenistan',
        currencies: 'TMT',
        languages: 'tuk,rus',
        code: 'TKM'
    },
    TC: {
        name: 'Turks And Caicos Islands',
        currencies: 'USD',
        languages: 'eng',
        code: 'TCA'
    },
    TV: {
        name: 'Tuvalu',
        currencies: 'AUD',
        languages: 'eng',
        code: 'TUV'
    },
    UG: {
        name: 'Uganda',
        currencies: 'UGX',
        languages: 'eng,swa',
        code: 'UGA'
    },
    UA: {
        name: 'Ukraine',
        currencies: 'UAH',
        languages: 'ukr,rus',
        code: 'UKR'
    },
    AE: {
        name: 'United Arab Emirates',
        currencies: 'AED',
        languages: 'ara',
        code: 'ARE'
    },
    GB: {
        name: 'United Kingdom',
        currencies: 'GBP',
        languages: 'eng,cor,gle,gla,cym',
        code: 'GBR'
    },
    UK: {
        name: 'United Kingdom',
        currencies: 'GBP',
        languages: 'eng,cor,gle,gla,cym',
        code: ''
    },
    US: {
        name: 'United States',
        currencies: 'USD',
        languages: 'eng',
        code: 'USA'
    },
    UM: {
        name: 'United States Minor Outlying Islands',
        currencies: 'USD',
        languages: 'eng',
        code: 'UMI'
    },
    UY: {
        name: 'Uruguay',
        currencies: 'UYU,UYI',
        languages: 'spa',
        code: 'URY'
    },
    SU: {
        name: 'USSR',
        currencies: 'RUB',
        languages: 'rus',
        code: ''
    },
    UZ: {
        name: 'Uzbekistan',
        currencies: 'UZS',
        languages: 'uzb,rus',
        code: 'UZB'
    },
    VU: {
        name: 'Vanuatu',
        currencies: 'VUV',
        languages: 'bis,eng,fra',
        code: 'VUT'
    },
    VA: {
        name: 'Vatican City State',
        currencies: 'EUR',
        languages: 'ita',
        code: 'VAT'
    },
    VE: {
        name: 'Venezuela, Bolivarian Republic Of',
        currencies: 'VEF',
        languages: 'spa',
        code: 'VEN'
    },
    VN: {
        name: 'Viet Nam',
        currencies: 'VND',
        languages: 'vie',
        code: 'VNM'
    },
    VG: {
        name: 'Virgin Islands (British)',
        currencies: 'USD',
        languages: 'eng',
        code: 'VGB'
    },
    VI: {
        name: 'Virgin Islands (US)',
        currencies: 'USD',
        languages: 'eng',
        code: 'VIR'
    },
    WF: {
        name: 'Wallis And Futuna',
        currencies: 'XPF',
        languages: 'fra',
        code: 'WLF'
    },
    EH: {
        name: 'Western Sahara',
        currencies: 'MAD',
        languages: '',
        code: 'ESH'
    },
    YE: {
        name: 'Yemen',
        currencies: 'YER',
        languages: 'ara',
        code: 'YEM'
    },
    ZM: {
        name: 'Zambia',
        currencies: 'ZMW',
        languages: 'eng',
        code: 'ZMB'
    },
    ZW: {
        name: 'Zimbabwe',
        currencies: 'USD,ZAR,BWP,GBP,EUR',
        languages: 'eng,sna,nde',
        code: 'ZWE'
    },
    AX: {
        name: 'Åland Islands',
        currencies: 'EUR',
        languages: 'swe',
        code: 'ALA'
    }
};
export const cities_list = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujranwala",
    "Abbottabad",
    "Bahawalpur",
    "Sargodha",
    "Sukkur",
    "Jhang",
    "Sheikhupura",
    "Rahim Yar Khan",
    "Mardan",
    "Kasur",
    "Dera Ghazi Khan",
    "Gujrat",
    "Hafizabad",
    "Larkana",
    "Sahiwal",
    "Wah Cantt",
    "Okara",
    "Chiniot",
    "Kamoke",
    "Sukkur",
    "Kohat",
    "Taxila",
    "Burewala",
    "Muzaffargarh",
    "Chakwal",
    "Mandi Bahauddin",
    "Jhelum",
    "Ghotki",
    "Jacobabad",
    "Khanewal",
    "Haripur",
    "Dadu",
    "Kandhkot",
    "Kasur",
    "Shikarpur",
    "Khuzdar",
    "Badin",
    "Loralai",
    "Turbat",
    "Mianwali",
   
  ];
  

  