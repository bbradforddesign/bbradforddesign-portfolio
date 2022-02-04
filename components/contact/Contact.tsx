import { ContactForm } from "./contactForm/ContactForm";

export const Contact: React.FC = () => {
    return (
        <section className="section-container" id="Contact">
            <h2 className="section-header">Contact</h2>
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                <p className="body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <ContactForm />
            </div>
        </section>
    );
};
