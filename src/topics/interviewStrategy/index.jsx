// src/topics/interviewStrategy/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiTarget,
    FiHelpCircle,
    FiBarChart2,
    FiActivity,
    FiDatabase,
    FiAlertTriangle,
    FiShuffle,
    FiCheckCircle,
} from "react-icons/fi";

const InterviewStrategy = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "interviewStrategy",
            title: "Interview Strategy",
            sub: "How to drive the interview: clarify, estimate, model traffic and storage, find bottlenecks, explain tradeoffs.",
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
                        <FiTarget />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Must know</span>
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
                        {/* Clarifying requirements */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiHelpCircle />
                                </span>
                                <h3 className="h3">Clarifying requirements</h3>
                            </div>

                            <p className="p">
                                Start by clarifying what we are building. Many
                                candidates jump into architecture too fast. The
                                best move is to lock scope first, then design.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Functional</div>
                                    <div className="v">
                                        What features are in scope.
                                        <span className="small">
                                            Example: login, create post, like,
                                            comment, follow
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Non-functional</div>
                                    <div className="v">
                                        Scale, latency, availability,
                                        consistency, cost.
                                        <span className="small">
                                            Example: 99.9% uptime, global users,
                                            200 ms p95 API
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Constraints</div>
                                    <div className="v">
                                        Region, budget, compliance, rollout
                                        timeline.
                                        <span className="small">
                                            Example: must store data in India
                                            region, must support mobile first
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mini">
                                <span className="pill">Scope</span>
                                <span className="dash">-</span>
                                <span className="pill">Users</span>
                                <span className="dash">-</span>
                                <span className="pill">Core flows</span>
                                <span className="dash">-</span>
                                <span className="pill">SLO targets</span>
                            </div>

                            <p className="note">
                                If requirements are unclear, your design will be
                                random. Spend 1 to 2 minutes here.
                            </p>
                        </div>

                        {/* Estimation techniques */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiBarChart2 />
                                </span>
                                <h3 className="h3">Estimation techniques</h3>
                            </div>

                            <p className="p">
                                Estimation is not about perfect numbers. It is
                                about order of magnitude so you can pick correct
                                architecture decisions.
                            </p>

                            <ul className="list">
                                <li>
                                    Use simple assumptions and round numbers.
                                </li>
                                <li>Prefer p95 or average, not best case.</li>
                                <li>
                                    Keep units consistent - requests per second,
                                    bytes, seconds, days.
                                </li>
                                <li>
                                    Write your assumptions in the design so they
                                    are visible.
                                </li>
                            </ul>

                            <p className="note">
                                Interviewers care about your reasoning path more
                                than the final number.
                            </p>
                        </div>

                        {/* Traffic calculation */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiActivity />
                                </span>
                                <h3 className="h3">Traffic calculation</h3>
                            </div>

                            <p className="p">
                                Traffic means how many requests hit the system
                                and how spiky it is. Always estimate peak load,
                                not only daily average.
                            </p>

                            <div className="formula">
                                <div className="fTitle">Basic formula</div>
                                <div className="fRow">
                                    <span className="mono">RPS</span>
                                    <span className="eq">=</span>
                                    <span className="mono">
                                        requests per day
                                    </span>
                                    <span className="eq">/</span>
                                    <span className="mono">86400</span>
                                </div>
                                <div className="small">
                                    Peak RPS can be 2x to 10x average depending
                                    on product.
                                </div>
                            </div>

                            <ul className="list">
                                <li>Estimate active users per day.</li>
                                <li>Estimate actions per user per day.</li>
                                <li>
                                    Convert to average RPS, then apply peak
                                    multiplier.
                                </li>
                            </ul>

                            <p className="note">
                                This drives load balancer, autoscaling, cache
                                sizing, and database capacity.
                            </p>
                        </div>

                        {/* Storage estimation */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiDatabase />
                                </span>
                                <h3 className="h3">Storage estimation</h3>
                            </div>

                            <p className="p">
                                Storage estimation tells you database type,
                                sharding needs, backups, and cost. Separate hot
                                data (frequent) from cold data (rare).
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Row size estimate</div>
                                    <div className="v">
                                        Approx bytes per record.
                                        <span className="small">
                                            Example: user record 1 KB, post
                                            record 2 KB, message record 500 B
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Records per day</div>
                                    <div className="v">
                                        New records created daily.
                                        <span className="small">
                                            Example: 5 million messages per day
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Total per day</div>
                                    <div className="v">
                                        <span className="mono">
                                            sizePerRecord * recordsPerDay
                                        </span>
                                        <span className="small">
                                            Example: 500 B * 5M = 2.5 GB per day
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Retention</div>
                                    <div className="v">
                                        How long data is kept.
                                        <span className="small">
                                            Example: keep messages 2 years, logs
                                            30 days
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Add overhead for indexes, replication, backups.
                                A quick safe factor is 2x to 4x.
                            </p>
                        </div>

                        {/* Bottleneck identification */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiAlertTriangle />
                                </span>
                                <h3 className="h3">
                                    Bottleneck identification
                                </h3>
                            </div>

                            <p className="p">
                                Bottleneck is the first component that breaks as
                                load grows. Find it early and design around it.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Database</b> - slow queries, hot
                                    partitions, lock contention
                                </li>
                                <li>
                                    <b>Network</b> - bandwidth limits, high
                                    latency to a region
                                </li>
                                <li>
                                    <b>CPU</b> - heavy serialization,
                                    encryption, image processing
                                </li>
                                <li>
                                    <b>External dependencies</b> - third-party
                                    APIs and rate limits
                                </li>
                            </ul>

                            <p className="note">
                                Fixes are usually cache, async queue, batching,
                                sharding, or precompute.
                            </p>
                        </div>

                        {/* Tradeoff explanation */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShuffle />
                                </span>
                                <h3 className="h3">Tradeoff explanation</h3>
                            </div>

                            <p className="p">
                                Tradeoffs are the real scoring area. State the
                                options, choose one, and explain why. Mention
                                what you gain and what you lose.
                            </p>

                            <div className="trade">
                                <div className="tRow">
                                    <div className="tK">Consistency</div>
                                    <div className="tV">
                                        Strong consistency gives correctness but
                                        can increase latency and reduce
                                        availability.
                                    </div>
                                </div>
                                <div className="tRow">
                                    <div className="tK">Cost</div>
                                    <div className="tV">
                                        More replicas and regions increase
                                        reliability but cost more.
                                    </div>
                                </div>
                                <div className="tRow">
                                    <div className="tK">Simplicity</div>
                                    <div className="tV">
                                        Monolith is simpler early. Microservices
                                        help later but add ops complexity.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Best pattern: "Now - next - later". Start
                                simple, then evolve when scale forces it.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiCheckCircle />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Clarify first, estimate second, design third,
                                then explain bottlenecks and tradeoffs clearly.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default InterviewStrategy;
