import { createContext, ReactNode, useContext, useState } from 'react'

type Children = {
  children: ReactNode
}

type User = {
  isColumnist: boolean
}

type UserContextProps = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

const initialValues: UserContextProps = {
  user: {
    isColumnist: false,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => {},
}

export const UserContext = createContext<UserContextProps>(initialValues)

export const UserContextProvider = ({ children }: Children) => {
  const [user, setUser] = useState<User>({
    isColumnist: false,
  })

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUserContext must be used within an UserContextProvider')
  }

  return context
}
