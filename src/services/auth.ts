type RegisterData = {
  username: string
  email: string
  password: string
}

export async function register(data: RegisterData) {
  const response = await fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json()

    if (response.status === 409) {
      throw new Error('An account with this email already exists.')
    }

    throw new Error(errorData.message || 'Registration failed')
  }

  return response.json()
}
