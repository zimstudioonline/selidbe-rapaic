import { requireAdmin } from "@/lib/admin";
import { createSupabaseAdminClient } from "@repo/auth/server";
import {
  Alert,
  AlertDescription,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui";
import { setRequestStatus } from "./actions";

export const metadata = { title: "Upiti za selidbu — Admin portal" };

interface MovingRequestRow {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  move_type: string;
  from_address: string | null;
  to_address: string | null;
  moving_date: string | null;
  notes: string | null;
  status: string;
  created_at: string;
}

const STATUS_LABEL: Record<string, string> = {
  novo: "Novo",
  kontaktiran: "Kontaktiran",
  zavrseno: "Završeno",
};

const NEXT_STATUS: Record<string, string> = {
  novo: "kontaktiran",
  kontaktiran: "zavrseno",
  zavrseno: "novo",
};

function formatDate(value: string): string {
  return new Date(value).toLocaleString("sr-RS");
}

export default async function AdminMovingRequestsPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const { error, message } = await searchParams;
  await requireAdmin();

  const admin = createSupabaseAdminClient();
  const { data, error: readError } = await admin
    .from("moving_requests")
    .select(
      "id, name, phone, email, move_type, from_address, to_address, moving_date, notes, status, created_at",
    )
    .order("created_at", { ascending: false });
  if (readError) {
    throw new Error(`Čitanje upita nije uspelo: ${readError.message}`);
  }
  const requests = (data ?? []) as MovingRequestRow[];

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      {error ? (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : null}
      {message ? (
        <Alert>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      ) : null}

      <Card>
        <CardHeader>
          <CardTitle>Upiti za procenu selidbe</CardTitle>
          <CardDescription>
            Pristigli upiti sa kontakt forme na marketing sajtu, najnoviji prvi.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Primljeno</TableHead>
                <TableHead>Kontakt</TableHead>
                <TableHead>Selidba</TableHead>
                <TableHead>Napomena</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Akcija</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((req) => (
                <TableRow key={req.id}>
                  <TableCell className="whitespace-nowrap text-muted-foreground text-xs">
                    {formatDate(req.created_at)}
                  </TableCell>
                  <TableCell>
                    <div className="grid leading-tight">
                      <span className="font-medium">{req.name}</span>
                      <span className="text-muted-foreground text-xs">{req.phone}</span>
                      {req.email ? (
                        <span className="text-muted-foreground text-xs">{req.email}</span>
                      ) : null}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">
                    <div className="grid leading-tight">
                      <span>{req.move_type}</span>
                      {req.from_address || req.to_address ? (
                        <span className="text-muted-foreground text-xs">
                          {req.from_address ?? "—"} → {req.to_address ?? "—"}
                        </span>
                      ) : null}
                      {req.moving_date ? (
                        <span className="text-muted-foreground text-xs">{req.moving_date}</span>
                      ) : null}
                    </div>
                  </TableCell>
                  <TableCell className="max-w-64 truncate text-muted-foreground text-sm">
                    {req.notes ?? "—"}
                  </TableCell>
                  <TableCell>
                    <Badge variant={req.status === "novo" ? "default" : "secondary"}>
                      {STATUS_LABEL[req.status] ?? req.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <form action={setRequestStatus}>
                      <input type="hidden" name="id" value={req.id} />
                      <input
                        type="hidden"
                        name="status"
                        value={NEXT_STATUS[req.status] ?? "novo"}
                      />
                      <Button type="submit" variant="outline" size="sm">
                        Označi kao "{STATUS_LABEL[NEXT_STATUS[req.status] ?? "novo"]}"
                      </Button>
                    </form>
                  </TableCell>
                </TableRow>
              ))}
              {requests.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-muted-foreground">
                    Još nema pristiglih upita.
                  </TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
