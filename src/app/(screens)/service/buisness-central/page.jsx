import { ERPSolutionsBottomSection } from '@/components/common/solutions'
import New_Service_Inner_Hero from '@/components/service/finance-and-opearations/hero'
import MicrosoftDynamic from '@/components/service/microsoft/microsoft-dynamic'
import MobilitySolutions from '@/components/service/microsoft/mobility-solution'
import { bc_service, bc_service_black } from '@/data/erp-consulting-service'
import { bc_solution } from '@/data/mobility-solutions'

const BuisnessCentral = () => {
    return (
        <div>
            <New_Service_Inner_Hero
                heading={"Unlocking Business Potential with Microsoft Dynamics 365 Business Central"}
                para={"Transform Your Business with Microsoft Dynamics 365 Business Central by Plenum."}
                image={"/service/BC/BC_hero.svg"}
                image_className="md:w-[500px] md:h-[300px] xl:w-[650px] xl:h-[500px]"
                button_text="Connect with our Experts"
            />
            <div className='max-w-full 2xl:max-w-[1440px] mx-auto '>
                <ERPSolutionsBottomSection className='flex justify-center items-center gap-5' bottomSection={bc_service} left={true} blackSection={bc_service_black} />
            </div>
            <MobilitySolutions
                card_className={"w-[300px] h-[200px]"}
                className={"flex flex-wrap gap-10 justify-center"}
                solutions={bc_solution}
                isCenter={true}
                heading1={"Why Microsoft Dynamics"}
                heading2={"365 Business Central?"}
                para={"Unlock the full potential of your business with Microsoft Dynamics 365 Business Central.Here's why Microsoft Dynamics 365 Business Central is the solution of choice for organizations worldwide:"}
            />
            <MicrosoftDynamic />
        </div>
    )
}

export default BuisnessCentral
