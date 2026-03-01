// src/topics/performanceOptimization/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiZap,
    FiLink2,
    FiBox,
    FiDownloadCloud,
    FiDatabase,
    FiLayers,
} from "react-icons/fi";

const PerformanceOptimization = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "performanceOptimization",
            title: "Performance Optimization",
            sub: "Connection pooling, compression, lazy loading, indexing, and batch processing.",
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
                        <FiZap />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Speed</span>
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
                        {/* Connection pooling */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLink2 />
                                </span>
                                <h3 className="h3">Connection pooling</h3>
                            </div>

                            <p className="p">
                                A <b>connection pool</b> keeps a set of database
                                connections open and reuses them across
                                requests. It avoids the cost of opening and
                                closing connections for every request.
                            </p>

                            <div className="mini">
                                <span className="pill">Request</span>
                                <span className="dash">-</span>
                                <span className="pill">Borrow connection</span>
                                <span className="dash">-</span>
                                <span className="pill">Query</span>
                                <span className="dash">-</span>
                                <span className="pill">Return connection</span>
                            </div>

                            <ul className="list">
                                <li>
                                    Helps reduce latency under load because
                                    connection setup is expensive.
                                </li>
                                <li>
                                    Prevents DB overload by limiting max
                                    concurrent connections.
                                </li>
                                <li>
                                    Needs correct sizing. Too small causes
                                    queueing, too large can crush the DB.
                                </li>
                            </ul>

                            <p className="note">
                                If every service instance opens too many
                                connections, the DB dies first.
                            </p>
                        </div>

                        {/* Compression */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiBox />
                                </span>
                                <h3 className="h3">Compression</h3>
                            </div>

                            <p className="p">
                                <b>Compression</b> reduces payload size sent
                                over the network. Smaller payload usually means
                                faster transfer and better throughput, but it
                                costs CPU to compress and decompress.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Where</div>
                                    <div className="v">
                                        HTTP responses, assets, logs, backups,
                                        message payloads.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Tradeoff</div>
                                    <div className="v">
                                        Less bandwidth vs more CPU usage.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Use compression for large text payloads like
                                JSON, HTML, CSS.
                            </p>
                        </div>

                        {/* Lazy loading */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiDownloadCloud />
                                </span>
                                <h3 className="h3">Lazy loading</h3>
                            </div>

                            <p className="p">
                                <b>Lazy loading</b> means loading resources only
                                when they are actually needed. This improves
                                initial load time and reduces unnecessary work.
                            </p>

                            <ul className="list">
                                <li>
                                    Frontend: load screens, images, and chunks
                                    only when user navigates.
                                </li>
                                <li>
                                    Backend: load heavy data only when
                                    requested, not on every request.
                                </li>
                                <li>
                                    Storage: fetch large blobs only when user
                                    opens them.
                                </li>
                            </ul>

                            <p className="note">
                                Goal is faster first response and smoother user
                                experience.
                            </p>
                        </div>

                        {/* Database indexing optimization */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiDatabase />
                                </span>
                                <h3 className="h3">
                                    Database indexing optimization
                                </h3>
                            </div>

                            <p className="p">
                                An <b>index</b> is a data structure that helps
                                the database find rows faster. It trades extra
                                storage and write cost for faster reads.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Good for</div>
                                    <div className="v">
                                        Columns used in WHERE, JOIN, ORDER BY,
                                        GROUP BY.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Bad for</div>
                                    <div className="v">
                                        Tables with heavy writes if you create
                                        too many indexes.
                                    </div>
                                </div>
                            </div>

                            <ul className="list">
                                <li>
                                    Use indexes for common query filters and
                                    joins.
                                </li>
                                <li>
                                    Avoid indexing everything, writes become
                                    slow.
                                </li>
                                <li>
                                    Check query plan and slow query logs to
                                    decide.
                                </li>
                            </ul>

                            <p className="note">
                                Index is the most common fix for slow reads, but
                                it has a write cost.
                            </p>
                        </div>

                        {/* Batch processing */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Batch processing</h3>
                            </div>

                            <p className="p">
                                <b>Batch processing</b> means processing many
                                items together instead of one by one. It reduces
                                overhead like network calls, DB round trips, and
                                per-request setup costs.
                            </p>

                            <div className="mini">
                                <span className="pill">1000 events</span>
                                <span className="dash">-</span>
                                <span className="pill">Queue</span>
                                <span className="dash">-</span>
                                <span className="pill">Worker</span>
                                <span className="dash">-</span>
                                <span className="pill">Write in batches</span>
                            </div>

                            <ul className="list">
                                <li>
                                    Common in analytics, emails, notifications,
                                    and logs ingestion.
                                </li>
                                <li>
                                    Improves throughput by reducing overhead.
                                </li>
                                <li>
                                    Tradeoff: higher latency for a single item
                                    because it waits for the batch.
                                </li>
                            </ul>

                            <p className="note">
                                When throughput matters more than immediate
                                response, batching is a cheat code.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiZap />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Reduce overhead first. Reuse connections, send
                                less data, load only what you need, index
                                smartly, batch heavy work.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default PerformanceOptimization;
