"use client";

import { useState } from "react";
import { Button } from "./button";
import { ChevronRight, Plus, ChevronLeft } from "lucide-react";
import { NotesSystem } from "./notes-system";

const allTickets = [
	{ id: "#TKT-001", title: "Server Offline", status: "Waiting" },
	{ id: "#TKT-002", title: "Plugin Installation Failed", status: "Replied" },
	{ id: "#TKT-003", title: "Billing Inquiry", status: "Closed" },
	{ id: "#TKT-004", title: "Server Crashing on Start", status: "Waiting" },
	{ id: "#TKT-005", title: "Plugin Compatibility Issue", status: "Replied" },
];

type Tab = "Active" | "Closed";

function TicketSystem() {
	const [activeTab, setActiveTab] = useState<Tab>("Active");

	const filteredTickets = allTickets.filter((ticket) => {
		if (activeTab === "Active") {
			return ticket.status === "Waiting" || ticket.status === "Replied";
		}
		return ticket.status === "Closed";
	});

	return (
		<div className="flex flex-col h-full">
			<div className="p-2 border-b">
				<div className="flex justify-between items-center mb-2">
					<h2 className="text-sm font-medium text-foreground">
						Support Tickets
					</h2>
					<div className="flex items-center">
						<Button variant="ghost" size="icon" className="h-6 w-6">
							<ChevronLeft className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="h-6 w-6">
							<ChevronRight className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="h-6 w-6">
							<Plus className="h-4 w-4" />
						</Button>
					</div>
				</div>
				<div className="flex w-full">
					<Button
						variant={activeTab === "Active" ? "secondary" : "ghost"}
						className="text-xs px-2 py-1 h-auto flex-1"
						onClick={() => setActiveTab("Active")}
					>
						Active
					</Button>
					<Button
						variant={activeTab === "Closed" ? "secondary" : "ghost"}
						className="text-xs px-2 py-1 h-auto flex-1"
						onClick={() => setActiveTab("Closed")}
					>
						Closed
					</Button>
				</div>
			</div>
			<div className="flex-1 p-2 space-y-2 overflow-y-auto">
				{filteredTickets.map((ticket) => (
					<div
						key={ticket.id}
						className="flex justify-between items-center text-xs p-2 rounded-md bg-muted/40"
					>
						<div>
							<p className="font-semibold">{ticket.id}</p>
							<p className="text-muted-foreground">{ticket.title}</p>
						</div>
						<ChevronRight className="h-4 w-4 text-muted-foreground" />
					</div>
				))}
			</div>
		</div>
	);
}

export function RightSidebar() {
	return (
		<div className="w-64 border-l bg-card flex flex-col shadow-sm">
			<div className="h-1/2">
				<TicketSystem />
			</div>
			<div className="p-2 border-t h-1/2">
				<NotesSystem />
			</div>
		</div>
	);
}
