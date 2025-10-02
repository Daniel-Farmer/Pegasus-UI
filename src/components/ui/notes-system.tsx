"use client";

import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { ChevronLeft, ChevronRight } from "lucide-react";

const initialNotes = [
	{ id: 1, text: "User 'xX_Miner_Xx' was banned for xraying." },
	{ id: 2, text: "Player 'Steve' purchased the Diamond Rank package." },
	{ id: 3, text: "Remember to backup the world file tonight." },
];

export function NotesSystem() {
	const [notes, setNotes] = useState(initialNotes);
	const [newNote, setNewNote] = useState("");

	const handleAddNote = () => {
		if (newNote.trim()) {
			setNotes([...notes, { id: Date.now(), text: newNote.trim() }]);
			setNewNote("");
		}
	};

	return (
		<div className="flex flex-col h-full">
			<div className="flex justify-between items-center mb-2">
				<h2 className="text-sm font-medium text-foreground">
					Notes & Reminders
				</h2>
				<div className="flex items-center">
					<Button variant="ghost" size="icon" className="h-6 w-6">
						<ChevronLeft className="h-4 w-4" />
					</Button>
					<Button variant="ghost" size="icon" className="h-6 w-6">
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
			<div className="flex-1 space-y-2 overflow-y-auto pr-1">
				{notes.map((note) => (
					<div
						key={note.id}
						className="text-xs p-2 rounded-md bg-muted/40"
					>
						{note.text}
					</div>
				))}
			</div>
			<div className="flex gap-2 mt-2">
				<Input
					placeholder="Add a note..."
					className="h-8 text-xs"
					value={newNote}
					onChange={(e) => setNewNote(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleAddNote()}
				/>
				<Button size="sm" variant="secondary" onClick={handleAddNote}>
					Add
				</Button>
			</div>
		</div>
	);
}
