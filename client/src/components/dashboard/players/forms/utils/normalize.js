
export function normalizeJerseyNum(val) {

	if (/^\d{1,2}$/.test(val)) {
		return val;
	}

	return val.replace(/[^\d]/g, '').substr(0, 2);
}
