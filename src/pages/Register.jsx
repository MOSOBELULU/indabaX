import RegisterHero from "../components/register/RegisterHero"
import WhyJoin from "../components/register/WhyJoin"
import RegistrationForm from "../components/register/RegistrationForm"
import CTA from "../components/reusable/CTA"
import { useRef } from "react"
export default function Register() {
    const formRef = useRef()
    return (
        <>
        <RegisterHero/>
        <WhyJoin/>
        <RegistrationForm ref={formRef}/>
        <CTA formRef={formRef}/>
        </>
    )
}