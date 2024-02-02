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
                mainTextColor: '#010F2E',
                textBlackColor: '#201E1A',
                darkTextBlueColor: '#435FB5',
                textLightBlackColor: '#333333',
                lightGrayColor: '#495057',
                profileBgColor: '#eaf2ff',
                darkGrayColor: '#626262',
                blueColor: '#2c79ff',
                borderColor: '#CCCCCC',
                personalInfoBorderColor: '#E7E7E7',
                footerBgColor: '#F5F5F5',
                facebookBgColor: '#1260BC',
                twitterBgColor: '#0FBDF4',
                telegramBgColor: '#62D9FF',
                grayColor: '#717070',
                testimonalBgColor: '#fbfcff',
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
                heartBgColor: '#ccd2db',
                loginBgColor: '#fbfcff',
                pinkColor: '#F2277E',
                siderBarBottom: '#D9D9D9',
                filterBorderColor: '#cdd5e1',
                redColor:"#FF0404"
            },
            boxShadow: {
                
                'bottom-shadow': '0 2px 2px 0 rgba(190, 190, 190, 0.15)',
                custom: '0 4px 4px 0 rgba(190, 190, 190, 0.25)',
                RequirementBox: '0px 4px 16.1px 0px rgba(190, 190, 190, 0.25)',
                progressBarShadow:"0px 11px 25.8px 0px rgba(190, 190, 190, 0.15);"
            },
            height: {
                headerStickyHeight: 'calc(100vh - 110px)'
            },
            maxHeight: {
                headerStickyHeight: 'calc(100vh - 110px)'
            }
        }
    },
    plugins: []
};
export default config;
