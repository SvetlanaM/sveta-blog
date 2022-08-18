export interface User {
  readonly id?: number
  readonly username: string
  active: boolean
  readonly modifiedAt: Date
  payload: {
    type?: string
    token: string
    refresh_token: string
  }
}