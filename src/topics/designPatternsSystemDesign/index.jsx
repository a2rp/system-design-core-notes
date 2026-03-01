// src/topics/designPatternsSystemDesign/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiGitBranch,
    FiShuffle,
    FiRepeat,
    FiBox,
    FiFilter,
} from "react-icons/fi";

const DesignPatternsSystemDesign = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "designPatternsSystemDesign",
            title: "Design Patterns in System Design",
            sub: "API Gateway, Sidecar, Saga, CQRS, Event Sourcing, and Strangler pattern.",
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
                        <FiLayers />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Architecture</span>
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
                        {/* API Gateway */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiFilter />
                                </span>
                                <h3 className="h3">API Gateway pattern</h3>
                            </div>

                            <p className="p">
                                An <b>API Gateway</b> is a single entry point
                                for clients. Instead of calling many services
                                directly, the client calls the gateway, and the
                                gateway routes requests to the right backend
                                services.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Why</div>
                                    <div className="v">
                                        Simplifies client, hides internal
                                        services, centralizes auth and rate
                                        limiting.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Common features</div>
                                    <div className="v">
                                        Authentication, authorization, routing,
                                        rate limiting, request validation,
                                        caching, response aggregation.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Tradeoff</div>
                                    <div className="v">
                                        Can become a bottleneck or single point
                                        of failure if not scaled properly.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Example: mobile app hits one gateway endpoint,
                                gateway calls user service and feed service.
                            </p>
                        </div>

                        {/* Sidecar */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiBox />
                                </span>
                                <h3 className="h3">Sidecar pattern</h3>
                            </div>

                            <p className="p">
                                A <b>sidecar</b> is a helper component running
                                next to your service instance. Your app talks to
                                the sidecar locally, and sidecar handles
                                cross-cutting concerns.
                            </p>

                            <ul className="list">
                                <li>
                                    Common sidecar jobs: TLS, retries, circuit
                                    breaker, service discovery, metrics,
                                    logging.
                                </li>
                                <li>
                                    Each service instance gets its own sidecar
                                    instance.
                                </li>
                            </ul>

                            <p className="note">
                                Example: service mesh where Envoy runs as
                                sidecar for every service.
                            </p>
                        </div>

                        {/* Saga */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShuffle />
                                </span>
                                <h3 className="h3">Saga pattern</h3>
                            </div>

                            <p className="p">
                                <b>Saga</b> is used for distributed transactions
                                across multiple services. Instead of one big
                                database transaction, you do a sequence of local
                                transactions, and if something fails, you run{" "}
                                <b>compensating actions</b> to undo work.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Problem it solves</div>
                                    <div className="v">
                                        Multi-service workflows like order -
                                        payment - inventory - shipping.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Two styles</div>
                                    <div className="v">
                                        <b>Choreography</b> (events) and{" "}
                                        <b>Orchestration</b> (central
                                        coordinator).
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Tradeoff</div>
                                    <div className="v">
                                        More complexity. Needs idempotency,
                                        retries, and careful failure handling.
                                    </div>
                                </div>
                            </div>

                            <div className="mini">
                                <span className="pill">Order created</span>
                                <span className="dash">-</span>
                                <span className="pill">Payment charged</span>
                                <span className="dash">-</span>
                                <span className="pill">Inventory reserved</span>
                                <span className="dash">-</span>
                                <span className="pill">Ship order</span>
                                <span className="dash">-</span>
                                <span className="pill">
                                    If fail - compensate
                                </span>
                            </div>

                            <p className="note">
                                Compensation example: if shipping fails, release
                                inventory and refund payment.
                            </p>
                        </div>

                        {/* CQRS */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitBranch />
                                </span>
                                <h3 className="h3">CQRS</h3>
                            </div>

                            <p className="p">
                                <b>CQRS</b> means{" "}
                                <b>Command Query Responsibility Segregation</b>.
                                It separates write operations (commands) from
                                read operations (queries).
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Command side</div>
                                    <div className="v">
                                        Handles writes, validates rules, updates
                                        state.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Query side</div>
                                    <div className="v">
                                        Optimized for reads, can use separate
                                        read models or databases.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Useful when reads are heavy and need different
                                schema than writes.
                            </p>
                        </div>

                        {/* Event Sourcing */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRepeat />
                                </span>
                                <h3 className="h3">Event sourcing</h3>
                            </div>

                            <p className="p">
                                In <b>event sourcing</b>, you store changes as a
                                sequence of events, not just the latest state.
                                Current state is built by replaying events.
                            </p>

                            <ul className="list">
                                <li>
                                    Event examples: "OrderPlaced",
                                    "PaymentCaptured", "ItemShipped"
                                </li>
                                <li>
                                    State is derived by replaying the event log.
                                </li>
                                <li>Great for audit trails and debugging.</li>
                            </ul>

                            <p className="note">
                                Tradeoff: needs careful event versioning and
                                replay performance planning.
                            </p>
                        </div>

                        {/* Strangler */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Strangler pattern</h3>
                            </div>

                            <p className="p">
                                The <b>strangler pattern</b> helps migrate a
                                legacy system gradually. You do not rewrite
                                everything at once. You build new services
                                around the old system, route specific
                                functionality to the new system, and slowly
                                replace old parts.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Why</div>
                                    <div className="v">
                                        Reduces risk. Allows gradual migration
                                        without a big-bang rewrite.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">How it looks</div>
                                    <div className="v">
                                        A routing layer sends some routes to new
                                        code and the rest to legacy.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Best use</div>
                                    <div className="v">
                                        Large monolith migration to services or
                                        new architecture.
                                    </div>
                                </div>
                            </div>

                            <div className="mini">
                                <span className="pill">Legacy app</span>
                                <span className="dash">-</span>
                                <span className="pill">
                                    Add new service for feature A
                                </span>
                                <span className="dash">-</span>
                                <span className="pill">Route A to new</span>
                                <span className="dash">-</span>
                                <span className="pill">
                                    Repeat for features
                                </span>
                                <span className="dash">-</span>
                                <span className="pill">Legacy shrinks</span>
                            </div>

                            <p className="note">
                                This approach keeps the system live while you
                                modernize it.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiLayers />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Gateway - one entry point. Sidecar - helper next
                                to service. Saga - distributed workflow. CQRS -
                                split reads and writes. Event sourcing - store
                                events. Strangler - migrate safely.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DesignPatternsSystemDesign;
