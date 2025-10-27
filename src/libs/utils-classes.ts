// Simple `cn` utility like shadcn uses
export function cn(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(' ');
}
