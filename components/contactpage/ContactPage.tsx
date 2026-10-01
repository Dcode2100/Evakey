"use client";
import { useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = document.getElementById("sheetdb-form") as HTMLFormElement;
    if (!form) return;
    
    const formdata = new FormData(form);

    fetch("https://sheetdb.io/api/v1/lxgxqk4f57be4", {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.json())
      .then(() => {
        setFormSubmitted(true);
        setModalMessage(
          "Thank you for contacting us. We will get back to you shortly."
        );
        setModalVisible(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("Error submitting form", error);
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-primary py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-[url('/bg-contact.webp')] bg-cover bg-center opacity-[0.07]"></div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-8 lg:pt-4">
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Let&apos;s talk</span>
              <h2 className="font-playfair text-3xl font-bold leading-tight text-white lg:text-5xl">
                Build your next gift programme
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-white/85">
                Looking to make a lasting impression with branded promotional
                products for your business? We&apos;re here to turn your ideas into
                reality. Get in touch with us today.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Email</h3>
                <a
                  className="text-base text-white/90 transition-colors hover:text-white"
                  href="mailto:kshemkariplastic@gmail.com"
                >
                  kshemkariplastic@gmail.com
                </a>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Phone</h3>
                <div className="space-y-1.5">
                  <a className="block text-base text-white/90 transition-colors hover:text-white" href="tel:9892552558">
                    <span className="text-white/60">Office</span> — 9892552558
                  </a>
                  <a className="block text-base text-white/90 transition-colors hover:text-white" href="tel:8104780513">
                    <span className="text-white/60">Phone</span> — 8104780513
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="form relative w-full flex justify-center flex-col">
            {modalVisible && formSubmitted && (
              <Modal
                message={modalMessage}
                onClose={() => setModalVisible(false)}
                className="w-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black z-50"
              />
            )}
            
            <form
              id="sheetdb-form"
              onSubmit={handleSubmit}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-2xl space-y-6"
            >
              <div className="space-y-4">
                <Input
                  className="text-base font-opensans"
                  label="Name"
                  handleInputChange={handleInputChange}
                  name="name"
                  value={formData.name}
                />
                <Input
                  className="text-base font-opensans"
                  label="Email"
                  handleInputChange={handleInputChange}
                  name="email"
                  value={formData.email}
                  type="email"
                />
                <Input
                  className="text-base font-opensans"
                  label="Phone"
                  handleInputChange={handleInputChange}
                  name="phone"
                  value={formData.phone}
                  type="tel"
                />
              </div>
              
              <div className="space-y-3">
                <textarea
                  name="message"
                  className="w-full text-primary font-opensans bg-transparent border-2 border-secondary/30 focus:border-primary focus:outline-none rounded-lg p-4 h-32 resize-none transition-all duration-300 placeholder:text-secondary/60"
                  onChange={handleInputChange}
                  placeholder="Type your message here"
                  value={formData.message}
                  required
                ></textarea>
              </div>
              
              <div className="w-full pt-2">
                <button
                  type="submit"
                  className="h-12 w-full rounded-lg bg-primary font-semibold text-white transition hover:bg-primary/90"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

