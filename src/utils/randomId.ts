const randomId = (): string => {
  return self.crypto.randomUUID()
}

export default randomId
