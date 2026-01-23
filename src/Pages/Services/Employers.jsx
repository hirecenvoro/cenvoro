import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Employers() {
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
                    <h2>For Employers - Recruitment & Training</h2>
                    <p>
                        We provide companies with efficient hiring solutions aligned to business goals, culture, and long-term growth.
                    </p>

                    <ul className="benefits-list animate-list">
                        <li><i className="fas fa-check"></i>End-to-end recruitment support</li>
                        <li><i className="fas fa-check"></i>Pre-screened candidates aligned with role & culture fit</li>
                        <li><i className="fas fa-check"></i>
                            Tailored corporate training programs
                        </li>
                        <li><i className="fas fa-check"></i>
                            Ongoing workforce performance support
                        </li>
                    </ul>

                    <h3>Key Benefits:</h3>
                    <ul className="benefits-list animate-list">
                        <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i> Faster and cost-effective hiring</li>
                        <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i> Access to industry-ready candidates</li>
                        <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i> Lower attrition rates</li>
                        <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i> Stronger, future-ready teams</li>
                    </ul>

                    <a href="/hiretalent" className="btn-primary">Find Talent</a>
                    <span
                        className="back-to-services"
                        onClick={() => {
                            navigate("/", { state: { scrollTo: "services" } });
                        }}
                    >
                        ← Back to Services
                    </span>
                </div>

                <div className="service-detail-image animate-image">
                    <img 
                        src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?t=st=1721564726~exp=1721568326~hmac=0c8d4d6c6c9e6a5a5b5c5d5e5f5a5b5c5d5e5f5a5b5c5d5e5f5a5b5c5d5e5f5a&amp;w=1380" 
                        alt="Recruitment Solutions" 
                    />
                </div>
            </div>
        </section>
    );
}

export default Employers;
