import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Institute() {
    const navigate = useNavigate();

     useEffect(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, []);

    return (
        <section className="service-detail-page">
            <h2 className="section-title" style={{margin:"5px"}}>Our Services</h2>
                <div className="service-detail">
              <div className="service-detail-content">
                <h2>For Institutes - Placement Partnerships</h2>
                <p>We strengthen student placement outcomes by aligning institutes with evolving industry hiring needs.</p>
                <ul className="benefits-list animate-list">
                  <li><i className="fas fa-check"></i> Structured MoUs for smooth placement processes</li>
                  <li><i className="fas fa-check"></i> Industry-ready training modules for students and alumni</li>
                  <li><i className="fas fa-check"></i> Corporate connects and exclusive recruitment drives</li>
                  <li><i className="fas fa-check"></i> Continuous employer feedback to improve curriculum relevance</li>
                </ul>


                <h3>Key Benefits:</h3>
                <ul className="benefits-list animate-list">
                  <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Stronger institute-industry relationships</li>
                  <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Higher placement success rates</li>
                  <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Better-prepared graduates</li>
                  <li><i className="fas fa-star" style={{ color: "#ff9800", marginRight: "10px" }}></i>Enhanced institute reputation and credibility</li>
                </ul>

                <a  className="btn-primary"
                        onClick={() => {
                            navigate("/", { state: { scrollTo: "contact" } });
                        }}>Partner With Us</a>
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
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                  alt="Institute Partnerships"
                />
              </div>
            </div>
        </section>
    );
}

export default Institute;
