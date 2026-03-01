// src/topics/scalabilityConcepts/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiTrendingUp,
    FiArrowUpRight,
    FiColumns,
    FiCpu,
    FiShuffle,
    FiActivity,
    FiSliders,
    FiAlertTriangle,
} from "react-icons/fi";

const ScalabilityConcepts = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "scalabilityConcepts",
            title: "Scalability Concepts",
            sub: "Vertical and horizontal scaling, stateless design, load balancing, auto scaling, and bottlenecks.",
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
                        <FiTrendingUp />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Scale</span>
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
                        {/* Big idea */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiActivity />
                                </span>
                                <h3 className="h3">What scalability means</h3>
                            </div>

                            <p className="p">
                                Scalability means your system can handle more
                                load by adding resources, while still meeting
                                the same targets like latency, error rate, and
                                cost. Load can mean more users, more requests
                                per second, more data, or more background jobs.
                            </p>

                            <div className="mini">
                                <span className="pill">More users</span>
                                <span className="dash">-</span>
                                <span className="pill">More traffic</span>
                                <span className="dash">-</span>
                                <span className="pill">More data</span>
                                <span className="dash">-</span>
                                <span className="pill">
                                    More reliability pressure
                                </span>
                            </div>

                            <p className="note">
                                Scaling is not only adding servers. It is also
                                removing bottlenecks and protecting the
                                database.
                            </p>
                        </div>

                        {/* Vertical scaling */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiArrowUpRight />
                                </span>
                                <h3 className="h3">Vertical scaling</h3>
                            </div>

                            <p className="p">
                                Vertical scaling means making one machine
                                bigger. More CPU, more RAM, faster disk. It is
                                the fastest upgrade and simplest mentally.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Pros</b> - simple, no distributed
                                    complexity, quick win
                                </li>
                                <li>
                                    <b>Cons</b> - hard limit, expensive, single
                                    machine becomes a single point of failure
                                </li>
                            </ul>

                            <p className="note">
                                Great for early stages. Eventually you hit the
                                ceiling.
                            </p>
                        </div>

                        {/* Horizontal scaling */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiColumns />
                                </span>
                                <h3 className="h3">Horizontal scaling</h3>
                            </div>

                            <p className="p">
                                Horizontal scaling means adding more machines
                                and distributing traffic across them. This is
                                the real long-term scaling path.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Pros</b> - scale out, better fault
                                    tolerance, cheaper per unit
                                </li>
                                <li>
                                    <b>Cons</b> - needs load balancing,
                                    introduces distributed issues
                                </li>
                            </ul>

                            <p className="note">
                                Horizontal scaling works best when services are
                                stateless.
                            </p>
                        </div>

                        {/* Stateless vs Stateful */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShuffle />
                                </span>
                                <h3 className="h3">
                                    Stateless vs Stateful services
                                </h3>
                            </div>

                            <div className="twoCol">
                                <div className="box">
                                    <div className="boxTitle">Stateless</div>
                                    <p className="p">
                                        Server does not keep user session or
                                        long-lived data in memory. Any request
                                        can go to any instance.
                                    </p>
                                    <ul className="list">
                                        <li>Easy to scale horizontally</li>
                                        <li>
                                            Load balancer can send traffic
                                            anywhere
                                        </li>
                                        <li>
                                            Failures are easier to recover from
                                        </li>
                                    </ul>
                                    <div className="small">
                                        Example: API server reads session from
                                        cookie or Redis and writes to DB
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="boxTitle">Stateful</div>
                                    <p className="p">
                                        Server keeps important state in memory,
                                        so requests must go to the same
                                        instance.
                                    </p>
                                    <ul className="list">
                                        <li>
                                            Harder to scale, needs sticky
                                            sessions
                                        </li>
                                        <li>Instance restart can lose state</li>
                                        <li>Failover is more complex</li>
                                    </ul>
                                    <div className="small">
                                        Example: in-memory session store,
                                        websocket room state only in one node
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Move state out of app servers into shared
                                systems like DB, Redis, or object storage.
                            </p>
                        </div>

                        {/* Load balancing basics */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiSliders />
                                </span>
                                <h3 className="h3">Load balancing basics</h3>
                            </div>

                            <p className="p">
                                A load balancer spreads incoming requests across
                                multiple servers so no single server gets
                                overloaded. It also helps with failover by
                                removing unhealthy instances.
                            </p>

                            <ul className="list">
                                <li>
                                    Common strategies - round robin, least
                                    connections, IP hash
                                </li>
                                <li>
                                    Health checks - remove instances that are
                                    failing
                                </li>
                                <li>
                                    Sticky sessions - used only when service is
                                    stateful
                                </li>
                            </ul>

                            <p className="note">
                                Load balancer is the gatekeeper for scaling and
                                reliability.
                            </p>
                        </div>

                        {/* Auto scaling */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCpu />
                                </span>
                                <h3 className="h3">Auto scaling</h3>
                            </div>

                            <p className="p">
                                Auto scaling means adding or removing server
                                instances automatically based on load. It helps
                                you handle traffic spikes and reduce cost when
                                traffic is low.
                            </p>

                            <ul className="list">
                                <li>
                                    Scale out when CPU, memory, or request rate
                                    crosses a threshold
                                </li>
                                <li>Scale in when load is low for some time</li>
                                <li>
                                    Needs good health checks and warmup time
                                    planning
                                </li>
                            </ul>

                            <p className="note">
                                Auto scaling is not magic. If DB is the
                                bottleneck, adding API servers will not help.
                            </p>
                        </div>

                        {/* Bottlenecks */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiAlertTriangle />
                                </span>
                                <h3 className="h3">
                                    Bottlenecks identification
                                </h3>
                            </div>

                            <p className="p">
                                A bottleneck is the component that hits its
                                limit first and slows down the whole system. If
                                you remove the wrong thing, nothing improves.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">App servers</div>
                                    <div className="v">
                                        CPU high, memory leaks, too many
                                        threads, slow code paths.
                                        <span className="small">
                                            Fix: optimize code, add caching,
                                            scale horizontally
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Database</div>
                                    <div className="v">
                                        Slow queries, locks, missing indexes,
                                        high write load.
                                        <span className="small">
                                            Fix: indexes, query tuning, read
                                            replicas, sharding later
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Network</div>
                                    <div className="v">
                                        High latency, packet loss, too much
                                        chatty communication.
                                        <span className="small">
                                            Fix: reduce calls, batch, compress,
                                            use CDN
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">External services</div>
                                    <div className="v">
                                        Payment, email, third party APIs slowing
                                        you down.
                                        <span className="small">
                                            Fix: timeouts, retries, circuit
                                            breaker, async queues
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Rule: measure first. Fix the hottest path.
                                Protect the database.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiTrendingUp />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Start vertical, go horizontal, stay stateless,
                                balance traffic, auto scale carefully, and
                                always chase the real bottleneck.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ScalabilityConcepts;
