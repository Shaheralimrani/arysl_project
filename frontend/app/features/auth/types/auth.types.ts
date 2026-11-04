export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginApiResponse {
  message?: string;
  detail?: string;
  access_token?: string;
  token_type?: string;
}

export interface UseLoginReturn {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  error: string | null;
  success: string | null;

  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  togglePassword: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}