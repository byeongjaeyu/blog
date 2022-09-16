export interface IUseChat {
  join: () => void,
  leave: () => void,
  sendMessage: (message?: string) => void,
}

export interface IChatProps {
  curNumberOfPeople: number,
  curChat: string[]
}

export interface IChatUser {
  userName: string,
  userId: number,
}