type SzType = 'string' | 'number' | null;

export const genCode = (
	length: number = 0,
	type: SzType = null
): string => {
	const characters =
		type === 'string' ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		: type === 'number' ? '0123456789'
		: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

	let code = '';
	for (let i = 0; i < length; i++) {
		code += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return code;
};
