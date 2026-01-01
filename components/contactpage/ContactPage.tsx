"use client";
import { useState, useEffect } from "react";
import Input from "../Input";
import Modal from "../Modal";
import ButtonWave from "../ButtonWave";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface CartItem {
  title: string;
  imagePath: string;
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const handlePageRefresh = () => {
      localStorage.removeItem("cartItems");
      setCartItems([]);
    };

    handlePageRefresh();
    window.addEventListener("beforeunload", handlePageRefresh);

    const handleCartUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<CartItem[]>;
      console.log("Cart update event received:", customEvent.detail);
      const items = localStorage.getItem("cartItems");
      if (items) {
        setCartItems(JSON.parse(items));
      }
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("beforeunload", handlePageRefresh);
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = document.getElementById("sheetdb-form") as HTMLFormElement;
    if (!form) return;
    
    const formdata = new FormData(form);

    cartItems.forEach(item => {
        formdata.append("items", item.title); 
    });

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
      className="relative w-full bg-gradient-to-br from-primary to-primary-light py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/bg-contact.webp')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          <div className="flex flex-col gap-6 sm:gap-8 lg:pt-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-semibold text-white leading-tight">
                Let&apos;s talk
              </h2>
              <p className="text-base sm:text-lg md:text-lg lg:text-xl text-white/90 font-opensans leading-relaxed max-w-lg">
                Looking to make a lasting impression with branded promotional
                products for your business? We&apos;re here to turn your ideas into
                reality. Get in touch with us today.
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="email space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-playfair font-semibold text-white">Email</h3>
                <a
                  className="text-base sm:text-lg text-white/90 font-opensans hover:text-white transition-colors duration-300 break-words"
                  href="mailto:kshemkariplastic@gmail.com"
                >
                  kshemkariplastic@gmail.com
                </a>
              </div>
              
              <div className="phone space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-playfair font-semibold text-white">Phone</h3>
                <div className="space-y-2">
                  <a
                    className="block text-base sm:text-lg text-white/90 font-opensans hover:text-white transition-colors duration-300"
                    href="tel:9892552558"
                  >
                    <span className="font-light">Office</span> - 9892552558
                  </a>
                  <a
                    className="block text-base sm:text-lg text-white/90 font-opensans hover:text-white transition-colors duration-300"
                    href="tel:8104780513"
                  >
                    <span className="font-light">Phone</span> - 8104780513
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="form relative w-full flex justify-center flex-col order-1 lg:order-2">
            {modalVisible && formSubmitted && (
              <Modal
                message={modalMessage}
                onClose={() => setModalVisible(false)}
                className="w-[90%] sm:w-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black z-50"
              />
            )}
            
            <form
              id="sheetdb-form"
              onSubmit={handleSubmit}
              className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-4 sm:space-y-6"
            >
              <div className="space-y-3 sm:space-y-4">
                <Input
                  className="text-sm sm:text-base font-opensans"
                  label="Name"
                  handleInputChange={handleInputChange}
                  name="name"
                  value={formData.name}
                />
                <Input
                  className="text-sm sm:text-base font-opensans"
                  label="Email"
                  handleInputChange={handleInputChange}
                  name="email"
                  value={formData.email}
                  type="email"
                />
                <Input
                  className="text-sm sm:text-base font-opensans"
                  label="Phone"
                  handleInputChange={handleInputChange}
                  name="phone"
                  value={formData.phone}
                  type="tel"
                />
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <p className="text-base sm:text-lg font-opensans font-medium text-primary">Your Quotation</p>
                <div className="flex flex-wrap gap-3 sm:gap-4 p-4 sm:p-6 border-2 border-secondary/30 rounded-lg sm:rounded-xl min-h-[100px] sm:min-h-[120px] bg-accent-5/50">
                  {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="group relative flex flex-col items-center"
                      >
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                          <Image
                            src={item.imagePath}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                          <button
                            onClick={() => {
                              const updatedCart = cartItems.filter(
                                (_, i) => i !== index
                              );
                              setCartItems(updatedCart);
                              localStorage.setItem(
                                "cartItems",
                                JSON.stringify(updatedCart)
                              );
                              const event = new CustomEvent("cartUpdated", {
                                detail: updatedCart,
                              });
                              window.dispatchEvent(event);
                            }}
                            className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:bg-red-600 transform hover:scale-110 text-xs sm:text-base"
                          >
                            ×
                          </button>
                        </div>
                        <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-center text-primary font-opensans max-w-[70px] sm:max-w-[80px] break-words">
                          {item.title}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm sm:text-base text-secondary font-opensans text-center w-full py-6 sm:py-8">
                      No items in cart
                    </p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <textarea
                  name="message"
                  className="w-full text-sm sm:text-base text-primary font-opensans bg-transparent border-2 border-secondary/30 focus:border-primary focus:outline-none rounded-lg p-3 sm:p-4 h-24 sm:h-32 resize-none transition-all duration-300 placeholder:text-secondary/60"
                  onChange={handleInputChange}
                  placeholder="Type your message here"
                  value={formData.message}
                  required
                ></textarea>
              </div>
              
              <div className="w-full flex justify-end pt-2 sm:pt-4">
                <ButtonWave title="Submit" className="w-full sm:w-auto" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

