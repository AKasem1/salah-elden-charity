export const donationCauses = [
  { id: "general", label: "تبرع عام", hint: "حيث الحاجة أشد" },
  { id: "orphan", label: "كفالة يتيم", hint: "رعاية شهرية لطفل" },
  { id: "patient", label: "كفالة مريض", hint: "علاج وعمليات" },
  { id: "student", label: "كفالة طالب علم", hint: "مصروفات ومستلزمات" },
  { id: "sadaqa", label: "صدقة جارية", hint: "أثر يدوم" },
  { id: "zakat", label: "زكاة مال", hint: "تُصرف في مصارفها" },
] as const;

export type CauseId = (typeof donationCauses)[number]["id"];

export const donationFrequencies = [
  { id: "once", label: "مرة واحدة" },
  { id: "monthly", label: "شهريًا" },
] as const;

export type FrequencyId = (typeof donationFrequencies)[number]["id"];

export const presetAmounts = [100, 250, 500, 1000] as const;

export const MIN_AMOUNT = 10;

export const reassurances = [
  { title: "لا نطلب بيانات بطاقتك", description: "هذه الصفحة لا تجمع أي بيانات دفع. نتواصل معك لتأكيد الطريقة الأنسب لك." },
  { title: "جمعية مشهرة رسميًا", description: "مشهرة برقم 481 لسنة 2005 تحت إشراف وزارة التضامن الاجتماعي." },
  { title: "شفافية في كل جنيه", description: "ننشر تقارير دورية بأعداد المستفيدين وقيمة المساعدات." },
] as const;

export const steps = [
  { title: "اختر وحدد", description: "مجال التبرع والمبلغ في أقل من دقيقة." },
  { title: "أرسل عبر واتساب", description: "رسالة جاهزة تصل مباشرة لفريق الجمعية." },
  { title: "نؤكد معك", description: "يتواصل معك فريق الجمعية لإتمام تبرعك." },
] as const;

export const faqs = [
  {
    q: "هل سأدفع الآن من خلال هذه الصفحة؟",
    a: "لا. الصفحة تسجّل رغبتك في التبرع فقط، ثم يتواصل معك فريق الجمعية لتأكيد المبلغ وطريقة الدفع المناسبة لك.",
  },
  {
    q: "هل بياناتي في أمان؟",
    a: "نطلب اسمك ورقم هاتفك فقط للتواصل معك بخصوص تبرعك، ولا نطلب أي بيانات بنكية أو بيانات بطاقة.",
  },
  {
    q: "هل يمكنني اختيار الجهة التي يذهب إليها تبرعي؟",
    a: "نعم، اختر مجال التبرع من النموذج — كفالة يتيم أو مريض أو طالب علم أو زكاة أو صدقة جارية — وسيُوجَّه تبرعك إليه.",
  },
  {
    q: "لم يفتح واتساب، ماذا أفعل؟",
    a: "يمكنك الاتصال بنا مباشرة على أرقام الجمعية الظاهرة أسفل الصفحة، وسنسجل تبرعك هاتفيًا.",
  },
] as const;
