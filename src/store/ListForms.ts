// import { CustomForm } from "@/models/CustomForm";
// import { db } from '@/services/firebase'
import {getAllForms, createNewForm, daleteForms} from '@/services/custom-forms'

export class ListForms {
  listForms: Array<any>
  
  constructor() {
    this.listForms = []
  }

  async init() {
    try {
      const data = await getAllForms()
      this.listForms = data.sort()
    } catch (e) {
      throw new Error(e)
    }
  }

  getState() {
    return [...this.listForms]
  }

  delete(id: string) {
    this.listForms = this.listForms.filter(item=>item.id !== id) 
    daleteForms(id).then(() => { console.log("all fine deleted")}).catch(e=>{throw new Error(e)})
  }

  async addNewForm() {
    try {
      const customForm = await createNewForm()
      this.listForms.push(customForm)

      return customForm.id
    } catch (e) {
      throw new Error(e)
    }
  }

  async update() {
    const data = await getAllForms()
    this.listForms = data.sort()
  }
}

