import Image from 'next/image'
import React from 'react'

const PrivacyPolicy = () => {
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
        <div className="container mx-auto px-4 py-8 max-w-[95%] 2xl:max-w-[1440px]">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-gray-600">
                    Landmark Hospitality Holding Investment LLC, a company incorporated under the laws of Dubai, United Arab
                    Emirates (referred to herein as "Citymax Hotels", "we", "our" or "us") is committed to protecting your privacy
                    online.
                </p>
            </div>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                    <p className="mb-4">
                        This Privacy Policy discloses the privacy practices for participating websites of Citymax Hotels and its
                        affiliated Landmark Group Entities, and their related sub-domains, sites, services and tools, or any
                        successor site (jointly or severally referred as "Participating Website", as the context so require). The
                        number of Participating Website may also vary in the course of time.
                    </p>
                    <p className="mb-4">
                        This Privacy Policy (the "Privacy Policy") describes the ways in which we collect, store, use and protect
                        the information collected due to your use of Participating Website. By providing us with your information on
                        the website and mobile applications, you expressly consent to us processing your personal information in
                        accordance with the terms of the Privacy Policy.
                    </p>
                    <p className="font-bold mb-4">
                        PLEASE READ THIS PRIVACY POLICY CAREFULLY. BY ACCESSING OR USING OUR WEBSITE, MOBILE APPLICATION AND
                        PARTICIPATING WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND TO ALL THE
                        TERMS OF THIS PRIVACY POLICY AND OUR PARTICIPATING WEBSITE TERMS OF USE.
                    </p>
                    <p>
                        IF YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS SET FORTH IN THE PRIVACY POLICY, EXIT THIS PAGE /MOBILE
                        APPLICATION AND DO NOT ACCESS OR USE THE WEBSITE/ PARTICIPATING WEBSITE. If you still have any questions,
                        please contact us directly at info@citymaxhotels.com, and we will be pleased to assist you with your
                        concerns.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Your Express Consent to Collection & Use of Information</h2>
                    <p className="mb-4">
                        We collect information when you register online or update your account, log-in, place an order, communicate
                        with our customer service representatives, shop online, request a catalog, opt-in to receive our e-mails,
                        participate in a contest, promotion or survey or join our social networking sites. We may also collect
                        information from you in our stores or through our catalogs or other marketing material.
                    </p>
                    <p className="mb-4">
                        By visiting our Website mobile application and participating website, submitting information, using our
                        services, purchasing any products and /or accepting the Terms of Use & Privacy Policy, you unconditionally
                        grant your consent to Citymax Hotels to collect, retain, use and disclose your other personal information
                        including not limited to your name, email address, addresses, telephone contact numbers, date of birth and
                        transaction details etc. as well as demographic, transactional and profile data such as IP address, internet
                        domain or browser, referrer or user agent information or other relevant information that we use as part of
                        our data collection process on the Web Sites/Apps or via the Other Channels, such as the use of cookies or
                        certain other information you may provide to us, etc. ("Personal Information") and consent to collect,
                        retain, use and disclose above information for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>To ensure the efficient running of the website and mobile application</li>
                        <li>To provide information about the products</li>
                        <li>To develop/offer new products and services</li>
                        <li>For accounting and audit purposes</li>
                        <li>For marketing and market research and analysis purposes</li>
                        <li>
                            To send you communications (or to contact you) via SMS, email, push or any other channel about promotions,
                            services, products and facilities offered by Citymax Hotels.
                        </li>
                        <li>
                            provide you with offers (including for financial products and/or services), personalized services and
                            recommendations and improve your experience on our website and mobile application.
                        </li>
                        <li>operate, evaluate and improve our business, website and mobile application.</li>
                        <li>
                            generate aggregated data to prepare insights to enable us to understand customer behavior, patterns and
                            trends with a view to learning more about your preferences or other characteristics.
                        </li>
                        <li>provide privileges and benefits to you, marketing and promotional campaigns based on your profile.</li>
                        <li>in connection with loyalty programs owned and operated by us or by other Landmark Group Entities.</li>
                        <li>
                            communicate with you (including to respond to your requests, questions, feedback, claims or disputes) and
                            to customize and improve our services.
                        </li>
                        <li>
                            to enhance your shopping experience and bring you access to membership programs, rewards and offers across
                            Citymax Hotels and Landmark entities.
                        </li>
                        <li>enforce the terms of use of our website and mobile application.</li>
                        <li>
                            protect against and prevent fraud, illegal activity, harm, financial loss and other legal or information
                            security risks; and serve other purposes for which we provide specific notice at the time of collection,
                            and as otherwise authorized or required by applicable law.
                        </li>
                        <li>for shipment and delivery of products and services.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Data Shared by You</h2>
                    <p className="mb-4">
                        Citymax Hotels may collect your Data in several ways from your use of our stores, website or mobile
                        application. For instance:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>when you register with us to receive our products and/or services.</li>
                        <li>
                            when you conduct a transaction with us or attempt a transaction at our stores, on our website or mobile
                            application.
                        </li>
                        <li>when you complete surveys conducted by or for us.</li>
                        <li>when you elect to receive any communications (including promotional offers) from us.</li>
                        <li>from the information gathered by your visit to our stores, website or mobile application.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Sharing of Data</h2>
                    <p className="mb-4">
                        We will not sell your Personal Information to third parties. We may, however, share selected customer
                        information with the following third parties:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>our group companies</li>
                        <li>our franchisors</li>
                        <li>
                            Service Providers- Examples include storing and analyzing Data, protecting and securing our systems,
                            providing search results and links, providing customer service, credit analysis, processing your
                            information for profiling, user analysis, Software service providers and payment processing, warehousing
                            service providers and delivery companies for the purposes of processing your payment and managing your
                            order, including delivery and returns and in such circumstances these Service Providers will be provided
                            access to only such Personal Information required to fulfill their functions (and only on the agreement
                            that they not use your Personal Information for any other purposes)
                        </li>
                        <li>sourcing partners and supplier of products and services.</li>
                        <li>
                            purchasers and their advisors following a sale of all or part of our business, so that they can continue
                            to provide services to you
                        </li>
                        <li>third party databases to which Citymax Hotels and/or one of our brands subscribes</li>
                        <li>
                            government bodies or other authorities if necessary to comply with regulations or law or to assist with
                            law enforcement, or to protect our property and other rights
                        </li>
                        <li>
                            agencies who help us collate statistics about site traffic, sales, demographics and other commercial
                            information to enable us to tailor the services we provide to you and other customers
                        </li>
                        <li>
                            Purposes intended to deliver publications to you, verify your account information, verify access to
                            publications, determine whether you meet the minimum system requirements for use of the Service, provide
                            you tailored content and instructions, targeted promotions, provide customer support, and seek your input
                            regarding Citymax Hotels and/or the Participating Website
                        </li>
                    </ul>
                    <p>
                        We will retain your Personal Information for as long as it is legally required, and to support the business
                        purposes for which it was obtained – we will then dispose of it promptly and securely.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Data That is Collected Automatically</h2>
                    <p className="mb-4">
                        We automatically collect some information when you visit our website or use our mobile application. This
                        information helps us to make improvements to our content and navigation. The information collected
                        automatically includes your IP address.
                    </p>
                    <p className="mb-4">
                        Our web servers or affiliates who provide analytics and performance enhancement services collect IP
                        addresses, operating system details, browsing details, device details and language settings. This
                        information is aggregated to measure the number of visits, average time spent on the site, pages viewed and
                        similar information. Citymax Hotels uses this information to measure the site usage, improve content and to
                        ensure safety and security, as well as enhance performance of our website or mobile application.
                    </p>
                    <p>
                        We may collect your Data automatically via Cookies, pixels and similar technologies in line with settings on
                        your browser. For more information about Cookies, please see the section below, titled "Cookies".
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Marketing Opt-In and Opt-Out Provisions</h2>
                    <p className="mb-4">
                        When you register at Citymax Hotels, you are consenting to receiving promotional communication from us. You
                        have the option to opt-out or unsubscribe from our marketing communications for products, new products,
                        offers and promotions.
                    </p>
                    <p>
                        If any user who receives an e-mail from the Site or SMS or any other channel would prefer not to receive
                        marketing related communications in the future, you can do so by following the OPT-OUT instructions in the
                        e-mails or SMS or any other channel. In addition, at any time you may access the OPT OUT section on the Site
                        and choose to unsubscribe (opt-out) or send an e-mail to our customer care – info@citymaxhotels.com. We will
                        make commercially reasonable efforts to implement your opt-out requests promptly, but you may still receive
                        communications from us for up to ten business days as we process your request.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Protection of Personal Information</h2>
                    <p className="mb-4">
                        We store all Personal Information on a secure server and we seek to use procedures designed to protect
                        Personal Information from accidental or unauthorized access, destruction, use, modification or disclosure.
                        We will seek to ensure that your Personal Information is kept confidential and secure in accordance with
                        this Privacy Policy, and that the appropriate technical and organizational measures to prevent unlawful or
                        accidental destruction, accidental loss, unauthorized disclosure or access or other unlawful forms of
                        processing are implemented.
                    </p>
                    <p className="mb-4">
                        Although we will strive to take commercially reasonable security precautions regarding all Personal
                        Information, visitors or users to the Web Sites/Apps acknowledge and agree that Citymax Hotels does not
                        control the transfer of information or data via the Web Sites/Apps or over any other electronic facilities
                        or media.
                    </p>
                    <p className="mb-4">
                        We take all steps reasonably necessary to protect against the unauthorized access, use, alteration,
                        disclosure or destruction of Personal Information. If Citymax Hotels is sold to a third party, or Citymax
                        Hotels otherwise becomes subject to a merger, consolidation or acquisition, it would become necessary for us
                        to transfer your Personal Information to a third party, and in such case Citymax Hotels would require that
                        the third party handles your Personal Information with no less care than taken by us.
                    </p>
                    <p>
                        To keep your Personal Information safe, we ensure that sensitive and private data exchanges between you and
                        Participating Website happen over a Secure Sockets Layer (SSL)-secured communication channel and are
                        encrypted and protected with digital signatures. SSL-secured communication channels are specially designed
                        to protect personal and sensitive information (payment details), which is sent over the internet.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
                    <p className="mb-4">
                        When we process Data about you, we do so with your consent and/or as necessary to operate our business, meet
                        our contractual and legal obligations, protect the security of our systems and our customers, or fulfil
                        other legitimate interests Of Citymax Hotels as described in this Privacy Policy.
                    </p>
                    <p className="mb-4">
                        You have the following rights in relation to your personal information and you can exercise it by submitting
                        a request info@citymaxhotels.com below.
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Right to Access, Review, Modify and Delete</li>
                        <li>Right to Correction</li>
                        <li>Right to Withdraw Consent</li>
                    </ul>
                    <p>
                        It is important that the Data we hold about you is accurate and current. Please keep us informed if your
                        personal information changes during the period for which we hold it.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Treatment of General Information</h2>
                    <p>
                        Citymax Hotels also collects your General Information to allow us, amongst other things, to better
                        understand our users and improve the layout and functionality of the Website. Citymax Hotels may use and
                        disclose anonymous information, including aggregate anonymous information derived from your Personal
                        Information, to inform publishers, partners, trusted affiliates, advertisers, and other interested parties
                        as to the usage habits or characteristics of Citymax Hotels customer base, and to serve any other business
                        purposes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
                    <p className="mb-4">
                        Citymax Hotels may use cookies, or other technologies, to remember Personal Information or General
                        Information when you use the Participating Website. Cookies are small files or records that Citymax Hotels
                        may place on your web browser for collecting information about your activities on the Participating Website,
                        preparing reports, assessing trends, in order to determine relevant interest-based advertisements to serve
                        the customers and otherwise monitoring the way in which the Participating Website is being used. Citymax
                        Hotels may also use services hosted by third parties, to assist for these matters which may collect
                        information, such as your IP address, sent by your browser or via cookies.
                    </p>
                    <p className="mb-4">
                        This is intended to enhance convenience for you, and to assist Citymax Hotels to run an efficient operation.
                        The use of cookies is relatively standard. Most browsers are initially set up to accept cookies. However, if
                        you prefer not to store cookies, you can choose to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>not use Participating Site</li>
                        <li>set your browser to notify you when you receive a cookie</li>
                        <li>set your browser to refuse to accept cookies</li>
                        <li>delete our cookies after visiting Participating Site</li>
                        <li>browse our site using your browser's anonymous usage setting</li>
                    </ul>
                    <p>
                        By accepting the Terms, you confirm your consent to Citymax Hotels's use of cookies, and other such
                        technologies, for these purposes. Any information that we collect and store that is personally identifiable
                        is protected using appropriate means, and although Citymax Hotels does so, it will not be held responsible
                        for any unauthorised access by third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Single Sign On</h2>
                    <p className="mb-4">
                        Each of our Participating Website offer a single-sign-on i.e. after a one-time registration on one of the
                        Participating Website, you can sign on (login) to each of the Participating Website with uniform
                        credentials, without having to go through a separate registration and sign-on process each time.
                        ("Single-Sign-On"). Single-Sign-On provides a single identity – the basis for Participating Website you wish
                        to use recognizing and verifying you.
                    </p>
                    <p className="mb-4">
                        Further after logging into any of our Participating Website you can easily visit any or all of our
                        Participating Website through links in the Participating Website. You can update your account data at any
                        time. For the purpose of Single-Sign-On, certain personal data is stored centrally in a database and is
                        available to our affiliates and service providers connected with the operation of Participating Websites.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Change in the Privacy Policy</h2>
                    <p>
                        Changes in law or changes in Citymax Hotels's business may require changes to be made to the terms of this
                        Privacy Policy from time to time so Citymax Hotels encourages you to review this Privacy Policy periodically
                        for any such changes. It is your responsibility to carefully read, agree with the Privacy Policy on each
                        occasion you use the Participating Website and your continued use of the Participating Website shall signify
                        your acceptance to be bound by the latest Privacy Policy. If you have any questions or feedback about the
                        Privacy Policy, contact us at info@citymaxhotels.com
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                    <p>
                        In no event will Citymax Hotels, its affiliates, partners, and their respective employees, officers,
                        directors or insurers be liable to you or to any other person for any costs, damages (including any special,
                        incidental, exemplary, indirect or consequential damages), or liability of any nature, arising or resulting
                        from the collection, use, transfer, processing or storage of personal information obtained by us and
                        resulting from your access to and use of the web sites/apps or collected via the other channels.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Governing Law & Jurisdiction</h2>
                    <p>
                        This privacy policy will be governed by the laws of the relevant country in which your personal information
                        is registered with Citymax Hotels ("the applicable territory"). For the avoidance of doubt, the relevant
                        applicable territory may only include those countries in which Citymax Hotels operates stores or the
                        websites/apps as the case may be. The exclusive jurisdiction for any claim, action or dispute with Citymax
                        Hotels under this privacy policy will be in the appropriate courts of the applicable territory.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="mb-4">Citymax Hotels UAE: (800-2489629) info@citymaxhotels.com</p>
                    <p>
                        BY POST: Landmark Two Investments in Tourist LLC Business Bay Al Khaleej Al Tejari 2nd street Dubai, United
                        Arab Emirates PO Box: 116121
                    </p>
                </section>
            </div>
        </div>
    )
}
