import { PasswordOptions } from '@/types/password';

export function generatePassword(options: PasswordOptions): string {
  let chars = '';

  if (options.length < 5) options.length = 5;
  if (options.az) chars += 'abcdefghijklmnopqrstuvwxyz';
  if (options.AZ) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (options.numbers) chars += '0123456789';
  if (options.symbols) chars += '!@#$%^&*()-_=+[]{};:,.?/|~';

  if (!chars) {
    throw new Error('At least one character type must be selected.');
  }

  const array = new Uint32Array(options.length);
  crypto.getRandomValues(array);

  return Array.from(array, (num) => chars[num % chars.length]).join('');
}
