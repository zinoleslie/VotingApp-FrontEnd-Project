import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const words = ["Welcome", "To", "WebVote..."];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            navigate("/register"); // Navigate after 5s
        }, 5000);
    }, [navigate]);

    return (
        <div className="home">
            <h2>
                {words.map((word, index) => (
                    <span key={index} className="word" style={{ animationDelay: `${index * 0.5}s` }}>
                        {word}
                    </span>
                ))}
            </h2>
        </div>
    );
};

export default HomePage;
