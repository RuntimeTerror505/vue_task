export class CustomForm {
  id: string | null
  title: string | null
  description: string | null
  limit: string | null
  isAgree: boolean | null
  category?: string | null
  createdAt: Date | null
  updateAt: Date | null

  constructor(title: string, description: string, limit: string, category: string, isAgree: boolean) {
    this.id = null
    this.title = title ? title : null
    this.description = description ? description : null
    this.limit = limit ? limit : null
    this.isAgree = isAgree
    this.category = category
    this.createdAt = new Date()
    this.updateAt = new Date()
  }

  setId(id: string) {
    this.id = id
  }
}
