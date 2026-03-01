// App.jsx
import React from "react";
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
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
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
        </Styled.Wrapper>
    );
};

export default App;
