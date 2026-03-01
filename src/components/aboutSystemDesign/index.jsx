// src/components/aboutSystemDesign/index.jsx
import React from "react";
import { Styled } from "./styled";
import { FiGrid, FiTrendingUp, FiShield } from "react-icons/fi";

const AboutSystemDesign = () => {
    return (
        <Styled.Wrapper id="aboutSystemDesign">
            <div className="top">
                <h2 className="title">System Design</h2>

                <p className="sub">
                    System design is about building software that survives real
                    life. Not just "it works on my laptop" but "it works for 10
                    users, 10k users, and 10 million users". You learn how to
                    split a product into services, store data safely, keep
                    latency low, and handle failures without panic.
                </p>

                <p className="sub">
                    The main game is tradeoffs. You rarely get everything at
                    once. You choose between consistency and availability, cost
                    and performance, simplicity and flexibility. A good design
                    explains why each choice was made and what breaks first when
                    load increases.
                </p>

                <p className="sub">
                    This page is a fast revision sheet. It focuses on the core
                    building blocks like load balancing, caching, databases,
                    queues, replication, sharding, and observability, with small
                    mental models and real examples.
                </p>
            </div>

            <div className="grid">
                <div className="card">
                    <div className="cardTop">
                        <span className="icon">
                            <FiGrid />
                        </span>
                        <h3 className="h3">Think in building blocks</h3>
                    </div>

                    <ul className="list">
                        <li>Clients, APIs, services</li>
                        <li>Databases, caches</li>
                        <li>Queues, background workers</li>
                        <li>CDN, load balancers</li>
                        <li>Monitoring, logs, alerts</li>
                    </ul>

                    <p className="note">
                        Most big systems are the same blocks, just arranged
                        differently.
                    </p>
                </div>

                <div className="card">
                    <div className="cardTop">
                        <span className="icon">
                            <FiTrendingUp />
                        </span>
                        <h3 className="h3">Scale is a sequence</h3>
                    </div>

                    <div className="mini">
                        <span className="pill">Single server</span>
                        <span className="dash">-</span>
                        <span className="pill">Load balancer</span>
                        <span className="dash">-</span>
                        <span className="pill">Cache</span>
                        <span className="dash">-</span>
                        <span className="pill">Replicas</span>
                        <span className="dash">-</span>
                        <span className="pill">Sharding</span>
                    </div>

                    <p className="note">
                        You do not start with sharding. You earn it after
                        traffic forces it.
                    </p>
                </div>

                <div className="card">
                    <div className="cardTop">
                        <span className="icon">
                            <FiShield />
                        </span>
                        <h3 className="h3">Reliability mindset</h3>
                    </div>

                    <ul className="list">
                        <li>Failures are normal</li>
                        <li>Design for retries and timeouts</li>
                        <li>Prevent overload with rate limits</li>
                        <li>Use redundancy and failover</li>
                        <li>Measure with SLO and alerts</li>
                    </ul>

                    <p className="note">
                        If it can fail, it will. Design should reduce blast
                        radius.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AboutSystemDesign;
