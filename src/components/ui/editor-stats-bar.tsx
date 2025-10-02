import { FileText, Server, CheckCircle, Users } from "lucide-react";

export function EditorStatsBar() {
  return (
    <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
      <div className="flex items-center space-x-1">
        <FileText className="w-3 h-3" />
        <span>Plugins Generated: 128</span>
      </div>
      <div className="flex items-center space-x-1">
        <Server className="w-3 h-3" />
        <span>Servers Managed: 12</span>
      </div>
      <div className="flex items-center space-x-1">
        <CheckCircle className="w-3 h-3" />
        <span>Deploy Success: 98%</span>
      </div>
      <div className="flex items-center space-x-1">
        <Users className="w-3 h-3" />
        <span>Players Online: 256</span>
      </div>
    </div>
  );
}
