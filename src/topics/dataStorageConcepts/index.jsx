// src/topics/dataStorageConcepts/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiHardDrive,
    FiLayers,
    FiFolder,
    FiBox,
    FiDatabase,
    FiGrid,
} from "react-icons/fi";

const DataStorageConcepts = () => {
    // default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "dataStorageConcepts",
            title: "Data Storage Concepts",
            sub: "Object, blob, file, block storage, and data lake vs data warehouse.",
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
                        <FiHardDrive />
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
                        {/* Object storage */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiBox />
                                </span>
                                <h3 className="h3">Object storage</h3>
                            </div>

                            <p className="p">
                                Object storage stores data as <b>objects</b>.
                                Each object has the data itself, metadata, and a
                                unique ID. You do not access it like a normal
                                folder drive, you access it via API.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Best for</div>
                                    <div className="v">
                                        Images, videos, backups, logs, large
                                        static files
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Access</div>
                                    <div className="v">
                                        HTTP API, URL-based access, often
                                        globally distributed
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Think "bucket of objects". Great durability,
                                huge scale, not for random file edits.
                            </p>
                        </div>

                        {/* Blob storage */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Blob storage</h3>
                            </div>

                            <p className="p">
                                Blob storage means storing data as a{" "}
                                <b>binary large object</b>. In practice, blob
                                storage is very similar to object storage. The
                                word "blob" is used a lot in cloud platforms.
                            </p>

                            <ul className="list">
                                <li>
                                    Blob means a big chunk of bytes - like a
                                    file.
                                </li>
                                <li>You read or write the blob as a whole.</li>
                                <li>
                                    Good for unstructured data like media and
                                    documents.
                                </li>
                            </ul>

                            <p className="note">
                                Simple mental model: object storage is a general
                                concept, blob is a common cloud naming for it.
                            </p>
                        </div>

                        {/* File storage */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiFolder />
                                </span>
                                <h3 className="h3">File storage</h3>
                            </div>

                            <p className="p">
                                File storage is the classic folder and file
                                system model. You get directories, filenames,
                                permissions, and you can mount it like a drive.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Best for</div>
                                    <div className="v">
                                        Shared folders, user home dirs, app
                                        assets that need file APIs
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Access</div>
                                    <div className="v">
                                        POSIX-like file operations - read,
                                        write, rename, lock
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                File storage is convenient, but scaling and high
                                throughput can be harder than object storage.
                            </p>
                        </div>

                        {/* Block storage */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiHardDrive />
                                </span>
                                <h3 className="h3">Block storage</h3>
                            </div>

                            <p className="p">
                                Block storage provides raw storage volumes split
                                into fixed-size blocks. A server treats it like
                                a disk. You put your own file system on top.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Best for</div>
                                    <div className="v">
                                        Databases, VM disks, low latency
                                        workloads
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Access</div>
                                    <div className="v">
                                        Attached to a machine, reads and writes
                                        blocks, very fast
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Block storage is like a hard drive. File storage
                                is like folders. Object storage is like a
                                bucket.
                            </p>
                        </div>

                        {/* Data Lake vs Warehouse */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiDatabase />
                                </span>
                                <h3 className="h3">
                                    Data lake vs Data warehouse
                                </h3>
                            </div>

                            <p className="p">
                                Both are used for analytics, reporting, and
                                large-scale data processing, but they differ in
                                how data is stored and how strict the structure
                                is.
                            </p>

                            <div className="twoCol">
                                <div className="box">
                                    <div className="boxTitle">Data lake</div>
                                    <ul className="list">
                                        <li>
                                            Stores raw data in many formats
                                            (JSON, CSV, logs, images)
                                        </li>
                                        <li>
                                            Schema on read - structure is
                                            applied when you query
                                        </li>
                                        <li>
                                            Cheap storage, good for ML and
                                            exploration
                                        </li>
                                    </ul>

                                    <div className="small">
                                        Example use: store clickstream logs and
                                        process later
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="boxTitle">
                                        Data warehouse
                                    </div>
                                    <ul className="list">
                                        <li>
                                            Stores cleaned, structured data
                                            (tables, models)
                                        </li>
                                        <li>
                                            Schema on write - structure is
                                            applied before storing
                                        </li>
                                        <li>
                                            Fast analytics queries, consistent
                                            reporting
                                        </li>
                                    </ul>

                                    <div className="small">
                                        Example use: dashboards for finance and
                                        business reporting
                                    </div>
                                </div>
                            </div>

                            <div className="compare">
                                <div className="capRow">
                                    <div className="capK">
                                        <FiGrid />
                                    </div>
                                    <div className="capV">
                                        <b>Simple rule</b> - data lake is raw
                                        and flexible, warehouse is clean and
                                        optimized for reporting.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Many companies use both: lake for ingestion and
                                exploration, warehouse for curated analytics.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiHardDrive />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Object and blob are API-first. File is folders.
                                Block is raw disk. Lake is raw data, warehouse
                                is curated data.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DataStorageConcepts;
