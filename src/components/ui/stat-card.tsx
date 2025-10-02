interface StatCardProps {
  title: string;
  value: string;
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
      <div className="text-5xl font-bold text-primary">{value}</div>
      <div className="text-muted-foreground mt-2">{title}</div>
    </div>
  );
}
