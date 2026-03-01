// src/topics/messagingAndQueues/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiSend,
    FiRepeat,
    FiZap,
    FiLayers,
    FiRadio,
    FiPackage,
    FiTrendingUp,
} from "react-icons/fi";

const MessagingAndQueues = () => {
    // collapsed by default
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "messagingAndQueues",
            title: "Messaging and Queues",
            sub: "Queues, async processing, brokers, Kafka, RabbitMQ, pub-sub, and event streaming.",
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
                        <FiSend />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Async</span>
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
                        {/* Why queues are needed */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiPackage />
                                </span>
                                <h3 className="h3">Why queues are needed</h3>
                            </div>

                            <p className="p">
                                A <b>queue</b> is a buffer between two parts of
                                a system so they do not have to run at the same
                                speed. It helps when incoming traffic is bursty,
                                when tasks are slow, or when you want reliable
                                background work.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Smooth spikes</div>
                                    <div className="v">
                                        If 10k requests arrive suddenly, queue
                                        stores tasks and workers process
                                        steadily.
                                        <span className="small">
                                            Example: image processing, video
                                            encoding, sending emails
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Decouple services</div>
                                    <div className="v">
                                        Producer does not need to know how the
                                        consumer works, just pushes a message.
                                        <span className="small">
                                            Example: order service emits
                                            "orderCreated", shipping service
                                            consumes it
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Reliability</div>
                                    <div className="v">
                                        If a consumer is down, messages can stay
                                        queued until it comes back.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Simple idea: queue is a shock absorber between
                                traffic and processing.
                            </p>
                        </div>

                        {/* Sync vs Async */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRepeat />
                                </span>
                                <h3 className="h3">
                                    Synchronous vs Asynchronous processing
                                </h3>
                            </div>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Synchronous</div>
                                    <div className="v">
                                        Client waits until work is done.
                                        <span className="small">
                                            Example: login request must complete
                                            before response
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Asynchronous</div>
                                    <div className="v">
                                        Client gets quick response, work happens
                                        later.
                                        <span className="small">
                                            Example: "your report is being
                                            generated", then notify when ready
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Async is great for slow tasks. Sync is needed
                                when user must see result immediately.
                            </p>
                        </div>

                        {/* Message brokers */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Message brokers</h3>
                            </div>

                            <p className="p">
                                A <b>message broker</b> is software that
                                receives messages from producers and delivers
                                them to consumers. It handles routing,
                                persistence, retries, and delivery guarantees.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Producer</b> sends message
                                </li>
                                <li>
                                    <b>Broker</b> stores and routes message
                                </li>
                                <li>
                                    <b>Consumer</b> receives and processes
                                    message
                                </li>
                            </ul>

                            <p className="note">
                                Broker reduces direct dependencies between
                                services.
                            </p>
                        </div>

                        {/* Kafka basics */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRadio />
                                </span>
                                <h3 className="h3">Kafka basics</h3>
                            </div>

                            <p className="p">
                                <b>Apache Kafka</b> is a distributed event
                                streaming platform. It is designed for high
                                throughput, durable logs, and multiple consumers
                                reading the same events. Think of Kafka as a big
                                append-only log that many services can read
                                from.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Topic</div>
                                    <div className="v">
                                        Category of events.
                                        <span className="small">
                                            Example: "payments", "userEvents",
                                            "orderEvents"
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Partition</div>
                                    <div className="v">
                                        Topic is split into partitions for
                                        parallelism and scaling. Order is
                                        guaranteed inside one partition.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Consumer group</div>
                                    <div className="v">
                                        Multiple consumers share work. Each
                                        partition is consumed by one consumer in
                                        the group.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Offset</div>
                                    <div className="v">
                                        Position in the log. Consumers track
                                        offsets to know what they have
                                        processed.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Kafka is great for event streams, analytics
                                pipelines, and real-time data flows.
                            </p>
                        </div>

                        {/* RabbitMQ basics */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiSend />
                                </span>
                                <h3 className="h3">RabbitMQ basics</h3>
                            </div>

                            <p className="p">
                                <b>RabbitMQ</b> is a message broker focused on
                                reliable messaging and flexible routing. It is
                                often used for task queues and command-style
                                messaging between services.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Queue</div>
                                    <div className="v">
                                        Messages sit in a queue until consumed.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Exchange</div>
                                    <div className="v">
                                        Entry point for messages. Exchanges
                                        route messages to queues based on rules.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Ack</div>
                                    <div className="v">
                                        Consumer sends acknowledgment when done.
                                        If no ack, broker can retry.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Routing</div>
                                    <div className="v">
                                        Direct, topic, fanout routing patterns
                                        supported.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                RabbitMQ is great when you want strong delivery
                                guarantees and routing flexibility.
                            </p>
                        </div>

                        {/* Pub-sub model */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Pub-sub model</h3>
                            </div>

                            <p className="p">
                                <b>Pub-sub</b> means publishers send messages to
                                a topic and subscribers receive them. Publishers
                                do not know who subscribers are.
                            </p>

                            <div className="mini">
                                <span className="pill">Publisher</span>
                                <span className="dash">-</span>
                                <span className="pill">Topic</span>
                                <span className="dash">-</span>
                                <span className="pill">Subscribers</span>
                            </div>

                            <p className="note">
                                Use pub-sub when many services need the same
                                event.
                            </p>
                        </div>

                        {/* Event streaming */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiTrendingUp />
                                </span>
                                <h3 className="h3">Event streaming</h3>
                            </div>

                            <p className="p">
                                <b>Event streaming</b> is continuously producing
                                and consuming events in near real time. Events
                                are facts like "orderPlaced" or
                                "paymentSucceeded".
                            </p>

                            <ul className="list">
                                <li>Events are stored as an ordered stream</li>
                                <li>
                                    Multiple consumers can read independently
                                </li>
                                <li>
                                    Useful for analytics, monitoring, and
                                    pipelines
                                </li>
                            </ul>

                            <p className="note">
                                Kafka is a common choice for event streaming
                                because it behaves like a durable log.
                            </p>
                        </div>

                        {/* Kafka vs Rabbit quick */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiZap />
                                </span>
                                <h3 className="h3">
                                    Kafka vs RabbitMQ - simple selection
                                </h3>
                            </div>

                            <div className="twoCol">
                                <div className="box">
                                    <div className="boxTitle">
                                        Kafka fits when
                                    </div>
                                    <ul className="list">
                                        <li>High throughput event streams</li>
                                        <li>
                                            Many consumers reading the same
                                            history
                                        </li>
                                        <li>Replay events by offsets</li>
                                        <li>Analytics pipelines</li>
                                    </ul>
                                </div>

                                <div className="box">
                                    <div className="boxTitle">
                                        RabbitMQ fits when
                                    </div>
                                    <ul className="list">
                                        <li>
                                            Task queues and job distribution
                                        </li>
                                        <li>Complex routing patterns</li>
                                        <li>
                                            Per-message acknowledgment and
                                            retries
                                        </li>
                                        <li>Command style messaging</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="note">
                                Many real systems use both: RabbitMQ for tasks,
                                Kafka for event streams.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiSend />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Queue absorbs spikes. Broker routes and
                                persists. Kafka is a log for streams. RabbitMQ
                                is strong for tasks.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default MessagingAndQueues;
