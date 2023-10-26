import Image from 'next/image';
import React from 'react';

const TermsAndCondition = () => {
    return (
        <>
            <div className="w-full flex items-center justify-between h-[170px] mt-[100px] bg-profileBgColor overflow-hidden">
                <Image
                    height={85}
                    width={86}
                    alt="t&cRounded"
                    className="mt-[-90px] ml-0 hidden lg:block"
                    src="/images/T&C/roundedImg 1.svg"
                    priority
                />
                <div className="mt-[-180px] md:mt-[-120px] ml-[-60px] md:ml-[-40px] block lg:hidden h-32 w-32 rounded-full border-[10px] border-blueColor"></div>
                <div className="flex flex-col items-center">
                    <h1 className="text-mainTextColor text-2xl md:text-[32px] font-extrabold">
                        Terms of Use
                    </h1>
                    <p className="text-base md:text-lg text-aboutUsTextColor">
                        Check out the details below
                    </p>
                </div>
                <Image
                    height={119}
                    width={100}
                    alt="t&cRounded2"
                    className="mt-12 hidden lg:block"
                    src="/images/profileImages/Frame 691.svg"
                    priority
                />
                <div className="mt-44 md:mt-32 mr-[-70px] md:mr-[-40px] block lg:hidden h-32 w-32 rounded-full border-[10px] border-blueColor"></div>
            </div>
            <div className="w-full pb-52">
                <div className="max-w-[1100px] 2xl:max-w-[2300px] mx-auto px-5 md:px-[50px] lg:px-2 2xl:px-8 transition-all duration-300 pt-16">
                    <div className="w-full rounded-[10px] border-2 border-termsanduseBorderColor p-4 md:p-6 lg:py-10 lg:px-20 flex flex-col gap-y-4 bg-profileBgColor items-center mb-12 text-center">
                        <h1 className="text-textLightBlackColor font-bold">
                            Please read these Terms of Use carefully as they
                            apply to your use of the Times Course Finder (“
                            <span className="text-blueColor">TCF</span>”)
                            website.
                        </h1>
                        <p className="text-darkGrayColor text-center text-[15px]">
                            This privacy notice has been compiled to help you
                            understand why we ask you for your personal
                            information when you use one of our websites and how
                            we will store and use this information.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-8 mb-9">
                        <p className="text-darkGrayColor leading-6">
                            The core purpose of TCF is helping you and other
                            users find suitable courses, learning providers, and
                            to assist in the admission process. This is defined
                            as our Legitimate Business Interest. We process your
                            personal data to help you make informative decisions
                            when selecting courses and learning providers. We do
                            that by:
                        </p>
                        <div className="gap-5 flex flex-col">
                            <div className="flex gap-3 items-center">
                                <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                                <p className="text-darkGrayColor leading-6">
                                    Providing extensive educational information
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                                <p className="text-darkGrayColor leading-6">
                                    Providing advertising and promotional
                                    opportunities for education providers
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                                <p className="text-darkGrayColor leading-6">
                                    Providing features to enable users to
                                    directly contact education providers
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                                <p className="text-darkGrayColor leading-6">
                                    Recommending things which we think you’ll
                                    like, such as courses and learning providers
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                                <p className="text-darkGrayColor leading-6">
                                    Notifying you about things you’ve told us
                                    you like, such as a new course in your local
                                    area
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                                <p className="text-darkGrayColor leading-6">
                                    Personalizing sections of our websites to
                                    your preferences
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                                <p className="text-darkGrayColor leading-6">
                                    Getting in touch if we need to tell you
                                    about something, like a change to our
                                    policies or issues with our service
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                                <p className="text-darkGrayColor leading-6">
                                    Monitoring usage and performance in order to
                                    improve the services we offer.
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                                <p className="text-darkGrayColor leading-6">
                                    Providing assistance and guidance in course
                                    selection, admission application submission,
                                    and visa guidance, as required, through our
                                    premium paid services.
                                </p>
                            </div>
                        </div>
                        <p className="text-darkGrayColor">
                            This privacy notice applies to all our website and
                            app users regardless of location, whether registered
                            or not, including people responding to surveys,
                            competitions and writing reviews. We refer to all
                            registered users as “members of our community”
                            Keeping your information safe and private is very
                            important to us. All our services are designed with
                            privacy and security in mind. We will never sell
                            your personal information to any third party.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-8 mb-8">
                        <h1 className="text-textLightBlackColor font-bold text-xl">
                            Collecting and using your personal data
                        </h1>
                        <p className="text-darkGrayColor leading-6">
                            You can browse our websites without providing any
                            personal information. However, to use some of our
                            enhanced functionality will sometimes ask for
                            additional information in order to process your
                            request.
                        </p>
                    </div>
                    <p className="font-black text-textLightBlackColor mb-8">
                        Examples include:
                    </p>
                    <div className="gap-5 flex flex-col mb-8">
                        <div className="flex gap-3 items-center">
                            <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                            <p className="text-darkGrayColor leading-6">
                                Providing your name, email, and contact details
                                to request a prospectus or make an enquiry to an
                                education provider.
                            </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                            <p className="text-darkGrayColor leading-6">
                                Providing your name, email address, and
                                preferences to create an account to receive
                                email newsletters and save your preferences.
                            </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                            <p className="text-darkGrayColor leading-6">
                                Providing your name, contact details, and
                                education history to engage with offline
                                education counselling services.
                            </p>
                        </div>
                    </div>
                    <p className="text-darkGrayColor leading-6 mb-8">
                        The details we request for each piece of enhanced
                        functionality will depend on what is required to perform
                        the action. For example:
                    </p>
                    <div className="gap-5 flex flex-col mb-8">
                        <div className="flex gap-3 items-center">
                            <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                            <p className="text-darkGrayColor leading-6">
                                If we need to contact you by email, we will
                                request your email address.
                            </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="h-2 w-2 rounded--full bg-blueColor rounded-full"></div>
                            <p className="text-darkGrayColor leading-6">
                                If we tailor your experience by displaying
                                available courses, we will ask for your
                                preferred start date.
                            </p>
                        </div>
                    </div>
                    <p className="text-darkGrayColor leading-6 mb-8">
                        Details of why we collect each piece of information is
                        displayed clearly next to the field used to enter the
                        data.
                    </p>
                    <p className="text-darkGrayColor leading-6 mb-8">
                        A full list of the data collected by each website is
                        available on the site-specific data collection notice.
                    </p>
                    <p className="text-darkGrayColor leading-6 mb-8">
                        We also collect some technical information while you use
                        our websites. For example, information on the type of
                        browser you use and your IP address. This information is
                        used to maintain and monitor the performance of our
                        websites.
                    </p>
                    <p className="font-black text-textLightBlackColor mb-8">
                        Data sharing
                    </p>
                    <p className="text-darkGrayColor leading-6 mb-8">
                        Your contact details are shared with the education
                        institutions where you have made an enquiry with or
                        request a prospectus from so that they can accommodate
                        your request directly.
                    </p>
                    <p className="text-darkGrayColor leading-6 mb-8">
                        Any review you have supplied will be posted on Times
                        Course Finder and associated social media channels
                        (Facebook, Twitter, Instagram, Google).
                    </p>
                    <p className="text-darkGrayColor leading-6">
                        If you engage with the counselling services on the Times
                        Course Finder site, your data will be shared with our
                        parent company, Times Consultant, which operates our
                        counselling services.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TermsAndCondition;
