import { siteConfig } from "@/shared/config/site";
import { formatNumber } from "@/shared/lib/format";
import { donationCauses, donationFrequencies, type CauseId, type FrequencyId } from "../data/donate.data";

export type Donation = {
  cause: CauseId;
  frequency: FrequencyId;
  amount: number;
  name: string;
  phone: string;
};

const arabicDigits = /[٠-٩]/g;

/** Converts Arabic-Indic digits to Latin and strips everything but digits. */
export function toLatinDigits(value: string) {
  return value.replace(arabicDigits, (d) => String(d.charCodeAt(0) - 0x0660)).replace(/\D/g, "");
}

/**
 * Normalizes an Egyptian mobile number to local 11-digit form (01xxxxxxxxx),
 * accepting the +20 / 0020 / 20 country code or a missing leading zero.
 */
export function normalizeEgyptianMobile(value: string) {
  const digits = toLatinDigits(value);
  if (digits.startsWith("0020")) return `0${digits.slice(4)}`;
  if (digits.startsWith("20") && digits.length === 12) return `0${digits.slice(2)}`;
  if (digits.startsWith("1") && digits.length === 10) return `0${digits}`;
  return digits;
}

/** Egyptian mobile numbers: 010, 011, 012 or 015 followed by 8 digits. */
export function isValidEgyptianMobile(phone: string) {
  return /^01[0125]\d{8}$/.test(phone);
}

export function causeLabel(id: CauseId) {
  return donationCauses.find((c) => c.id === id)?.label ?? "";
}

export function frequencyLabel(id: FrequencyId) {
  return donationFrequencies.find((f) => f.id === id)?.label ?? "";
}

export function buildWhatsAppUrl(donation: Donation) {
  const message = [
    "السلام عليكم، أرغب في التبرع لجمعية صلاح الدين بالفيوم.",
    "",
    `• مجال التبرع: ${causeLabel(donation.cause)}`,
    `• المبلغ: ${formatNumber(donation.amount)} جنيه (${frequencyLabel(donation.frequency)})`,
    `• الاسم: ${donation.name}`,
    `• رقم الهاتف: ${donation.phone}`,
    "",
    "برجاء التواصل معي لإتمام التبرع.",
  ].join("\n");
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
