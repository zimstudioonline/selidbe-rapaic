import { LegalPage, LegalSection } from "@/components/legal";
import { contactInfo } from "@/lib/contact";

export const metadata = {
  title: "Uslovi korišćenja",
  description: "Uslovi pružanja usluge selidbe — RapaicPrevoz.",
};

/**
 * Šablon uslova pružanja usluge selidbe, oslonjen na Zakon o obligacionim
 * odnosima i Zakon o zaštiti potrošača RS. Popuni [placeholder] polja
 * (PIB, matični broj) i daj advokatu na pregled pre objave.
 */
export default function TermsPage() {
  return (
    <LegalPage title="Uslovi korišćenja" updated="[DATUM]">
      <LegalSection title="1. O ovim uslovima">
        <p>
          Uslugu selidbe pruža <strong>{contactInfo.companyName}</strong>,{" "}
          {contactInfo.addressStreet}, {contactInfo.addressLocality}, matični broj [MATIČNI BROJ],
          PIB [PIB], email {contactInfo.email} (u daljem tekstu: "{contactInfo.companyName}", "mi").
          Slanjem upita za procenu ili poručivanjem selidbe prihvataš ove uslove.
        </p>
        <p>
          Usluga je namenjena i fizičkim licima (potrošačima) i pravnim licima. Na odnose sa
          potrošačima primenjuju se i odredbe Zakona o zaštiti potrošača Republike Srbije.
        </p>
      </LegalSection>

      <LegalSection title="2. Usluga">
        <p>
          {contactInfo.companyName} pruža usluge stambenih i poslovnih selidbi, pakovanja i
          demontaže nameštaja, kao i transporta osetljive i glomazne robe (npr. klaviri, sefovi) u
          Beogradu i okolini, kao i međugradski.
        </p>
      </LegalSection>

      <LegalSection title="3. Procena i poručivanje">
        <p>
          Procenu troškova dajemo na osnovu podataka koje nam pošalješ (količina stvari, adrese,
          spratnost, datum) — konačna cena se potvrđuje pre početka selidbe i može se razlikovati od
          početne procene ako se na licu mesta utvrdi veći obim posla od najavljenog. Poručivanjem
          selidbe (usmeno, pisanim putem ili potvrdom termina) zaključuje se ugovor o pružanju
          usluge.
        </p>
      </LegalSection>

      <LegalSection title="4. Cena i plaćanje">
        <p>
          Cena se plaća u dinarima, po završetku selidbe, osim ako se drugačije ne dogovorimo
          unapred. Otkazivanje termina moguće je bez naknade najkasnije [24/48 sati] pre zakazanog
          termina; kasnije otkazivanje ili neodazivanje na dogovoreni termin može podrazumevati
          naknadu izlaska ekipe. [PRILAGODI politiku otkazivanja i avansa.]
        </p>
        <p>
          Ako si potrošač u smislu Zakona o zaštiti potrošača i ugovor je zaključen na daljinu ili
          van poslovnih prostorija, imaš pravo na odustanak u zakonskom roku, osim ako je pružanje
          usluge u potpunosti izvršeno uz tvoju izričitu prethodnu saglasnost. Reklamacije primamo
          na {contactInfo.email} i odgovaramo u zakonskom roku od 8 dana.
        </p>
      </LegalSection>

      <LegalSection title="5. Obaveze naručioca">
        <p>Pre dolaska ekipe, naručilac je dužan da:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>tačno opiše obim selidbe (broj i vrstu predmeta, spratnost, pristup, lift),</li>
          <li>izdvoji i posebno najavi izuzetno vredne ili krhke predmete,</li>
          <li>obezbedi pristup prostoru na adresi polaska i dolaska u dogovoreno vreme,</li>
          <li>ukloni ili posebno najavi predmete koji zahtevaju posebnu dozvolu za transport.</li>
        </ul>
        <p>
          Za predmete koji nisu najavljeni, a zahtevaju dodatnu opremu ili vreme, cena se može
          naknadno uskladiti.
        </p>
      </LegalSection>

      <LegalSection title="6. Odgovornost za robu tokom prevoza">
        <p>
          Sa stvarima postupamo pažljivo i koristimo odgovarajuću zaštitu pri pakovanju i
          transportu. Za štetu nastalu našom krivicom tokom utovara, prevoza ili istovara odgovaramo
          u skladu sa Zakonom o obligacionim odnosima. Ne odgovaramo za: štetu na predmetima koje je
          naručilac samostalno upakovao, za predmete čije je oštećenje posledica prethodnog stanja
          (istrošenost, prethodna oštećenja) ili za nenajavljene izuzetno vredne predmete (nakit,
          gotovina, dokumenta) ostavljene u nameštaju. Eventualnu štetu prijaviti odmah, prilikom
          istovara. [PRILAGODI: navedi da li poseduješ osiguranje transporta i njegove uslove.]
        </p>
      </LegalSection>

      <LegalSection title="7. Ograničenje odgovornosti">
        <p>
          U najvećoj meri dozvoljenoj prinudnim propisima, ne odgovaramo za posrednu štetu ni za
          izmaklu dobit. Ograničenja ne važe tamo gde ih zakon isključuje (namera, gruba nepažnja,
          prava potrošača).
        </p>
      </LegalSection>

      <LegalSection title="8. Viša sila">
        <p>
          Ne odgovaramo za kašnjenje ili nemogućnost izvršenja usluge usled okolnosti van naše
          kontrole (vremenske nepogode, zabrana saobraćaja, elementarne nepogode) — u tom slučaju
          dogovaramo novi termin bez dodatne naknade.
        </p>
      </LegalSection>

      <LegalSection title="9. Izmene uslova">
        <p>
          Uslove možemo izmeniti; izmene važe za selidbe poručene nakon objave nove verzije na ovoj
          stranici.
        </p>
      </LegalSection>

      <LegalSection title="10. Merodavno pravo i sporovi">
        <p>
          Na ove uslove primenjuje se pravo Republike Srbije. Sporove ćemo prvo pokušati da rešimo
          dogovorom; u suprotnom, nadležan je sud u Beogradu, osim ako je za potrošače zakonom
          određena druga nadležnost. Potrošači mogu koristiti i vansudsko rešavanje potrošačkih
          sporova u skladu sa Zakonom o zaštiti potrošača.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
