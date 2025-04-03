export type SettingsType = {
  id: string
  recaptcha_private: string
  recaptcha_public: string
  email: string
  password: string
  port: string
  server: string
  ssl: boolean
  lgpd_popup: string
  lgpd_forms: string
  emails_recipient: string
}

export interface SendContactType {
  name: string
  phone: string
  email: string
  msg?: string
  token: string
}
