// src/topics/highAvailabilityFaultTolerance/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShield,
    FiCopy,
    FiRepeat,
    FiZap,
    FiRefreshCw,
    FiTrendingDown,
} from "react-icons/fi";

const HighAvailabilityFaultTolerance = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "highAvailabilityFaultTolerance",
            title: "High Availability and Fault Tolerance",
            sub: "Redundancy, failover, circuit breaker, retry, backoff, and graceful degradation.",
        };
    }, []);

    return (
        <Styled.Wrapper id={meta.id}>
            <button
                type="button"
                className={`head ${open ? "open" : ""}`}
                onClick={() => setOpen((s) => !s)}
                aria-expanded={open}
                aria-controls={`${meta.id}-content`}
            >
                <div className="left">
                    <span className="icon">
                        <FiShield />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Resilience</span>
                        </div>
                        <p className="sub">{meta.sub}</p>
                    </div>
                </div>

                <span className="chev">
                    <FiChevronDown />
                </span>
            </button>

            <div
                id={`${meta.id}-content`}
                className={`content ${open ? "show" : ""}`}
            >
                <div className="inner">
                    <div className="grid">
                        {/* Redundancy */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCopy />
                                </span>
                                <h3 className="h3">Redundancy</h3>
                            </div>

                            <p className="p">
                                Redundancy means having multiple copies of
                                critical components so that if one fails,
                                another can continue serving traffic.
                            </p>

                            <ul className="list">
                                <li>
                                    Multiple application servers behind a load
                                    balancer
                                </li>
                                <li>Database replicas in different zones</li>
                                <li>Multiple network paths</li>
                            </ul>

                            <p className="note">
                                Single point of failure is the enemy. Remove it
                                with duplication.
                            </p>
                        </div>

                        {/* Failover */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRepeat />
                                </span>
                                <h3 className="h3">Failover</h3>
                            </div>

                            <p className="p">
                                Failover is the automatic switch from a failed
                                component to a healthy backup. It ensures
                                minimal downtime when something breaks.
                            </p>

                            <div className="mini">
                                <span className="pill">Primary database</span>
                                <span className="dash">-</span>
                                <span className="pill">Crash</span>
                                <span className="dash">-</span>
                                <span className="pill">Promote replica</span>
                            </div>

                            <p className="note">
                                Automatic failover is preferred over manual
                                because speed matters during outages.
                            </p>
                        </div>

                        {/* Circuit Breaker */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiZap />
                                </span>
                                <h3 className="h3">Circuit breaker pattern</h3>
                            </div>

                            <p className="p">
                                A circuit breaker stops sending requests to a
                                failing service to prevent cascading failures.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Closed</div>
                                    <div className="v">
                                        Normal state. Requests flow normally.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Open</div>
                                    <div className="v">
                                        Service is failing. Requests are blocked
                                        immediately.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Half-open</div>
                                    <div className="v">
                                        Test requests are allowed to check
                                        recovery.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Prevents one failing service from taking down
                                the whole system.
                            </p>
                        </div>

                        {/* Retry */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRefreshCw />
                                </span>
                                <h3 className="h3">Retry pattern</h3>
                            </div>

                            <p className="p">
                                Retry means attempting the same request again if
                                it fails temporarily. Many failures are
                                transient, like short network glitches.
                            </p>

                            <ul className="list">
                                <li>Retry on timeout</li>
                                <li>Retry on temporary server error</li>
                                <li>Avoid retry on permanent errors</li>
                            </ul>

                            <p className="note">
                                Blind retries can increase load. Combine with
                                backoff strategy.
                            </p>
                        </div>

                        {/* Backoff */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiTrendingDown />
                                </span>
                                <h3 className="h3">Backoff strategy</h3>
                            </div>

                            <p className="p">
                                Backoff means increasing the delay between
                                retries to avoid overwhelming the system.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Fixed backoff</div>
                                    <div className="v">
                                        Same delay each retry.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Exponential backoff</div>
                                    <div className="v">
                                        Delay increases exponentially.
                                        <span className="small">
                                            Example: 1s, 2s, 4s, 8s
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Exponential backoff with jitter reduces retry
                                storms.
                            </p>
                        </div>

                        {/* Graceful degradation */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShield />
                                </span>
                                <h3 className="h3">Graceful degradation</h3>
                            </div>

                            <p className="p">
                                Graceful degradation means reducing features
                                instead of failing completely when part of the
                                system is under stress or unavailable.
                            </p>

                            <ul className="list">
                                <li>
                                    Show cached data if live service is down
                                </li>
                                <li>
                                    Disable recommendations but keep checkout
                                    working
                                </li>
                                <li>
                                    Serve static content instead of dynamic
                                    content
                                </li>
                            </ul>

                            <p className="note">
                                Better to offer limited service than no service
                                at all.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiShield />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Redundancy prevents failure. Circuit breaker
                                prevents cascade. Retry with backoff prevents
                                overload. Degrade gracefully under stress.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default HighAvailabilityFaultTolerance;
