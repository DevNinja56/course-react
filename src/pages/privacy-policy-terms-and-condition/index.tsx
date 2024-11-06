import LetUsHelpContainer from '@/components/LetUsHelpContainer';
import HereSectionCircle from '@/components/privacy-policy-terms-and-condition/hereSectionCircle';
import PrivacyPolicyContainer from '@/components/privacy-policy-terms-and-condition/privacyPolicyContainer';
import { ROUTES } from '@/config/constant';
import Image from 'next/image';
import React from 'react';

const PrivacyPolicyTermsAndCondition = () => {
    return (
        <>
            <div className="w-full py-10 flex flex-col items-center bg-[#2B79FF] gap-5">
                <h1 className="text-white font-black text-lg md:text-3xl lg:text-4xl">
                    Privacy Policy - Terms & Conditions
                </h1>
                <button className="py-3 px-4 md:px-5 bg-white rounded-[29px] text-[#2B79FF] text-sm font-medium hover:bg-[#2B79FF] hover:text-white border hover:border-white">
                    Check out the details below
                </button>
            </div>
            <div className="flex flex-col items-center gap-12 py-3 md:py-5 lg:pt-10 lg:pb-14 w-10/12 mx-auto relative h-auto lg:h-72 lg:mb-12">
                <HereSectionCircle
                    color="bg-[#F4C01E]"
                    position="left-0 bottom-8"
                />
                <HereSectionCircle
                    color="bg-[#F4C01E]"
                    position="left-24 top-8"
                    size="h-4 w-4"
                />
                <HereSectionCircle
                    color="bg-[#F4C01E]"
                    position="left-64 xl:left-80 top-11"
                />
                <HereSectionCircle
                    color="bg-[#10BDF3]"
                    position="left-16 bottom-[70px]"
                    size="h-[8px] w-[8px]"
                />
                <HereSectionCircle
                    color="bg-[#10BDF3]"
                    position="left-48 bottom-[70px]"
                    size="h-8 w-8"
                />
                <HereSectionCircle
                    color="bg-blueColor"
                    position="left-80 xl:left-96 bottom-12"
                    size="h-[8px] w-[8px]"
                />
                <div className="h-32 w-32 md:h-40 md:w-40 lg:min-h-44 lg:min-w-44 rounded-full bg-gray-100 bg-opacity-40 flex justify-center items-center p-2.5 md:p-[14px] lg:mt-10">
                    <div className="h-full w-full rounded-full bg-[#1D4BF91A] flex justify-center items-center p-2.5 md:p-[14px]">
                        <div className="h-full w-full rounded-full bg-[#1D4BF91A] flex justify-center items-center p-2.5 md:p-[14px]">
                            <div className="h-full w-full rounded-full bg-blueColor flex items-center justify-center pb-2 pr-2 shadow-privacyPolicyShadow">
                                <Image
                                    height={2267}
                                    width={2267}
                                    className="h-8 w-8 md:h-12 md:w-12"
                                    alt="logo"
                                    src="/images/T&C/privacy-policy-and-t&c-logo.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <HereSectionCircle
                    color="bg-[#F4C01E]"
                    position="right-72 xl:right-[370px] bottom-8"
                    size="h-8 w-8"
                />
                <HereSectionCircle
                    color="bg-[#F4C01E]"
                    position="right-[231px] top-40"
                    size="h-[8px] w-[8px]"
                />
                <HereSectionCircle
                    color="bg-[#10BDF3]"
                    position="right-[330px] xl:right-[465px] top-20"
                    size="h-[8px] w-[8px]"
                />
                <HereSectionCircle
                    color="bg-[#10BDF3]"
                    position="right-32 xl:right-52 top-12"
                />
                <HereSectionCircle
                    color="bg-blueColor"
                    position="right-12 bottom-12"
                    size="h-[8px] w-[8px]"
                />
                <HereSectionCircle
                    color="bg-blueColor"
                    position="right-0 top-20"
                    size="h-8 w-8"
                />
            </div>
            <div className="w-full md:w-9/12 xl:w-7/12 xl:px-5 md:text-lg mx-auto flex flex-col items-center mb-5 md:mb-16 text-sm px-2 md:px-0">
                <span className="font-bold text-center">
                    Please read the privacy policy carefully as it applies to
                    your use of the Courseoptions.com.
                </span>
                <p className="text-center">
                    This privacy notice has been compiled to help you understand
                    why we ask you for your personal information when you use
                    one of our websites and how we will store and use this
                    information.
                </p>
            </div>
            <div className="flex flex-col items-center w-full gap-12 bg-profileBgColor pb-12 mb-10 relative">
                <Image
                    height={2168}
                    width={2181}
                    alt="circle-1"
                    src="/images/elipse.png"
                    className="absolute md:bottom-10 lg:bottom-36 right-16 xl:right-20 h-20 w-20 hidden lg:block"
                />
                <Image
                    height={2168}
                    width={2181}
                    alt="circle-1"
                    src="/images/elipse.png"
                    className="absolute bottom-96 lg:bottom-80 -left-10 lg:-left-20 h-16 w-16 lg:h-36 lg:w-36 hidden md:block"
                />
                <div className="w-full">
                    <div className="bg-[#2B79FF] w-full py-6 flex justify-center">
                        <p className="text-center text-white text-xs md:text-sm font-light w-full md:w-11/12 lg:w-7/12 mx-auto px-2 md:px-0">
                            The core purpose of courseoptions.com is helping you
                            and other users find suitable courses, learning
                            providers, and to assist in the admission process.
                            This is defined as our Legitimate Business Interest.
                            We process your personal data to help you make
                            informative decisions when selecting courses and
                            learning providers. We do that by:
                        </p>
                    </div>
                    <div className="w-full md:w-11/12 lg:w-10/12 mx-auto px-2 md:px-0 z-10 relative">
                        <div className="bg-white py-5 md:py-12 px-4 md:px-10 lg:pl-20 lg:pr-16 shadow-customTermsAndConditionShadow rounded-[18px] rounded-t-none flex items-start">
                            <div className="relative h-[420px] md:h-[342px] lg:h-[335px]">
                                <hr className="border md:border-2 border-[#2563EB] h-full" />
                            </div>
                            <ul className="font-medium text-sm text-mainTextColor flex flex-col gap-5 -ml-[5px] md:-ml-2.5">
                                <li className="flex items-start gap-3 md:gap-5 text-xs md:text-sm">
                                    <div className="min-h-2 min-w-2 md:min-h-4 md:min-w-4 rounded-full bg-[#2563EB]"></div>
                                    Providing extensive educational information
                                </li>
                                <li className="flex items-start gap-3 md:gap-5 text-xs md:text-sm">
                                    <div className="min-h-2 min-w-2 md:min-h-4 md:min-w-4 rounded-full bg-[#2563EB]"></div>
                                    Providing advertising and promotional
                                    opportunities for education providers{' '}
                                </li>
                                <li className="flex items-start gap-3 md:gap-5 text-xs md:text-sm">
                                    <div className="min-h-2 min-w-2 md:min-h-4 md:min-w-4 rounded-full bg-[#2563EB]"></div>
                                    Providing features to enable users to
                                    directly contact education providers{' '}
                                </li>
                                <li className="flex items-start gap-3 md:gap-5 text-xs md:text-sm">
                                    <div className="min-h-2 min-w-2 md:min-h-4 md:min-w-4 rounded-full bg-[#2563EB]"></div>
                                    Recommending things which we think you`“`ll
                                    like, such as courses and learning providers{' '}
                                </li>
                                <li className="flex items-start gap-3 md:gap-5 text-xs md:text-sm">
                                    <div className="min-h-2 min-w-2 md:min-h-4 md:min-w-4 rounded-full bg-[#2563EB]"></div>
                                    Notifying you about things you`“`ve told us
                                    you like, such as a new course in your local
                                    area{' '}
                                </li>
                                <li className="flex items-start gap-3 md:gap-5 text-xs md:text-sm">
                                    <div className="min-h-2 min-w-2 md:min-h-4 md:min-w-4 rounded-full bg-[#2563EB]"></div>
                                    Personalizing sections of our websites to
                                    your preferences{' '}
                                </li>
                                <li className="flex items-start gap-3 md:gap-5 text-xs md:text-sm">
                                    <div className="min-h-2 min-w-2 md:min-h-4 md:min-w-4 rounded-full bg-[#2563EB]"></div>
                                    Getting in touch if we need to tell you
                                    about something, like a change to our
                                    policies or issues with our service
                                </li>
                                <li className="flex items-start gap-3 md:gap-5 text-xs md:text-sm">
                                    <div className="min-h-2 min-w-2 md:min-h-4 md:min-w-4 rounded-full bg-[#2563EB]"></div>
                                    Monitoring usage and performance in order to
                                    improve the services we offer.
                                </li>
                                <li className="flex items-start gap-3 md:gap-5 text-xs md:text-sm">
                                    <div className="min-h-2 min-w-2 md:min-h-4 md:min-w-4 rounded-full bg-[#2563EB]"></div>
                                    Providing assistance and guidance in course
                                    selection, admission application submission,
                                    and visa guidance, as required, through our
                                    premium paid services.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-center w-full md:w-10/12 lg:w-9/12 text-xs md:text-base px-2 md:px-0">
                    This privacy notice applies to all our website and app users
                    regardless of location, whether registered or not, including
                    people responding to surveys, competitions and writing
                    reviews. We refer to all registered users as “members of our
                    community” Keeping your information safe and private is very
                    important to us. All our services are designed with privacy
                    and security in mind. We will never sell your personal
                    information to any third party.
                </p>
            </div>
            <div className="px-2 md:px-0 mb-14 relative flex flex-col items-center gap-7 text-3xl">
                <Image
                    height={2168}
                    width={2181}
                    alt="circle-1"
                    src="/images/elipse.png"
                    className="absolute md:bottom-10 lg:bottom-10 -right-16 h-36 w-36 hidden lg:block"
                />
                <Image
                    height={2168}
                    width={2181}
                    alt="circle-1"
                    src="/images/elipse.png"
                    className="absolute bottom-96 lg:bottom-80 -left-10 lg:-left-10 h-16 w-16 lg:h-20 lg:w-20 hidden md:block"
                />
                <h1 className="font-extrabold text-blueColor text-3xl md:text-4xl">
                    Privacy Policy
                </h1>
                <div className="w-full md:w-10/12 bg-[#2C79FF] rounded-[18px] py-7 md:py-12 px-2 md:px-14 lg:px-20 mx-auto">
                    <div className="flex flex-col gap-5 w-full">
                        <PrivacyPolicyContainer
                            heading="1. Introduction"
                            description="Introduction We prioritize your privacy and adhere to global data standards, including GDPR (EU), CCPA (California), PIPEDA (Canada), Privacy Act (Australia), POPIA (South Africa), APPI (Japan), PIPL (China), PDP (India), and Middle Eastern regulations."
                        />
                        <PrivacyPolicyContainer
                            heading="2. Information We Collect"
                            description="We collect personal details like name, email, academic interests, nationality, and usage data via cookies to personalize your experience."
                        />
                        <PrivacyPolicyContainer
                            heading="3. How We Use Your Information"
                            description="Your data is used to enhance user experience, process applications, improve our platform, and send relevant updates."
                        />
                        <PrivacyPolicyContainer
                            heading="4. Sharing Your Information"
                            description=" Data is shared only with trusted educational partners and service providers under strict protection agreements. We do not sell data."
                        />
                        <PrivacyPolicyContainer
                            heading="5. Your Rights"
                            description="You may access, correct, restrict, or delete your data according to regional regulations. Contact us to exercise these rights."
                        />
                        <PrivacyPolicyContainer
                            heading="6. Data Security"
                            description="We implement high-level security measures to protect your data. However, we advise caution when sharing sensitive information online."
                        />
                        <PrivacyPolicyContainer
                            heading="7. Retention of Information"
                            description="Your data is kept only as long as necessary or legally required. We anonymize or delete data upon request."
                        />
                        <PrivacyPolicyContainer
                            heading="8. International Data Transfers"
                            description="We comply with international standards for data transfer across North America, Europe, Africa, Asia, and the Middle East."
                        />
                        <PrivacyPolicyContainer
                            heading="9. Updates to This Policy"
                            description="This Privacy Policy may be updated to reflect changes in laws or our practices. Please review this page periodically."
                        />
                    </div>
                </div>
            </div>
            <LetUsHelpContainer
                link={ROUTES.CONTACT_US}
                buttonText=" admin@courseoptions.com"
                heading="Contact Us"
                title="For questions or concerns, reach us at"
            />
        </>
    );
};

export default PrivacyPolicyTermsAndCondition;
