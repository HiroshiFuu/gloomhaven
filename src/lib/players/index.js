function getXPtable() {
	let table = [45];
	for (let i = 1; i < 9; i++) {
		table.push(table[i - 1] + 45 + i * 5);
	}
	return table;
}

const XPtable = getXPtable();

export function getLevel(xp) {
	for (let i = 9; i > 0; i--) {
		if (XPtable[i - 1] <= xp)
			return i + 1;
	}
	return 1;
}

export function getXP(level) {
	if (level === 1)
		return 0
	else
		return XPtable[level - 2];
}