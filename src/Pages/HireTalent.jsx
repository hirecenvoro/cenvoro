import "./HireTalent.css"

function HireTalent() {
  return (
    <>
   <div className="hire-hero">
  <h1>Hire Top Talent</h1>
  <p>
    Connect with pre-screened, industry-ready professionals. Build your dream
    team with candidates who match your culture and requirements.
  </p>
</div>

     <section className="hire-talent-section">
      <div className="hire-cards">

        {/* Card 1 */}
        <div className="hire-card">
          <div className="icon red">
            🎯
          </div>
          <h3>Targeted Recruitment</h3>
          <p>
            Get access to candidates specifically matched to your role
            requirements, company culture, and growth stage.
          </p>
          <ul>
            <li>Pre-screened candidates</li>
            <li>Culture-fit assessment</li>
            <li>Skills verification</li>
            <li>Background checks</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="hire-card">
          <div className="icon blue">
            ⚡️
          </div>
          <h3>Fast Hiring</h3>
          <p>
            Reduce your time-to-hire with our streamlined process and
            ready-to-interview candidate pool.
          </p>
          <ul>
            <li>48-hour candidate delivery</li>
            <li>Interview scheduling support</li>
            <li>Offer negotiation assistance</li>
            <li>Onboarding guidance</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="hire-card">
          <div className="icon green">
            📈
          </div>
          <h3>Growth Support</h3>
          <p>
            Beyond hiring, we provide ongoing support to ensure your new hires
            succeed and grow with your company.
          </p>
          <ul>
            <li>Performance tracking</li>
            <li>Retention strategies</li>
            <li>Team integration support</li>
            <li>Continuous feedback</li>
          </ul>
        </div>

      </div>
    </section>

    <section className="hire-form-wrapper">
      <div className="hire-form-card">
        <h2>Start Your Hiring Journey</h2>

        <form className="hire-form">
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Your company name" />
          </div>

          <div className="form-group">
            <label>Contact Person</label>
            <input type="text" placeholder="Your full name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your.email@company.com" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="+91 98765 43210" />
          </div>

          <div className="form-group">
            <label>Position to Fill</label>
            <input type="text" placeholder="e.g. Senior Developer" />
          </div>

          <div className="form-group">
            <label>Urgency</label>
            <select>
              <option>Immediate (1–2 weeks)</option>
              <option>Short Term (1 month)</option>
              <option>Flexible</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Job Requirements</label>
            <textarea
              rows="5"
              placeholder="Describe the role, required skills, experience level, and any specific requirements..."
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Hiring Request
          </button>
        </form>
      </div>
    </section>
  );
}

    </>
  );
}

export default HireTalent;
