import New_Service_Inner_Hero from '@/components/service/finance-and-opearations/hero';

const FinanceOpearations = () => {
    return (
        <div>
            <New_Service_Inner_Hero
                heading={"Microsoft Dynamics 365 Finance and Operations Implementation Partner"}
                para={"Delivering tailored IT services for business growth and operational excellence."}
                image={"/service/FAO/FAO_hero.svg"}
                image_className="md:w-[500px] md:h-[300px] xl:w-[650px] xl:h-[500px]"
                button_text="Connect with our Experts"
            />
        </div>
    )
}

export default FinanceOpearations;
