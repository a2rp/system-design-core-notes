// src/topics/foundationsSystemDesign/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGrid,
    FiCheckCircle,
    FiSliders,
    FiTrendingUp,
    FiShield,
    FiLayers,
    FiClock,
    FiPackage,
} from "react-icons/fi";

const FoundationsSystemDesign = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "foundationsSystemDesign",
            title: "Foundations of System Design",
            sub: "Requirements, scale, reliability, consistency, latency, CAP, and ACID vs BASE.",
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
                        <FiGrid />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Core</span>
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
                        {/* What is System Design */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiPackage />
                                </span>
                                <h3 className="h3">What is System Design</h3>
                            </div>

                            <p className="p">
                                System design means planning how a software
                                system will work end to end, so it can handle
                                real traffic, failures, growth, and future
                                changes. You choose the major components like
                                API, database, cache, queue, and services, and
                                you explain tradeoffs.
                            </p>

                            <p className="p">
                                A good answer is not "use microservices". A good
                                answer is "start simple, identify bottlenecks,
                                scale step by step, and protect reliability".
                            </p>

                            <div className="mini">
                                <span className="pill">Requirements</span>
                                <span className="dash">-</span>
                                <span className="pill">High level design</span>
                                <span className="dash">-</span>
                                <span className="pill">Data model</span>
                                <span className="dash">-</span>
                                <span className="pill">Scaling plan</span>
                                <span className="dash">-</span>
                                <span className="pill">Tradeoffs</span>
                            </div>

                            <p className="note">
                                You are designing for people, traffic, and
                                failures, not only for code correctness.
                            </p>
                        </div>

                        {/* Functional vs Non-functional */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCheckCircle />
                                </span>
                                <h3 className="h3">
                                    Functional vs Non-functional requirements
                                </h3>
                            </div>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Functional</div>
                                    <div className="v">
                                        What the system must do.
                                        <span className="small">
                                            Example: user can upload photo,
                                            search users, send messages
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Non-functional</div>
                                    <div className="v">
                                        How well it must do it, at scale.
                                        <span className="small">
                                            Example: 99.9% uptime, 200 ms
                                            latency, handle 50k requests per
                                            second
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Most design decisions come from non-functional
                                requirements.
                            </p>
                        </div>

                        {/* Scalability */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiTrendingUp />
                                </span>
                                <h3 className="h3">Scalability</h3>
                            </div>

                            <p className="p">
                                Scalability means the system can handle
                                increased load by adding resources, while still
                                meeting performance goals.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Vertical scaling</b> - make one machine
                                    bigger (more CPU, RAM)
                                </li>
                                <li>
                                    <b>Horizontal scaling</b> - add more
                                    machines and balance traffic
                                </li>
                                <li>
                                    <b>Stateless services</b> scale easier
                                    because any instance can handle any request
                                </li>
                            </ul>

                            <p className="note">
                                Horizontal scaling is the long-term solution,
                                but it adds complexity.
                            </p>
                        </div>

                        {/* Reliability vs Availability */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShield />
                                </span>
                                <h3 className="h3">
                                    Reliability vs Availability
                                </h3>
                            </div>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Reliability</div>
                                    <div className="v">
                                        System works correctly and consistently.
                                        <span className="small">
                                            Example: no data loss, correct
                                            results, predictable behavior
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Availability</div>
                                    <div className="v">
                                        System is up and reachable when needed.
                                        <span className="small">
                                            Example: service responds even
                                            during partial failures
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                A system can be available but wrong, or reliable
                                but down. Great systems aim for both.
                            </p>
                        </div>

                        {/* Consistency models */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Consistency models</h3>
                            </div>

                            <p className="p">
                                Consistency answers this question: when data
                                changes, when do other users see it. In
                                distributed systems, data often exists in
                                multiple places.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Strong consistency</div>
                                    <div className="v">
                                        Reads always return the latest write.
                                        <span className="small">
                                            Example: bank balance updates must
                                            be immediate
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">
                                        Eventual consistency
                                    </div>
                                    <div className="v">
                                        Reads may return older data briefly, but
                                        replicas converge later.
                                        <span className="small">
                                            Example: social media like counts
                                            can lag
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Read your writes</div>
                                    <div className="v">
                                        After you update, you should see your
                                        own update on next read.
                                        <span className="small">
                                            Example: after posting a tweet, you
                                            should see it instantly
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Strong consistency is simpler mentally but
                                harder and slower at scale.
                            </p>
                        </div>

                        {/* Latency vs Throughput */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiClock />
                                </span>
                                <h3 className="h3">Latency vs Throughput</h3>
                            </div>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Latency</div>
                                    <div className="v">
                                        Time taken for one request.
                                        <span className="small">
                                            Example: API responds in 120 ms
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Throughput</div>
                                    <div className="v">
                                        How many requests per second the system
                                        can handle.
                                        <span className="small">
                                            Example: 10k requests per second
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                You can increase throughput with batching, but
                                latency might increase.
                            </p>
                        </div>

                        {/* CAP */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiSliders />
                                </span>
                                <h3 className="h3">CAP theorem</h3>
                            </div>

                            <p className="p">
                                CAP says in a distributed system, when a network
                                partition happens, you must choose between
                                consistency and availability.
                            </p>

                            <div className="cap">
                                <div className="capRow">
                                    <div className="capK">C</div>
                                    <div className="capV">
                                        <b>Consistency</b> - all nodes see the
                                        same latest data
                                    </div>
                                </div>
                                <div className="capRow">
                                    <div className="capK">A</div>
                                    <div className="capV">
                                        <b>Availability</b> - every request gets
                                        a response
                                    </div>
                                </div>
                                <div className="capRow">
                                    <div className="capK">P</div>
                                    <div className="capV">
                                        <b>Partition tolerance</b> - system
                                        works despite network splits
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Partition tolerance is not optional in real
                                distributed systems. So during partition, choose
                                C or A.
                            </p>
                        </div>

                        {/* ACID vs BASE */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">ACID vs BASE</h3>
                            </div>

                            <p className="p">
                                These are mental models for data correctness and
                                behavior. ACID is commonly used with relational
                                databases and strict transactions. BASE is
                                common in distributed systems prioritizing
                                availability and scale.
                            </p>

                            <div className="twoCol">
                                <div className="box">
                                    <div className="boxTitle">ACID</div>
                                    <ul className="list">
                                        <li>
                                            <b>A</b> - Atomicity: all or nothing
                                            transaction
                                        </li>
                                        <li>
                                            <b>C</b> - Consistency: rules and
                                            constraints stay valid
                                        </li>
                                        <li>
                                            <b>I</b> - Isolation: transactions
                                            do not interfere
                                        </li>
                                        <li>
                                            <b>D</b> - Durability: committed
                                            data is not lost
                                        </li>
                                    </ul>
                                    <div className="small">
                                        Use case: payments, inventory, banking
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="boxTitle">BASE</div>
                                    <ul className="list">
                                        <li>
                                            <b>B</b> - Basically Available:
                                            system responds even if degraded
                                        </li>
                                        <li>
                                            <b>S</b> - Soft state: data may
                                            change while syncing
                                        </li>
                                        <li>
                                            <b>E</b> - Eventual consistency:
                                            replicas converge later
                                        </li>
                                    </ul>
                                    <div className="small">
                                        Use case: feeds, likes, analytics, large
                                        distributed apps
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Reality is mixed. Many systems use ACID where
                                needed and BASE where acceptable.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiGrid />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Requirements define everything. Scale drives
                                architecture. CAP and consistency define
                                tradeoffs.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default FoundationsSystemDesign;
