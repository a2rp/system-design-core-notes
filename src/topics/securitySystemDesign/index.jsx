// src/topics/securitySystemDesign/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShield,
    FiKey,
    FiLock,
    FiLink,
    FiServer,
    FiEyeOff,
    FiAlertOctagon,
} from "react-icons/fi";

const SecuritySystemDesign = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "securitySystemDesign",
            title: "Security in System Design",
            sub: "Auth, OAuth, JWT, TLS, API gateway, secrets, and DDoS basics in one place.",
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
                        <FiShield />
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
                        {/* Auth vs Authorization */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiKey />
                                </span>
                                <h3 className="h3">
                                    Authentication vs Authorization
                                </h3>
                            </div>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Authentication</div>
                                    <div className="v">
                                        Proves who you are.
                                        <span className="small">
                                            Example: login with password, OTP,
                                            Google sign-in
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Authorization</div>
                                    <div className="v">
                                        Decides what you can do after login.
                                        <span className="small">
                                            Example: admin can delete users,
                                            normal user cannot
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Simple memory: authentication is identity,
                                authorization is permission.
                            </p>
                        </div>

                        {/* OAuth */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLink />
                                </span>
                                <h3 className="h3">OAuth basics</h3>
                            </div>

                            <p className="p">
                                <b>OAuth</b> means authorization delegation. It
                                lets an app access user data from another
                                service without sharing the user password with
                                the app.
                            </p>

                            <ul className="list">
                                <li>
                                    User trusts an <b>Identity Provider</b>{" "}
                                    (Google, GitHub)
                                </li>
                                <li>
                                    App redirects user to provider to approve
                                    permissions (scopes)
                                </li>
                                <li>
                                    App receives an access token to call
                                    provider APIs
                                </li>
                            </ul>

                            <p className="note">
                                OAuth is mainly about authorization. Login flows
                                often use OAuth plus OpenID Connect.
                            </p>
                        </div>

                        {/* JWT */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLock />
                                </span>
                                <h3 className="h3">JWT</h3>
                            </div>

                            <p className="p">
                                <b>JWT</b> means <b>JSON Web Token</b>. It is a
                                compact token that carries claims like user id
                                and roles, signed by the server so clients
                                cannot tamper it.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Structure</div>
                                    <div className="v">
                                        Header.Payload.Signature
                                        <span className="small">
                                            Payload is base64 encoded, not
                                            encrypted by default
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Good for</div>
                                    <div className="v">
                                        Stateless auth and APIs
                                        <span className="small">
                                            But handle expiration, rotation, and
                                            revocation carefully
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                JWT is not a session store. Keep it short-lived,
                                and avoid putting secrets in it.
                            </p>
                        </div>

                        {/* TLS */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLock />
                                </span>
                                <h3 className="h3">TLS</h3>
                            </div>

                            <p className="p">
                                <b>TLS</b> means <b>Transport Layer Security</b>
                                . It encrypts data in transit between client and
                                server. HTTPS is HTTP over TLS.
                            </p>

                            <ul className="list">
                                <li>
                                    Protects against eavesdropping and tampering
                                </li>
                                <li>
                                    Uses certificates to verify server identity
                                </li>
                                <li>
                                    Modern systems use TLS everywhere, not only
                                    on public endpoints
                                </li>
                            </ul>

                            <p className="note">
                                TLS protects data on the wire. You still need
                                auth and access control for the data itself.
                            </p>
                        </div>

                        {/* API Gateway */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiServer />
                                </span>
                                <h3 className="h3">API gateway</h3>
                            </div>

                            <p className="p">
                                An <b>API gateway</b> is a single entry point in
                                front of backend services. It handles
                                cross-cutting concerns so services can stay
                                simpler.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Common jobs</div>
                                    <div className="v">
                                        Authentication, rate limiting, request
                                        routing, logging, caching, and TLS
                                        termination
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Why useful</div>
                                    <div className="v">
                                        Central control and consistent policies
                                        across services
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Gateway is powerful, but do not make it a huge
                                bottleneck. Keep it scalable.
                            </p>
                        </div>

                        {/* Secrets management */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiEyeOff />
                                </span>
                                <h3 className="h3">Secrets management</h3>
                            </div>

                            <p className="p">
                                Secrets are sensitive values like API keys,
                                database passwords, signing keys, and tokens.
                                You want to store and access them safely.
                            </p>

                            <ul className="list">
                                <li>
                                    Never hardcode secrets in code or commit to
                                    git
                                </li>
                                <li>
                                    Use environment variables or a secrets
                                    manager
                                </li>
                                <li>
                                    Rotate keys regularly and restrict access
                                </li>
                            </ul>

                            <p className="note">
                                Principle: least privilege. Give each service
                                only the secrets it needs.
                            </p>
                        </div>

                        {/* DDoS */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiAlertOctagon />
                                </span>
                                <h3 className="h3">DDoS mitigation</h3>
                            </div>

                            <p className="p">
                                <b>DDoS</b> means{" "}
                                <b>Distributed Denial of Service</b>. Attackers
                                try to overload your system using huge traffic
                                from many sources.
                            </p>

                            <ul className="list">
                                <li>
                                    Use CDN and edge protection to absorb
                                    traffic
                                </li>
                                <li>
                                    Rate limit requests and block abusive IP
                                    ranges
                                </li>
                                <li>
                                    Use WAF (Web Application Firewall) rules for
                                    common attacks
                                </li>
                                <li>
                                    Separate critical services and protect
                                    origins
                                </li>
                            </ul>

                            <p className="note">
                                Goal is to reduce blast radius and keep core
                                APIs alive under load.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiShield />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Use TLS everywhere. Authenticate identity,
                                authorize actions. Keep secrets out of code. Put
                                a gateway and rate limiting in front. Assume
                                attackers will try.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SecuritySystemDesign;
