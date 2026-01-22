import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Candidates() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);


    return (
        <section className="service-detail-page">
            <h2 className="section-title" style={{ margin: "5px" }}>Our Services</h2>
            <div className="service-detail">
                <div className="service-detail-content">
                    <h2>For Candidates - Career Growth Support</h2>
                    <p>
                        At CENVORO, we believe careers should be built, not just jobs filled.
                        We guide individuals at every stage of their professional journey with:
                    </p>

                    <ul className="benefits-list animate-list">
                        <li><i className="fas fa-check"></i>Access to opportunities across industries and MNCs</li>
                        <li><i className="fas fa-check"></i>Resume building & interview preparation support</li>
                        <li><i className="fas fa-check"></i>
                            Skill development and mentorship programs designed to match
                            industry expectations
                        </li>
                    </ul>

                    <h3>Key Benefits:</h3>
                    <ul className="benefits-list animate-list">
                        <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Better career opportunities</li>
                        <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Improved employability skills</li>
                        <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Professional growth with guided mentorship</li>
                        <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Confidence to succeed in interviews and workplaces</li>
                    </ul>

                    <a
                        className="btn-primary"
                        onClick={() => {
                            navigate("/", { state: { scrollTo: "contact" } });
                        }}
                    >
                        Get Started
                    </a>

                    <span
                        className="back-to-services"
                        onClick={() => {
                            navigate("/", { state: { scrollTo: "services" } });
                        }}
                    >
                        ← Back to Services
                    </span>

                </div>

                <div className="service-detail-image animate-image" style={{zIndex:"0"}}>
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                        alt="Career Growth"
                    />
                </div>
            </div>
        </section>
    );
}

export default Candidates;
