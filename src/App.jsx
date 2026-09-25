import { useEffect, useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutSystemDesign from "./components/aboutSystemDesign";
import FoundationsSystemDesign from "./topics/foundationsSystemDesign";
import ArchitectureBasics from "./topics/architectureBasics";
import ScalabilityConcepts from "./topics/scalabilityConcepts";
import LoadBalancing from "./topics/loadBalancing";
import Caching from "./topics/caching";
import DatabasesSystemDesign from "./topics/databasesSystemDesign";
import DataStorageConcepts from "./topics/dataStorageConcepts";
import MessagingAndQueues from "./topics/messagingAndQueues";
import ApiDesign from "./topics/apiDesign";
import HighAvailabilityFaultTolerance from "./topics/highAvailabilityFaultTolerance";
import DistributedSystemsConcepts from "./topics/distributedSystemsConcepts";
import SecuritySystemDesign from "./topics/securitySystemDesign";
import MonitoringObservability from "./topics/monitoringObservability";
import PerformanceOptimization from "./topics/performanceOptimization";
import DesignPatternsSystemDesign from "./topics/designPatternsSystemDesign";
import RealWorldDesignExamples from "./topics/realWorldDesignExamples";
import InterviewStrategy from "./topics/interviewStrategy";

const App = () => {
    const mainRef = useRef(null);
    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        const mainElement = mainRef.current;
        if (!mainElement) return undefined;

        const handleScroll = () => setShowGoTop(mainElement.scrollTop > 360);

        handleScroll();
        mainElement.addEventListener("scroll", handleScroll, { passive: true });

        return () => mainElement.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main ref={mainRef}>
                <div className="contentWrapper">
                    <AboutSystemDesign />

                    <FoundationsSystemDesign />
                    <ArchitectureBasics />
                    <ScalabilityConcepts />
                    <LoadBalancing />
                    <Caching />
                    <DatabasesSystemDesign />
                    <DataStorageConcepts />
                    <MessagingAndQueues />
                    <ApiDesign />
                    <HighAvailabilityFaultTolerance />
                    <DistributedSystemsConcepts />
                    <SecuritySystemDesign />
                    <MonitoringObservability />
                    <PerformanceOptimization />
                    <DesignPatternsSystemDesign />
                    <RealWorldDesignExamples />
                    <InterviewStrategy />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
            {showGoTop && (
                <Styled.GoToTop
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    title="Scroll to top"
                >
                    <FiArrowUp aria-hidden="true" />
                </Styled.GoToTop>
            )}
        </Styled.Wrapper>
    );
};

export default App;
