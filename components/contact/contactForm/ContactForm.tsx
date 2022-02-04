import React, { useState } from "react";

type ContactFields = {
    name: string;
    email: string;
    message: string;
};

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactFields>({
        name: "",
        email: "",
        message: "",
    });

    return (
        <form className="card flex flex-col gap-2 w-full max-w-sm mx-auto">
            <div className="flex flex-col items-start">
                <label htmlFor="name" className="my-2">
                    Name
                </label>
                <input
                    id="name"
                    className="form-input"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                />
            </div>
            <div className="flex flex-col items-start">
                <label htmlFor="email" className="my-2">
                    Email
                </label>
                <input
                    id="email"
                    className="form-input"
                    name="email"
                    type="email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                />
            </div>
            <div className="flex flex-col items-start">
                <label htmlFor="message" className="my-2">
                    Message
                </label>
                <textarea
                    id="message"
                    className="form-input h-36"
                    name="message"
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                />
            </div>
            <button
                className="bg-black text-white w-1/2 max-w-8 px-4 py-2 my-4 rounded-md self-center hover:bg-slate-600"
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    window.alert("Message sent!");
                }}
            >
                Send Message
            </button>
        </form>
    );
};
