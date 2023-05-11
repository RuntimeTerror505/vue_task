import { CustomForm } from '@/models/CustomForm'
import { db } from '../firebase'

export const createNewForm = async (): Promise<CustomForm> => {
  try {
    const newCustomForm = new CustomForm('', '', '', '', false);
    const ref = await db.collection('testForm').add({ ...newCustomForm })
    newCustomForm.setId(ref.id)
    await db.collection('testForm').doc(ref.id).set({ ...newCustomForm })

    return newCustomForm
  } catch (e) {
    throw new Error(e)
  }
}

export const getAllForms = async (): Promise<Array<any>> => {
  try {
    const listFormsFromStore = await db.collection('testForm').get()
    const arrayForms = listFormsFromStore.docs.map((item) => {
      return {
        id: item.ref.id,
        ...item.data()
      }
    })
    return arrayForms
  } catch (e) {
    throw new Error(e)
  }
}

export const daleteForms = async (id: string): Promise<void> => {
  try {
    await db.collection('testForm').doc(id).delete()
  } catch (e) {
    throw new Error(e)
  }
}

export const getFormById = async (id: string): Promise<any> => {
  try {
    const data = await db.collection('testForm').doc(id).get()
    return data.data()
  } catch (e) {
    throw new Error(e)
  }
}

export const update = async (id: string, data: any): Promise<void> => {
  try {
    await db.collection('testForm').doc(id).update({
      ...data,
      updateAt: new Date()
    })
  } catch (e) {
    throw new Error(e)
  }
}

