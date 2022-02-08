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

    const handleMessageSubmit: React.MouseEventHandler = async (
        e: React.MouseEvent
    ) => {
        try {
            e.preventDefault();

            const resp = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (resp.status === 200) {
                alert("Success!");
            }
        } catch (err: any) {
            console.log(err);
        }
    };

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
                    className="form-input resize-none h-36"
                    name="message"
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                />
            </div>
            <button
                className="w-1/2 max-w-8 self-center my-4 solid-button"
                type="submit"
                onClick={(e) => handleMessageSubmit(e)}
            >
                Send Message
            </button>
        </form>
    );
};
