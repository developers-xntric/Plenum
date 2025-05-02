import Link from "next/link";

export default function TestimonialCard({ quote, author, position, socialLink }) {
  return (
    <div className="bg-[#EFEFEF] p-4 md:p-6 relative transition-all duration-300 ease-in-out h-full">
      <blockquote className="mb-6">
        <p className="text-secondary font-['Archivo'] opacity-75 xl:max-w-[90%] 2xl:max-w-[78%]">{`"${quote}"`}</p>
      </blockquote>
      <div className="flex items-center justify-between">
        <div className="-space-y-3">
          <p className="leading-[55px] font-['Archivo'] text-[18px] md:text-[20px] text-secondary font-semibold home-section-headings">{author}</p>
          <p className="text-[12px] md:text-sm text-secondary font-['Archivo'] opacity-75">{position}</p>
        </div>
        <Link href={socialLink} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" className="md:block hidden">
            <path fillRule="evenodd" clipRule="evenodd" d="M24.893 0.113281H4.10777C2.13939 0.113281 0.525391 1.72745 0.525391 3.6956V24.4809C0.525391 26.4491 2.13939 28.0633 4.10777 28.0633H24.893C26.8616 28.0633 28.4754 26.4491 28.4754 24.481V3.6956C28.4754 1.72745 26.8616 0.113281 24.893 0.113281ZM10.1332 13.6115V22.2404H6.34831V14.2553V11.3515H10.1332V13.6115ZM8.23319 9.72855C7.18023 9.72855 6.32583 8.87479 6.32583 7.82119C6.32583 6.76742 7.18023 5.91471 8.23319 5.91471C9.2876 5.91471 10.1412 6.76748 10.1412 7.82119C10.1412 8.87479 9.28766 9.72855 8.23319 9.72855ZM22.6525 16.301V22.2404H19.3916V16.9512C19.3916 15.6847 19.2545 14.0558 17.5188 14.0558C15.7566 14.0558 15.4903 15.4347 15.4903 16.8599V22.2404H12.3459V13.4547V11.3515H15.3738V12.8072H15.4061C15.8577 11.992 16.9641 11.3503 18.6117 11.3503C21.3876 11.3503 22.3309 12.663 22.589 14.7167C22.6503 15.1987 22.6739 15.7187 22.6739 16.301H22.6525Z" fill="#1A1A1A" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="md:hidden block">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.3507 0.900391H3.50286C1.81266 0.900391 0.426758 2.28644 0.426758 3.97644V21.8243C0.426758 23.5143 1.81266 24.9004 3.50286 24.9004H21.3506C23.041 24.9004 24.4268 23.5143 24.4268 21.8243V3.97644C24.4268 2.28644 23.041 0.900391 21.3507 0.900391ZM8.67676 12.491V19.9004H5.42676V13.0438V10.5504H8.67676V12.491ZM7.04526 9.15679C6.14111 9.15679 5.40746 8.42369 5.40746 7.51899C5.40746 6.61414 6.14111 5.88194 7.04526 5.88194C7.95066 5.88194 8.68361 6.61419 8.68361 7.51899C8.68361 8.42369 7.95071 9.15679 7.04526 9.15679ZM19.4268 14.8004V19.9004H16.6268V15.3587C16.6268 14.2712 16.509 12.8725 15.0186 12.8725C13.5055 12.8725 13.2768 14.0565 13.2768 15.2803V19.9004H10.5768V12.3564V10.5504H13.1768V11.8004H13.2045C13.5923 11.1004 14.5423 10.5494 15.957 10.5494C18.3406 10.5494 19.1506 11.6765 19.3723 13.44C19.4249 13.8538 19.4452 14.3004 19.4452 14.8004H19.4268Z" fill="#1A1A1A" />
          </svg>
        </Link>
      </div>
    </div>
  )
}