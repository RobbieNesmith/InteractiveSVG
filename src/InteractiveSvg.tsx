import { useState } from "react";

export default function InteractiveSvg() {
    const [top, setTop] = useState(0);
    const [upperLeft, setUpperLeft] = useState(0);
    const [lowerLeft, setLowerLeft] = useState(0);
    const [lowerRight, setLowerRight] = useState(0);
    const [upperRight, setUpperRight] = useState(0);
    return (
        <svg width="100%" version="1.1" viewBox="0 0 210 297">
            <g fill="none" stroke-linejoin="round" stroke-width="2">
                <path d="m103.57 39.065 27.843 56.416 62.259 9.0467-45.051 43.914 10.635 62.007-55.686-29.276-55.686 29.276 10.635-62.007-45.051-43.914 62.259-9.0467z" stroke="#000" />
            </g>
            <g fill="#f0f0f0" font-family="sans-serif" font-size="10px" letter-spacing="0px" stroke-width=".26458" text-anchor="middle" text-align="center">
                <text
                    x="104.44484"
                    y="78.392372"
                    fill={top ? "red" : "none"}
                >{ top }</text>
                <text
                    x="49.715"
                    y="122.87936"
                    fill={upperLeft ? "red" : "none"}
                >{ upperLeft }</text>
                <text
                    x="69.114975"
                    y="186.73759"
                    fill={lowerLeft ? "red" : "none"}
                >{ lowerLeft }</text>
                <text
                    x="139.03569"
                    y="186.73759"
                    fill={lowerRight ? "red" : "none"}
                >{ lowerRight }</text>
                <text
                    x="161.26482"
                    y="118.8377"
                    fill={upperRight ? "red" : "none"}
                >{ upperRight }</text>
            </g>
            <g stroke="#4c8bec" fill="rgba(0,0,0,0)" stroke-width="2">
                <circle
                    cx="104.44"
                    cy="74.54"
                    r="8.9941"
                    stroke={top ? "red" : "lightblue"}
                    onClick={() => setTop(n => n + 1)}
                />
                <circle
                    cx="49.712"
                    cy="119.03"
                    r="8.9941"
                    stroke={upperLeft ? "red" : "lightblue"}
                    onClick={() => setUpperLeft(n => n + 1)}
                />
                <circle
                    cx="69.112"
                    cy="182.89"
                    r="8.9941"
                    stroke={lowerLeft ? "red" : "lightblue"}
                    onClick={() => setLowerLeft(n => n + 1)}
                />
                <circle
                    cx="139.03"
                    cy="182.89"
                    r="8.9941"
                    stroke={lowerRight ? "red" : "lightblue"}
                    onClick={() => setLowerRight(n => n + 1)}
                />
                <circle
                    cx="161.26"
                    cy="114.99"
                    r="8.9941"
                    stroke={upperRight ? "red" : "lightblue"}
                    onClick={() => setUpperRight(n => n + 1)}
                />
            </g>
        </svg>
    );
}