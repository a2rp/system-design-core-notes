// src/topics/monitoringObservability/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiActivity,
    FiFileText,
    FiBarChart2,
    FiGitMerge,
    FiEye,
    FiBell,
    FiTarget,
    FiShield,
} from "react-icons/fi";

const MonitoringObservability = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "monitoringObservability",
            title: "Monitoring and Observability",
            sub: "Logs, metrics, traces, APM, alerting, and the SLA, SLO, SLI trio.",
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
                        <FiActivity />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Ops</span>
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
                                    <FiEye />
                                </span>
                                <h3 className="h3">
                                    What is monitoring and what is observability
                                </h3>
                            </div>

                            <p className="p">
                                <b>Monitoring</b> tells you{" "}
                                <b>something is wrong</b>. It answers "is the
                                system healthy right now" using dashboards,
                                charts, and alerts.
                            </p>

                            <p className="p">
                                <b>Observability</b> helps you explain{" "}
                                <b>why it is wrong</b>. It answers "what
                                happened inside the system" using logs, metrics,
                                and traces with enough context to debug unknown
                                issues.
                            </p>

                            <div className="mini">
                                <span className="pill">Detect</span>
                                <span className="dash">-</span>
                                <span className="pill">Understand</span>
                                <span className="dash">-</span>
                                <span className="pill">Fix</span>
                                <span className="dash">-</span>
                                <span className="pill">Prevent</span>
                            </div>

                            <p className="note">
                                Most teams start with monitoring. Observability
                                is what saves you during weird incidents.
                            </p>
                        </div>

                        {/* Logging */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiFileText />
                                </span>
                                <h3 className="h3">Logging</h3>
                            </div>

                            <p className="p">
                                <b>Logs</b> are timestamped events. They tell
                                you what happened at a specific moment, usually
                                as text or JSON.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Good logs include</div>
                                    <div className="v">
                                        request id, user id, service name,
                                        endpoint, latency, error stack
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Types</div>
                                    <div className="v">
                                        info, warn, error, debug (debug should
                                        be limited in production)
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Log volume can explode at scale, so structure
                                logs and sample where needed.
                            </p>
                        </div>

                        {/* Metrics */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiBarChart2 />
                                </span>
                                <h3 className="h3">Metrics</h3>
                            </div>

                            <p className="p">
                                <b>Metrics</b> are numeric measurements over
                                time. They are perfect for dashboards and alerts
                                because they are cheap and compact.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Traffic</b> - requests per second (RPS)
                                </li>
                                <li>
                                    <b>Errors</b> - error rate, 4xx or 5xx
                                </li>
                                <li>
                                    <b>Latency</b> - p50, p95, p99 response
                                    times
                                </li>
                                <li>
                                    <b>Saturation</b> - CPU, memory, queue depth
                                </li>
                            </ul>

                            <p className="note">
                                Common mindset: use metrics to detect, logs and
                                traces to explain.
                            </p>
                        </div>

                        {/* Tracing */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitMerge />
                                </span>
                                <h3 className="h3">Tracing</h3>
                            </div>

                            <p className="p">
                                <b>Tracing</b> shows the full path of a request
                                as it travels across services. It helps you find
                                the slow step and the failing dependency.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Trace</div>
                                    <div className="v">
                                        The full journey of one request.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Span</div>
                                    <div className="v">
                                        One step in the trace, like DB call or
                                        HTTP call.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Trace id</div>
                                    <div className="v">
                                        Unique id to correlate logs across
                                        services.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Tracing is gold in microservices because one
                                request might touch 10 services.
                            </p>
                        </div>

                        {/* APM */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiActivity />
                                </span>
                                <h3 className="h3">APM</h3>
                            </div>

                            <p className="p">
                                <b>APM</b> means{" "}
                                <b>Application Performance Monitoring</b>. It is
                                a tooling layer that combines metrics, traces,
                                and sometimes profiling to show health, latency,
                                error hotspots, and slow database queries.
                            </p>

                            <ul className="list">
                                <li>
                                    Shows service maps and dependency graphs
                                </li>
                                <li>
                                    Highlights slow endpoints and top errors
                                </li>
                                <li>
                                    Often supports distributed tracing out of
                                    the box
                                </li>
                            </ul>

                            <p className="note">
                                APM is the dashboard that turns raw signals into
                                action.
                            </p>
                        </div>

                        {/* Alerting */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiBell />
                                </span>
                                <h3 className="h3">Alerting</h3>
                            </div>

                            <p className="p">
                                <b>Alerts</b> notify humans when the system is
                                unhealthy. Good alerts are actionable and tied
                                to user impact.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Bad alert</div>
                                    <div className="v">
                                        "CPU is 70%" without context, causes
                                        noise.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Good alert</div>
                                    <div className="v">
                                        "p95 latency above 600 ms for 10 minutes
                                        on checkout API".
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Too many alerts leads to alert fatigue and
                                missed real incidents.
                            </p>
                        </div>

                        {/* SLA, SLO, SLI */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiTarget />
                                </span>
                                <h3 className="h3">SLAs, SLOs, SLIs</h3>
                            </div>

                            <p className="p">
                                These three are the standard language of
                                reliability. They help define what "good
                                service" means and how you measure it.
                            </p>

                            <div className="trio">
                                <div className="trioItem">
                                    <div className="tTop">
                                        <span className="tIcon">
                                            <FiShield />
                                        </span>
                                        <div className="tTitle">SLA</div>
                                    </div>
                                    <div className="tSub">
                                        <b>SLA</b> is{" "}
                                        <b>Service Level Agreement</b>. A
                                        promise to customers, often with
                                        penalties.
                                        <span className="small">
                                            Example: 99.9% uptime per month
                                        </span>
                                    </div>
                                </div>

                                <div className="trioItem">
                                    <div className="tTop">
                                        <span className="tIcon">
                                            <FiTarget />
                                        </span>
                                        <div className="tTitle">SLO</div>
                                    </div>
                                    <div className="tSub">
                                        <b>SLO</b> is{" "}
                                        <b>Service Level Objective</b>. Internal
                                        target that teams aim to maintain.
                                        <span className="small">
                                            Example: 99.95% successful requests
                                        </span>
                                    </div>
                                </div>

                                <div className="trioItem">
                                    <div className="tTop">
                                        <span className="tIcon">
                                            <FiBarChart2 />
                                        </span>
                                        <div className="tTitle">SLI</div>
                                    </div>
                                    <div className="tSub">
                                        <b>SLI</b> is{" "}
                                        <b>Service Level Indicator</b>. The
                                        measurement used to evaluate SLO.
                                        <span className="small">
                                            Example: error rate, latency,
                                            availability
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                SLI is the metric. SLO is the target. SLA is the
                                customer-facing commitment.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiActivity />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Metrics detect, logs explain, traces connect.
                                SLA is external promise, SLO is internal target,
                                SLI is the measurement.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default MonitoringObservability;
