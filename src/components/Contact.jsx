import { CssBtn, CssTextField, CssBtnSuccess } from "../styles/index";
import Header from "./Header";
import { useForm } from "react-hook-form";
import { Alert } from "@material-tailwind/react";
import { useState } from "react";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful }
  } = useForm();

  const [open, setOpen] = useState(true);

  const onSubmit = (data) => {
    let body = `
    <p>Hello Véronique Chimène,</p>
    <p>Vous avez reçu un nouveau mail provenant de votre portfolio de ${data.firstName} ${data.lastName} (${data.email}):</p>
    <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">${data.message}</p>
    `;
    window.Email.send({
      SecureToken: import.meta.env.VITE_TOKEN,
      To: import.meta.env.VITE_MAIL,
      From: import.meta.env.VITE_MAIL,
      Subject: `Nouveau mail de ${data.firstName} ${data.lastName} - Portfolio`,
      Body: body,
    }).console.error(error);
  };

  return (
    <>
      <Header titre="Contact" />
      <section className="h-full flex justify-center items-center">
        <section className="w-[65%] sm:w-[80%] mt-40 ml-12 flex flex-col lg:flex-row">
          {/* Bg brown */}
          <section className="lg:w-2/4 p-2 bg-silk border lg:rounded-l-xl m:rounded-t-xl sm:rounded-t-xl border-black flex justify-center items-center">
            <h3 className="elsie-swash text-center lg:text-[4em] text-[2.5em] leading-tight ">
              Pour Me Contacter
            </h3>
          </section>
          {/* Form */}
          <section className="lg:w-2/4 border lg:rounded-r-xl m:rounded-b-xl sm:rounded-b-xl border-black">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-5 py-6 flex flex-col justify-center items-center"
            >
              <div className="w-full mb-7">
                <CssTextField
                  type="text"
                  label="Nom"
                  fullWidth
                  size="small"
                  id="firstName"
                  {...register("firstName", {
                    pattern: /^[A-Za-z]+$/i,
                    required: true,
                    minLength: 2,
                  })}
                />
              </div>
              <div className="w-full mb-7">
                <CssTextField
                  type="text"
                  label="Prénom"
                  fullWidth
                  size="small"
                  id="lastName"
                  {...register("lastName", {
                    pattern: /^[A-Za-z]+$/i,
                    required: true,
                    minLength: 2,
                  })}
                />
              </div>
              <div className="w-full mb-7">
                <CssTextField
                  type="email"
                  label="Email"
                  fullWidth
                  size="small"
                  id="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[\w.-]+@[\w.-]+\.[\w]+$/,
                  })}
                />
              </div>
              <div className="w-full mb-7">
                <CssTextField
                  type="text"
                  label="Message"
                  fullWidth
                  multiline
                  rows={2}
                  size="small"
                  {...register("message", {
                    required: true,
                    pattern: /^[A-Za-z][0-9A-Za-z '-,?)!-(:+]{1,}$/,
                    max: "1500",
                  })}
                />
              </div>
              {isSubmitSuccessful ? (
                <>
                  <CssBtnSuccess>Envoyé</CssBtnSuccess>
                  {open ? 
                    <div className="absolute h-screen w-screen inset-0 bg-black/50 flex justify-center items-center z-40">
                      <Alert onClose={() => setOpen(false)} className="w-2/4">
                        Votre message a bien été envoyé.
                      </Alert>
                    </div>
                  : <></>}
                </>

              ) : (
                <CssBtn className="w-[150px]" type="submit">Envoyer</CssBtn>
              )}
            </form>
          </section>
        </section>
      </section>
    </>
  );
}

export default Contact;
