// src/topics/distributedSystemsConcepts/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShare2,
    FiLock,
    FiUsers,
    FiCheckCircle,
    FiGitMerge,
    FiClock,
    FiRefreshCw,
} from "react-icons/fi";

const DistributedSystemsConcepts = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "distributedSystemsConcepts",
            title: "Distributed Systems Concepts",
            sub: "Locks, leader election, consensus, Raft, clock sync, and eventual consistency.",
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
                        <FiShare2 />
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
                        {/* Overview */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShare2 />
                                </span>
                                <h3 className="h3">
                                    What is a distributed system
                                </h3>
                            </div>

                            <p className="p">
                                A distributed system is multiple machines
                                working together as one system. It improves
                                scale and reliability, but it introduces new
                                problems like network delays, partial failures,
                                duplicated messages, and data being temporarily
                                different on different nodes.
                            </p>

                            <div className="mini">
                                <span className="pill">
                                    Network is unreliable
                                </span>
                                <span className="dash">-</span>
                                <span className="pill">Nodes can fail</span>
                                <span className="dash">-</span>
                                <span className="pill">Time is tricky</span>
                                <span className="dash">-</span>
                                <span className="pill">Consistency costs</span>
                            </div>

                            <p className="note">
                                Most core concepts below exist to keep the
                                system sane under failures.
                            </p>
                        </div>

                        {/* Distributed locks */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLock />
                                </span>
                                <h3 className="h3">Distributed locks</h3>
                            </div>

                            <p className="p">
                                A distributed lock is a lock that works across
                                machines. It ensures only one worker or service
                                instance does a critical action at a time.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Why needed</div>
                                    <div className="v">
                                        Prevent double processing when multiple
                                        instances run the same job.
                                        <span className="small">
                                            Example: only one worker should send
                                            a payment reminder for an order
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Key ideas</div>
                                    <div className="v">
                                        Lock owner, TTL (time to live), safe
                                        release, and fencing tokens.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                If a node dies while holding a lock, TTL helps
                                release it, but TTL introduces edge cases.
                            </p>
                        </div>

                        {/* Leader election */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiUsers />
                                </span>
                                <h3 className="h3">Leader election</h3>
                            </div>

                            <p className="p">
                                Leader election chooses one node as the leader
                                among many. The leader coordinates work, makes
                                decisions, or serializes writes.
                            </p>

                            <ul className="list">
                                <li>
                                    Without a leader, multiple nodes can make
                                    conflicting decisions.
                                </li>
                                <li>
                                    If leader fails, the system elects a new
                                    leader.
                                </li>
                                <li>
                                    Common in distributed databases, queues, and
                                    cluster managers.
                                </li>
                            </ul>

                            <p className="note">
                                Leader election is hard because nodes can
                                disagree due to network delays.
                            </p>
                        </div>

                        {/* Consensus basics */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCheckCircle />
                                </span>
                                <h3 className="h3">Consensus basics</h3>
                            </div>

                            <p className="p">
                                Consensus means nodes agree on a single value or
                                single sequence of decisions, even when some
                                nodes fail. This is the backbone of consistent
                                distributed systems.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Goal</div>
                                    <div className="v">
                                        All healthy nodes agree on "what
                                        happened" and in what order.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Why needed</div>
                                    <div className="v">
                                        For leader election, distributed locks,
                                        config changes, and write ordering.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Simple mental model</div>
                                    <div className="v">
                                        Majority wins. If a majority agrees, the
                                        decision is safe.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Consensus trades performance for correctness
                                under failures.
                            </p>
                        </div>

                        {/* Raft overview */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitMerge />
                                </span>
                                <h3 className="h3">Raft overview</h3>
                            </div>

                            <p className="p">
                                Raft is a consensus algorithm designed to be
                                easier to understand than older algorithms. It
                                is used to keep a replicated log consistent
                                across multiple nodes.
                            </p>

                            <div className="raftGrid">
                                <div className="raftBox">
                                    <div className="rbTitle">Roles</div>
                                    <ul className="list">
                                        <li>
                                            <b>Leader</b> - accepts client
                                            writes and replicates to followers
                                        </li>
                                        <li>
                                            <b>Follower</b> - receives
                                            replicated log entries
                                        </li>
                                        <li>
                                            <b>Candidate</b> - tries to become
                                            leader during election
                                        </li>
                                    </ul>
                                </div>

                                <div className="raftBox">
                                    <div className="rbTitle">
                                        How it stays safe
                                    </div>
                                    <ul className="list">
                                        <li>
                                            Leader sends heartbeats to show it
                                            is alive
                                        </li>
                                        <li>
                                            Followers start election if
                                            heartbeats stop
                                        </li>
                                        <li>
                                            Entries committed when a majority
                                            stores them
                                        </li>
                                        <li>
                                            Log order stays consistent across
                                            the cluster
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className="note">
                                Think of Raft as "leader based log replication
                                with majority confirmation".
                            </p>
                        </div>

                        {/* Clock sync */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiClock />
                                </span>
                                <h3 className="h3">
                                    Clock synchronization problem
                                </h3>
                            </div>

                            <p className="p">
                                In distributed systems, clocks on different
                                machines drift. Network delays also make time
                                comparisons unreliable. This breaks assumptions
                                like "latest timestamp means latest event".
                            </p>

                            <ul className="list">
                                <li>
                                    Two events can appear out of order if clocks
                                    differ.
                                </li>
                                <li>
                                    Ordering using timestamps can be wrong under
                                    drift.
                                </li>
                                <li>
                                    Many systems use logical clocks or sequence
                                    numbers for ordering.
                                </li>
                            </ul>

                            <p className="note">
                                Real lesson: do not trust wall clock time for
                                correctness.
                            </p>
                        </div>

                        {/* Eventual consistency */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRefreshCw />
                                </span>
                                <h3 className="h3">Eventual consistency</h3>
                            </div>

                            <p className="p">
                                Eventual consistency means replicas may
                                temporarily return different values, but if
                                updates stop, all replicas will converge to the
                                same final value.
                            </p>

                            <div className="mini">
                                <span className="pill">Write to one node</span>
                                <span className="dash">-</span>
                                <span className="pill">Replicate async</span>
                                <span className="dash">-</span>
                                <span className="pill">Temporary lag</span>
                                <span className="dash">-</span>
                                <span className="pill">Converge</span>
                            </div>

                            <p className="p">
                                This improves availability and performance, but
                                the system must handle stale reads. Many
                                products accept this for non-critical data.
                            </p>

                            <p className="note">
                                Use eventual consistency for feeds, counters,
                                analytics. Avoid it for strict money logic.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiShare2 />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Locks and leaders prevent double work. Consensus
                                keeps nodes aligned. Time is unreliable.
                                Eventual consistency is a tradeoff.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DistributedSystemsConcepts;
