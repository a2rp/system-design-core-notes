// src/topics/realWorldDesignExamples/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGlobe,
    FiLink,
    FiMessageCircle,
    FiVideo,
    FiShoppingCart,
    FiUsers,
} from "react-icons/fi";

const RealWorldDesignExamples = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "realWorldDesignExamples",
            title: "Real-world Design Examples",
            sub: "URL shortener, Twitter, WhatsApp, YouTube, Netflix, E-commerce, Chat system.",
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
                        <FiGlobe />
                    </span>
                    <div className="text">
                        <h2 className="title">{meta.title}</h2>
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
                        {/* URL Shortener */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLink />
                                </span>
                                <h3 className="h3">Design URL Shortener</h3>
                            </div>

                            <ul className="list">
                                <li>Convert long URL into short unique ID</li>
                                <li>Store mapping in database</li>
                                <li>Redirect using HTTP 301 or 302</li>
                                <li>Handle high read traffic with caching</li>
                                <li>Generate IDs using base62 or hash</li>
                            </ul>

                            <p className="note">
                                Major challenge is ID generation and handling
                                billions of redirects efficiently.
                            </p>
                        </div>

                        {/* Twitter */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiUsers />
                                </span>
                                <h3 className="h3">Design Twitter</h3>
                            </div>

                            <ul className="list">
                                <li>Post tweets and follow users</li>
                                <li>Generate home timeline</li>
                                <li>Use fan-out on write or fan-out on read</li>
                                <li>Store tweets in distributed database</li>
                                <li>Use cache for timelines</li>
                            </ul>

                            <p className="note">
                                Timeline generation is the core complexity.
                            </p>
                        </div>

                        {/* WhatsApp */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiMessageCircle />
                                </span>
                                <h3 className="h3">Design WhatsApp</h3>
                            </div>

                            <ul className="list">
                                <li>Real-time messaging using WebSocket</li>
                                <li>Store messages reliably</li>
                                <li>Deliver messages with acknowledgment</li>
                                <li>Support groups and media sharing</li>
                                <li>Handle online and offline states</li>
                            </ul>

                            <p className="note">
                                Low latency and message ordering are critical.
                            </p>
                        </div>

                        {/* YouTube */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiVideo />
                                </span>
                                <h3 className="h3">Design YouTube</h3>
                            </div>

                            <ul className="list">
                                <li>Upload and store large video files</li>
                                <li>Transcode into multiple resolutions</li>
                                <li>Use CDN for global delivery</li>
                                <li>Store metadata in database</li>
                                <li>Recommendation system integration</li>
                            </ul>

                            <p className="note">
                                Video storage and bandwidth are the main scaling
                                challenges.
                            </p>
                        </div>

                        {/* Netflix */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiVideo />
                                </span>
                                <h3 className="h3">Design Netflix</h3>
                            </div>

                            <ul className="list">
                                <li>Stream content globally</li>
                                <li>Use CDN and edge caching</li>
                                <li>Adaptive bitrate streaming</li>
                                <li>
                                    Microservices for user and content
                                    management
                                </li>
                                <li>Personalized recommendations</li>
                            </ul>

                            <p className="note">
                                Availability and global distribution are key.
                            </p>
                        </div>

                        {/* E-commerce */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiShoppingCart />
                                </span>
                                <h3 className="h3">Design E-commerce System</h3>
                            </div>

                            <ul className="list">
                                <li>Product catalog and search</li>
                                <li>Shopping cart and checkout</li>
                                <li>
                                    Payment processing with ACID transactions
                                </li>
                                <li>Inventory management</li>
                                <li>Order tracking and notifications</li>
                            </ul>

                            <p className="note">
                                Consistency is critical for payments and
                                inventory.
                            </p>
                        </div>

                        {/* Chat system */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiMessageCircle />
                                </span>
                                <h3 className="h3">Design Chat System</h3>
                            </div>

                            <ul className="list">
                                <li>
                                    Real-time messaging using persistent
                                    connection
                                </li>
                                <li>Message queue for scaling</li>
                                <li>
                                    Store chat history in distributed database
                                </li>
                                <li>Presence and typing indicators</li>
                                <li>
                                    Horizontal scaling with stateless servers
                                </li>
                            </ul>

                            <p className="note">
                                Chat is a combination of low latency,
                                reliability, and scale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default RealWorldDesignExamples;
