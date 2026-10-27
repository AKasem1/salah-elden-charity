"use client";

import { AnimatePresence, motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { useRef, useState, type FormEvent, type ReactNode, type RefObject } from "react";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { formatNumber } from "@/shared/lib/format";
import { HeartIcon, PhoneIcon, ShieldCheckIcon } from "@/shared/components/icons";
import {
  MIN_AMOUNT,
  donationCauses,
  donationFrequencies,
  presetAmounts,
  type CauseId,
  type FrequencyId,
} from "../data/donate.data";
import {
  buildWhatsAppUrl,
  causeLabel,
  frequencyLabel,
  isValidEgyptianMobile,
  normalizeEgyptianMobile,
  toLatinDigits,
  type Donation,
} from "../lib/donation";

const ease = [0.22, 1, 0.36, 1] as const;

type Errors = Partial<Record<"amount" | "name" | "phone", string>>;

function initialCause(param: string | null): CauseId {
  return donationCauses.find((c) => c.id === param)?.id ?? "general";
}

export function DonateForm() {
  const searchParams = useSearchParams();
  const [cause, setCause] = useState<CauseId>(() => initialCause(searchParams.get("cause")));
  const [frequency, setFrequency] = useState<FrequencyId>("once");
  const [preset, setPreset] = useState<number | null>(250);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<Donation | null>(null);

  const amountRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const amount = preset ?? Number(toLatinDigits(customAmount) || 0);

  function validate(): Errors {
    const next: Errors = {};
    if (!amount || amount < MIN_AMOUNT) next.amount = `أدخل مبلغًا لا يقل عن ${MIN_AMOUNT} جنيه`;
    if (name.trim().length < 2) next.name = "اكتب اسمك حتى نتمكن من التواصل معك";
    if (!isValidEgyptianMobile(normalizeEgyptianMobile(phone)))
      next.phone = "أدخل رقم موبايل مصري صحيح، مثل 01012345678 أو ‎+201012345678";
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (next.amount) return amountRef.current?.focus();
    if (next.name) return nameRef.current?.focus();
    if (next.phone) return phoneRef.current?.focus();

    const donation: Donation = { cause, frequency, amount, name: name.trim(), phone: normalizeEgyptianMobile(phone) };
    window.open(buildWhatsAppUrl(donation), "_blank", "noopener,noreferrer");
    setSubmitted(donation);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return <SuccessCard donation={submitted} onReset={() => setSubmitted(null)} />;
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="pb-28 lg:pb-0">
      <div className="space-y-4">
        <Step number={1} title="اختر مجال تبرعك">
          <div role="radiogroup" aria-label="مجال التبرع" className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {donationCauses.map((c) => {
              const selected = c.id === cause;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setCause(c.id)}
                  className={cn(
                    "relative rounded-2xl p-3.5 text-start ring-1 transition-colors duration-300",
                    selected ? "text-white ring-ink" : "bg-cream ring-transparent hover:ring-line",
                  )}
                >
                  {selected ? (
                    <motion.span
                      layoutId="cause-pill"
                      className="absolute inset-0 rounded-2xl bg-ink"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative block text-[0.95rem] font-semibold">{c.label}</span>
                  <span className={cn("relative mt-0.5 block text-xs", selected ? "text-white/65" : "text-muted")}>
                    {c.hint}
                  </span>
                </button>
              );
            })}
          </div>
        </Step>

        <Step number={2} title="حدد المبلغ">
          <div role="radiogroup" aria-label="نوع التبرع" className="grid grid-cols-2 rounded-full bg-cream p-1">
            {donationFrequencies.map((f) => {
              const selected = f.id === frequency;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setFrequency(f.id)}
                  className={cn("relative h-11 rounded-full text-sm font-semibold", selected ? "text-ink" : "text-muted")}
                >
                  {selected ? (
                    <motion.span
                      layoutId="frequency-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-sm ring-1 ring-line"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative">{f.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {presetAmounts.map((value) => {
              const selected = preset === value;
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    setPreset(value);
                    setCustomAmount("");
                    setErrors((e) => ({ ...e, amount: undefined }));
                  }}
                  className={cn(
                    "h-14 rounded-2xl font-display text-lg font-bold ring-1 transition-all duration-300",
                    selected ? "bg-brand text-white ring-brand shadow-[0_10px_25px_-12px_rgb(61_170_72/0.8)]" : "bg-white ring-line hover:ring-ink/30",
                  )}
                >
                  {formatNumber(value)} <span className="text-xs font-medium">ج.م</span>
                </button>
              );
            })}
          </div>

          <label className="mt-3 block">
            <span className="sr-only">مبلغ آخر</span>
            <div
              className={cn(
                "flex h-14 items-center rounded-2xl bg-white px-4 ring-1 transition-shadow focus-within:ring-2",
                errors.amount ? "ring-red-400 focus-within:ring-red-400" : "ring-line focus-within:ring-brand",
                preset === null && customAmount && "ring-2 ring-brand",
              )}
            >
              <input
                ref={amountRef}
                inputMode="numeric"
                placeholder="أو اكتب مبلغًا آخر"
                value={customAmount}
                onFocus={() => setPreset(null)}
                onChange={(e) => {
                  setPreset(null);
                  setCustomAmount(toLatinDigits(e.target.value).slice(0, 7));
                  setErrors((er) => ({ ...er, amount: undefined }));
                }}
                aria-invalid={Boolean(errors.amount)}
                aria-describedby={errors.amount ? "amount-error" : undefined}
                className="h-full min-w-0 flex-1 bg-transparent text-lg font-semibold outline-none placeholder:text-base placeholder:font-normal placeholder:text-muted"
              />
              <span className="text-sm text-muted">جنيه</span>
            </div>
          </label>
          <FieldError id="amount-error" message={errors.amount} />
        </Step>

        <Step number={3} title="بيانات التواصل" note="فقط لنؤكد تبرعك معك">
          <div className="grid gap-3 sm:grid-cols-2">
            <TextField
              inputRef={nameRef}
              id="donor-name"
              label="الاسم"
              autoComplete="name"
              value={name}
              onChange={(v) => {
                setName(v);
                setErrors((e) => ({ ...e, name: undefined }));
              }}
              error={errors.name}
            />
            <TextField
              inputRef={phoneRef}
              id="donor-phone"
              label="رقم الموبايل (واتساب)"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              dir="ltr"
              placeholder="01xxxxxxxxx"
              value={phone}
              onChange={(v) => {
                setPhone(v);
                setErrors((e) => ({ ...e, phone: undefined }));
              }}
              error={errors.phone}
            />
          </div>
          <p className="mt-3 flex items-start gap-2 text-xs leading-6 text-muted">
            <ShieldCheckIcon className="mt-0.5 size-4 shrink-0 text-brand" />
            لن نطلب منك أي بيانات بنكية أو بيانات بطاقة. بياناتك تُستخدم فقط للتواصل بخصوص تبرعك.
          </p>
        </Step>
      </div>

      {/* Sticky on phones so the action is always one tap away. */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl lg:static lg:mt-4 lg:rounded-[2rem] lg:border-0 lg:bg-white lg:p-5 lg:ring-1 lg:ring-line">
        <div className="mx-auto flex max-w-xl items-center gap-3 lg:max-w-none">
          <div className="min-w-0 flex-1">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.p
                key={amount}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.25, ease }}
                className="font-display text-xl font-bold"
              >
                {amount ? formatNumber(amount) : "—"} <span className="text-sm font-medium">جنيه</span>
              </motion.p>
            </AnimatePresence>
            <p className="truncate text-xs text-muted">
              {causeLabel(cause)} · {frequencyLabel(frequency)}
            </p>
          </div>
          <button
            type="submit"
            className="group inline-flex h-14 items-center gap-3 rounded-full bg-brand ps-6 pe-2 font-semibold text-white shadow-[0_10px_30px_-10px_rgb(61_170_72/0.7)] transition-colors hover:bg-brand-deep"
          >
            أكمل التبرع
            <span className="grid size-10 place-items-center rounded-full bg-white/20">
              <HeartIcon className="size-5 transition-transform duration-300 group-hover:scale-125" />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}

function Step({ number, title, note, children }: { number: number; title: string; note?: string; children: ReactNode }) {
  return (
    <motion.fieldset
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay: 0.15 + number * 0.1 }}
      className="min-w-0 rounded-[2rem] bg-white p-5 ring-1 ring-line md:p-6"
    >
      <legend className="sr-only">{title}</legend>
      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="grid size-8 place-items-center rounded-full bg-brand-soft font-display text-sm font-bold text-brand-deep">
          {number}
        </span>
        <p className="font-display text-lg font-semibold">{title}</p>
        {note ? <span className="ms-auto text-xs text-muted">{note}</span> : null}
      </div>
      {children}
    </motion.fieldset>
  );
}

type TextFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  inputRef: RefObject<HTMLInputElement | null>;
  type?: string;
  inputMode?: "text" | "tel";
  autoComplete?: string;
  placeholder?: string;
  dir?: "ltr" | "rtl";
};

function TextField({ id, label, value, onChange, error, inputRef, type = "text", ...rest }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "h-13 w-full rounded-2xl bg-cream px-4 text-base outline-none ring-1 transition-shadow placeholder:text-muted/70 focus:bg-white focus:ring-2",
          rest.dir === "ltr" && "text-right",
          error ? "ring-red-400" : "ring-transparent focus:ring-brand",
        )}
        {...rest}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.p
          id={id}
          role="alert"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-1.5 text-sm text-red-600"
        >
          {message}
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
}

function SuccessCard({ donation, onReset }: { donation: Donation; onReset: () => void }) {
  const [primaryPhone] = siteConfig.contact.phones;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      className="rounded-[2rem] bg-white p-6 text-center ring-1 ring-line md:p-10"
      role="status"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.2 }}
        className="mx-auto grid size-20 place-items-center rounded-full bg-brand text-white shadow-[0_15px_40px_-12px_rgb(61_170_72/0.8)]"
      >
        <HeartIcon className="size-9" />
      </motion.span>
      <h2 className="mt-6 font-display text-2xl font-bold md:text-3xl">جزاك الله خيرًا يا {donation.name.split(" ")[0]}</h2>
      <p className="mx-auto mt-3 max-w-md leading-8 text-muted">
        أرسل الرسالة الجاهزة في واتساب، وسيتواصل معك فريق الجمعية على رقم{" "}
        <span dir="ltr" className="font-semibold text-ink">
          {donation.phone}
        </span>{" "}
        لإتمام تبرعك.
      </p>

      <dl className="mx-auto mt-6 grid max-w-sm grid-cols-3 gap-2 rounded-3xl bg-cream p-4 text-sm">
        <div>
          <dt className="text-xs text-muted">المبلغ</dt>
          <dd className="mt-1 font-display font-bold">{formatNumber(donation.amount)} ج.م</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">المجال</dt>
          <dd className="mt-1 font-semibold">{causeLabel(donation.cause)}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">النوع</dt>
          <dd className="mt-1 font-semibold">{frequencyLabel(donation.frequency)}</dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:justify-center">
        <a
          href={buildWhatsAppUrl(donation)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-13 items-center justify-center rounded-full bg-brand px-6 font-semibold text-white hover:bg-brand-deep"
        >
          لم يفتح واتساب؟ افتحه من هنا
        </a>
        <a
          href={`tel:${primaryPhone}`}
          className="inline-flex h-13 items-center justify-center gap-2 rounded-full px-6 font-semibold ring-1 ring-line hover:bg-cream"
        >
          <PhoneIcon className="size-4" />
          اتصل بنا مباشرة
        </a>
      </div>
      <button type="button" onClick={onReset} className="mt-5 text-sm text-muted underline underline-offset-4 hover:text-ink">
        تعديل بيانات التبرع
      </button>
    </motion.div>
  );
}
