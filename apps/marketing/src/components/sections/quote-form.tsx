import { requestQuote } from "@/app/kontakt/actions";
import { Button, Input, Label, Textarea } from "@repo/ui";

// Vrednosti moraju TAČNO da se poklope sa opcijama u Google Formi (vidi actions.ts) —
// Forma po vrednosti dropdown-a odlučuje da li upis uspeva.
const moveTypes = ["Stambena selidba", "Poslovna selidba", "Samo pakovanje-demontaža", "Ostalo"];

export function QuoteForm() {
  return (
    <form action={requestQuote} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Ime i prezime *</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon *</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="moveType">Vrsta selidbe *</Label>
          <select
            id="moveType"
            name="moveType"
            required
            defaultValue=""
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <option value="" disabled>
              Izaberi...
            </option>
            {moveTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fromAddress">Adresa polaska</Label>
          <Input id="fromAddress" name="fromAddress" placeholder="Ulica, opština" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="toAddress">Adresa dolaska</Label>
          <Input id="toAddress" name="toAddress" placeholder="Ulica, opština/grad" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="movingDate">Željeni datum selidbe</Label>
        <Input id="movingDate" name="movingDate" placeholder="npr. sredina oktobra, po dogovoru" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Napomena</Label>
        <Textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Broj soba, sprat, lift, veći komadi nameštaja..."
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Pošalji upit
      </Button>
    </form>
  );
}
