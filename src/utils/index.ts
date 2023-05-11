export const calcProcent = (data: any) => {
  
  const v1 = data.isAgree ? 20 : 0
  const v2 = data.description ? 20 : 0
  const v3 = data.title ? 20 : 0
  const v4 = data.limit ? 20 : 0
  const v5 = data.category ? 20 : 0

  return v1 + v2 + v3 + v4 + v5
}