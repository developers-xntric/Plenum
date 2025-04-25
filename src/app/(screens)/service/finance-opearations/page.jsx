import { ERPSolutionsBottomSection } from '@/components/common/solutions';
import FaoDynamicOpearation from '@/components/service/finance-and-opearations/fao-dynamic-opearation';
import New_Service_Inner_Hero from '@/components/service/finance-and-opearations/hero';
import { fao_service, fao_service_black } from '@/data/erp-consulting-service';

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
            <div className='max-w-full 2xl:max-w-[1440px] mx-auto '>
                <ERPSolutionsBottomSection className='flex justify-center items-center gap-5' bottomSection={fao_service} left={true} blackSection={fao_service_black} />
            </div>
            <FaoDynamicOpearation />
        </div>
    )
}

export default FinanceOpearations;
