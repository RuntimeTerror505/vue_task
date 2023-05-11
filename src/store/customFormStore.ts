import { CustomForm } from '@/models/CustomForm';
import { calcProcent } from '@/utils'
import {getFormById, update} from '@/services/custom-forms'

export class CustomFormStore extends CustomForm{
  procentDone: number
  
  constructor() {
    super('', '', '', '', false)
    this.procentDone = 0
  }

  async init(id: string) {
    const data = await getFormById(id)
    this.id = id
    this.isAgree = data.isAgree
    this.title = data.title
    this.category = data.category
    this.description = data.description
    this.procentDone = calcProcent(data)
    this.limit = data.limit
  }

  async updateForm() {
    const sendData = {
      isAgree:this.isAgree||false,
      title:this.title||'',
      description:this.description||'',
      limit: this.limit || '',
      category: this.category || ''
    }
    
    await update(this.id||'', sendData)
  }
}