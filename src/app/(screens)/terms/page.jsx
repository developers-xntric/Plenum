import Image from 'next/image'
import React from 'react'

const Terms = () => {
    return (
        <div>
            <div className='lg:h-screen bg-cover bg-no-repeat bg-center overflow-x-hidden' style={{ backgroundImage: `url('/service/sp_herobg.webp')` }}>
                {/* Wrapper */}
                <div className="2xl:max-w-[1440px] h-full w-[90%] mx-auto space-y-20 py-16 pt-[64vh] md:pt-[60vh] lg:pt-36">

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
        <div className="container mx-auto px-4 py-8 max-[95%] 2xl:max-w-[1440px]">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
                <p className="text-gray-600">
                    The documents, data, information and material contained in the Web Site (the "Site") is provided by Citymax
                    Hotels exclusively for non-commercial and individual use by prospective and confirmed Citymax Hotels guests to
                    inquire about or make travel reservations and related services and for no other purpose. By accessing this
                    Site, you are deemed to have agreed to the terms and conditions of this Site If you are not an authorized user
                    and if you do not agree to the terms and conditions of this Site, you may refrain from usage of this Site.
                    Citymax Hotels reserves the right to change the terms, conditions and the material in the Site at any time.
                </p>
            </div>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">1. SITE</h2>
                    <p>
                        The Site makes available information relating to hotels owned or managed by Landmark Hotels Limited and its
                        associate companies ("Citymax Hotels").
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">2. TRADEMARKS</h2>
                    <p>
                        The Site contains "Citymax Hotels" trade marks and service marks and devices (including the word "Citymax
                        Hotels") and other valuable trade or service marks owned by Citymax Hotels or licensed to Citymax Hotels to
                        distinguish its services and products. These trade marks and service marks and related intellectual property
                        are protected from copying and simulation under national and international laws and may not be reproduced or
                        copied without the express prior written consent of Citymax Hotels.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">3. COPYRIGHT</h2>
                    <p>
                        The information, text, graphics, images, sounds, links and all other information and software published or
                        otherwise contained in the Site are either owned exclusively by Citymax Hotels or licensed by Citymax Hotels
                        and except as specifically provided in these terms and conditions may not be used, copied, distributed,
                        displayed, reproduced or transmitted, in any form or by any means whether electronic, mechanical or
                        otherwise, without the prior written approval of Citymax Hotels. You may not, without such approval from
                        Citymax Hotels, create derivative works from any part of the Site or commercialize any information, products
                        or services obtained from any part of the Site. Information received from a third party may be the subject
                        of copyright owned by that third party.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">4. USAGE</h2>
                    <p className="mb-4">
                        The Site is for your personal non commercial use and any information may be downloaded by you solely for
                        that purpose. This right to use the information is not a transfer of title, and is subject to the following
                        restrictions:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>
                            the information should not be used for any commercial purpose or public display, performance, sale or
                            rental;
                        </li>
                        <li>no copyright or other proprietary information should be removed / copied;</li>
                        <li>the information should not be transferred to another person;</li>
                        <li>software should not be interfered with in any manner;</li>
                        <li>
                            every person downloading, reproducing or otherwise using the information must prevent any unauthorized
                            copying or usage of the information;
                        </li>
                        <li>
                            you will only use the information for lawful purposes and in accordance with these terms and conditions.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">5. INFORMATION</h2>
                    <p className="mb-4">
                        You accept that all information provided on the Site or any other material accessed through the Site
                        including via any linked web site is general information and is not in the nature of advice. You also accept
                        that all of the information is provided on an "as is" basis and to the extent permitted by law, is provided
                        without any warranty, representation or condition of any kind whether express, implied, statutory or
                        otherwise. You assume all responsibility and risk for your use of or reliance upon the information and the
                        Site or any other material accessed through the Site including via any linked web site.
                    </p>
                    <p className="mb-4">
                        Whilst Citymax Hotels seeks to ensure that the Information is reliable and accurate, errors and omissions
                        may occur and therefore, to the extent permitted by law, Citymax Hotels does not make or give any
                        representation or warranty (express or implied) of any kind as to any matter relating to the Site and any
                        linked web site, including without limitation, as to merchantability, non infringement of intellectual
                        property rights or fitness for purpose.
                    </p>
                    <p className="mb-4">
                        In particular Citymax Hotels does not warrant that (a) the information or any other material accessed
                        through the Site including via any linked web site is reliable, accurate or complete including, without
                        limitation, information relating to prices and availability; or (b) your access to information or any other
                        material accessed through the Site including via any linked web site will be uninterrupted, timely or
                        secure.
                    </p>
                    <p>
                        Citymax Hotels is not liable for any loss (direct or indirect) resulting from any action taken or reliance
                        made by you on the information or any other material accessed through the Site including via any linked web
                        site. You should make your own inquiries and seek independent professional advice before acting or relying
                        on any such information or material. Citymax Hotels may from time to time update, modify or add to the
                        information, including these terms and conditions and reserves the right to make changes without any
                        obligation to notify past, current or prospective users of the Site. Unless otherwise specified to the
                        contrary all new information shall be subject to these terms and conditions. Citymax Hotels does not
                        guarantee that the Site will operate continuously or without interruption or be error free. In addition,
                        Citymax Hotels may also suspend or discontinue any aspect of the Site at any time without being liable for
                        any direct or indirect loss as a result of such action.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">6. CAUTION</h2>
                    <p className="mb-4">
                        You must ensure that your access to and your use of the Site is not illegal or prohibited by laws which
                        apply to you. You must take your own precautions that the process which you employ for accessing the Site
                        does not expose you to the risk of virus, malicious computer code, computer program routine or process or
                        other forms of interference which may damage your own computer system. Without limitation, you are
                        responsible for ensuring that your own computer system meets all relevant technical specifications necessary
                        to use the Site and is compatible with the Site.
                    </p>
                    <p className="mb-4">
                        Citymax Hotels does not accept responsibility for any interference or damage to your own computer system
                        which arises in connection with your use of the Site or any linked web site. Citymax Hotels does not
                        guarantee or warrant that any material available for downloading from the Site or any linked web site will
                        be free from any virus, infection or other condition which has contaminating or destructive properties. You
                        are responsible for taking sufficient precautions and checks to satisfy your own particular requirements.
                    </p>
                    <p>
                        You must ensure that any information which you provide to Citymax Hotels is accurate and complete and does
                        not contain any virus, malicious computer code, computer program routine or process or other form of
                        interference which may damage the computer system of Citymax Hotels or the Information or which may
                        detrimentally interfere with any Citymax Hotels system, data or information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">7. LINKED WEBSITES</h2>
                    <p>
                        The Site may contain links to other web sites. Those links are provided for convenience only and may not
                        remain current or be maintained. You acknowledge and agree that Citymax Hotels does not have any control
                        over the content or availability of linked web sites and accepts no responsibility for the content, privacy
                        practices or any other aspect of linked web sites. Links with linked web sites should not be construed as an
                        endorsement, approval or recommendation by Citymax Hotels of the owners or operators of those linked web
                        sites, or of any information, graphics, materials, products or services referred to or contained on those
                        linked web sites, unless and only to the extent expressly stipulated to the contrary.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">8. RESERVATIONS</h2>
                    <p className="mb-4">
                        The reservations feature of the Site is provided solely to assist customers in determining the availability
                        of travel related services and products and to make legitimate reservations and for no other purpose. You
                        warrant that you are at least 18 years of age, possess the legal authority to enter into the legal agreement
                        constituted by your acceptance of these terms and conditions and to use the Site in accordance with such
                        terms and conditions. You agree to be financially responsible for your use of the Site including without
                        limitation for all reservations made by you or on your account for you, whether authorised by you or not.
                        For any reservations or other services for which fees may be charged you agree to abide by the terms or
                        conditions including without limitation payment of all moneys due under such terms and conditions.
                    </p>
                    <p className="mb-4">
                        The Site contains details of hotel charges, room rates (including any available special offers) and add-on
                        packages for hotels and resorts owned or managed by Citymax Hotels. Hotel reservation terms and conditions
                        of booking are set out on the Site and payment will be in accordance with the procedure set out in such
                        terms and conditions.
                    </p>
                    <p>
                        No contract will subsist between you and Citymax Hotels or any of its affiliates in respect of any services
                        or products offered through the Site unless and until Citymax Hotels accepts your order by e-mail or
                        automated confirmation through the Site confirming that it has accepted your reservation, booking or order
                        and any such contract shall be deemed to incorporate the hotel reservation terms and conditions of booking.
                        Any other relevant terms and conditions relating to particular services or products are set out in the Site.
                        You undertake that all details you provide to in connection with any services or products which may be
                        offered by Citymax Hotels on the Site (including hotel room reservations) will be correct and, where
                        applicable, the credit card which you use is your own and that there are sufficient funds to cover the cost
                        of any services or products which you wish to avail / purchase. Citymax Hotels reserves the right to obtain
                        validation of your credit card details before providing you with any services or products.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">9. SECURITY & CONFIDENTIALITY</h2>
                    <p>
                        Electronic transmissions of data including the Internet are public media and any use of such media is public
                        not private. Information related to or arising from such use is either public or the property of those
                        collecting the information and not personal or private information. Citymax Hotels does not warrant and
                        cannot ensure the security or confidentiality of any information which you transmit to Citymax Hotels.
                        Accordingly, any information which you transmit to Citymax Hotels is transmitted at your own risk.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">10. TERMINATION OF ACCESS</h2>
                    <p>
                        If you breach any of these Conditions your access to the Site will terminate immediately without the
                        necessity of any notice being given to you. Access to the Site may be terminated at any time by Citymax
                        Hotels without notice. The provisions of these terms and conditions excluding, limiting and disclaiming the
                        liability of Citymax Hotels will nevertheless survive any such termination.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">11. GENERAL</h2>
                    <p>
                        Citymax Hotels does not accept any liability for any failure by Citymax Hotels to comply with these terms
                        and conditions where such failure is due to circumstances beyond its reasonable control. If Citymax Hotels
                        waives any rights available to it under these terms and conditions on one occasion, this does not mean that
                        those rights will automatically be waived on any other occasion. If any of these terms and conditions are
                        invalid, unenforceable or illegal for any reason, the remaining terms and conditions shall nevertheless
                        continue in full force. You are completely responsible for all charges, fees, duties, taxes and assessments
                        arising out of the use of the Site.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">12. CURRENCY</h2>
                    <p>
                        For convenience, Citymax Hotels may provide options to view search results in multiple currencies. However,
                        all transactions on the Citymax Hotels website will be processed in United Arab Emirates dirhams. Citymax
                        Hotels may add facilities to process transactions in multiple currencies.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">13. SECURITY</h2>
                    <p>
                        If you have been provided with a login and password, then any such login and password are for your personal
                        use only. You may not reveal your login or password to anyone else or permit anyone else to use your login
                        and password to access the Site. You are responsible for maintaining the confidentiality and security of
                        your login and password and accept responsibility for all activities that occur under your account or
                        password. You must notify Citymax Hotels immediately in the event that the security of your login or
                        password has been breached.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">14. NOTICES</h2>
                    <p>
                        All notices and other communications permitted or required by the provisions of this Agreement may be given
                        by electronic mail or, if by Citymax Hotels, by posting such notice on the Site. Notice is deemed given upon
                        receipt by you if sent by electronic mail or or immediately upon posting to this Site.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">15. DISCLAIMER</h2>
                    <p>
                        In no event shall Citymax Hotels be responsible for any direct, indirect, special, incidental or
                        consequential loss or damage, including without limitation, loss or damage by way of loss of profits, loss
                        of business opportunity, business interruption or loss of information, however arising and whether in
                        contract, tort or otherwise, which you may suffer in connection with or arising out of (a) your use of the
                        Site or any linked web site; or (b) your use of or reliance on information or any other material accessed
                        through the Site including via any linked web site.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">15. GOVERNING LAW</h2>
                    <p>This terms and conditions shall be governed by the Laws of Dubai, UAE.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">16. BOOKING POLICIES</h2>
                    <p className="mb-2">
                        <span className="font-semibold">Payment:</span> Full payment is charged to the credit card at the time of
                        booking. Hotel reserves the right to verify validity of credit card upon booking.
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Cancellation:</span> Cancelation policies vary per selected rate plan or
                        offer, please refer to individual terms & conditions for each.
                    </p>
                    <p>
                        <span className="font-semibold">No-show:</span> No-show policies vary per selected rate plan or offer,
                        please refer to individual terms & conditions for each. However, the no-show charges are applicable for
                        rooms, taxes and all add-on packages if any.
                    </p>
                </section>
            </div>
        </div>
    )
}
