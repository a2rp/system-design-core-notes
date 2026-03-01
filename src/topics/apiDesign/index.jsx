// src/topics/apiDesign/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShare2,
    FiLink,
    FiGitBranch,
    FiZap,
    FiShield,
    FiList,
} from "react-icons/fi";

const ApiDesign = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "apiDesign",
            title: "API Design",
            sub: "REST, GraphQL, gRPC, idempotency, rate limiting, and pagination patterns.",
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
                            <span className="badge">Interfaces</span>
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
                        {/* REST basics */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLink />
                                </span>
                                <h3 className="h3">REST basics</h3>
                            </div>

                            <p className="p">
                                <b>REST</b> means{" "}
                                <b>Representational State Transfer</b>. It is a
                                style for designing APIs using HTTP in a
                                resource-first way. You model things as
                                resources like users, orders, products, and you
                                use HTTP methods to act on them.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Resource</div>
                                    <div className="v">
                                        A noun-like object exposed by API.
                                        <span className="small">
                                            Example: "/users", "/orders/123"
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Common methods</div>
                                    <div className="v">
                                        GET - read, POST - create, PUT -
                                        replace, PATCH - update, DELETE - remove
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Status codes</div>
                                    <div className="v">
                                        200 OK, 201 Created, 400 Bad Request,
                                        401 Unauthorized, 403 Forbidden, 404 Not
                                        Found, 429 Too Many Requests, 500 Server
                                        Error
                                    </div>
                                </div>
                            </div>

                            <div className="code">
                                <div className="codeTitle">Examples</div>
                                <pre className="pre">
                                    {`GET /users/42
POST /orders
PATCH /users/42
DELETE /sessions/current`}
                                </pre>
                            </div>

                            <p className="note">
                                REST is simple and universal. It works great
                                with caching, CDNs, and typical web apps.
                            </p>
                        </div>

                        {/* GraphQL */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitBranch />
                                </span>
                                <h3 className="h3">GraphQL overview</h3>
                            </div>

                            <p className="p">
                                <b>GraphQL</b> is a query language for APIs.
                                Client asks exactly what fields it needs, and
                                server returns that shape. Usually there is a
                                single endpoint like "/graphql".
                            </p>

                            <ul className="list">
                                <li>
                                    Solves <b>over-fetching</b> and{" "}
                                    <b>under-fetching</b>.
                                    <span className="small">
                                        REST may return too much or require
                                        multiple calls.
                                    </span>
                                </li>
                                <li>
                                    Uses a <b>schema</b> and types, good for
                                    large frontend teams.
                                </li>
                                <li>
                                    Has complexity risks, needs depth limits and
                                    query cost controls.
                                </li>
                            </ul>

                            <div className="code">
                                <div className="codeTitle">Example query</div>
                                <pre className="pre">
                                    {`query {
  user(id: "42") {
    id
    name
    posts { id title }
  }
}`}
                                </pre>
                            </div>

                            <p className="note">
                                GraphQL shines when clients need flexible shapes
                                and many screens consume the same data.
                            </p>
                        </div>

                        {/* gRPC */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiZap />
                                </span>
                                <h3 className="h3">gRPC basics</h3>
                            </div>

                            <p className="p">
                                <b>gRPC</b> is a high-performance RPC framework
                                usually used for internal service-to-service
                                calls. It uses <b>Protocol Buffers</b>{" "}
                                (protobuf) for schema and binary encoding. It
                                commonly runs over HTTP/2 and supports
                                streaming.
                            </p>

                            <ul className="list">
                                <li>
                                    Strongly typed contracts via protobuf
                                    definitions
                                </li>
                                <li>
                                    Fast and efficient, good for microservices
                                </li>
                                <li>
                                    Browser support is not as direct as REST,
                                    often used behind gateways
                                </li>
                            </ul>

                            <p className="note">
                                Use REST for public APIs, gRPC for internal
                                high-throughput service calls.
                            </p>
                        </div>

                        {/* Idempotency */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShield />
                                </span>
                                <h3 className="h3">Idempotency</h3>
                            </div>

                            <p className="p">
                                <b>Idempotency</b> means doing the same request
                                multiple times produces the same final result.
                                This matters because clients retry requests due
                                to timeouts or network issues.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">
                                        Naturally idempotent
                                    </div>
                                    <div className="v">
                                        GET, PUT, DELETE are typically
                                        idempotent if designed properly.
                                        <span className="small">
                                            Example: PUT /users/42 sets the same
                                            data again and again.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">
                                        Usually not idempotent
                                    </div>
                                    <div className="v">
                                        POST creates new things, so repeating
                                        can duplicate.
                                        <span className="small">
                                            Example: POST /orders can create two
                                            orders if retried.
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Fix for POST</div>
                                    <div className="v">
                                        Use an <b>Idempotency-Key</b> header and
                                        store the result for that key.
                                        <span className="small">
                                            Common in payments and order
                                            creation.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="code">
                                <div className="codeTitle">Example</div>
                                <pre className="pre">
                                    {`POST /orders
Idempotency-Key: "b8d2-7c1a-..."

Server stores key -> orderId
Retry returns same orderId instead of creating new`}
                                </pre>
                            </div>

                            <p className="note">
                                Idempotency is a safety net. It reduces double
                                charges and duplicate records.
                            </p>
                        </div>

                        {/* Rate limiting */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShield />
                                </span>
                                <h3 className="h3">Rate limiting</h3>
                            </div>

                            <p className="p">
                                Rate limiting controls how many requests a
                                client can make in a time window. It protects
                                APIs from abuse, DDoS, and accidental overload.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>What to limit</b>: per IP, per user, per
                                    API key, per route
                                </li>
                                <li>
                                    <b>Common response</b>: 429 Too Many
                                    Requests
                                </li>
                                <li>
                                    <b>Where</b>: API gateway, load balancer, or
                                    service layer
                                </li>
                            </ul>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Token bucket</div>
                                    <div className="v">
                                        Tokens refill over time. Each request
                                        consumes a token.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Fixed window</div>
                                    <div className="v">
                                        Count requests per time window. Simple
                                        but can spike at boundary.
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Sliding window</div>
                                    <div className="v">
                                        More accurate limiting over time,
                                        slightly more complex.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Rate limiting is also a product feature, it
                                enables fair usage tiers.
                            </p>
                        </div>

                        {/* Pagination */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiList />
                                </span>
                                <h3 className="h3">Pagination strategies</h3>
                            </div>

                            <p className="p">
                                Pagination avoids returning huge lists. It keeps
                                responses fast and prevents database overload.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Offset pagination</div>
                                    <div className="v">
                                        Uses page and limit or offset and limit.
                                        <span className="small">
                                            Example: "?page=3&limit=20"
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Cursor pagination</div>
                                    <div className="v">
                                        Uses a cursor (last seen id or
                                        timestamp). Better for large and
                                        changing data.
                                        <span className="small">
                                            Example:
                                            "?limit=20&cursor=1700000123"
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <ul className="list">
                                <li>
                                    Offset is simple but can be slow for deep
                                    pages and can skip or duplicate when data
                                    changes.
                                </li>
                                <li>
                                    Cursor is stable and fast, best choice for
                                    feeds and infinite scroll.
                                </li>
                            </ul>

                            <p className="note">
                                If you expect "infinite scroll", go with cursor
                                pagination.
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
                                REST is resources, GraphQL is flexible fields,
                                gRPC is fast internal calls. Idempotency and
                                rate limits protect systems. Cursor pagination
                                scales best.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ApiDesign;
