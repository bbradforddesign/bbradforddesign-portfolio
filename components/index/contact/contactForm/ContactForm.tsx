import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";

type FormState = {
    error: boolean;
    sent: boolean;
    pending: boolean;
};

export const ContactForm: React.FC = () => {
    // form state to determine button state/helper message
    const [formState, setFormState] = useState<FormState>({
        error: false,
        sent: false,
        pending: false,
    });

    // post to api, trigger pending state, then display helper text on response
    const handleMessageSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setFormState((formState) => ({ ...formState, pending: true }));

        // retrieve and package input values
        const formData = new FormData(e.target as HTMLFormElement);
        const dataObject = Object.fromEntries(formData);

        // cancel request after prolonged server inactivity
        const controller = new AbortController();
        const timeout = setTimeout(() => {
            controller.abort();
            console.error("request timed out");
        }, 8000);

        try {
            const resp = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataObject),
                signal: controller.signal,
            });
            clearTimeout(timeout);
            if (resp.status !== 200) {
                throw new Error("failed to send message");
            }
            // update form appearance; display helper message
            setFormState((formState) => ({
                ...formState,
                pending: false,
                error: false,
                sent: true,
            }));
        } catch (err) {
            console.error(err);
            setFormState((formState) => ({
                ...formState,
                pending: false,
                error: true,
                sent: true,
            }));
        }
    };

    const renderButtonContent = () => {
        return formState.pending ? (
            <FaSpinner
                style={{ fontSize: "1.5rem" }}
                className="animate-spin"
            />
        ) : (
            "Send Message"
        );
    };

    const renderHelperText = () => {
        return (
            <p
                className={`body-text w-full rounded-sm text-center p-2 ${
                    formState.error
                        ? "text-red-900 bg-red-200"
                        : "text-green-900 bg-green-200"
                }`}
            >
                {formState.error
                    ? "An error occurred. Please try again later"
                    : "Message sent!"}
            </p>
        );
    };

    return (
        <form
            className="card flex flex-col gap-2 w-full max-w-sm mx-auto"
            onSubmit={handleMessageSubmit}
        >
            <div className="flex flex-col items-start">
                <label htmlFor="name" className="my-2 required-label">
                    Name
                </label>
                <input
                    id="name"
                    className="form-input invalid:border-red-500 invalid:text-red-500"
                    name="name"
                    type="text"
                    required
                />
            </div>
            <div className="flex flex-col items-start">
                <label htmlFor="email" className="my-2 required-label">
                    Email
                </label>
                <input
                    id="email"
                    className="form-input invalid:border-red-500 invalid:text-red-500"
                    name="email"
                    type="email"
                    required
                />
            </div>
            <div className="flex flex-col items-start">
                <label htmlFor="message" className="my-2 required-label">
                    Message
                </label>
                <textarea
                    id="message"
                    className="form-input resize-none h-36 invalid:border-red-500 invalid:text-red-500"
                    name="message"
                    required
                />
            </div>
            <button
                className="self-center mt-4 mb-2 solid-button"
                type="submit"
            >
                {renderButtonContent()}
            </button>
            {formState.sent && renderHelperText()}
        </form>
    );
};
