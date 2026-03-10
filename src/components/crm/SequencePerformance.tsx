// ============================================================================
// SequencePerformance: Per-sequence email breakdown table
// Groups rows visually by sequence_name with separator headers
// ============================================================================

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SequenceStats {
  sequence_name: string;
  step_number: number;
  email_subject: string | null;
  sent: number;
  opened: number;
  clicked: number;
  bounced: number;
}

interface SequencePerformanceProps {
  sequences: SequenceStats[];
}

/** Compute percentage, returning "0%" when denominator is zero */
function pct(numerator: number, denominator: number): string {
  if (denominator === 0) return "0%";
  return `${Math.round((numerator / denominator) * 100)}%`;
}

export default function SequencePerformance({
  sequences,
}: SequencePerformanceProps) {
  if (sequences.length === 0) {
    return (
      <p className="text-muted-foreground text-sm py-4 text-center">
        No sequence data available.
      </p>
    );
  }

  // Build rows with group headers inserted between different sequences
  const rows: Array<
    | { type: "header"; sequenceName: string }
    | { type: "row"; stats: SequenceStats }
  > = [];

  let lastSequence = "";
  for (const stat of sequences) {
    if (stat.sequence_name !== lastSequence) {
      rows.push({ type: "header", sequenceName: stat.sequence_name });
      lastSequence = stat.sequence_name;
    }
    rows.push({ type: "row", stats: stat });
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sequence</TableHead>
            <TableHead className="text-center w-16">Step</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead className="text-right">Sent</TableHead>
            <TableHead className="text-right">Opened</TableHead>
            <TableHead className="text-right">Clicked</TableHead>
            <TableHead className="text-right">Bounced</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, idx) => {
            if (row.type === "header") {
              return (
                <TableRow
                  key={`hdr-${row.sequenceName}-${idx}`}
                  className="bg-slate-50"
                >
                  <TableCell
                    colSpan={7}
                    className="font-semibold text-sm text-slate-700 py-2"
                  >
                    {row.sequenceName}
                  </TableCell>
                </TableRow>
              );
            }

            const s = row.stats;
            return (
              <TableRow key={`${s.sequence_name}-${s.step_number}-${idx}`}>
                <TableCell className="text-muted-foreground text-xs">
                  {s.sequence_name}
                </TableCell>
                <TableCell className="text-center">{s.step_number}</TableCell>
                <TableCell className="max-w-[200px] truncate text-sm">
                  {s.email_subject || "(no subject)"}
                </TableCell>
                <TableCell className="text-right">{s.sent}</TableCell>
                <TableCell className="text-right">
                  {s.opened}{" "}
                  <span className="text-muted-foreground text-xs">
                    ({pct(s.opened, s.sent)})
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  {s.clicked}{" "}
                  <span className="text-muted-foreground text-xs">
                    ({pct(s.clicked, s.sent)})
                  </span>
                </TableCell>
                <TableCell className="text-right">{s.bounced}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
