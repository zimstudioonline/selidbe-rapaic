import { LegalPage, LegalSection } from "@/components/legal";
import { contactInfo } from "@/lib/contact";

export const metadata = {
  title: "Politika privatnosti",
  description: "Kako RapaicPrevoz prikuplja, koristi i štiti podatke o ličnosti.",
};

/**
 * Šablon politike privatnosti usklađen sa Zakonom o zaštiti podataka o
 * ličnosti Republike Srbije ("Sl. glasnik RS", br. 87/2018 — ZZPL).
 * Popuni [placeholder] polja (PIB, matični broj) i daj advokatu na pregled.
 */
export default function PrivacyPage() {
  return (
    <LegalPage title="Politika privatnosti" updated="[DATUM]">
      <LegalSection title="1. Rukovalac podacima">
        <p>
          Rukovalac podacima o ličnosti je <strong>{contactInfo.companyName}</strong>, sa sedištem
          na adresi {contactInfo.addressStreet}, {contactInfo.addressLocality}, matični broj
          [MATIČNI BROJ], PIB [PIB] (u daljem tekstu: "{contactInfo.companyName}", "mi"). Za sva
          pitanja u vezi sa obradom podataka možeš nam se obratiti na{" "}
          <strong>{contactInfo.email}</strong>.
        </p>
        <p>
          Podatke obrađujemo u skladu sa Zakonom o zaštiti podataka o ličnosti Republike Srbije
          ("Sl. glasnik RS", br. 87/2018 — u daljem tekstu: ZZPL).
        </p>
      </LegalSection>

      <LegalSection title="2. Koje podatke prikupljamo">
        <p>Prilikom korišćenja sajta i kontaktiranja prikupljamo sledeće podatke:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Podaci iz forme za procenu selidbe:</strong> ime i prezime, broj telefona, email
            (ako ga uneseš), adresa polaska i dolaska, željeni datum selidbe i napomena koju uneseš.
          </li>
          <li>
            <strong>Podaci iz direktne komunikacije:</strong> sadržaj poziva, Viber i email prepiske
            vezane za dogovor oko selidbe.
          </li>
          <li>
            <strong>Tehnički podaci:</strong> IP adresa, tip uređaja i pregledača, logovi pristupa —
            u meri neophodnoj za bezbednost i rad sajta.
          </li>
          <li>
            <strong>Analitika (uz pristanak):</strong> podatke o poseti sajtu prikupljamo tek nakon
            što prihvatiš kolačiće (vidi odeljak 6).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Svrha i pravni osnov obrade">
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Odgovor na upit i priprema ponude</strong> (preduzimanje radnji pre zaključenja
            ugovora, čl. 12. st. 1. tač. 2 ZZPL) — kontaktiranje radi procene i dogovora oko
            selidbe.
          </li>
          <li>
            <strong>Izvršenje usluge selidbe</strong> (izvršenje ugovora, čl. 12. st. 1. tač. 2
            ZZPL) — organizacija ekipe, prevoza i naplate za dogovoreni posao.
          </li>
          <li>
            <strong>Bezbednost i sprečavanje zloupotreba</strong> (legitimni interes, čl. 12. st. 1.
            tač. 6 ZZPL).
          </li>
          <li>
            <strong>Analitika i marketing</strong> (pristanak, čl. 12. st. 1. tač. 1 ZZPL) —
            isključivo nakon tvog pristanka, koji možeš povući u svakom trenutku.
          </li>
          <li>
            <strong>Ispunjenje zakonskih obaveza</strong> (čl. 12. st. 1. tač. 3 ZZPL) — npr.
            računovodstveni propisi.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Sa kim delimo podatke (obrađivači)">
        <p>
          Podatke ne prodajemo. Delimo ih samo sa pružaocima usluga koji ih obrađuju u naše ime, na
          osnovu ugovora o obradi:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Supabase</strong> (baza podataka za formu za procenu selidbe i sadržaj sajta).
          </li>
          <li>
            <strong>Vercel</strong> (hosting sajta).
          </li>
          <li>
            <strong>Google Analytics / Meta Pixel</strong> (analitika i oglašavanje) — samo nakon
            tvog pristanka kroz baner za kolačiće.
          </li>
        </ul>
        <p>
          Pojedini obrađivači mogu obrađivati podatke van Republike Srbije. U tom slučaju prenos se
          vrši u države koje obezbeđuju primereni nivo zaštite ili uz odgovarajuće mere zaštite u
          skladu sa čl. 63–70. ZZPL.
        </p>
      </LegalSection>

      <LegalSection title="5. Koliko dugo čuvamo podatke">
        <p>
          Podatke iz upita za procenu čuvamo dok traje komunikacija oko selidbe, a nakon realizovane
          ili odustale selidbe još [ROK, npr. 12 meseci] radi eventualne reklamacije, osim podataka
          koje smo dužni da čuvamo po zakonu (npr. računi — u rokovima iz računovodstvenih propisa).
        </p>
      </LegalSection>

      <LegalSection title="6. Kolačići i analitika">
        <p>
          Neophodni kolačići postavljaju se uvek jer bez njih sajt ne radi ispravno. Analitički i
          marketinški kolačići (Google Analytics, Meta Pixel) postavljaju se{" "}
          <strong>tek nakon tvog pristanka</strong> kroz baner za kolačiće; pristanak možeš povući
          brisanjem kolačića u pregledaču.
        </p>
      </LegalSection>

      <LegalSection title="7. Tvoja prava">
        <p>Po ZZPL imaš pravo na:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>pristup podacima koje o tebi obrađujemo,</li>
          <li>ispravku netačnih i dopunu nepotpunih podataka,</li>
          <li>brisanje podataka ("pravo na zaborav"),</li>
          <li>ograničenje obrade i prigovor na obradu,</li>
          <li>prenosivost podataka,</li>
          <li>povlačenje pristanka (bez uticaja na obradu pre povlačenja).</li>
        </ul>
        <p>
          Zahtev nam pošalji na {contactInfo.email} — odgovaramo bez odlaganja, a najkasnije u roku
          od 30 dana. Imaš i pravo pritužbe{" "}
          <strong>Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti</strong>{" "}
          (Bulevar kralja Aleksandra 15, Beograd; www.poverenik.rs).
        </p>
      </LegalSection>

      <LegalSection title="8. Bezbednost">
        <p>
          Primenjujemo tehničke i organizacione mere zaštite: enkripciju u prenosu (HTTPS), kontrolu
          pristupa podacima i ograničen pristup podacima unutar tima.
        </p>
      </LegalSection>

      <LegalSection title="9. Izmene ove politike">
        <p>
          O suštinskim izmenama obavestićemo te na sajtu pre nego što stupe na snagu. Aktuelna
          verzija je uvek objavljena na ovoj stranici.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
