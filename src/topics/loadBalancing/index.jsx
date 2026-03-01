// src/topics/loadBalancing/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShuffle,
    FiGitMerge,
    FiServer,
    FiShield,
    FiActivity,
    FiLayers,
    FiRefreshCw,
} from "react-icons/fi";

const LoadBalancing = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "loadBalancing",
            title: "Load Balancing",
            sub: "Load balancer basics, L4 vs L7, algorithms, health checks, and reverse proxy mental model.",
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
                        <FiGitMerge />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Traffic</span>
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
                        {/* What is a load balancer */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiServer />
                                </span>
                                <h3 className="h3">What is a load balancer</h3>
                            </div>

                            <p className="p">
                                A <b>load balancer</b> is a traffic manager that
                                sits in front of multiple servers and
                                distributes incoming requests across them. This
                                improves performance, increases availability,
                                and makes scaling easier.
                            </p>

                            <div className="mini">
                                <span className="pill">Clients</span>
                                <span className="dash">-</span>
                                <span className="pill">Load balancer</span>
                                <span className="dash">-</span>
                                <span className="pill">Server A</span>
                                <span className="pill">Server B</span>
                                <span className="pill">Server C</span>
                            </div>

                            <ul className="list">
                                <li>
                                    <b>Scale</b> - add more servers behind it
                                </li>
                                <li>
                                    <b>Availability</b> - stop sending traffic
                                    to unhealthy servers
                                </li>
                                <li>
                                    <b>Stability</b> - smooth spikes by
                                    spreading load
                                </li>
                            </ul>

                            <p className="note">
                                Without a load balancer, one server becomes a
                                single point of failure and a scaling wall.
                            </p>
                        </div>

                        {/* L4 vs L7 */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">
                                    Layer 4 vs Layer 7 load balancing
                                </h3>
                            </div>

                            <div className="twoCol">
                                <div className="box">
                                    <div className="boxTitle">
                                        Layer 4 - Transport level
                                    </div>
                                    <p className="p">
                                        Works at TCP or UDP level. It routes
                                        connections based on IP and port,
                                        without understanding HTTP content.
                                    </p>
                                    <ul className="list">
                                        <li>Faster and simpler</li>
                                        <li>
                                            Good for raw TCP services and high
                                            throughput
                                        </li>
                                        <li>Does not do URL-based routing</li>
                                    </ul>
                                    <div className="small">
                                        Example: route TCP connections to game
                                        servers or database proxies
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="boxTitle">
                                        Layer 7 - Application level
                                    </div>
                                    <p className="p">
                                        Understands HTTP and can route based on
                                        URL path, headers, cookies, host, etc.
                                        It can also terminate TLS and do caching
                                        or compression.
                                    </p>
                                    <ul className="list">
                                        <li>Smarter routing</li>
                                        <li>
                                            Can do path-based routing like
                                            "/api" and "/images"
                                        </li>
                                        <li>More CPU work than L4</li>
                                    </ul>
                                    <div className="small">
                                        Example: send "/api" to backend and
                                        "/static" to CDN origin servers
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Simple rule: L4 is connection routing, L7 is
                                request routing.
                            </p>
                        </div>

                        {/* Algorithms */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShuffle />
                                </span>
                                <h3 className="h3">Round robin</h3>
                            </div>

                            <p className="p">
                                Sends requests to servers one by one in a fixed
                                rotation. If you have three servers, it goes A
                                then B then C then A again.
                            </p>

                            <ul className="list">
                                <li>Simple and common</li>
                                <li>Works well when servers are similar</li>
                                <li>Can be unfair if one server is slower</li>
                            </ul>

                            <p className="note">
                                Weighted round robin exists when servers are not
                                equal.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiActivity />
                                </span>
                                <h3 className="h3">Least connections</h3>
                            </div>

                            <p className="p">
                                Sends new requests to the server that currently
                                has the fewest active connections. It helps when
                                requests have different durations.
                            </p>

                            <ul className="list">
                                <li>Good for long-lived connections</li>
                                <li>Balances uneven workloads better</li>
                                <li>Needs tracking of active connections</li>
                            </ul>

                            <p className="note">
                                For HTTP keep-alive, connections can stay open,
                                so tracking matters.
                            </p>
                        </div>

                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiRefreshCw />
                                </span>
                                <h3 className="h3">IP hash</h3>
                            </div>

                            <p className="p">
                                Chooses a server by hashing the client IP. Same
                                client IP tends to go to the same server. This
                                gives "sticky" behavior without cookies.
                            </p>

                            <ul className="list">
                                <li>Useful when server keeps session state</li>
                                <li>
                                    Can be uneven if some IPs generate more
                                    traffic
                                </li>
                                <li>
                                    Breaks when clients are behind NAT or
                                    proxies
                                </li>
                            </ul>

                            <p className="note">
                                Sticky sessions help short term, but long term
                                the goal is stateless services.
                            </p>
                        </div>

                        {/* Health checks */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShield />
                                </span>
                                <h3 className="h3">Health checks</h3>
                            </div>

                            <p className="p">
                                Health checks are periodic tests to decide if a
                                server is healthy. If a server fails checks, the
                                load balancer stops sending traffic to it.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Passive</b> - observe real traffic errors
                                    and timeouts
                                </li>
                                <li>
                                    <b>Active</b> - call a dedicated endpoint
                                    like "/health"
                                </li>
                                <li>
                                    Use timeouts and thresholds to avoid
                                    flapping
                                </li>
                            </ul>

                            <p className="note">
                                Health checks reduce downtime and prevent
                                sending traffic into a dead box.
                            </p>
                        </div>

                        {/* Reverse proxy */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitMerge />
                                </span>
                                <h3 className="h3">Reverse proxy concept</h3>
                            </div>

                            <p className="p">
                                A <b>reverse proxy</b> is a server that sits in
                                front of backend services and forwards client
                                requests to them. The client talks to the proxy,
                                not directly to the backend.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Why use it</div>
                                    <div className="v">
                                        Hide internal services, centralize TLS,
                                        caching, compression, routing, and
                                        security rules.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">How it relates</div>
                                    <div className="v">
                                        Many Layer 7 load balancers are also
                                        reverse proxies. They route requests and
                                        can rewrite headers.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Example</div>
                                    <div className="v">
                                        Nginx can act as reverse proxy and do
                                        load balancing across multiple app
                                        servers.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Forward proxy is for clients. Reverse proxy is
                                for servers.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiGitMerge />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Load balancer spreads traffic. L4 routes
                                connections. L7 routes HTTP requests. Health
                                checks keep bad servers out.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default LoadBalancing;
