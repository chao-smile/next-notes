import dayjs from "dayjs";
import SidebarNoteItem from "@/components/SidebarNoteItem";

export default async function NoteList({ notes }) {
  const arr = Object.entries(notes);

  if (arr.length == 0) {
    return <div className="notes-empty">{"No notes created yet!"}</div>;
  }

  return (
    <ul className="notes-list">
      {arr.map(([noteId, note]) => {
        return <SidebarNoteItem noteId={noteId} note={JSON.parse(note)} />;
      })}
    </ul>
  );
}
