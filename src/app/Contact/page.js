"use client";

import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "@/context/ThemeContext";

export default function Contact() {
  const { isDark, colors } = useTheme();
  const contactRef = useRef(null);
  const [inView, setInView] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.success) {
      alert("Email enviado com sucesso!");
      reset();
    } else {
      alert("Falha ao enviar email.");
    }
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    alert("Erro ao enviar email.");
  }
};

  const onError = (errors) => console.log(errors);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <section
      id="contato"
      ref={contactRef}
      className="min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:px-8 md:px-16 transition-colors duration-500"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      <div className="max-w-xl w-full text-center mb-8 px-2">
        <h2
          style={{ color: colors.primary }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 text-center"
        >
          Contate-me
        </h2>
        <p
          className="mt-2 text-base sm:text-lg leading-relaxed"
          style={{ color: colors.text }}
        >
          Para saber mais sobre meus serviços.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="w-full max-w-xl grid gap-5"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto",
          color: colors.text,
        }}
      >
        <div className="col-span-2">
          <label
            className="block text-sm font-semibold mb-1"
            htmlFor="name"
            style={{ color: colors.primary }}
          >
            Nome
          </label>
          <input
            {...register("name", {
              required: "Nome é requerido.",
              minLength: {
                value: 5,
                message: "Nome precisa ter pelo menos 5 caracteres",
              },
            })}
            type="text"
            id="name"
            placeholder="Seu nome"
            style={{
              backgroundColor: colors.buttonLightFrom,
              color: colors.text,
              borderColor: colors.primary,
            }}
            className="w-full rounded-md border px-3 py-2 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm"
          />
          {errors?.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-1"
            htmlFor="email"
            style={{ color: colors.primary }}
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="exemplo@email.com"
            autoComplete="email"
            style={{
              backgroundColor: colors.buttonLightFrom,
              color: colors.text,
              borderColor: colors.primary,
            }}
            className="w-full rounded-md border px-3 py-2 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm"
          />
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-1"
            htmlFor="phoneNumber"
            style={{ color: colors.primary }}
          >
            Telefone
          </label>
          <input
            {...register("phoneNumber")}
            type="tel"
            id="phoneNumber"
            placeholder="(XX) XXXXX-XXXX"
            autoComplete="tel"
            style={{
              backgroundColor: colors.buttonLightFrom,
              color: colors.text,
              borderColor: colors.primary,
            }}
            className="w-full rounded-md border px-3 py-2 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm"
          />
        </div>

        <div className="col-span-2">
          <label
            className="block text-sm font-semibold mb-1"
            htmlFor="message"
            style={{ color: colors.primary }}
          >
            Mensagem
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={5}
            placeholder="Sua mensagem..."
            style={{
              backgroundColor: colors.buttonLightFrom,
              color: colors.text,
              borderColor: colors.primary,
            }}
            className="w-full rounded-md border px-3 py-2 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm resize-none"
          />
        </div>

        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className={`
              group relative overflow-hidden
              flex items-center justify-center gap-2
              min-w-[120px] sm:min-w-[130px] h-11
              rounded-full font-semibold text-sm
              transition-all duration-300 px-3 sm:px-4
              shadow-md hover:shadow-lg
              transform hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-offset-2
              active:transform active:scale-95
            `}
            style={{
              backgroundColor: colors.buttonFrom,
              color: isDark ? colors.buttonDarkText : colors.buttonLightText,
              backgroundImage: `linear-gradient(135deg, ${colors.buttonFrom}, ${colors.buttonTo})`,
            }}
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
