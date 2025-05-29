const fs = require('node:fs/promises')

async function getStoredNotes() {
    const rawData = await fs.readFile('notes.json',{encoding: 'utf-8'});
    const data = JSON.parse(rawData);
    const storedNotes = data.notes ?? [];
    return storedNotes;
}

async function storeNotes(notes) {
    return fs.writeFile('notes.json',JSON.stringify({notes: notes || []}));
}

exports.getStoredNotes = getStoredNotes;
exports.storeNotes = storeNotes