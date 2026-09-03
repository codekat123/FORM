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

  return response.json()
}
