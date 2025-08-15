import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: 'Plenum Terms & Conditions | User Agreement',
    description: "Read the terms and conditions for using Plenum's website, products, and services, including legal disclaimers and user rights.",
    alternates: {
        canonical: 'https://plenum-tech.com/terms',
    },
};

const Terms = () => {
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
                            <h1 className='text-[40px] lg:text-[60px] xl:text-[90px] font-["Chakra"] font-[600] text-primary'>Terms & Conditions</h1>
                        </div>
                    </div>
                </div>
            </div >

            {/* Bottom Texts */}
            <TermsTexts />
        </div>
    )
}

export default Terms

function TermsTexts() {
    return (
        <div className="container font-['Archivo'] mx-auto px-4 py-8 max-w-[95%] 2xl:max-w-[1440px]">
            <div className="mb-8">
                <p className="text-[#000000] text-[18px]">
                    Welcome to Plenum Tech's website (the "Site"). By accessing or using this Site, you agree to be bound by the
                    following terms and conditions. If you do not accept these terms, please do not use the Site. Plenum Tech
                    reserves the right to revise these terms at any time without prior notice, and your continued use of the Site
                    constitutes acceptance of any changes.
                </p>
            </div>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold italic mb-4">1. Purpose of the Site</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        The Site is provided by Plenum Tech to inform visitors about our company, services, products, and solutions.
                        The Site is intended for lawful, non-commercial use only, primarily by prospective clients, partners, and
                        other stakeholders.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">2. Intellectual Property & Trademarks</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        All trademarks, logos, service marks, and trade names displayed on this Site are the property of Plenum Tech
                        or their respective owners. You may not use, copy, reproduce, or modify any trademark appearing on this Site
                        without the express written consent of Plenum Tech.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">3. Copyright & Restrictions</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        The content on this Site—including but not limited to text, graphics, images, logos, and software—is
                        protected by copyright and intellectual property laws and is owned by or licensed to Plenum Tech. You may
                        not republish, distribute, modify, or create derivative works without prior written permission.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">4. Use of the Site</h2>
                    <p className="mb-4 text-[#000000] font-medium text-[18px]">
                        You may use this Site only for lawful purposes and in accordance with these terms. You agree not to:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className='text-black text-[18px] font-medium'>Use the content for commercial purposes without authorization.</li>
                        <li className='text-black text-[18px] font-medium'>Remove any copyright or proprietary notices.</li>
                        <li className='text-black text-[18px] font-medium'>Transfer or redistribute materials from the Site to others.</li>
                        <li className='text-black text-[18px] font-medium'>Attempt to interfere with the Site's functionality or security.</li>
                        <li className='text-black text-[18px] font-medium'>Engage in any activity that may damage, disable, or overburden the Site.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">5. Information Accuracy & Disclaimer</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        All information on the Site is provided on an "as is" and "as available" basis. While Plenum Tech strives
                        for accuracy, we do not warrant the completeness, accuracy, or reliability of any content on the Site. You
                        acknowledge that information may contain errors or omissions and is subject to change without notice.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">6. Security & Risk</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        You are responsible for ensuring your device and connection are secure when accessing the Site. Plenum Tech
                        does not warrant that the Site is free of viruses or other harmful components. Any data transmitted to
                        Plenum Tech via the Site is done at your own risk.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">7. Third-Party Links</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        The Site may contain links to third-party websites for convenience. These sites are not under our control,
                        and we are not responsible for their content, policies, or practices. Inclusion of such links does not imply
                        endorsement.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">8. Account Security</h2>
                    <p className="mb-4 text-[#000000] font-medium text-[18px]">If you are given access credentials to use secure areas of the Site or our services:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className='text-black text-[18px] font-medium'>You are responsible for keeping those credentials confidential.</li>
                        <li className='text-black text-[18px] font-medium'>You must notify us immediately of any unauthorized use.</li>
                        <li className='text-black text-[18px] font-medium'>We reserve the right to revoke access if misuse is detected.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">9. Limitation of Liability</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        To the fullest extent permitted by applicable law, Plenum Tech shall not be liable for any direct, indirect,
                        incidental, consequential, or punitive damages arising from your use of or inability to use the Site or any
                        content herein.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">10. Termination of Access</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        If you breach any of these Conditions your access to the Site will terminate immediately without the
                        necessity of any notice being given to you. Access to the Site may be terminated at any time by Plenum Tech
                        without notice. The provisions of these terms and conditions excluding, limiting and disclaiming the
                        liability of Plenum Tech will nevertheless survive any such termination.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">11. Termination</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        We reserve the right to suspend or terminate your access to the Site at our discretion, without notice, for
                        any conduct that violates these Terms or is otherwise harmful to other users, third parties, or Plenum Tech.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">12. Governing Law</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        These Terms and any disputes related to your use of the Site shall be governed by the laws of Pakistan. Any
                        legal proceedings shall be subject to the exclusive jurisdiction of courts in [Your City, e.g., Karachi,
                        Lahore, or Islamabad].
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">13. Security</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        If you have been provided with a login and password, then any such login and password are for your personal
                        use only. You may not reveal your login or password to anyone else or permit anyone else to use your login
                        and password to access the Site. You are responsible for maintaining the confidentiality and security of
                        your login and password and accept responsibility for all activities that occur under your account or
                        password. You must notify Plenum Tech immediately in the event that the security of your login or password
                        has been breached.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">14. Notices</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        Notices related to these Terms may be delivered via email or by posting on the Site. You are responsible for
                        reviewing notices and updates posted on the Site.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">15. Indemnity</h2>
                    <p className='text-[#000000] text-[18px] font-medium'>
                        You agree to indemnify, defend, and hold harmless Plenum Tech and its affiliates, officers, directors, and
                        employees from any claims, damages, or liabilities arising out of your use of the Site or violation of these
                        Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold italic mb-4">16. Contact</h2>
                    <p className="text-black text-[18px] font-medium">For questions about these Terms, please contact:</p>
                    <p className="text-black text-[18px] font-medium">Plenum Tech</p>
                    <p className="text-black text-[18px] font-medium">Dubai Digital Park, Dubai Silicon Oasis</p>
                    <p className="text-black text-[18px] font-medium">Dubai, United Arab Emirates</p>
                    <p className="text-black text-[18px] font-medium">Email: info@plenum-tech.com</p>
                    <p className='text-[#000000] text-[18px] font-medium'>Website: www.plenum-tech.com</p>
                </section>
            </div>
        </div>
    )
}
