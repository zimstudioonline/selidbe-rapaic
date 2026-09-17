import { contactInfo } from "@/lib/contact";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/ui";

/** FAQ sekcija — dodaj i faqJsonLd(faqItems) na stranicu gde se koristi (AEO signal). */

export const faqItems = [
  {
    question: "Da li je procena selidbe besplatna?",
    answer:
      "Da. Pošalji nam detalje kroz formu na stranici Kontakt ili nas pozovi — procenu troškova dobijaš besplatno i bez obaveze.",
  },
  {
    question: "Koliko unapred treba zakazati selidbu?",
    answer:
      "Što ranije, to bolje — posebno vikendom i krajem meseca kad je najviše selidbi. Za hitne slučajeve pozovi direktno na Viber, trudimo se da izađemo u susret.",
  },
  {
    question: "Da li pakujete stvari ili to radim sam?",
    answer:
      "Oboje je moguće. Možemo da upakujemo sve stvari umesto tebe ili samo da preuzmemo već upakovane kutije i nameštaj — dogovara se prilikom procene.",
  },
  {
    question: "Da li radite selidbe van Beograda?",
    answer: "Da, radimo i međugradske selidbe — javi nam relaciju i dobijaš procenu cene.",
  },
  {
    question: "Da li demontirate i montirate nameštaj?",
    answer:
      "Da, demontaža i montaža ormana, kreveta i kuhinjskih elemenata su deo usluge pakovanja i selidbe.",
  },
  {
    question: "Kako se formira cena selidbe?",
    answer:
      "Cena zavisi od količine stvari, spratnosti, udaljenosti i toga da li je potrebno pakovanje. Zato uvek dajemo procenu unapred — bez iznenađenja na kraju.",
  },
  {
    question: "Kako mogu da vas kontaktiram?",
    answer: `Pozovi ili piši na Viber na ${contactInfo.phoneDisplay}, pošalji email na ${contactInfo.email} ili popuni formu na stranici Kontakt.`,
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-bold text-3xl text-ink">Česta pitanja</h2>
        <p className="mt-4 text-muted-foreground">
          Ne vidiš odgovor koji tražiš? Piši nam — rado pomažemo.
        </p>
      </div>
      <Accordion type="single" collapsible className="mt-10 w-full">
        {faqItems.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger className="text-base">{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
