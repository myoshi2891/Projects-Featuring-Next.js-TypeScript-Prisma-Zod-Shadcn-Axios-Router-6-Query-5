import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

function About() {
    return <section className="bg-white py-20" id="about">
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
            <img src={aboutSvg} className="w-full h-64" alt="" />
            <article>
                <SectionTitle text="code and coffee" />
                <p className="text-slate-600 mt-8 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati quia nemo corrupti vero dolore error laudantium quo quas exercitationem. Sed eaque obcaecati, quasi cum placeat esse quas odio est.
                </p>
            </article>
      </div>
  </section>;
}

export default About;
