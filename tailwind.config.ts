import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
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
                filterBorderColor: '#cdd5e1'
            }
        }
    },
    plugins: []
};
export default config;
