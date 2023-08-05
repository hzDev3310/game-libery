export interface Schema<T> {
  count: number;
  results: T[];
  next: string | null;
}
