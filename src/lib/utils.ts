// Minimal cn utility
export function cn(...args) {
	return args.filter(Boolean).join(' ');
}
