// src/topics/architectureBasics/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiBox,
    FiGrid,
    FiServer,
    FiColumns,
    FiZap,
    FiHexagon,
} from "react-icons/fi";

const ArchitectureBasics = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "architectureBasics",
            title: "Architecture Basics",
            sub: "Monolith, microservices, SOA, client-server, layered, event-driven, and hexagonal architecture.",
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
                        {/* Monolith */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiBox />
                                </span>
                                <h3 className="h3">Monolith architecture</h3>
                            </div>

                            <p className="p">
                                A <b>monolith</b> is one codebase and one
                                deployable unit. Most features live inside a
                                single application process.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Good for</div>
                                    <div className="v">
                                        Small to medium products, fast
                                        iteration, simple deployment, easy
                                        debugging.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Problems</div>
                                    <div className="v">
                                        Harder to scale different parts
                                        independently, releases can become risky
                                        as it grows.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Most successful systems start as a monolith and
                                evolve only when needed.
                            </p>
                        </div>

                        {/* Microservices */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGrid />
                                </span>
                                <h3 className="h3">
                                    Microservices architecture
                                </h3>
                            </div>

                            <p className="p">
                                <b>Microservices</b> split a system into many
                                small services. Each service owns a specific
                                business capability and can be deployed
                                independently.
                            </p>

                            <ul className="list">
                                <li>
                                    Each service has its own code, runtime, and
                                    often its own database.
                                </li>
                                <li>
                                    Services talk via APIs (HTTP, gRPC) or
                                    messaging (Kafka, queues).
                                </li>
                                <li>
                                    Lets teams move independently, but adds
                                    distributed system complexity.
                                </li>
                            </ul>

                            <p className="note">
                                Microservices solve team scaling and independent
                                deploys, not just traffic scaling.
                            </p>
                        </div>

                        {/* SOA */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiServer />
                                </span>
                                <h3 className="h3">
                                    Service-oriented architecture - SOA
                                </h3>
                            </div>

                            <p className="p">
                                <b>SOA</b> means{" "}
                                <b>Service-oriented architecture</b>. It also
                                uses services, but services are usually bigger
                                and often share infrastructure. Traditionally
                                SOA used centralized middleware like an ESB.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">SOA style</div>
                                    <div className="v">
                                        Larger services, shared data,
                                        centralized integration layer.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Microservices style</div>
                                    <div className="v">
                                        Smaller services, independent deploys,
                                        decentralized integration.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Interview safe line: microservices can be seen
                                as a more fine-grained evolution of SOA.
                            </p>
                        </div>

                        {/* Client-server */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiServer />
                                </span>
                                <h3 className="h3">Client-server model</h3>
                            </div>

                            <p className="p">
                                <b>Client-server</b> means clients request and
                                servers respond. Client is usually browser or
                                mobile app. Server handles business logic and
                                storage.
                            </p>

                            <div className="mini">
                                <span className="pill">Client</span>
                                <span className="dash">-</span>
                                <span className="pill">API</span>
                                <span className="dash">-</span>
                                <span className="pill">Server</span>
                                <span className="dash">-</span>
                                <span className="pill">Database</span>
                            </div>

                            <p className="note">
                                Most system design diagrams start as
                                client-server, then add cache, queue, and
                                services.
                            </p>
                        </div>

                        {/* Layered */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiColumns />
                                </span>
                                <h3 className="h3">Layered architecture</h3>
                            </div>

                            <p className="p">
                                <b>Layered architecture</b> separates concerns
                                into layers. Common layers are presentation,
                                business logic, and data access. Each layer
                                depends on the layer below it.
                            </p>

                            <div className="layers">
                                <div className="layer">
                                    <div className="layerTag">UI</div>
                                    <div className="layerText">
                                        Controllers, handlers, API endpoints
                                    </div>
                                </div>
                                <div className="layer">
                                    <div className="layerTag">Business</div>
                                    <div className="layerText">
                                        Use cases, rules, validations, workflows
                                    </div>
                                </div>
                                <div className="layer">
                                    <div className="layerTag">Data</div>
                                    <div className="layerText">
                                        Repositories, SQL, cache, external
                                        services
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Layering keeps code readable. Too many layers
                                can become slow to change.
                            </p>
                        </div>

                        {/* Event-driven */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiZap />
                                </span>
                                <h3 className="h3">
                                    Event-driven architecture
                                </h3>
                            </div>

                            <p className="p">
                                In <b>event-driven architecture</b>, services
                                communicate by publishing events and consuming
                                events. Producers do not directly call
                                consumers.
                            </p>

                            <ul className="list">
                                <li>
                                    Producer publishes an event like
                                    "orderCreated".
                                </li>
                                <li>
                                    Consumers react like "sendEmail",
                                    "reserveInventory".
                                </li>
                                <li>
                                    Usually uses Kafka, RabbitMQ, or cloud
                                    pub-sub.
                                </li>
                            </ul>

                            <p className="note">
                                Great for async work and loose coupling, but
                                debugging becomes harder across services.
                            </p>
                        </div>

                        {/* Hexagonal */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiHexagon />
                                </span>
                                <h3 className="h3">
                                    Hexagonal architecture overview
                                </h3>
                            </div>

                            <p className="p">
                                <b>Hexagonal architecture</b> is also called{" "}
                                <b>Ports and Adapters</b>. The main idea: keep
                                core business logic independent from external
                                systems.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Core</div>
                                    <div className="v">
                                        Business rules and use cases, no
                                        database or framework dependency.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Adapters</div>
                                    <div className="v">
                                        Database adapter, HTTP adapter, message
                                        queue adapter, etc.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                This makes testing easier and allows swapping DB
                                or transport without rewriting business logic.
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
                                Start simple. Monolith for speed. Split when
                                team and scaling needs force it. Layered for
                                clarity. Event-driven for async. Hexagonal for
                                clean core logic.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ArchitectureBasics;
