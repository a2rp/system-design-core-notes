// src/topics/databasesSystemDesign/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiDatabase,
    FiLayers,
    FiSearch,
    FiShuffle,
    FiCopy,
    FiGitBranch,
    FiGrid,
    FiServer,
} from "react-icons/fi";

const DatabasesSystemDesign = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "databasesSystemDesign",
            title: "Databases",
            sub: "SQL vs NoSQL, indexing, normalization, replication, sharding, partitioning, and distributed DB basics.",
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
                        <FiDatabase />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Storage</span>
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
                        {/* SQL vs NoSQL */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">SQL vs NoSQL</h3>
                            </div>

                            <p className="p">
                                Choosing a database is mostly about your data
                                shape, query patterns, and correctness needs.
                                There is no universally best DB.
                            </p>

                            <div className="twoCol">
                                <div className="box">
                                    <div className="boxTitle">
                                        SQL (Relational)
                                    </div>
                                    <ul className="list">
                                        <li>
                                            Structured schema with tables and
                                            relations
                                        </li>
                                        <li>
                                            Strong transactions are common
                                            (ACID)
                                        </li>
                                        <li>
                                            Great for joins, reporting, and
                                            complex queries
                                        </li>
                                        <li>
                                            Scaling writes can be harder, but
                                            tools exist
                                        </li>
                                    </ul>
                                    <div className="small">
                                        Example use: payments, inventory,
                                        orders, accounting
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="boxTitle">
                                        NoSQL (Non-relational)
                                    </div>
                                    <ul className="list">
                                        <li>
                                            Flexible schema, often document or
                                            key-value
                                        </li>
                                        <li>
                                            Easy horizontal scaling is common
                                        </li>
                                        <li>
                                            Often optimized for specific access
                                            patterns
                                        </li>
                                        <li>
                                            Joins are limited, denormalization
                                            is common
                                        </li>
                                    </ul>
                                    <div className="small">
                                        Example use: feeds, sessions, caching,
                                        large scale events
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Rule: choose SQL by default unless your scale or
                                data shape clearly needs NoSQL.
                            </p>
                        </div>

                        {/* Relational basics */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiDatabase />
                                </span>
                                <h3 className="h3">
                                    Relational database basics
                                </h3>
                            </div>

                            <p className="p">
                                A relational database stores data in tables
                                (rows and columns). Relationships are created
                                using keys.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Table</b> - collection of rows of same
                                    type
                                </li>
                                <li>
                                    <b>Row</b> - one record (one entity
                                    instance)
                                </li>
                                <li>
                                    <b>Primary key</b> - unique identifier of a
                                    row
                                </li>
                                <li>
                                    <b>Foreign key</b> - references a row in
                                    another table
                                </li>
                            </ul>

                            <p className="note">
                                Relational design is about modeling
                                relationships cleanly and keeping data
                                consistent.
                            </p>
                        </div>

                        {/* Indexing */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiSearch />
                                </span>
                                <h3 className="h3">Indexing</h3>
                            </div>

                            <p className="p">
                                An index is a data structure that speeds up
                                reads by avoiding full table scans. Think of it
                                like a book index.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Benefit</div>
                                    <div className="v">
                                        Faster queries for indexed columns
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Cost</div>
                                    <div className="v">
                                        Slower writes and extra storage because
                                        index must be updated
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Index the columns you filter, sort, and join on.
                                Avoid indexing everything.
                            </p>
                        </div>

                        {/* Normalization vs Denormalization */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShuffle />
                                </span>
                                <h3 className="h3">
                                    Normalization vs Denormalization
                                </h3>
                            </div>

                            <p className="p">
                                These are data modeling strategies.
                                Normalization reduces duplication.
                                Denormalization improves read speed by
                                duplicating data.
                            </p>

                            <div className="twoCol">
                                <div className="box">
                                    <div className="boxTitle">
                                        Normalization
                                    </div>
                                    <ul className="list">
                                        <li>
                                            Split data into multiple related
                                            tables
                                        </li>
                                        <li>Reduce redundancy and anomalies</li>
                                        <li>
                                            Writes stay clean and consistent
                                        </li>
                                    </ul>
                                    <div className="small">
                                        Example: user table and address table
                                        instead of repeating address
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="boxTitle">
                                        Denormalization
                                    </div>
                                    <ul className="list">
                                        <li>
                                            Duplicate some data to avoid joins
                                        </li>
                                        <li>Reads become faster and simpler</li>
                                        <li>
                                            Updates become harder because
                                            duplicates must be synced
                                        </li>
                                    </ul>
                                    <div className="small">
                                        Example: storing userName with every
                                        post for fast feed reads
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Most systems start normalized, then denormalize
                                only where performance demands it.
                            </p>
                        </div>

                        {/* Replication */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCopy />
                                </span>
                                <h3 className="h3">Replication</h3>
                            </div>

                            <p className="p">
                                Replication means keeping copies of the same
                                data on multiple nodes. It improves availability
                                and read scalability.
                            </p>

                            <ul className="list">
                                <li>
                                    Helps during failures (one node down, others
                                    serve)
                                </li>
                                <li>
                                    Enables read scaling (serve reads from
                                    replicas)
                                </li>
                                <li>
                                    Adds consistency challenges (replication
                                    lag)
                                </li>
                            </ul>

                            <p className="note">
                                Replication is about copies. Sharding is about
                                splitting. Both are different tools.
                            </p>
                        </div>

                        {/* Master-slave + read replicas */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitBranch />
                                </span>
                                <h3 className="h3">
                                    Master-slave and read replicas
                                </h3>
                            </div>

                            <p className="p">
                                Common pattern: one primary node handles writes,
                                replicas handle reads. People also say
                                primary-replica instead of master-slave.
                            </p>

                            <div className="mini">
                                <span className="pill">Primary (writes)</span>
                                <span className="dash">-</span>
                                <span className="pill">Replicas (reads)</span>
                                <span className="dash">-</span>
                                <span className="pill">Async sync</span>
                            </div>

                            <ul className="list">
                                <li>
                                    <b>Read replicas</b> reduce load on primary
                                </li>
                                <li>
                                    <b>Lag</b> happens because replication may
                                    be asynchronous
                                </li>
                                <li>
                                    Some reads need to hit primary for fresh
                                    data
                                </li>
                            </ul>

                            <p className="note">
                                Great for read-heavy systems like feeds,
                                dashboards, search views.
                            </p>
                        </div>

                        {/* Partitioning */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGrid />
                                </span>
                                <h3 className="h3">Partitioning</h3>
                            </div>

                            <p className="p">
                                Partitioning means splitting a big table into
                                smaller parts based on a rule, but still inside
                                the same database system.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Range partitioning</b> - split by time
                                    ranges like monthly data
                                </li>
                                <li>
                                    <b>Hash partitioning</b> - split by hashing
                                    a key
                                </li>
                                <li>
                                    <b>List partitioning</b> - split by category
                                    values
                                </li>
                            </ul>

                            <p className="note">
                                Partitioning improves manageability and
                                performance for large datasets.
                            </p>
                        </div>

                        {/* Sharding */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiServer />
                                </span>
                                <h3 className="h3">Sharding</h3>
                            </div>

                            <p className="p">
                                Sharding means splitting data across multiple
                                databases or nodes. Each shard holds only a
                                portion of data. This is mainly for scaling
                                writes and storage.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Shard key</div>
                                    <div className="v">
                                        The field used to decide which shard
                                        stores the data.
                                        <span className="small">
                                            Example: userId based sharding
                                        </span>
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Problem</div>
                                    <div className="v">
                                        Cross-shard joins and transactions
                                        become hard.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Sharding is powerful but expensive in
                                complexity. Do it only when needed.
                            </p>
                        </div>

                        {/* Distributed databases */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Distributed databases</h3>
                            </div>

                            <p className="p">
                                A distributed database stores and serves data
                                across multiple nodes, often across multiple
                                regions. It is built to scale and survive
                                failures, but it introduces tradeoffs around
                                consistency and latency.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Why</div>
                                    <div className="v">
                                        Scale, availability, geo-distribution,
                                        fault tolerance
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Challenges</div>
                                    <div className="v">
                                        Consistency, partitions, leader
                                        election, replication lag
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Common pattern</div>
                                    <div className="v">
                                        Replication for reads and availability,
                                        sharding for write scale
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Distributed DB design is where CAP tradeoffs
                                become real.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiDatabase />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Index helps reads. Replication copies data.
                                Partition splits inside a DB. Sharding splits
                                across DBs.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DatabasesSystemDesign;
