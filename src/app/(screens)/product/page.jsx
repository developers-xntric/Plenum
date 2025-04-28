import EndToEndAI from "@/components/product/end-to-end"
import ServiceHero from "@/components/service/hero"

const MomentumAI = () => {
    return (
        <div>
            <ServiceHero isLogo={false} bgImage='/product/m_hero.svg' />
            <EndToEndAI />
        </div>
    )
}

export default MomentumAI
