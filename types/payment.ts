export interface PaymentVerificationResponse {
  id: string | number;
  user_id: string | number;
  parent_id: string | number;
  parent_type: string;
  payment_gateway: "paystack";
  reference: string;
  amount: string;
  status: "success" | "failed";
  response_code: number | null;
  response_description: string;
  full_response: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface Bank {
  id: number | string;
  name: string;
  code: string;
}

export interface BankVerificationPayload {
  code: string;
  account_number: string;
  bank_name: string;
  country: string;
}

export interface BankVerificationResponse {
  account_name: string;
  account_number: string;
  bank_id: string;
}

export interface Order {
  amount: string | number;
  date: string;
  dj: string;
  id: number;
  parent_id: number;
  parent_type: string;
  payment_gateway: "paystack" | "wallet" | string;
  reference: string;
  response_code: string | null;
  response_description: string;
  status: string;
  time: string;
  type: "hype" | "song";
  title: string;
  start_date: string;
  address: string;
}
