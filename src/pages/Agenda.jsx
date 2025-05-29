import AgendaHero from "../components/agenda/AgendaHero";
import AgendaTabs from "../components/agenda/AgendaTabs";
import AIInfo from "../components/agenda/AIInfo";
import JoinUs from "../components/reusable/JoinUs";

export default function Agenda() {
    return(
        <>
        <AgendaHero/>
        <AIInfo />
        <AgendaTabs/>
        <JoinUs />
        </>
    )
}