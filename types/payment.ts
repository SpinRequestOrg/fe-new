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
