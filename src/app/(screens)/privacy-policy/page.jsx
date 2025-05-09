import Image from 'next/image'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div>
            <div className='lg:h-screen bg-cover bg-no-repeat bg-center overflow-x-hidden' style={{ backgroundImage: `url('/service/sp_herobg.webp')` }}>
                {/* Wrapper */}
                <div className="2xl:max-w-[1440px] h-full w-[90%] mx-auto py-16 pt-[64vh] md:pt-[60vh] lg:pt-36">

                    {/* Image Div */}
                    <div className='xl:w-[200px] xl:h-[250px] w-[185px] md:w-[130px] h-[240px] md:h-[180px] absolute left-1/2 lg:top-1/2 md:top-[40%] top-[38%] transform -translate-x-1/2 -translate-y-1/2'>
                        <Image src="/service/sp_hero.svg" alt='Plenum AI Logo' width={1500} height={1500} className='w-full h-full object-contain' />
                    </div>

                    <div className='w-full h-full flex lg:flex-row flex-col text-center md:text-left lg:mt-10 xl:mt-0 lg:gap-0 gap-8'>
                        {/* Centered Text Below Image */}
                        <div className="flex flex-col justify-end h-full items-center">
                            <h1 className='text-[40px] lg:text-[60px] xl:text-[90px] font-["Chakra"] font-[600] text-primary'>Privacy Policy</h1>
                        </div>
                    </div>
                </div>
            </div >

            {/* Bottom Texts */}
            <PrivacyPolicyTexts />
        </div>
    )
}

export default PrivacyPolicy

function PrivacyPolicyTexts() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-[95%] 2xl:max-w-[1440px] font-['Archivo']">
            <div className="mb-8">
                <p className="text-[#000000] text-[18px] font-medium">
                    Plenum Tech FZCO, a company incorporated under the laws of Dubai Silicon Oasis, United Arab Emirates (referred
                    to herein as "Plenum", "we", "our" or "us") is committed to protecting your privacy online. <br />This Privacy
                    Policy discloses the privacy practices for Plenum Tech's website and affiliated platforms, including all
                    related sub-domains, services, and tools (jointly referred to as the "Website"). It describes the ways in
                    which we collect, store, use, and protect the information you provide through our digital platforms. By
                    interacting with our Website, you expressly consent to our handling of your personal data in accordance with
                    the terms of this Privacy Policy.
                </p>
            </div>

            <div className="space-y-8">
                <section>
                    <h1 className="text-2xl font-bold italic mb-4">PLEASE READ THIS POLICY CAREFULLY</h1>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        By accessing or using our Website, you acknowledge that you have read, understood, and agreed to be bound by
                        this Privacy Policy and the Terms of Use. If you do not agree, please exit the Website and do not use our
                        services. For any questions, contact us at info@plenum-tech.com.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">YOUR EXPRESS CONSENT TO COLLECTION & USE OF INFORMATION</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>We may collect information when you:</p>
                    <ul className="list-disc pl-6">
                        <li className='text-[18px] font-medium text-[#000000]'>Visit or browse our Website</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Sign up for newsletters or events</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Submit contact or inquiry forms</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Participate in surveys or feedback activities</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Interact with our support or sales teams</li>
                    </ul>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        By doing so, you grant Plenum the right to collect, store, process, and use your personal information,
                        including but not limited to:
                    </p>
                    <ul className="list-disc pl-6">
                        <li className='text-[18px] font-medium text-[#000000]'>Full name</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Email address</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Phone number</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Company name</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Job title</li>
                        <li className='text-[18px] font-medium text-[#000000]'>IP address, device/browser type, and usage data</li>
                    </ul>
                    <p className='text-[#000000] text-[18px] font-medium'>We use this information to:</p>
                    <ul className="list-disc pl-6">
                        <li className='text-[18px] font-medium text-[#000000]'>Respond to inquiries and provide requested services</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Improve our website and user experience</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Send product, service, and marketing updates (with consent)</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Analyze usage trends and business performance</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Meet legal, compliance, or security requirements</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">DATA SHARED BY YOU</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>Plenum collects data in the following ways:</p>
                    <ul className="list-disc pl-6">
                        <li className='text-[18px] font-medium text-[#000000]'>When you fill out a contact or service request form</li>
                        <li className='text-[18px] font-medium text-[#000000]'>When you subscribe to updates or submit an inquiry</li>
                        <li className='text-[18px] font-medium text-[#000000]'>When you download resources or participate in a digital event</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">DATA COLLECTED AUTOMATICALLY</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        We may use cookies, analytics tools, and server logs to automatically gather data such as:
                    </p>
                    <ul className="list-disc pl-6">
                        <li className='text-[18px] font-medium text-[#000000]'>IP address</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Device type and browser</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Pages visited</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Session duration</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Referral URL</li>
                    </ul>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        This helps us enhance content and performance and ensure the security of our systems. For more information,
                        please review our Cookie Policy [if applicable or coming soon].
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">SHARING OF DATA</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        Plenum does not sell your personal data to third parties. We may share selected data under strict
                        confidentiality with:
                    </p>
                    <ul className="list-disc pl-6">
                        <li className='text-[18px] font-medium text-[#000000]'>Technology partners and service providers (e.g., hosting, analytics, CRM)</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Regulatory or legal authorities (if required by law)</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Third-party platforms used to improve our services (e.g., email campaign providers, chat support)</li>
                    </ul>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        All third-party access is granted under data processing agreements and only for essential business purposes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">DATA RETENTION</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        We retain personal data for as long as necessary to fulfill the purpose it was collected for, including
                        legal, accounting, or reporting requirements. When no longer needed, data is securely deleted or anonymized.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">MARKETING COMMUNICATIONS</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        If you subscribe to receive updates from us, you agree to receive emails and occasional messages. You may
                        opt-out at any time via the "unsubscribe" link or by emailing info@plenum-tech.com.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">SECURITY MEASURES</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        We take security seriously. All data is stored on secured servers using industry-standard protocols,
                        including encryption, firewalls, and access control. However, no online platform can be 100% secure. Users
                        share data at their own risk and are encouraged to reach out if they suspect a breach.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">YOUR RIGHTS</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>You have the right to:</p>
                    <ul className="list-disc pl-6">
                        <li className='text-[18px] font-medium text-[#000000]'>Access, correct, or delete your data</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Withdraw consent at any time</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Request data portability</li>
                        <li className='text-[18px] font-medium text-[#000000]'>Object to data processing for direct marketing</li>
                    </ul>
                    <p className='text-[#000000] text-[18px] font-medium'>To exercise your rights, contact info@plenum-tech.com.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">COOKIES</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        We may use cookies to personalize your experience, analyze usage, and support functionality. You can control
                        or disable cookies through your browser settings. Continued use of the Website implies consent to our cookie
                        usage.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">THIRD-PARTY LINKS</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        Our Website may contain links to third-party websites. Plenum is not responsible for the privacy practices
                        or content of external sites. We encourage users to read the privacy policies of every site they visit.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">CHANGES TO THIS POLICY</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        Plenum reserves the right to modify this Privacy Policy as needed. Any updates will be posted on this page
                        with a revised effective date. Continued use of our Website after changes constitutes acceptance of the
                        revised policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">CONTACT US</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>Plenum Tech FZCO</p>
                    <p className='text-[#000000] text-[18px] font-medium'>Dubai Digital Park, Dubai Silicon Oasis</p>
                    <p className='text-[#000000] text-[18px] font-medium'>Dubai, United Arab Emirates</p>
                    <p className='text-[#000000] text-[18px] font-medium'>Email: info@plenum-tech.com</p>
                    <p className='text-[#000000] text-[18px] font-medium'>Website: www.plenum-tech.com</p>
                </section>
            </div>
        </div>
    )
}
