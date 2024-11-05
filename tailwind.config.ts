import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                mainBackgroundColor: '#2C79FF05',
                mainTextColor: '#010F2E',
                textBlackColor: '#201E1A',
                darkTextBlueColor: '#435FB5',
                textLightBlackColor: '#333333',
                lightGrayColor: '#495057',
                profileBgColor: '#eaf2ff',
                darkGrayColor: '#626262',
                blueColor: '#357CFA',
                borderColor: '#CCCCCC',
                personalInfoBorderColor: '#E7E7E7',
                footerBgColor: '#F5F5F5',
                facebookBgColor: '#1260BC',
                twitterBgColor: '#0FBDF4',
                telegramBgColor: '#62D9FF',
                grayColor: '#717070',
                grayBorderColor: '#9aa0ae',
                scholarshipBorderColor: '#eaf2ff',
                countryBorderColor: '#caddff',
                aboutUsTextColor: '#777777',
                talentedTeamBorderColor: '#CDCDCD',
                talentedTeamBgColor: '#f4f8ff',
                termsanduseBorderColor: '#b7d0ff',
                lightBlue: '#eaf1ff',
                lightColor: '#fbfcff',
                purpleColor: '#9747FF',
                loginBgColor: '#fbfcff',
                siderBarBottom: '#D9D9D9',
                filterBorderColor: '#cdd5e1',
                redColor: '#FF0404',
                BgColorPassport: '#EDF4FF',
                BgCardPassport: '#F6FAFF'
            },
            boxShadow: {
                custom: '0 4px 4px 0 rgba(190, 190, 190, 0.25)',
                RequirementBox: '0px 4px 16.1px 0px rgba(190, 190, 190, 0.25)',
                progressBarShadow:
                    '0px 11px 25.8px 0px rgba(190, 190, 190, 0.15);',
                customTermsAndConditionShadow:
                    '0px 2px 9px 0px rgba(0, 0, 0, 0.09)'
            },
            height: {
                headerStickyHeight: 'calc(100vh - 110px)',
                instituteStickyHeight: 'calc(100vh - 230px)'
            },
            maxHeight: {
                headerStickyHeight: 'calc(100vh - 110px)'
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-10deg)' },
                    '50%': { transform: 'rotate(10deg)' }
                }
            },
            backgroundImage: {
                heroSectionImage:
                    "linear-gradient(to bottom, #2C79FF00 30%, #00387dcc), url('/images/Home/home-page-hero-section-bg.svg')"
            }
        }
    },
    plugins: []
};
export default config;
