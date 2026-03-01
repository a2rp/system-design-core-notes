// src/topics/caching/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiZap,
    FiDatabase,
    FiCloud,
    FiRefreshCw,
    FiLayers,
    FiActivity,
    FiXCircle,
} from "react-icons/fi";

const Caching = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "caching",
            title: "Caching",
            sub: "Why caching exists, cache patterns, eviction policies, Redis basics, and CDN concept.",
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
                            <span className="badge">Performance</span>
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
                        {/* Why caching */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiActivity />
                                </span>
                                <h3 className="h3">Why caching is needed</h3>
                            </div>

                            <p className="p">
                                Caching means storing a copy of data so future
                                requests can be served faster. It reduces
                                database load, reduces latency, and helps the
                                system handle more traffic.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Lower latency</b> - serve from memory
                                    instead of disk or network
                                </li>
                                <li>
                                    <b>Higher throughput</b> - database does
                                    fewer reads
                                </li>
                                <li>
                                    <b>Cost saving</b> - fewer heavy queries and
                                    less compute
                                </li>
                                <li>
                                    <b>Protects DB</b> - avoids read spikes
                                    during traffic bursts
                                </li>
                            </ul>

                            <p className="note">
                                Caching is powerful but introduces a new
                                problem: stale data and invalidation.
                            </p>
                        </div>

                        {/* Cache-aside */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Cache-aside pattern</h3>
                            </div>

                            <p className="p">
                                Cache-aside is the most common pattern. App
                                checks cache first. If cache miss happens, app
                                reads from DB and then fills cache.
                            </p>

                            <div className="flow">
                                <div className="step">Read request</div>
                                <div className="arrow">-</div>
                                <div className="step">Check cache</div>
                                <div className="arrow">-</div>
                                <div className="step">
                                    Hit - return
                                    <span className="small">fast path</span>
                                </div>
                                <div className="arrow">-</div>
                                <div className="step">
                                    Miss - read DB
                                    <span className="small">slow path</span>
                                </div>
                                <div className="arrow">-</div>
                                <div className="step">
                                    Put in cache
                                    <span className="small">with TTL</span>
                                </div>
                            </div>

                            <ul className="list">
                                <li>
                                    <b>Pros</b> - simple, cache only when needed
                                </li>
                                <li>
                                    <b>Cons</b> - cache miss spike can hit DB
                                    hard, stale data until invalidation
                                </li>
                            </ul>

                            <p className="note">
                                TTL means time to live. Cached entry expires
                                after some time.
                            </p>
                        </div>

                        {/* Write-through */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRefreshCw />
                                </span>
                                <h3 className="h3">Write-through</h3>
                            </div>

                            <p className="p">
                                In write-through, every write goes to cache and
                                database together. Cache stays fresh because
                                writes update it immediately.
                            </p>

                            <div className="mini">
                                <span className="pill">Write</span>
                                <span className="dash">-</span>
                                <span className="pill">Cache update</span>
                                <span className="dash">-</span>
                                <span className="pill">DB write</span>
                            </div>

                            <ul className="list">
                                <li>
                                    <b>Pros</b> - cache is consistent for reads
                                </li>
                                <li>
                                    <b>Cons</b> - higher write latency, cache
                                    might store rarely used data
                                </li>
                            </ul>
                        </div>

                        {/* Write-back */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiDatabase />
                                </span>
                                <h3 className="h3">Write-back</h3>
                            </div>

                            <p className="p">
                                In write-back, writes go to cache first.
                                Database is updated later in background. This
                                makes writes fast, but data loss risk increases
                                if cache crashes before flush.
                            </p>

                            <div className="mini">
                                <span className="pill">Write</span>
                                <span className="dash">-</span>
                                <span className="pill">Cache only</span>
                                <span className="dash">-</span>
                                <span className="pill">Async DB flush</span>
                            </div>

                            <ul className="list">
                                <li>
                                    <b>Pros</b> - very fast writes
                                </li>
                                <li>
                                    <b>Cons</b> - harder correctness, needs
                                    durability strategy
                                </li>
                            </ul>

                            <p className="note">
                                Use carefully for systems where slight risk is
                                acceptable or durability is handled separately.
                            </p>
                        </div>

                        {/* Eviction policies */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiXCircle />
                                </span>
                                <h3 className="h3">Cache eviction policies</h3>
                            </div>

                            <p className="p">
                                Cache is limited in size. When it is full, it
                                must remove some entries. Eviction policy
                                decides what to remove.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">LRU</div>
                                    <div className="v">
                                        <b>LRU</b> means{" "}
                                        <b>Least Recently Used</b>. Removes the
                                        entry that was not used recently.
                                        <span className="small">
                                            Good default for general web
                                            workloads.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">LFU</div>
                                    <div className="v">
                                        <b>LFU</b> means{" "}
                                        <b>Least Frequently Used</b>. Removes
                                        the entry used least often.
                                        <span className="small">
                                            Works well when a small set of keys
                                            are always hot.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">FIFO</div>
                                    <div className="v">
                                        <b>FIFO</b> means{" "}
                                        <b>First In First Out</b>. Removes the
                                        oldest inserted entry.
                                        <span className="small">
                                            Simple but can evict hot items by
                                            accident.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Hot key means heavily requested key. Cold key
                                means rarely requested key.
                            </p>
                        </div>

                        {/* Redis basics */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiDatabase />
                                </span>
                                <h3 className="h3">Redis basics</h3>
                            </div>

                            <p className="p">
                                Redis is an in-memory data store commonly used
                                as a cache. It is fast because it serves data
                                from RAM, not disk.
                            </p>

                            <ul className="list">
                                <li>
                                    Supports key-value and data structures like
                                    lists, sets, hashes
                                </li>
                                <li>Built-in TTL support for expiring keys</li>
                                <li>
                                    Can be used for rate limiting, session
                                    storage, queues, locks
                                </li>
                            </ul>

                            <p className="note">
                                Redis can be configured to persist to disk, but
                                the usual mental model is memory first.
                            </p>
                        </div>

                        {/* CDN */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCloud />
                                </span>
                                <h3 className="h3">CDN concept</h3>
                            </div>

                            <p className="p">
                                CDN means Content Delivery Network. It caches
                                static content close to users using edge servers
                                around the world.
                            </p>

                            <ul className="list">
                                <li>
                                    Great for images, videos, CSS, JS, downloads
                                </li>
                                <li>
                                    Reduces latency by serving from nearest
                                    location
                                </li>
                                <li>Reduces load on origin server</li>
                            </ul>

                            <p className="note">
                                CDN is basically caching, but at global edge
                                locations.
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
                                Cache speeds up reads. Patterns decide
                                correctness. Eviction decides what stays.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Caching;
