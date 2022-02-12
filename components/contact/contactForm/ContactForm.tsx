import React, { useState, useEffect } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";

export type ContactFields = {
    name: string;
    email: string;
    message: string;
};

type FormState = {
    error: string;
    disabled: boolean;
    valid: boolean;
    sent: boolean;
    pending: boolean;
};

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactFields>({
        name: "",
        email: "",
        message: "",
    });

    // form state to determine button state/helper message
    const [formState, setFormState] = useState<FormState>({
        error: "",
        disabled: true,
        valid: false,
        sent: false,
        pending: false,
    });

    // disable form if any fields remain empty
    useEffect(() => {
        if (formState.sent) {
            setFormState((formState) => ({ ...formState, disabled: true }));
            return;
        }
        for (const field in formData) {
            if (!formData[field as keyof ContactFields]) {
                setFormState((formState) => ({
                    ...formState,
                    disabled: true,
                }));
                return;
            }
        }
        setFormState((formState) => ({ ...formState, disabled: false }));
    }, [formData, formState.sent]);

    // post to api, display error message if failed to send
    const handleMessageSubmit: React.MouseEventHandler = async (
        e: React.MouseEvent
    ) => {
        try {
            e.preventDefault();

            // trigger loading state
            setFormState((formState) => ({ ...formState, pending: true }));

            const resp = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (resp.status === 200) {
                setFormState((formState) => ({
                    ...formState,
                    disabled: true,
                    pending: false,
                    sent: true,
                }));
            } else {
                setFormState((formState) => ({
                    ...formState,
                    disabled: true,
                    pending: false,
                    error: "An error occurred. Please try again later.",
                }));
            }
        } catch (err: any) {
            console.log(err);
            setFormState((formState) => ({
                ...formState,
                pending: false,
                sent: false,
                error: "An error occurred. Please try again later.",
            }));
        }
    };

    const validateEmail = (email: string) => {
        const regex: RegExp =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        setFormState((formState) => ({
            ...formState,
            valid: regex.test(email),
        }));
    };

    const renderButtonContent = () => {
        if (formState.sent) {
            return (
                <div className="flex justify-center items-end gap-2">
                    <IoCheckmarkDoneSharp style={{ fontSize: "1.25rem" }} />
                    {"Message Sent!"}
                </div>
            );
        }

        if (formState.pending) {
            return (
                <FaSpinner
                    style={{ fontSize: "1.5rem" }}
                    className="animate-spin"
                />
            );
        }

        return "Send Message";
    };

    return (
        <form className="card flex flex-col gap-2 w-full max-w-sm mx-auto">
            <div className="flex flex-col items-start">
                <label htmlFor="name" className="my-2 required-label">
                    Name
                </label>
                <input
                    id="name"
                    className={`form-input ${
                        formData.name || "required:border-red-500"
                    }`}
                    name="name"
                    type="text"
                    required={true}
                    value={formData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                />
            </div>
            <div className="flex flex-col items-start">
                <label htmlFor="email" className="my-2 required-label">
                    Email
                </label>
                <input
                    id="email"
                    className={`form-input ${
                        (formData.email && formState.valid) ||
                        "required:border-red-500"
                    }`}
                    name="email"
                    type="email"
                    required={true}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        validateEmail(e.target.value);
                        setFormData((formData) => ({
                            ...formData,
                            email: e.target.value,
                        }));
                    }}
                />
            </div>
            <div className="flex flex-col items-start">
                <label htmlFor="message" className="my-2 required-label">
                    Message
                </label>
                <textarea
                    id="message"
                    className={`form-input resize-none h-36 ${
                        formData.message || "required:border-red-500"
                    }`}
                    name="message"
                    required={true}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                />
                <button
                    className="w-40 self-center mt-4 mb-2 solid-button disabled:opacity-50"
                    type="submit"
                    onClick={(e) => handleMessageSubmit(e)}
                    disabled={formState.disabled || !formState.valid}
                >
                    {renderButtonContent()}
                </button>
                {!formState.sent && formState.error && (
                    <p className="body-text max-w-xs rounded-md p-2 bg-red-500 text-white self-center">
                        {formState.error}
                    </p>
                )}
            </div>
        </form>
    );
};
