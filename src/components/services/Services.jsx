import React from "react";
import "./services.css";
import { TbChecks } from "react-icons/tb";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container container__services">
        {/* UI/UX Design Section */}
        <article className="services">
          <div className="servece__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="servece__list">
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Designing engaging, user-friendly interfaces with smooth
                animations for an immersive experience.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Creating interactive prototypes that bring your vision to life
                before development begins.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Crafting visually appealing banners and promotional graphics
                that capture attention.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Designing sleek, high-quality digital products tailored to your
                brand identity.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Building responsive, multi-platform layouts to ensure seamless
                user experiences everywhere.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Creating modern, responsive website designs optimized for both
                desktop and mobile devices.
              </p>
            </li>
          </ul>
        </article>

        {/* Web Development Section */}
        <article className="services">
          <div className="servece__head">
            <h3>Web Development</h3>
          </div>
          <ul className="servece__list">
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Building functional, responsive websites using HTML, CSS, and
                JavaScript.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Developing secure, scalable backend systems with PHP and Laravel
                framework.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>Creating dynamic, high-performance web apps using React.js.</p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Implementing progressive, component-based designs with Vue.js.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Styling modern, responsive layouts with Tailwind CSS for faster
                development.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Designing visually appealing and mobile-friendly interfaces with
                Bootstrap.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Building admin dashboards and content management tools using
                Filament PHP.
              </p>
            </li>
          </ul>
        </article>

        {/* Mobile App Development Section */}
        <article className="services">
          <div className="servece__head">
            <h3>Mobile App Development</h3>
          </div>
          <ul className="servece__list">
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Developing smooth, high-performance iOS apps tailored for Apple
                devices.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Creating Android applications optimized for speed, usability,
                and design consistency.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Building cross-platform mobile apps using Quasar Framework for
                efficient delivery.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Developing feature-rich mobile applications using Flutter for
                both iOS and Android.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Creating powerful desktop applications with Java for business
                and productivity needs.
              </p>
            </li>
            <li>
              <TbChecks className="servece__list-icon" />
              <p>
                Building Management Information Systems (MIS) with Java for
                streamlined operations.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
